//TS type for GalaScales data namespace
type GalaScalesType = {
    default_scale: string;
    default_theme: string;
    print: {
        size: {
            [key: string]: string;
        }
    },
    preview: {
        [key: string]: {
            size: {
                [key: string]: string;
            },
            scale_preview: {
                [key: string]: number;
            },
            scale_map: {
                [key: string]: number;
            },
            map_bg_offset: {
                [key: string]: number;
            },
            position_map: {
                [key: string]: [string, string];
            },
            position_shape: {
                [key: string]: [string, string];
            },
            shape_height: {
                [key: string]: number | null;
            }, 
            shapes: {
                [key: string]: {
                    scale: {
                       [key: string]: string;
                    },
                    print_scale: {
                       [key: string]: string;
                    }
                }
            }
        }
    }
};

/**
 * 
 * @namespace
 */
const GalaScales: GalaScalesType = {

    /**
     * Sets the default scale of preview when app is started
     */
    default_scale: "40x50",

    /**
     * Sets the default theme of preview when app is started
     */
    default_theme: "heart_blue",

    /**
     * Scales and sizes for print, exporting svg
     */
    print: {
        size: {
            "30x40": "3543x4724",
            "40x50": "4725x5906",
            "50x70": "4922x6890"
        }
    },

    /**
     * Scales and sizes for preview
     */
    preview: {
        "airy": {
            /**
             *  "30x40": "0.75:1",
             *  "40x50": "0.81:1",
             *  "50x70": "0.73:1"
             */
            size: {
                "30x40": "354.4px|472.5px",
                "40x50": "472.5px|590.6px",
                "50x70": "499.0px|689.0px"
            },
            scale_preview: {
                "30x40": 1,
                "40x50": 0.86283,
                "50x70": 0.851283
            },
            scale_map: {
                "30x40": 0.360,
                "40x50": 0.480,
                "50x70": 0.505
            },
            map_bg_offset: {
                "30x40": 10,
                "40x50": 10,
                "50x70": 10
            },
            position_map: {
                "30x40": ["-324px", "-117px"],
                "40x50": ["-266px", "-127px"],
                "50x70": ["-252px", "-127px"]
            },
            position_shape: {
                "30x40": ["20px", "20px"],
                "40x50": ["25px", "25px"],
                "50x70": ["25px", "30px"] 
            },          
            shape_height: {
                "30x40": null,
                "40x50": null,
                "50x70": null 
            }, 
            shapes: {
                'circle': {
                    scale: {
                        "30x40": "1",
                        "40x50": "1",
                        "50x70": "1"  
                    },
                    print_scale: {
                        "30x40": "1",
                        "40x50": "1",
                        "50x70": "1"  
                    }
                },
                'heart': {
                    scale: {
                        "30x40": "0.109",
                        "40x50": "0.146",
                        "50x70": "0.152"  
                    },
                    print_scale: {
                        "30x40": "1.20",
                        "40x50": "1.48",
                        "50x70": "1.56"  
                    }
                }
            }
        },
        "cylindricalStereographic": {
            /**
             *  "30x40": "0.75:1",
             *  "40x50": "0.81:1",
             *  "50x70": "0.73:1"
             */
            size: {
                "30x40": "354.4px|472.5px",
                "40x50": "472.5px|590.6px",
                "50x70": "499.0px|689.0px"
            },
            scale_preview: {
                "30x40": 1,
                "40x50": 0.86283,
                "50x70": 0.851283
            },
            scale_map: {
                "30x40": 0.530,
                "40x50": 0.700,
                "50x70": 0.850
            },
            map_bg_offset: {
                "30x40": 10,
                "40x50": 10,
                "50x70": 10
            },
            position_map: {
                "30x40": ["-180px", "-108px"],
                "40x50": ["-120px", "-100px"],
                "50x70": ["-60px", "-90px"]
            },
            position_shape: {
                "30x40": ["10px", "10px"],
                "40x50": ["10px", "10px"],
                "50x70": ["10px", "10px"] 
            },
            shape_height: {
                "30x40": 320,
                "40x50": 400,
                "50x70": 500 
            }, 
            shapes: {
                'cube': {
                    scale: {
                        "30x40": "1",
                        "40x50": "1",
                        "50x70": "1"  
                    },
                    print_scale: {
                        "30x40": "1",
                        "40x50": "1",
                        "50x70": "1"  
                    }
                }
            }
        }
    }
}