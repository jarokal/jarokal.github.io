/**
 * 
 * @namespace
 */
const Exporter = {

    /**
     * 
     */
    svgns: "http://www.w3.org/2000/svg",

    /**
     * Holds exported map svg after export is finished
     */
    map_svg: '',

    /**
     * 
     */
    generateSvg: async function () : Promise<SVGAElement> {
        let export_svg = document.createElementNS(Exporter.svgns, 'svg') as SVGAElement;
        export_svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        //import and set font family
        let main_defs = document.createElementNS(Exporter.svgns, 'defs');
        let main_def_style = document.createElement('style');
        main_def_style.setAttribute('type', 'text/css');
        main_def_style.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');"
        main_defs.append(main_def_style);
        export_svg.append(main_defs);
        export_svg.setAttribute('style', 'font-family:"Oswald", sans-serif; font-weight: 200;');

        var sizes = GalaScales.print.size[PreviewHandler.current_config.scale];
        let splitted_sizes: string[] = sizes.split('x');
        let sizes_nums: number[] = [parseInt(splitted_sizes[0]), parseInt(splitted_sizes[1])];

        var frame_padding = parseInt(GalaThemes[PreviewHandler.current_config.theme].frame.padding[PreviewHandler.current_config.scale]);

        export_svg.setAttribute('width', splitted_sizes[0]);
        export_svg.setAttribute('height', splitted_sizes[1]);

        //Background
        var bg_frame = document.createElementNS(Exporter.svgns, 'rect');
        bg_frame.setAttribute('fill', GalaThemes[PreviewHandler.current_config.theme].background.color);
        bg_frame.setAttribute('width', splitted_sizes[0]);
        bg_frame.setAttribute('height', splitted_sizes[1]);
        export_svg.appendChild(bg_frame);

        //Sizes for map
        let gala_size = sizes_nums[0].toString();

        //add the Gala Map
        let gala_map = await Exporter.exportMapSvg();
        var gala_svg = new DOMParser().parseFromString(gala_map, 'application/xml');
        gala_svg.documentElement.setAttribute('width', gala_size);
        gala_svg.documentElement.setAttribute('height', gala_size);
        gala_svg.documentElement.setAttribute('x', "0");
        gala_svg.documentElement.setAttribute('y', "0");
        export_svg.appendChild(gala_svg.documentElement);

        //Map mask
        let mask_svg = document.createElementNS(Exporter.svgns, 'svg');
        var mask_rect = document.createElementNS(Exporter.svgns, 'rect');
		mask_rect.setAttribute('width', '100%');
		mask_rect.setAttribute('height', '100%');
		mask_rect.setAttribute('fill', GalaThemes[PreviewHandler.current_config.theme].background.color);
		mask_rect.setAttribute('mask', 'url(#hole)');

        let mask_hole = document.createElementNS(Exporter.svgns, 'mask');
		mask_hole.id = 'hole';

        let hole_rect = document.createElementNS(Exporter.svgns, 'rect');
		hole_rect.setAttribute('width', '100%');
		hole_rect.setAttribute('height', '100%');
		hole_rect.setAttribute('fill', 'white');
		hole_rect.setAttribute('stroke', 'none');
		mask_hole.appendChild(hole_rect);

        if (GalaThemes[PreviewHandler.current_config.theme].map.shape.type == 'circle') {
			//Transparent stuff
			let hole_circle_svg = document.createElementNS(Exporter.svgns, 'circle');
			let map_margin = {
				top: parseInt(GalaThemes[PreviewHandler.current_config.theme].map.offset[PreviewHandler.current_config.scale][1]),
				left: parseInt(GalaThemes[PreviewHandler.current_config.theme].map.offset[PreviewHandler.current_config.scale][0])
			};
			let frame_x_center = parseInt(gala_size) / 2;
			const r = (parseInt(gala_size) / 2) - frame_padding - map_margin.left;
			hole_circle_svg.setAttribute('cx', frame_x_center.toString());
			hole_circle_svg.setAttribute('cy', (r + frame_padding + map_margin.top).toString());
			hole_circle_svg.setAttribute('r', r.toString());
			hole_circle_svg.setAttribute('fill', '#000000');
			mask_hole.appendChild(hole_circle_svg);
			//Stroke
			let mask_stroke_circle = document.createElementNS(Exporter.svgns, 'circle');
			mask_stroke_circle.setAttribute('cx', frame_x_center.toString());
			mask_stroke_circle.setAttribute('cy', (r + frame_padding + map_margin.top).toString());
			mask_stroke_circle.setAttribute('r', r.toString());
			mask_stroke_circle.setAttribute('fill', 'transparent');
			mask_stroke_circle.setAttribute('stroke', GalaThemes[PreviewHandler.current_config.theme].map.background.stroke);
			mask_stroke_circle.setAttribute('stroke-width', (parseInt(GalaThemes[PreviewHandler.current_config.theme].border.width[PreviewHandler.current_config.scale]) * 2).toString());
			mask_svg.appendChild(mask_stroke_circle);
		} else if(GalaThemes[PreviewHandler.current_config.theme].map.shape.type == 'heart') {
            let hole_heart_svg = document.createElementNS(Exporter.svgns, 'svg');
			let map_margin = {
				top: parseInt(GalaThemes[PreviewHandler.current_config.theme].map.offset[PreviewHandler.current_config.scale][1]),
				left: parseInt(GalaThemes[PreviewHandler.current_config.theme].map.offset[PreviewHandler.current_config.scale][0])
			};
            //Hole
			hole_heart_svg.setAttribute('x', (frame_padding + (map_margin.left)).toString());
			hole_heart_svg.setAttribute('y', (frame_padding + (map_margin.top)).toString());
			hole_heart_svg.setAttribute('style', 'fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;');
			let heart_def = document.createElementNS(Exporter.svgns, 'g');
			heart_def.id = 'heart';
			let heart_path = document.createElementNS(Exporter.svgns, 'path');
			heart_path.setAttribute('d', 'M1280.83,427.228c269.648,-515.068 808.944,-515.068 1078.59,-257.534c269.658,257.534 269.658,772.602 0,1287.67c-188.756,386.301 -674.121,772.602 -1078.59,1030.14c-404.473,-257.534 -889.838,-643.835 -1078.59,-1030.14c-269.648,-515.068 -269.648,-1030.14 0,-1287.67c269.65,-257.534 808.945,-257.534 1078.59,257.534Z');
			heart_path.setAttribute('fill', '#000000');
			heart_path.setAttribute('style', `transform: scale(${GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].shapes['heart'].print_scale[PreviewHandler.current_config.scale]});`);
			hole_heart_svg.appendChild(heart_path);
			heart_def.appendChild(hole_heart_svg);
            mask_hole.appendChild(heart_def);
            //stroke
			let heart_stroke_svg = document.createElementNS(Exporter.svgns, 'svg');
			let heart_stroke = document.createElementNS(Exporter.svgns, 'path');
			heart_stroke.setAttribute('d', 'M1280.83,427.228c269.648,-515.068 808.944,-515.068 1078.59,-257.534c269.658,257.534 269.658,772.602 0,1287.67c-188.756,386.301 -674.121,772.602 -1078.59,1030.14c-404.473,-257.534 -889.838,-643.835 -1078.59,-1030.14c-269.648,-515.068 -269.648,-1030.14 0,-1287.67c269.65,-257.534 808.945,-257.534 1078.59,257.534Z');
			heart_stroke.setAttribute('stroke', GalaThemes[PreviewHandler.current_config.theme].map.background.stroke);
			heart_stroke.setAttribute('stroke-width', (parseInt(GalaThemes[PreviewHandler.current_config.theme].border.width[PreviewHandler.current_config.scale]) * 2).toString());
			heart_stroke.setAttribute('fill', 'transparent');
			heart_stroke.setAttribute('style', `transform: scale(${GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].shapes['heart'].print_scale[PreviewHandler.current_config.scale]});`);
			heart_stroke_svg.setAttribute('x', (frame_padding + (map_margin.left)).toString());
			heart_stroke_svg.setAttribute('y', (frame_padding + (map_margin.top)).toString());
			heart_stroke_svg.appendChild(heart_stroke);
			mask_svg.appendChild(heart_stroke_svg);
        }

        let mask_defs = document.createElementNS(Exporter.svgns, 'defs');

		mask_defs.appendChild(mask_hole);
		mask_svg.appendChild(mask_defs);
		mask_svg.appendChild(mask_rect);
        export_svg.appendChild(mask_svg);

        //If Theme has border, add it
        if (GalaThemes[PreviewHandler.current_config.theme].border.is_border) {
            let border_rect = document.createElementNS(Exporter.svgns, 'rect');
            let border_sizes = [sizes_nums[0] - (frame_padding * 2), sizes_nums[1] - (frame_padding * 2)];
            border_rect.setAttribute('width', border_sizes[0].toString());
            border_rect.setAttribute('height', border_sizes[1].toString());
            border_rect.setAttribute('x', frame_padding.toString());
            border_rect.setAttribute('y', frame_padding.toString());
            border_rect.setAttribute('fill', 'none');
            border_rect.setAttribute('stroke', GalaThemes[PreviewHandler.current_config.theme].border.color);
            border_rect.setAttribute('stroke-width', GalaThemes[PreviewHandler.current_config.theme].border.width[PreviewHandler.current_config.scale]);
            export_svg.appendChild(border_rect);
        }

        //Check if both main and misc texts are saved. Generate and position based on that state
        if (PreviewHandler.current_config.texts.main && PreviewHandler.current_config.texts.misc) {
            //if both main and misc texts are saved
            let misc_dom = new DOMParser().parseFromString(PreviewHandler.current_config.texts.misc, 'text/html');
            let misc_svg_arr = Exporter._createArrWithTextSvgs(misc_dom);

            var offset = parseInt(GalaThemes[PreviewHandler.current_config.theme].text.offset[PreviewHandler.current_config.scale]);

            var tmp_text_svg = document.createElementNS(Exporter.svgns, 'svg');
            tmp_text_svg.setAttribute('width', splitted_sizes[0]);
            tmp_text_svg.setAttribute('height', splitted_sizes[1]);
            tmp_text_svg.setAttribute('style', "font-family:'Oswald', sans-serif;");
            for (let i = misc_svg_arr.length - 1; i >= 0; i--) {
                let text_svg = new DOMParser().parseFromString(misc_svg_arr[i], 'application/xml').documentElement;
                let misc_text_svg = document.createElementNS(Exporter.svgns, 'text');
                misc_text_svg.innerHTML = text_svg.innerHTML;
                misc_text_svg.setAttribute('style', `font-size:${GalaThemes[PreviewHandler.current_config.theme].text.size[PreviewHandler.current_config.scale][1]}`);

                misc_text_svg.setAttribute('y', `${(sizes_nums[1] - frame_padding) - offset}px`);
                misc_text_svg.classList.add('misc-text');

                //Check so the last iteration doesnt add empty line to offset
                if (i != 0) offset += parseInt(GalaThemes[PreviewHandler.current_config.theme].text.size[PreviewHandler.current_config.scale][1]) + 15;

                tmp_text_svg.append(misc_text_svg);
                document.getElementById('rndr-hlpr') !.appendChild(tmp_text_svg);
                let rendered_text = tmp_text_svg.querySelector(".misc-text") as SVGAElement;

                document.getElementById('rndr-hlpr') !.style.display = 'block';

                misc_text_svg.setAttribute('x', `${(sizes_nums[0] / 2) - (rendered_text.getBBox().width / 2)}px`);
                tmp_text_svg.innerHTML = '';
                misc_text_svg.setAttribute('fill', GalaThemes[PreviewHandler.current_config.theme].text.color);
                export_svg.append(misc_text_svg);
                document.getElementById('rndr-hlpr') !.style.display = 'none';
            }

            //main text rendering
            let svg_dom = new DOMParser().parseFromString(PreviewHandler.current_config.texts.main, 'text/html');
            let proper_svg = Exporter._createCenteredTextSvg(svg_dom, 0, offset);
            export_svg.append(proper_svg);

        } else if (PreviewHandler.current_config.texts.main && !PreviewHandler.current_config.texts.misc) {
            //if only main text is saved

            let svg_dom = new DOMParser().parseFromString(PreviewHandler.current_config.texts.main, 'text/html');
            let proper_svg = Exporter._createCenteredTextSvg(svg_dom, 0);
            export_svg.append(proper_svg);

        } else if (!PreviewHandler.current_config.texts.main && PreviewHandler.current_config.texts.misc) {
            //if only misc text is saved

            let svg_dom = new DOMParser().parseFromString(PreviewHandler.current_config.texts.misc, 'text/html');
            let proper_svg = Exporter._createCenteredTextSvg(svg_dom, 1);
            export_svg.append(proper_svg);

        }
        return export_svg;
    },

    /**
     * 
     * @param {*} text_dom 
     */
    _createArrWithTextSvgs: function (text_dom: any) {
        let rows = text_dom.documentElement.querySelectorAll('p');

        let row_arr = [];
        for (let i = 0; i < rows.length; i++) {

            rows[i].querySelectorAll('[data-fontsize]').forEach((element: HTMLElement) => {
                element.setAttribute('style', '');
                element.style.fontSize = `${element.dataset.fontsize}px`;
            });

            let row_string = rows[i].outerHTML;
            row_string = row_string.replaceAll('<span ', '<tspan ');
            row_string = row_string.replaceAll('</span>', '</tspan>');

            row_string = row_string.replaceAll('<p>', '<text>');
            row_string = row_string.replaceAll('</p>', '</text>');

            row_arr.push(row_string);
        }

        return row_arr;
    },

    /**
     * 
     * @param {*} svg 
     */
    _createCenteredTextSvg: function (svg: SVGAElement | Document, type_index: number, bottom_offset: number | null = null) {
        //Needed variables
        var sizes = GalaScales.print.size[PreviewHandler.current_config.scale];
        let splitted_sizes: string[] = sizes.split('x');
        let sizes_nums: number[] = [parseInt(splitted_sizes[0]), parseInt(splitted_sizes[1])];

        var frame_padding = GalaThemes[PreviewHandler.current_config.theme].frame.padding[PreviewHandler.current_config.scale];
        var gala_offset = [parseInt(GalaThemes[PreviewHandler.current_config.theme].map.offset[PreviewHandler.current_config.scale][0]) + parseInt(frame_padding), parseInt(GalaThemes[PreviewHandler.current_config.theme].map.offset[PreviewHandler.current_config.scale][1]) + parseInt(frame_padding)];
        var gala_size = sizes_nums[0] - (gala_offset[1] * 2);

        let misc_svg_arr = Exporter._createArrWithTextSvgs(svg);

        var top_border = gala_offset[1] + gala_size;
        let bottom_border = bottom_offset ? parseInt(frame_padding) + bottom_offset : parseInt(frame_padding);
        let avalaible_space = sizes_nums[1] - top_border - bottom_border;

        var result_svg = document.createElementNS(Exporter.svgns, 'svg');

        //Gets the overall y offset for proper position
        var overall_top_offset = 0;
        if (misc_svg_arr.length > 1) {
            for (let i = 0; i < misc_svg_arr.length; i++) {
                let text_svg = new DOMParser().parseFromString(misc_svg_arr[i], 'application/xml').documentElement;
                let in_loop_text_svg = document.createElementNS(Exporter.svgns, 'text');
                in_loop_text_svg.innerHTML = text_svg.innerHTML;
                in_loop_text_svg.setAttribute('style', `font-size:${GalaThemes[PreviewHandler.current_config.theme].text.size[PreviewHandler.current_config.scale][type_index]}`);
                in_loop_text_svg.classList.add('render-text-svg');

                //@ts-ignore this is SVGelement but for some reason typescript sees it as standard element and couldnt find workaround
                let rendered_text_bbox = Exporter._getTextSvgBBox(in_loop_text_svg, splitted_sizes);
                overall_top_offset += rendered_text_bbox.height / 2;
            }
        }

        avalaible_space -= overall_top_offset;
        //Iterate throught the svg arr to create texts
        for (let i = 0; i < misc_svg_arr.length; i++) {

            let text_svg = new DOMParser().parseFromString(misc_svg_arr[i], 'application/xml').documentElement;
            let in_loop_text_svg = document.createElementNS(Exporter.svgns, 'text');
            in_loop_text_svg.innerHTML = text_svg.innerHTML;
            in_loop_text_svg.setAttribute('style', `font-size:${GalaThemes[PreviewHandler.current_config.theme].text.size[PreviewHandler.current_config.scale][type_index]}`);
            in_loop_text_svg.classList.add('render-text-svg');

            //@ts-ignore this is SVGelement but for some reason typescript sees it as standard element and couldnt find workaround
            let rendered_text_bbox = Exporter._getTextSvgBBox(in_loop_text_svg, splitted_sizes);

            in_loop_text_svg.setAttribute('x', `${(sizes_nums[0] / 2) - (rendered_text_bbox.width / 2)}px`);
            in_loop_text_svg.setAttribute('y', `${top_border + (avalaible_space / 2)}px`);

            top_border += rendered_text_bbox.height + parseInt(GalaThemes[PreviewHandler.current_config.theme].text.line_space[PreviewHandler.current_config.scale][type_index]);

            result_svg.append(in_loop_text_svg);
        }

        result_svg.setAttribute('fill', GalaThemes[PreviewHandler.current_config.theme].text.color);
        return result_svg;
    },

    /**
     * 
     */
    _getTextSvgBBox: function (svg: SVGAElement, sizes: string[]) {
        if (!svg || !sizes) return false;

        var render_helper = document.getElementById('rndr-hlpr') as HTMLElement;

        var tmp_text_svg = document.createElementNS(Exporter.svgns, 'svg');
        tmp_text_svg.setAttribute('width', sizes[0]);
        tmp_text_svg.setAttribute('height', sizes[1]);
        tmp_text_svg.setAttribute('style', "font-family:'Oswald', sans-serif;");

        tmp_text_svg.append(svg);
        render_helper.appendChild(tmp_text_svg);
        render_helper.style.display = 'block';

        let rendered_text = tmp_text_svg.querySelector('.render-text-svg') as SVGAElement;

        var result: any = false;
        if (rendered_text) {
            result = rendered_text.getBBox();
        } else {
            //@ts-ignore this is SVGelement but for some reason typescript sees it as standard element and couldnt find workaround
            result = tmp_text_svg.getBBox();
        }

        render_helper.style.display = 'none';
        render_helper.innerHTML = '';

        return result;
    },

    /**
     * 
     * @returns 
     */
    exportMapSvg: async function (): Promise < string > {
        //@ts-ignore vendor library call
        Celestial.exportSVG(fillSvgExport);
        return await new Promise((res, rej) => {
            let timeout = setInterval(() => {
                if (Exporter.map_svg) {
                    res(Exporter.map_svg);
                    clearInterval(timeout);
                }
            }, 100)
        });

        function fillSvgExport(data: any) {
            Exporter.map_svg = data;
        }
    },


    /**
     * 
     * @param {*} e 
     */
    downloadListener: async function (e: Event) {
        await Exporter._downloadPdf(`${PreviewHandler.current_config.scale}-${PreviewHandler.current_config.theme}`);

    },

    /**
     * 
     */
    _downloadPdf: async function (filename: string) {
        //DEV DOWNLOAD
        // const svg_el = await Exporter.generateSvg();
        // var serializer = new XMLSerializer();
        // var source = serializer.serializeToString(svg_el);

        // var dwnld = document.createElement('a');
        // dwnld.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<?xml version="1.0" standalone="no"?>\r\n${source}`));
        // dwnld.setAttribute('download', filename);

        // dwnld.style.display = 'none';
        // document.body.appendChild(dwnld);

        // dwnld.click();

        // document.body.removeChild(dwnld);
        
        //LIVE DOWNLOAD
        const sizes = GalaScales.print.size[PreviewHandler.current_config.scale];
        const [svg_width, svg_height] = sizes.split('x');

        const svg_el = await Exporter.generateSvg();
        const {width, height} = svg_el.getBBox();
        const serializer = new XMLSerializer();
        const source = serializer.serializeToString(svg_el);

        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', svg_width);
        canvas.setAttribute('height', svg_height);
        const ctx = canvas.getContext("2d")!;
        const DOMURL = self.URL || self.webkitURL || self;
        const img = new Image();
        const svg = new Blob([source], {type: "image/svg+xml;charset=utf-8"});
        const url = DOMURL.createObjectURL(svg);

        img.onload = function() {
            ctx.drawImage(img, width, height);
            const png = canvas.toDataURL("image/png");
            DOMURL.revokeObjectURL(png);
            //@ts-ignore
            const preview_pdf = jspdf.jsPDF({
                unit: 'px',
                format: [parseInt(svg_width) * 0.1, parseInt(svg_height) * 0.1]
            });
            preview_pdf.addImage(png, 'PNG', 0, 0, parseInt(svg_width) * 0.1, parseInt(svg_height) * 0.1, '', 'fast');
            //@ts-ignore
            const print_pdf = new jspdf.jsPDF({
                unit: 'px',
                format: [svg_width, svg_height]
            });
            print_pdf.addImage(png, 'PNG', 0, 0, svg_width, svg_height, '', 'fast');

            //@ts-ignore
            var zip = new JSZip();
            zip.file(`${filename}-preview.pdf`, preview_pdf.output('blob'));
            zip.file(`${filename}-print.pdf`, print_pdf.output('blob'));
            zip.generateAsync({type:"blob"})
            .then(function(content:any) {
                //@ts-ignore
                saveAs(content, `${filename}.zip`);
            });
        };
        img.src = url;
    },

};