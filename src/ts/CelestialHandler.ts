//TS type for config object for D3-celestial
type CelestialConfigType = {
    form: boolean;
    projection: string;
    width: number;
    container: string;
    datapath: string;
    adaptable: false;
    interactive: false;
    stars: {
        proper: boolean;
        colors: boolean;
        designation: boolean;
        names: boolean;
    },
    dsos: {
        show: boolean;
    },
    background: {
        fill: string;
        opacity: number;
        stroke: string;
        width: number;
    },
    constellations: {
        names: boolean;
        namesType: string;
        nameStyle: {
            fill: string;
            align: string;
            baseline: string;
            font: string[];
        },
        lines: boolean;
        lineStyle: {
            stroke: string;
            width: number;
            opacity: number;
        },
        bounds: boolean;
        boundStyle: {
            stroke: string;
            width: number;
            opacity: number;
            dash: number[];
        }
    },
    mw: {
        show: boolean;
        style: {
            fill: string;
            opacity: number;
        }
    },
    lines: {}
};

/**
 * 
 * @namespace
 */
const CelestialHandler = {

    /**
     * 
     */
    svg_export: null,

    /**
     * 
     */
    default_config: function (): CelestialConfigType {
        return {
            form: false,
            projection: "airy",
            width: GalaThemes[PreviewHandler.current_config.theme].map.size,
            container: "map-container",
            datapath: "d3-celestial-master/data/",
            adaptable: false,
            interactive: false,
            stars: {
                proper: false,
                colors: false,
                designation: false,
                names: false
            },
            dsos: {
                show: false
            },
            background: {
                fill: "black",
                opacity: 1,
                stroke: "transparent",
                width: 0
            },
            constellations: {
                names: false, // Show constellation names 
                namesType: "cz", // Type of name Latin (iau, default), 3 letter designation (desig) or other language (see list below)
                nameStyle: {
                    fill: "#cccc99",
                    align: "center",
                    baseline: "middle",
                    font: ["14px Helvetica, Arial, sans-serif", // Style for constellations
                        "12px Helvetica, Arial, sans-serif", // Different fonts for diff.
                        "11px Helvetica, Arial, sans-serif"
                    ]
                }, // ranked constellations
                lines: true, // Show constellation lines, style below
                lineStyle: {
                    stroke: "#cccccc",
                    width: 2,
                    opacity: 0.6
                },
                bounds: false, // Show constellation boundaries, style below
                boundStyle: {
                    stroke: "#cccc00",
                    width: 1,
                    opacity: 0.8,
                    dash: [2, 4]
                }
            },
            mw: {
                show: false, // Show Milky Way as filled multi-polygon outlines 
                style: {
                    fill: "#ffffff",
                    opacity: 0.15
                } // Style for MW layers
            },
            lines: { // Display & styles for graticule & some planes
                graticule: {
                    show: false,
                    stroke: "#cccccc",
                    width: 0.6,
                    opacity: 0.8,
                    // grid values: "outline", "center", or [lat,...] specific position
                    lon: {
                        pos: [""],
                        fill: "#eee",
                        font: "10px Helvetica, Arial, sans-serif"
                    },
                    // grid values: "outline", "center", or [lon,...] specific position
                    lat: {
                        pos: [""],
                        fill: "#eee",
                        font: "10px Helvetica, Arial, sans-serif"
                    }
                },
                equatorial: {
                    show: false,
                    stroke: "#aaaaaa",
                    width: 1.3,
                    opacity: 0.7
                },
                ecliptic: {
                    show: false,
                    stroke: "#66cc66",
                    width: 1.3,
                    opacity: 0.7
                },
                galactic: {
                    show: false,
                    stroke: "#cc6666",
                    width: 1.3,
                    opacity: 0.7
                },
                supergalactic: {
                    show: false,
                    stroke: "#cc66cc",
                    width: 1.3,
                    opacity: 0.7
                }
            },
        }
    },

    /**
     * 
     * @param {*} config 
     */
    render: function (config: CelestialConfigType) {
        //@ts-ignore vendor lib call
        Celestial.display(config);
    },

    /**
     * 
     */
    getThemedConfig: function (theme_name: string): CelestialConfigType {
        let default_config = CelestialHandler.default_config();
        let theme_config = GalaThemes[theme_name];
        if (!theme_config) throw new Error('CelestialHandler.GetThemedConfig:165 - Error occured, Theme config not found');

        for (let key in theme_config.map) {
            //@ts-ignore weird ass behaviour from TS, as the type isnt "dynamic enough" it wont allow me to even touch the properties so screw it
            if (theme_config[key] == 'object' && theme_config[key] !== null) {
                //@ts-ignore weird ass behaviour from TS, as the type isnt "dynamic enough" it wont allow me to even touch the properties so screw it
                for (let nested_key in theme_config[key]) {
                    //@ts-ignore weird ass behaviour from TS, as the type isnt "dynamic enough" it wont allow me to even touch the properties so screw it
                    default_config[key][nested_key] = theme_config[key][nested_key];
                }
            } else {
                //@ts-ignore weird ass behaviour from TS, as the type isnt "dynamic enough" it wont allow me to even touch the properties so screw it
                default_config[key] = theme_config.map[key];
            }
        }

        return default_config;
    },

    /**
     * 
     * @param {Object} locArr - array with langtitude and longtitude, [lat, long]
     */
    showLocation: function (locArr: string[]) {
        if (!locArr || !locArr[0] || !locArr[1]) return false;
        //@ts-ignore vendor lib call
        Celestial.location(locArr);
    },

    /**
     * 
     * @param {*} date - date object
     */
    showDate: function (date: Date) {
        if (!date) return false;
        //@ts-ignore vendor lib call
        Celestial.date(date);
    },

    /**
     * 
     * @param {*} projection 
     */
    reprojectMap: function (projection: string) {
        if (!projection) return false;
        //@ts-ignore vendor lib call
        Celestial.reproject({
            projection: projection
        });
    },

    /**
     * 
     * @param {*} config 
     * @returns 
     */
    applyConfig: function (config: CelestialConfigType) {
        if (!config) return false;
        //@ts-ignore vendor lib call
        Celestial.apply(config);
    }
};