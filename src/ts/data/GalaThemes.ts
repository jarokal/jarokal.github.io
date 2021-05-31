//TS type for GalaThemes data namespace
type GalaThemesType = {
    [key: string]: {
        map: {
            size: number;
            projection: string;
            background: {
                fill: string;
                opacity: number;
                stroke: string;
                width: number;
            },
            offset: {
                [key: string]: [string, string]
            },
            shape: {
                type: string;
            }
        },
        border: {
            is_border: boolean;
            color: string;
            width: {
                [key: string]: string;
            }
        },
        frame: {
            padding: {
                [key: string]: string;
            }
        },
        background: {
            color: string;
        },
        text: {
            color: string;
            size: {
                [key: string]: [string, string];
            },
            offset: {
                [key: string]: string;
            },
            line_space: {
                [key: string]: [string, string];
            }
        }
    }
};

/**
 * 
 * @namespace
 */
const GalaThemes: GalaThemesType = {
    classic_black_nobg: {
        map: {
            size: 1000,
            projection: 'airy',
            background: {
                fill: "#000000",
                opacity: 1,
                stroke: "#000000",
                width: 2
            },
            offset: {
                "30x40": ["84", "84"],
                "40x50": ["176", "144"],
                "50x70": ["208", "364"]
            },
            shape: {
                type: 'circle'
            }
        },
        border: {
            is_border: true,
            color: '#000000',
            width: {
                "30x40": "4",
                "40x50": "4",
                "50x70": "4"
            }
        },
        frame: {
            padding: {
                "30x40": "90",
                "40x50": "236",
                "50x70": "246"
            }
        },
        background: {
            color: "#FFFFFF"
        },
        text: {
            color: "#2E2E2E",
            // !!!! Must be pixels used in textScale.js otherwise app wont work properly !!!!!
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            //offset of texts from bottom border of the svg
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
            //spaces between lines in svg
            line_space: {
                "30x40": ['10', '15'],
                "40x50": ['10', '10'],
                "50x70": ['10', '15']
            }
        }
    },
    classic_blue_nobg: {
        map: {
            size: 1000,
            projection: 'airy',
            background: {
                fill: "#13162A",
                opacity: 1,
                stroke: "#000000",
                width: 2
            },
            offset: {
                "30x40": ["84", "84"],
                "40x50": ["176", "144"],
                "50x70": ["208", "364"]
            },
            shape: {
                type: 'circle'
            }
        },
        border: {
            is_border: true,
            color: '#000000',
            width: {
                "30x40": "4",
                "40x50": "4",
                "50x70": "4"
            }
        },
        frame: {
            padding: {
                "30x40": "90",
                "40x50": "236",
                "50x70": "246"
            }
        },
        background: {
            color: "#FFFFFF"
        },
        text: {
            color: "#2E2E2E",
            // !!!! Must be pixels used in textScale.js otherwise app wont work properly !!!!!
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            //offset of texts from bottom border of the svg
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
            //spaces between lines in svg
            line_space: {
                "30x40": ['10', '15'],
                "40x50": ['10', '10'],
                "50x70": ['10', '15']
            }
        }
    },
    classic_black: {
        map: {
            size: 1000,
            projection: 'airy',
            background: {
                fill: "#000000",
                opacity: 1,
                stroke: "#FFFFFF",
                width: 2
            },
            offset: {
                "30x40": ["84", "84"],
                "40x50": ["176", "144"],
                "50x70": ["208", "364"]
            },
            shape: {
                type: 'circle'
            }
        },
        border: {
            is_border: true,
            color: '#FFFFFF',
            width: {
                "30x40": "4",
                "40x50": "4",
                "50x70": "4"
            }
        },
        frame: {
            padding: {
                "30x40": "90",
                "40x50": "236",
                "50x70": "246"
            }
        },
        background: {
            color: "#000000"
        },
        text: {
            color: "#FFFFFF",
            // !!!! Must be pixels used in textScale.js otherwise app wont work properly !!!!!
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            //offset of texts from bottom border of the svg
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
            //spaces between lines in svg
            line_space: {
                "30x40": ['10', '15'],
                "40x50": ['10', '10'],
                "50x70": ['10', '15']
            }
        }
    },
    classic_blue: {
        map: {
            size: 1000,
            projection: 'airy',
            background: {
                fill: "#13162A",
                opacity: 1,
                stroke: "#FFFFFF",
                width: 2
            },
            offset: {
                "30x40": ["84", "84"],
                "40x50": ["176", "144"],
                "50x70": ["208", "364"]
            },
            shape: {
                type: 'circle'
            }
        },
        border: {
            is_border: true,
            color: '#FFFFFF',
            width: {
                "30x40": "4",
                "40x50": "4",
                "50x70": "4"
            }
        },
        frame: {
            padding: {
                "30x40": "90",
                "40x50": "236",
                "50x70": "246"
            }
        },
        background: {
            color: "#13162A"
        },
        text: {
            color: "#FFFFFF",
            // !!!! Must be pixels used in textScale.js otherwise app wont work properly !!!!!
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            //offset of texts from bottom border of the svg
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
            //spaces between lines in svg
            line_space: {
                "30x40": ['10', '15'],
                "40x50": ['10', '10'],
                "50x70": ['10', '15']
            }
        }
    },
    heart_black: {
        map: {
            size: 1000,
            projection: 'airy',
            background: {
                fill: "#000000",
                opacity: 1,
                stroke: "#FFFFFF",
                width: 2
            },
            //[left, top]
            offset: {
                "30x40": ["145", "255"],
                "40x50": ["211", "230"],
                "50x70": ["208", "344"]
            },
            shape: {
                type: 'heart'
            }
        },
        border: {
            is_border: true,
            color: '#FFFFFF',
            width: {
                "30x40": "4",
                "40x50": "4",
                "50x70": "4"
            }
        },
        frame: {
            padding: {
                "30x40": "90",
                "40x50": "236",
                "50x70": "246"
            }
        },
        background: {
            color: "#000000"
        },
        text: {
            color: "#FFFFFF",
            // !!!! Must be pixels used in textScale.js otherwise app wont work properly !!!!!
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            //offset of texts from bottom border of the svg
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
            //spaces between lines in svg
            line_space: {
                "30x40": ['10', '15'],
                "40x50": ['10', '10'],
                "50x70": ['10', '15']
            }
        }
    },
    heart_blue: {
        map: {
            size: 1000,
            projection: 'airy',
            background: {
                fill: "#13162A",
                opacity: 1,
                stroke: "#FFFFFF",
                width: 2
            },
            //[left, top]
            offset: {
                "30x40": ["145", "255"],
                "40x50": ["211", "230"],
                "50x70": ["208", "344"]
            },
            shape: {
                type: 'heart'
            }
        },
        border: {
            is_border: true,
            color: '#FFFFFF',
            width: {
                "30x40": "4",
                "40x50": "4",
                "50x70": "4"
            }
        },
        frame: {
            padding: {
                "30x40": "90",
                "40x50": "236",
                "50x70": "246"
            }
        },
        background: {
            color: "#13162A"
        },
        text: {
            color: "#FFFFFF",
            // !!!! Must be pixels used in textScale.js otherwise app wont work properly !!!!!
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            //offset of texts from bottom border of the svg
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
            //spaces between lines in svg
            line_space: {
                "30x40": ['10', '15'],
                "40x50": ['10', '10'],
                "50x70": ['10', '15']
            }
        }
    },
    heart_black_nobg: {
        map: {
            size: 1000,
            projection: 'airy',
            background: {
                fill: "#000000",
                opacity: 1,
                stroke: "#000000",
                width: 2
            },
            //[left, top]
            offset: {
                "30x40": ["145", "255"],
                "40x50": ["211", "230"],
                "50x70": ["208", "344"]
            },
            shape: {
                type: 'heart'
            }
        },
        border: {
            is_border: true,
            color: '#000000',
            width: {
                "30x40": "4",
                "40x50": "4",
                "50x70": "4"
            }
        },
        frame: {
            padding: {
                "30x40": "90",
                "40x50": "236",
                "50x70": "246"
            }
        },
        background: {
            color: "#FFFFFF"
        },
        text: {
            color: "#2E2E2E",
            // !!!! Must be pixels used in textScale.js otherwise app wont work properly !!!!!
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            //offset of texts from bottom border of the svg
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
            //spaces between lines in svg
            line_space: {
                "30x40": ['10', '15'],
                "40x50": ['10', '10'],
                "50x70": ['10', '15']
            }
        }
    },
    heart_blue_nobg: {
        map: {
            size: 1000,
            projection: 'airy',
            background: {
                fill: "#13162A",
                opacity: 1,
                stroke: "#000000",
                width: 2
            },
            //[left, top]
            offset: {
                "30x40": ["145", "255"],
                "40x50": ["211", "230"],
                "50x70": ["208", "344"]
            },
            shape: {
                type: 'heart'
            }
        },
        border: {
            is_border: true,
            color: '#000000',
            width: {
                "30x40": "4",
                "40x50": "4",
                "50x70": "4"
            }
        },
        frame: {
            padding: {
                "30x40": "90",
                "40x50": "236",
                "50x70": "246"
            }
        },
        background: {
            color: "#FFFFFF"
        },
        text: {
            color: "#2E2E2E",
            // !!!! Must be pixels used in textScale.js otherwise app wont work properly !!!!!
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            //offset of texts from bottom border of the svg
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
            //spaces between lines in svg
            line_space: {
                "30x40": ['10', '15'],
                "40x50": ['10', '10'],
                "50x70": ['10', '15']
            }
        }
    },
    special_black: {
        map: {
            size: 1000,
            projection: 'cylindricalStereographic',
            background: {
                fill: "#000000",
                opacity: 1,
                stroke: "transparent",
                width: 2
            },
            offset: {
                "30x40": ["84", "84"],
                "40x50": ["176", "144"],
                "50x70": ["208", "364"]
            },
            shape: {
                type: 'cube'
            }
        },
        border: {
            is_border: true,
            color: '#FFFFFF',
            width: {
                "30x40": "4",
                "40x50": "4",
                "50x70": "4"
            }
        },
        frame: {
            padding: {
                "30x40": "90",
                "40x50": "236",
                "50x70": "246"
            }
        },
        background: {
            color: "#000000"
        },
        text: {
            color: "#FFFFFF",
            // !!!! Must be pixels used in textScale.js otherwise app wont work properly !!!!!
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            //offset of texts from bottom border of the svg
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
            //spaces between lines in svg
            line_space: {
                "30x40": ['10', '15'],
                "40x50": ['10', '10'],
                "50x70": ['10', '15']
            }
        }
    },
    special_blue: {
        map: {
            size: 1000,
            projection: 'cylindricalStereographic',
            background: {
                fill: "#13162A",
                opacity: 1,
                stroke: "transparent",
                width: 2
            },
            offset: {
                "30x40": ["84", "84"],
                "40x50": ["176", "144"],
                "50x70": ["208", "364"]
            },
            shape: {
                type: 'cube'
            }
        },
        border: {
            is_border: true,
            color: '#FFFFFF',
            width: {
                "30x40": "4",
                "40x50": "4",
                "50x70": "4"
            }
        },
        frame: {
            padding: {
                "30x40": "90",
                "40x50": "236",
                "50x70": "246"
            }
        },
        background: {
            color: "#13162A"
        },
        text: {
            color: "#FFFFFF",
            // !!!! Must be pixels used in textScale.js otherwise app wont work properly !!!!!
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            //offset of texts from bottom border of the svg
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
            //spaces between lines in svg
            line_space: {
                "30x40": ['10', '15'],
                "40x50": ['10', '10'],
                "50x70": ['10', '15']
            }
        }
    },
};