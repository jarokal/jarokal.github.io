//TS type for PreviewHandler namespace to fix syntax issues
type PreviewHandlerType = {
	current_config: {
		scale: string;
		theme: string;
		has_border: boolean;
		border_color: string;
		place: string;
		date: any;
		coordinates: {
			lat: string;
			lon: string;
			text: string;
		},
		texts: {
			main: string;
			misc: string;
		}
	};
	listenerHandler: (e: Event) => void;
	handleThemeChange: (theme_name: string) => void | false;
	changeMapProjection: (projection: string) => void | false;
	changePreviewPosterBorder: (is_border: boolean, color: string) => void | false;
	changePreviewPosterBackground: (color: string) => void | false;
	changePreviewMapColor: (color: string, stroke: string) => void | false;
	changePreviewTextColor: (color: string) => void | false;
	changeMapMaskAndBg: (theme_name: string) => void;
	handleSizeChange: (size: string) => void | false;
	scalePreview: (size: string) => void;
	scaleMap: (size: string, theme: string) => void;
	scaleMapBG: (size: string) => void | false;
	setFontSizes: (size: string) => void | false;
	appendTextContent: (content: HTMLDivElement) => void | false;
	removeTextContent: (container_selector: string) => void;
	saveContentIntoConfig: (content: string, editor: string) => void | false;
	initPreview: () => void;
	renderPreview: () => void;
	renderMapBG: () => void;
	locationInputInit: () => void;
	locationChanged: (adress: string, lat: string, lon: string) => void;
	setInitialInputVals: () => void;
	setLocationAndDateTexts: () => void;
	dateChanged: (e: Event) => void | false;
	_applyDateChanges: (date: Date) => void;
	_getDateObj: (arg: Date | string) => Date;
	_compileDatetimeForInput: (dateObj: Date, dateTimeInp: boolean) => string;
	_addZeroInit: () => void;
};

/**
 *
 * @namespace
 */
const PreviewHandler: PreviewHandlerType = {
	/**
	 *
	 */
	current_config: {
		scale: GalaScales.default_scale,
		theme: GalaScales.default_theme,
		has_border: true,
		border_color: "black",
		place: '',
		date: new Date(),
		coordinates: {
			lat: '',
			lon: '',
			text: '',
		},
		texts: {
			main: '',
			misc: '',
		},
	},

	/**
	 *
	 * @param {*} e
	 */
	listenerHandler: function (e: Event): void {
		let target = < HTMLElement > e.target;

		//Changing size of preview
		if (target.dataset.previewSize) {
			PreviewHandler.handleSizeChange(target.dataset.previewSize);
		}
		//Chaning the theme
		if (target.dataset.posterTheme) {
			PreviewHandler.handleThemeChange(target.dataset.posterTheme);
		}
	},

	/**
	 *
	 * @param {*} theme_name
	 */
	handleThemeChange: function (theme_name: string): void | false {
		let target = < HTMLButtonElement > document.querySelector(`[data-poster-theme="${theme_name}"]`);
		if (target && target.classList.contains("active-btn")) return false;

		let active_el = document.getElementById("param-holder") !.querySelector(".active-btn[data-poster-theme]");
		if (active_el) active_el.classList.remove("active-btn");
		target.classList.add("active-btn");

		//Reproject the map if the theme has different map projection and position it properly
		if (GalaThemes[theme_name].map.projection != GalaThemes[PreviewHandler.current_config.theme].map.projection) {
			PreviewHandler.changeMapProjection(GalaThemes[theme_name].map.projection);
			PreviewHandler.scaleMap(PreviewHandler.current_config.scale, theme_name);
		}

		//Set the new theme into config
		PreviewHandler.current_config.theme = theme_name;

		//Preview text color changer
		PreviewHandler.changePreviewTextColor(
			GalaThemes[PreviewHandler.current_config.theme].text.color
		);

		//Preview map color changer, background and stroke - also changes the celestial config values
		PreviewHandler.changePreviewMapColor(
			GalaThemes[PreviewHandler.current_config.theme].map.background.fill,
			GalaThemes[PreviewHandler.current_config.theme].map.background.stroke
		);

		//Preview background color changer
		PreviewHandler.changePreviewPosterBackground(
			GalaThemes[PreviewHandler.current_config.theme].background.color
		);

		//Preview border changer, color
		PreviewHandler.changePreviewPosterBorder(
			GalaThemes[PreviewHandler.current_config.theme].border.is_border,
			GalaThemes[PreviewHandler.current_config.theme].border.color
		);

		PreviewHandler.changeMapMaskAndBg(theme_name);
	},

	/**
	 *
	 * @param {*} projection
	 */
	changeMapProjection: function (projection: string): void | false {
		if (!projection) return false;
		CelestialHandler.reprojectMap(projection);
	},

	/**
	 *
	 * @param {*} color
	 * @param {*} size
	 */
	changePreviewPosterBorder: function (isBorder: boolean = true, color: string): void | false {
		let border_el = < HTMLDivElement > document.getElementById("poster-content");
		if (isBorder) {
			if (!color) return false;

			border_el.style.border = `1px solid ${color}`;
		} else {
			border_el.style.border = "none";
		}
	},

	/**
	 *
	 * @param {*} color
	 */
	changePreviewPosterBackground: function (color: string): void | false {
		if (!color) return false;
		let el = < HTMLDivElement > document.getElementById("poster-container");
		if (el) el.style.backgroundColor = color;
	},

	/**
	 *
	 * @param {*} color
	 * @returns
	 */
	changePreviewMapColor: function (color: string, stroke: string): void | false {
		if (!color || !stroke) return false;

		let new_config = CelestialHandler.getThemedConfig(PreviewHandler.current_config.theme);
		new_config["background"].fill = color;
		new_config["background"].stroke = stroke;
		CelestialHandler.applyConfig(new_config);
	},

	/**
	 *
	 * @param {*} color
	 * @returns
	 */
	changePreviewTextColor: function (color: string): void | false {
		if (!color) return false;
		let el = < HTMLDivElement > document.getElementById("texts-container");
		if (el) el.style.color = color;
	},

	/**
	 * 
	 * @param theme_name 
	 */
	changeMapMaskAndBg: function (theme_name: string): void {
		const svgns = 'http://www.w3.org/2000/svg';
		let mask_svg = document.querySelector('#svg-poster-mask') as SVGAElement;
		mask_svg.innerHTML = '';

		var rect = document.createElementNS(svgns, 'rect');
		rect.setAttribute('width', '100%');
		rect.setAttribute('height', '100%');
		rect.setAttribute('fill', GalaThemes[theme_name].background.color);
		rect.setAttribute('mask', 'url(#hole)');

		let hole = document.createElementNS(svgns, 'mask');
		hole.id = 'hole';

		let mask_rect = document.createElementNS(svgns, 'rect');
		mask_rect.setAttribute('width', '100%');
		mask_rect.setAttribute('height', '100%');
		mask_rect.setAttribute('fill', 'white');
		mask_rect.setAttribute('stroke', 'none');
		hole.appendChild(mask_rect);

		let poster_container = document.querySelector('#poster-container') as HTMLDivElement;
		let poster_width = parseInt(window.getComputedStyle(poster_container, null).getPropertyValue('width'));

		// let hole_size = poster_width * GalaScales.preview[GalaThemes[theme_name].map.projection].scale_preview[PreviewHandler.current_config.scale];
		if (GalaThemes[theme_name].map.shape.type == 'circle') {
			//Transparent stuff
			let circle = document.createElementNS(svgns, 'circle');
			let frame_padding = parseInt(window.getComputedStyle(poster_container , null).getPropertyValue('padding'));
			let map_margin = {
				top: parseInt(GalaScales.preview[GalaThemes[theme_name].map.projection].position_shape[PreviewHandler.current_config.scale][1]),
				left: parseInt(GalaScales.preview[GalaThemes[theme_name].map.projection].position_shape[PreviewHandler.current_config.scale][0])
			};
			let frame_x_center = poster_width / 2;
			const r = (poster_width / 2) - frame_padding - map_margin.left;
			circle.setAttribute('cx', frame_x_center.toString());
			circle.setAttribute('cy', (r + frame_padding + map_margin.top).toString());
			circle.setAttribute('r', r.toString());
			circle.setAttribute('fill', '#000000');
			hole.appendChild(circle);
			//Stroke
			let stroke_circle = document.createElementNS(svgns, 'circle');
			stroke_circle.setAttribute('cx', frame_x_center.toString());
			stroke_circle.setAttribute('cy', (r + frame_padding + map_margin.top).toString());
			stroke_circle.setAttribute('r', r.toString());
			stroke_circle.setAttribute('fill', 'transparent');
			stroke_circle.setAttribute('stroke', GalaThemes[theme_name].map.background.stroke);
			stroke_circle.setAttribute('stroke-width', GalaThemes[theme_name].map.background.width.toString());
			mask_svg.appendChild(stroke_circle);
		} else if (GalaThemes[theme_name].map.shape.type == 'cube') {
			let transparent_rec = document.createElementNS(svgns, 'rect');
			let frame_padding = parseInt(window.getComputedStyle(poster_container , null).getPropertyValue('padding'));
			transparent_rec.setAttribute('width', ((poster_width - (frame_padding * 2)) - 2).toString());
			transparent_rec.setAttribute('height', GalaScales.preview[GalaThemes[theme_name].map.projection].shape_height[PreviewHandler.current_config.scale]!.toString());
			transparent_rec.setAttribute('x', (frame_padding + 2).toString());
			transparent_rec.setAttribute('y', (frame_padding + 2).toString());
			transparent_rec.setAttribute('fill', '#000000');
			hole.appendChild(transparent_rec);
		} else if(GalaThemes[theme_name].map.shape.type == 'heart'){
			let frame_padding = parseInt(window.getComputedStyle(poster_container , null).getPropertyValue('padding'));
			let map_margin = {
				top: parseInt(GalaScales.preview[GalaThemes[theme_name].map.projection].position_shape[PreviewHandler.current_config.scale][0]),
				left: parseInt(GalaScales.preview[GalaThemes[theme_name].map.projection].position_shape[PreviewHandler.current_config.scale][1])
			};
			//Heart hole
			let heart_svg = document.createElementNS(svgns, 'svg');
			heart_svg.setAttribute('x', (frame_padding + (map_margin.left)).toString());
			heart_svg.setAttribute('y', (frame_padding + (map_margin.top * 1.7)).toString());
			heart_svg.setAttribute('style', 'fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;');
			let heart_def = document.createElementNS(svgns, 'g');
			heart_def.id = 'heart';
			let heart_path = document.createElementNS(svgns, 'path');
			heart_path.setAttribute('d', 'M1280.83,427.228c269.648,-515.068 808.944,-515.068 1078.59,-257.534c269.658,257.534 269.658,772.602 0,1287.67c-188.756,386.301 -674.121,772.602 -1078.59,1030.14c-404.473,-257.534 -889.838,-643.835 -1078.59,-1030.14c-269.648,-515.068 -269.648,-1030.14 0,-1287.67c269.65,-257.534 808.945,-257.534 1078.59,257.534Z');
			heart_path.setAttribute('fill', '#000000');
			heart_path.setAttribute('style', `transform: scale(${GalaScales.preview[GalaThemes[theme_name].map.projection].shapes['heart'].scale[PreviewHandler.current_config.scale]});`);
			heart_svg.appendChild(heart_path);
			heart_def.appendChild(heart_svg);
			hole.appendChild(heart_svg);
			//stroke
			let heart_stroke_svg = document.createElementNS(svgns, 'svg');
			let heart_stroke = document.createElementNS(svgns, 'path');
			heart_stroke.setAttribute('d', 'M1280.83,427.228c269.648,-515.068 808.944,-515.068 1078.59,-257.534c269.658,257.534 269.658,772.602 0,1287.67c-188.756,386.301 -674.121,772.602 -1078.59,1030.14c-404.473,-257.534 -889.838,-643.835 -1078.59,-1030.14c-269.648,-515.068 -269.648,-1030.14 0,-1287.67c269.65,-257.534 808.945,-257.534 1078.59,257.534Z');
			heart_stroke.setAttribute('stroke', GalaThemes[theme_name].map.background.stroke);
			let scaled_stroke = GalaThemes[theme_name].map.background.width * (1 / parseFloat(GalaScales.preview[GalaThemes[theme_name].map.projection].shapes['heart'].scale[PreviewHandler.current_config.scale]));
			heart_stroke.setAttribute('stroke-width', scaled_stroke.toString());
			heart_stroke.setAttribute('fill', 'transparent');
			heart_stroke.setAttribute('style', `transform: scale(${GalaScales.preview[GalaThemes[theme_name].map.projection].shapes['heart'].scale[PreviewHandler.current_config.scale]});`);
			heart_stroke_svg.setAttribute('x', (frame_padding + (map_margin.left)).toString());
			heart_stroke_svg.setAttribute('y', (frame_padding + (map_margin.top * 1.7)).toString());
			heart_stroke_svg.appendChild(heart_stroke);
			mask_svg.appendChild(heart_stroke_svg);
		}

        let main_defs = document.createElementNS(svgns, 'defs');

		main_defs.appendChild(hole);
		mask_svg.appendChild(main_defs);
		mask_svg.appendChild(rect);

	},

	/**
	 *
	 * @param {*} size
	 */
	handleSizeChange: function (size: string): void | false {
		let target = < HTMLButtonElement > document.querySelector(`[data-preview-size="${size}"]`);
		if (target.classList.contains("active-btn")) return false;

		let active_el = document.getElementById("param-holder") !.querySelector(".active-btn[data-preview-size]");
		if (active_el) active_el.classList.remove("active-btn");
		target.classList.add("active-btn");

		//Set the new scale into cfg
		PreviewHandler.current_config.scale = size;

		let scale = GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].size[size];
		//Split the string, scale[0] = width scale[1] = height
		let split_scale = scale.split("|");

		let container = document.getElementById("preview");
		if (container) {
			container.style.width = split_scale[0];
			container.style.height = split_scale[1];
		}

		PreviewHandler.scalePreview(size);
		PreviewHandler.scaleMap(size, PreviewHandler.current_config.theme);
		PreviewHandler.scaleMapBG(size);
		PreviewHandler.changeMapMaskAndBg(PreviewHandler.current_config.theme);

		PreviewHandler.setFontSizes(size);
	},

	/**
	 *
	 */
	scalePreview: function (size: string): void {
		let container = document.getElementById("preview");

		if (container) {
			container.style.transform = `scale(${GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].scale_preview[size]})`;
		}
	},

	/**
	 *
	 * @param {*} size
	 */
	scaleMap: function (size: string, theme: string = PreviewHandler.current_config.theme): void {
		let container = document.getElementById("map-container");

		if (container) {
			container.style.transform = `scale(${GalaScales.preview[GalaThemes[theme].map.projection].scale_map[size]})`;
			container.style.top = GalaScales.preview[GalaThemes[theme].map.projection].position_map[size][0];
			container.style.left = GalaScales.preview[GalaThemes[theme].map.projection].position_map[size][1];
		}
	},

	/**
	 *
	 * @param {*} size
	 */
	scaleMapBG: function (size: string): void | false {
		let container = document.getElementById("map-background");
		if (!container) return false;

		container.style.transform = `scale(${GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].scale_map[size]})`;
		container.style.top = GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].position_map[size][0];
		container.style.left = GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].position_map[size][1];
		container.style.overflow = "visible";
	},

	/**
	 *
	 * @param {*} size
	 * @returns
	 */
	setFontSizes: function (size: string): void | false {
		if (!size) return false;

		let main_text_container = document.getElementById(TextScales.preview_main_id);
		if (main_text_container) {
			main_text_container.style.fontSize = `${parseInt(GalaThemes[PreviewHandler.current_config.theme].text.size[size][0]) / 10}px`;
		}

		let misc_text_container = document.getElementById(TextScales.preview_misc_id);
		if (misc_text_container) {
			misc_text_container.style.fontSize = `${parseInt(GalaThemes[PreviewHandler.current_config.theme].text.size[size][1]) / 10}px`;
		}
	},

	/**
	 *
	 */
	appendTextContent: function (content: HTMLDivElement): void | false {
		if (!content) return false;

		var container = document.getElementById("texts-container") as HTMLDivElement;

		let id = content.id;

		if (container.querySelector(`#${id}`)) container.querySelector(`#${id}`) !.remove();

		if (id.split("-")[1] == "main") {
			container.prepend(content);
		} else {
			container.append(content);
		}
	},

	/**
	 * 
	 * @param container_selector 
	 */
	removeTextContent: function (container_selector: string): void {
		let element = document.getElementById(container_selector);
		if (element) document.getElementById(container_selector) !.remove();
	},

	/**
	 * 
	 * @param content 
	 * @param editor 
	 * @returns 
	 */
	saveContentIntoConfig: function (content: string, editor: string): void | false {
		if (!content || !editor) return false;
		//@ts-ignore just ignore this garbo again, dynamic object allocation kinda sucks
		PreviewHandler.current_config.texts[editor] = content;
	},

	/**
	 *
	 */
	initPreview: function (): void {
		//Save initial data into config
		PreviewHandler.current_config.date = PreviewHandler._getDateObj('');
		PreviewHandler.setInitialInputVals();
		//Start the proper preview poster initialization
		PreviewHandler.handleSizeChange(PreviewHandler.current_config.scale);
	},

	/**
	 *
	 */
	renderPreview: function (): void {
		PreviewHandler.initPreview();
		//Renders the map into the canvas based on config
		CelestialHandler.render(CelestialHandler.getThemedConfig(PreviewHandler.current_config.theme));
		//renders the backgroung of a map
		PreviewHandler.handleThemeChange(PreviewHandler.current_config.theme);
	},

	/**
	 *
	 */
	renderMapBG: function (): void {
		let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute("id", "map-background");
		svg.setAttribute("height", (GalaThemes[PreviewHandler.current_config.theme].map.size).toString());
		svg.setAttribute("width", (GalaThemes[PreviewHandler.current_config.theme].map.size).toString());
		let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		circle.setAttribute("stroke", GalaThemes[PreviewHandler.current_config.theme].map.background.stroke);
		circle.setAttribute("stroke-width", (GalaThemes[PreviewHandler.current_config.theme].map.background.width).toString());
		circle.setAttribute("fill", GalaThemes[PreviewHandler.current_config.theme].map.background.fill);
		circle.setAttribute("cx", (GalaThemes[PreviewHandler.current_config.theme].map.size / 2).toString());
		circle.setAttribute("cy", (GalaThemes[PreviewHandler.current_config.theme].map.size / 2).toString());
		circle.setAttribute("r", (GalaThemes[PreviewHandler.current_config.theme].map.size / 2 - GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].map_bg_offset[PreviewHandler.current_config.scale]).toString());
		svg.appendChild(circle);
		document.getElementById("poster-content") !.appendChild(svg);
		PreviewHandler.scaleMapBG(PreviewHandler.current_config.scale);
	},

	/**
	 *
	 * DISCLAIMER: Google api must be connected for this to work, script link is in index header
	 */
	locationInputInit: function (): void {
		//@ts-ignore google is in header as JS so we ignore this syntax issue
		var autocomplete = new google.maps.places.Autocomplete(
			document.getElementById("map-location-input")
		);
		autocomplete.addListener("place_changed", function () {
			var place = autocomplete.getPlace();
			PreviewHandler.locationChanged(
				place.formatted_address,
				place.geometry["location"].lat(),
				place.geometry["location"].lng()
			);
		});
	},

	/**
	 *
	 */
	locationChanged: function (adress: string, lat: string, lon: string): void {
		//Show location on map
		CelestialHandler.showLocation([lat, lon]);
		//Save values into config
		PreviewHandler.current_config.place = adress.split(",")[0];
		PreviewHandler.current_config.coordinates.lat = lat;
		PreviewHandler.current_config.coordinates.lon = lon;
		PreviewHandler.current_config.coordinates.text = `${lat}N, ${lon}E`;
		//Saves values into inputs and into preview
		PreviewHandler.setLocationAndDateTexts();
	},

	/**
	 *
	 */
	setInitialInputVals: function (): void {
		//Date time picker value
		let dateTime = PreviewHandler._compileDatetimeForInput(PreviewHandler.current_config.date, true);
		let input = document.querySelector("#map-datetime-input") as HTMLInputElement;
		input.value = dateTime;
		PreviewHandler._applyDateChanges(PreviewHandler._getDateObj(dateTime));
		PreviewHandler.setLocationAndDateTexts();
	},

	/**
	 *
	 */
	setLocationAndDateTexts: function (): void {
		let content = document.createElement("div");
		if (PreviewHandler.current_config.date) {
			let date = document.createElement("p");
			date.textContent = PreviewHandler._compileDatetimeForInput(PreviewHandler._getDateObj(PreviewHandler.current_config.date), false);
			content.append(date);
		}

		if (PreviewHandler.current_config.place) {
			let place = document.createElement("p");
			place.textContent = PreviewHandler.current_config.place.toUpperCase();
			content.prepend(place);
		}

		if (PreviewHandler.current_config.coordinates.text) {
			let coordinates = document.createElement("p");
			coordinates.textContent = PreviewHandler.current_config.coordinates.text;
			content.append(coordinates);
		}
		if (TextHandler.editors.misc) {
			//@ts-ignore - editors have null value when empty and element when filled, dont want custom type for namespace TextHandler so ignoring for now.. Clear out current editor of content
			TextHandler.editors.misc.setContent("");
			//@ts-ignore - editors have null value when empty and element when filled, dont want custom type for namespace TextHandler so ignoring for now.. Set new content into emptied editor
			TextHandler.editors.misc.setContent(content.innerHTML);
			//@ts-ignore - editors have null value when empty and element when filled, dont want custom type for namespace TextHandler so ignoring for now.. Fire on change event on editor so preview gets updated
			TextHandler.editors.misc.fire("change");
		} else {
			var intervalus = setInterval(function () {
				if (TextHandler.editors.misc) {
					//@ts-ignore
					TextHandler.editors.misc.setContent("");
					//@ts-ignore
					TextHandler.editors.misc.setContent(content.innerHTML);
					//@ts-ignore
					TextHandler.editors.misc.fire("change");
					clearInterval(intervalus);
				}
			}, 100);
		}
	},

	/**
	 *
	 */
	dateChanged: function (e: Event): void | false {
		if (!( < HTMLInputElement > e.target).value) return false;
		let now = PreviewHandler._getDateObj(( < HTMLInputElement > e.target).value);
		PreviewHandler._applyDateChanges(now);
		CelestialHandler.showDate(now);
		PreviewHandler.setLocationAndDateTexts();
	},

	/**
	 * 
	 * @param date 
	 */
	_applyDateChanges: function (date: Date): void {
		PreviewHandler.current_config.date = date;
	},

	/**
	 *
	 * @param {*} arg = if argument send, make date object from date string received otherwise return standard datetime of now
	 */
	_getDateObj: function (arg: Date | string): Date {
		return arg ? new Date(arg) : new Date();
	},

	/**
	 *
	 * @param {*} dateObj
	 * @param {*} dateTimeInp
	 * @returns
	 */
	_compileDatetimeForInput: function (dateObj: Date, dateTimeInp: boolean = true): string {
		var d = dateObj;

		var result: string;
		if (dateTimeInp) {
			//@ts-ignore working with custom prototype fce
			result = [d.getFullYear(), (d.getMonth() + 1).AddZero(), d.getDate().AddZero(), ].join("-") + "T" + [d.getHours().AddZero(), d.getMinutes().AddZero()].join(":");
		} else {
			//@ts-ignore working with custom prototype fce
			result = `${d.getDate().AddZero()}.${(d.getMonth() + 1).AddZero()}.${d.getFullYear()}`;
		}
		return result;
	},

	/**
	 *
	 */
	_addZeroInit: function (): void {
		//@ts-ignore for some reason TS doesnt like prototype code
		Number.prototype.AddZero = function (b: string, c: string) {
			var l = String(b || 10).length - String(this).length + 1;
			return l > 0 ? new Array(l).join(c || "0") + this : this;
		};
	},
};