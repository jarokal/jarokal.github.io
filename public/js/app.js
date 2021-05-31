"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const GalaScales = {
    default_scale: "40x50",
    default_theme: "heart_blue",
    print: {
        size: {
            "30x40": "3543x4724",
            "40x50": "4725x5906",
            "50x70": "4922x6890"
        }
    },
    preview: {
        "airy": {
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
};
const TextScales = {
    toolbar_main: 'undo redo | bold | styleselect',
    toolbar_misc: 'resetMiscContentBtn | undo redo | bold | styleselect',
    sizes: {
        main: [{
                title: "50px",
                val: 50
            },
            {
                title: "60px",
                val: 60
            },
            {
                title: "70px",
                val: 70
            },
            {
                title: "80px",
                val: 80
            },
            {
                title: "90px",
                val: 90
            },
            {
                title: "100px",
                val: 100
            },
            {
                title: "110px",
                val: 110
            },
            {
                title: "120px",
                val: 120
            },
            {
                title: "130px",
                val: 130
            },
            {
                title: "140px",
                val: 140
            },
            {
                title: "150px",
                val: 150
            },
            {
                title: "160px",
                val: 160
            },
            {
                title: "170px",
                val: 170
            },
            {
                title: "180px",
                val: 180
            },
        ],
        misc: [{
                title: "50px",
                val: 50
            },
            {
                title: "60px",
                val: 60
            },
            {
                title: "70px",
                val: 70
            },
            {
                title: "80px",
                val: 80
            },
            {
                title: "90px",
                val: 90
            },
            {
                title: "100px",
                val: 100
            },
            {
                title: "110px",
                val: 110
            },
            {
                title: "120px",
                val: 120
            },
            {
                title: "130px",
                val: 130
            },
            {
                title: "140px",
                val: 140
            },
            {
                title: "150px",
                val: 150
            },
            {
                title: "160px",
                val: 160
            },
            {
                title: "170px",
                val: 170
            },
            {
                title: "180px",
                val: 180
            },
        ]
    },
    preview_main_id: 'preview-main-text',
    preview_misc_id: 'preview-misc-text'
};
const GalaThemes = {
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
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
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
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
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
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
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
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
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
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
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
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
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
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
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
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
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
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
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
            size: {
                "30x40": ["140px", "60px"],
                "40x50": ["170px", "70px"],
                "50x70": ["180px", "80px"]
            },
            offset: {
                "30x40": "84px",
                "40x50": "104px",
                "50x70": "186px"
            },
            line_space: {
                "30x40": ['10', '15'],
                "40x50": ['10', '10'],
                "50x70": ['10', '15']
            }
        }
    },
};
const TextHandler = {
    editors: {
        main: null,
        misc: null
    },
    tiny_config: function (selector, editor_type) {
        if (!selector || !editor_type)
            return false;
        var config = {
            selector: selector,
            menubar: false,
            statusbar: false,
            toolbar: editor_type == 'main' ? TextScales.toolbar_main : editor_type == 'misc' ? TextScales.toolbar_misc : '',
            formats: TextHandler._createEditorFormats(editor_type),
            style_formats: TextHandler._createStyleFormats(editor_type),
            width: '100%',
            setup: function (editor) {
                editor.on('init', function () {
                    TextHandler.editors[editor_type] = editor;
                });
                editor.on('Paste Change Input Undo Redo', function () {
                    TextHandler.updateFromContent(editor.getContent(), editor_type);
                });
                editor.ui.registry.addButton('resetMiscContentBtn', {
                    icon: 'home',
                    tooltip: 'Reset',
                    onAction: function () {
                        PreviewHandler.setLocationAndDateTexts();
                    }
                });
            },
            content_style: ''
        };
        let index = editor_type == 'main' ? 0 : editor_type == 'misc' ? 1 : null;
        if (index || index == 0) {
            let default_font_size = `${(parseInt(GalaThemes[PreviewHandler.current_config.theme].text.size[PreviewHandler.current_config.scale][index]) / 5)}px`;
            config['content_style'] = `.mce-content-body {font-family: 'Oswald', sans-serif; cursor: text; font-size: ${default_font_size}; text-align:center; line-height:1em;};`;
            return config;
        }
        else {
            return false;
        }
    },
    _createEditorFormats: function (editor_type) {
        var obj = {};
        for (let i = 0; i < TextScales.sizes[editor_type].length; i++) {
            obj[TextScales.sizes[editor_type][i].val] = {
                inline: 'span',
                styles: {
                    fontSize: `${TextScales.sizes[editor_type][i].val / 5}px`,
                    lineHeight: `${(TextScales.sizes[editor_type][i].val / 5) / 2}px`
                },
                attributes: {
                    'data-fontsize': `${TextScales.sizes[editor_type][i].val}`
                }
            };
        }
        return obj;
    },
    _createStyleFormats: function (editor_type) {
        var arr = [];
        for (let i = 0; i < TextScales.sizes[editor_type].length; i++) {
            arr.push({
                title: TextScales.sizes[editor_type][i].title,
                format: `${TextScales.sizes[editor_type][i].val}`
            });
        }
        return arr;
    },
    initMce: function (selector, editor_type) {
        if (!selector || !editor_type)
            return false;
        return tinymce.init(TextHandler.tiny_config(selector, editor_type));
    },
    updateFromContent: function (content, editor) {
        if (!content) {
            if (editor == 'main')
                PreviewHandler.removeTextContent(TextScales['preview_main_id']);
            if (editor == 'misc')
                PreviewHandler.removeTextContent(TextScales['preview_misc_id']);
            PreviewHandler.current_config.texts[editor] = null;
            return false;
        }
        let compiled_content = TextHandler.compileContentForPreview(content, editor);
        PreviewHandler.appendTextContent(compiled_content);
        PreviewHandler.saveContentIntoConfig(content, editor);
    },
    compileContentForPreview: function (content, editor) {
        var id, index, added_class;
        if (editor == 'main') {
            id = TextScales.preview_main_id;
            index = 0;
            added_class = 'm-auto';
        }
        else if (editor == 'misc') {
            id = TextScales.preview_misc_id;
            index = 1;
            added_class = null;
        }
        else {
            throw new Error('TextHandler.compileContentForPreview:131 - Error occured, not supported editor received');
        }
        var content_container = document.createElement('div');
        content_container.id = id;
        if (added_class)
            content_container.classList.add(added_class);
        content_container.style.fontSize = `${(parseInt(GalaThemes[PreviewHandler.current_config.theme].text.size[PreviewHandler.current_config.scale][index]) / 10)}px`;
        content_container.insertAdjacentHTML("afterbegin", content);
        let spans = content_container.querySelectorAll('span');
        for (let i = 0; i < spans.length; i++) {
            let font_size = +spans[i].dataset.fontsize;
            spans[i].style.fontSize = `${font_size / 10}px`;
        }
        return content_container;
    }
};
const CelestialHandler = {
    svg_export: null,
    default_config: function () {
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
                names: false,
                namesType: "cz",
                nameStyle: {
                    fill: "#cccc99",
                    align: "center",
                    baseline: "middle",
                    font: ["14px Helvetica, Arial, sans-serif",
                        "12px Helvetica, Arial, sans-serif",
                        "11px Helvetica, Arial, sans-serif"
                    ]
                },
                lines: true,
                lineStyle: {
                    stroke: "#cccccc",
                    width: 2,
                    opacity: 0.6
                },
                bounds: false,
                boundStyle: {
                    stroke: "#cccc00",
                    width: 1,
                    opacity: 0.8,
                    dash: [2, 4]
                }
            },
            mw: {
                show: false,
                style: {
                    fill: "#ffffff",
                    opacity: 0.15
                }
            },
            lines: {
                graticule: {
                    show: false,
                    stroke: "#cccccc",
                    width: 0.6,
                    opacity: 0.8,
                    lon: {
                        pos: [""],
                        fill: "#eee",
                        font: "10px Helvetica, Arial, sans-serif"
                    },
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
        };
    },
    render: function (config) {
        Celestial.display(config);
    },
    getThemedConfig: function (theme_name) {
        let default_config = CelestialHandler.default_config();
        let theme_config = GalaThemes[theme_name];
        if (!theme_config)
            throw new Error('CelestialHandler.GetThemedConfig:165 - Error occured, Theme config not found');
        for (let key in theme_config.map) {
            if (theme_config[key] == 'object' && theme_config[key] !== null) {
                for (let nested_key in theme_config[key]) {
                    default_config[key][nested_key] = theme_config[key][nested_key];
                }
            }
            else {
                default_config[key] = theme_config.map[key];
            }
        }
        return default_config;
    },
    showLocation: function (locArr) {
        if (!locArr || !locArr[0] || !locArr[1])
            return false;
        Celestial.location(locArr);
    },
    showDate: function (date) {
        if (!date)
            return false;
        Celestial.date(date);
    },
    reprojectMap: function (projection) {
        if (!projection)
            return false;
        Celestial.reproject({
            projection: projection
        });
    },
    applyConfig: function (config) {
        if (!config)
            return false;
        Celestial.apply(config);
    }
};
const PreviewHandler = {
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
    listenerHandler: function (e) {
        let target = e.target;
        if (target.dataset.previewSize) {
            PreviewHandler.handleSizeChange(target.dataset.previewSize);
        }
        if (target.dataset.posterTheme) {
            PreviewHandler.handleThemeChange(target.dataset.posterTheme);
        }
    },
    handleThemeChange: function (theme_name) {
        let target = document.querySelector(`[data-poster-theme="${theme_name}"]`);
        if (target && target.classList.contains("active-btn"))
            return false;
        let active_el = document.getElementById("param-holder").querySelector(".active-btn[data-poster-theme]");
        if (active_el)
            active_el.classList.remove("active-btn");
        target.classList.add("active-btn");
        if (GalaThemes[theme_name].map.projection != GalaThemes[PreviewHandler.current_config.theme].map.projection) {
            PreviewHandler.changeMapProjection(GalaThemes[theme_name].map.projection);
            PreviewHandler.scaleMap(PreviewHandler.current_config.scale, theme_name);
        }
        PreviewHandler.current_config.theme = theme_name;
        PreviewHandler.changePreviewTextColor(GalaThemes[PreviewHandler.current_config.theme].text.color);
        PreviewHandler.changePreviewMapColor(GalaThemes[PreviewHandler.current_config.theme].map.background.fill, GalaThemes[PreviewHandler.current_config.theme].map.background.stroke);
        PreviewHandler.changePreviewPosterBackground(GalaThemes[PreviewHandler.current_config.theme].background.color);
        PreviewHandler.changePreviewPosterBorder(GalaThemes[PreviewHandler.current_config.theme].border.is_border, GalaThemes[PreviewHandler.current_config.theme].border.color);
        PreviewHandler.changeMapMaskAndBg(theme_name);
    },
    changeMapProjection: function (projection) {
        if (!projection)
            return false;
        CelestialHandler.reprojectMap(projection);
    },
    changePreviewPosterBorder: function (isBorder = true, color) {
        let border_el = document.getElementById("poster-content");
        if (isBorder) {
            if (!color)
                return false;
            border_el.style.border = `1px solid ${color}`;
        }
        else {
            border_el.style.border = "none";
        }
    },
    changePreviewPosterBackground: function (color) {
        if (!color)
            return false;
        let el = document.getElementById("poster-container");
        if (el)
            el.style.backgroundColor = color;
    },
    changePreviewMapColor: function (color, stroke) {
        if (!color || !stroke)
            return false;
        let new_config = CelestialHandler.getThemedConfig(PreviewHandler.current_config.theme);
        new_config["background"].fill = color;
        new_config["background"].stroke = stroke;
        CelestialHandler.applyConfig(new_config);
    },
    changePreviewTextColor: function (color) {
        if (!color)
            return false;
        let el = document.getElementById("texts-container");
        if (el)
            el.style.color = color;
    },
    changeMapMaskAndBg: function (theme_name) {
        const svgns = 'http://www.w3.org/2000/svg';
        let mask_svg = document.querySelector('#svg-poster-mask');
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
        let poster_container = document.querySelector('#poster-container');
        let poster_width = parseInt(window.getComputedStyle(poster_container, null).getPropertyValue('width'));
        if (GalaThemes[theme_name].map.shape.type == 'circle') {
            let circle = document.createElementNS(svgns, 'circle');
            let frame_padding = parseInt(window.getComputedStyle(poster_container, null).getPropertyValue('padding'));
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
            let stroke_circle = document.createElementNS(svgns, 'circle');
            stroke_circle.setAttribute('cx', frame_x_center.toString());
            stroke_circle.setAttribute('cy', (r + frame_padding + map_margin.top).toString());
            stroke_circle.setAttribute('r', r.toString());
            stroke_circle.setAttribute('fill', 'transparent');
            stroke_circle.setAttribute('stroke', GalaThemes[theme_name].map.background.stroke);
            stroke_circle.setAttribute('stroke-width', GalaThemes[theme_name].map.background.width.toString());
            mask_svg.appendChild(stroke_circle);
        }
        else if (GalaThemes[theme_name].map.shape.type == 'cube') {
            let transparent_rec = document.createElementNS(svgns, 'rect');
            let frame_padding = parseInt(window.getComputedStyle(poster_container, null).getPropertyValue('padding'));
            transparent_rec.setAttribute('width', ((poster_width - (frame_padding * 2)) - 2).toString());
            transparent_rec.setAttribute('height', GalaScales.preview[GalaThemes[theme_name].map.projection].shape_height[PreviewHandler.current_config.scale].toString());
            transparent_rec.setAttribute('x', (frame_padding + 2).toString());
            transparent_rec.setAttribute('y', (frame_padding + 2).toString());
            transparent_rec.setAttribute('fill', '#000000');
            hole.appendChild(transparent_rec);
        }
        else if (GalaThemes[theme_name].map.shape.type == 'heart') {
            let frame_padding = parseInt(window.getComputedStyle(poster_container, null).getPropertyValue('padding'));
            let map_margin = {
                top: parseInt(GalaScales.preview[GalaThemes[theme_name].map.projection].position_shape[PreviewHandler.current_config.scale][0]),
                left: parseInt(GalaScales.preview[GalaThemes[theme_name].map.projection].position_shape[PreviewHandler.current_config.scale][1])
            };
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
    handleSizeChange: function (size) {
        let target = document.querySelector(`[data-preview-size="${size}"]`);
        if (target.classList.contains("active-btn"))
            return false;
        let active_el = document.getElementById("param-holder").querySelector(".active-btn[data-preview-size]");
        if (active_el)
            active_el.classList.remove("active-btn");
        target.classList.add("active-btn");
        PreviewHandler.current_config.scale = size;
        let scale = GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].size[size];
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
    scalePreview: function (size) {
        let container = document.getElementById("preview");
        if (container) {
            container.style.transform = `scale(${GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].scale_preview[size]})`;
        }
    },
    scaleMap: function (size, theme = PreviewHandler.current_config.theme) {
        let container = document.getElementById("map-container");
        if (container) {
            container.style.transform = `scale(${GalaScales.preview[GalaThemes[theme].map.projection].scale_map[size]})`;
            container.style.top = GalaScales.preview[GalaThemes[theme].map.projection].position_map[size][0];
            container.style.left = GalaScales.preview[GalaThemes[theme].map.projection].position_map[size][1];
        }
    },
    scaleMapBG: function (size) {
        let container = document.getElementById("map-background");
        if (!container)
            return false;
        container.style.transform = `scale(${GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].scale_map[size]})`;
        container.style.top = GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].position_map[size][0];
        container.style.left = GalaScales.preview[GalaThemes[PreviewHandler.current_config.theme].map.projection].position_map[size][1];
        container.style.overflow = "visible";
    },
    setFontSizes: function (size) {
        if (!size)
            return false;
        let main_text_container = document.getElementById(TextScales.preview_main_id);
        if (main_text_container) {
            main_text_container.style.fontSize = `${parseInt(GalaThemes[PreviewHandler.current_config.theme].text.size[size][0]) / 10}px`;
        }
        let misc_text_container = document.getElementById(TextScales.preview_misc_id);
        if (misc_text_container) {
            misc_text_container.style.fontSize = `${parseInt(GalaThemes[PreviewHandler.current_config.theme].text.size[size][1]) / 10}px`;
        }
    },
    appendTextContent: function (content) {
        if (!content)
            return false;
        var container = document.getElementById("texts-container");
        let id = content.id;
        if (container.querySelector(`#${id}`))
            container.querySelector(`#${id}`).remove();
        if (id.split("-")[1] == "main") {
            container.prepend(content);
        }
        else {
            container.append(content);
        }
    },
    removeTextContent: function (container_selector) {
        let element = document.getElementById(container_selector);
        if (element)
            document.getElementById(container_selector).remove();
    },
    saveContentIntoConfig: function (content, editor) {
        if (!content || !editor)
            return false;
        PreviewHandler.current_config.texts[editor] = content;
    },
    initPreview: function () {
        PreviewHandler.current_config.date = PreviewHandler._getDateObj('');
        PreviewHandler.setInitialInputVals();
        PreviewHandler.handleSizeChange(PreviewHandler.current_config.scale);
    },
    renderPreview: function () {
        PreviewHandler.initPreview();
        CelestialHandler.render(CelestialHandler.getThemedConfig(PreviewHandler.current_config.theme));
        PreviewHandler.handleThemeChange(PreviewHandler.current_config.theme);
    },
    renderMapBG: function () {
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
        document.getElementById("poster-content").appendChild(svg);
        PreviewHandler.scaleMapBG(PreviewHandler.current_config.scale);
    },
    locationInputInit: function () {
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById("map-location-input"));
        autocomplete.addListener("place_changed", function () {
            var place = autocomplete.getPlace();
            PreviewHandler.locationChanged(place.formatted_address, place.geometry["location"].lat(), place.geometry["location"].lng());
        });
    },
    locationChanged: function (adress, lat, lon) {
        CelestialHandler.showLocation([lat, lon]);
        PreviewHandler.current_config.place = adress.split(",")[0];
        PreviewHandler.current_config.coordinates.lat = lat;
        PreviewHandler.current_config.coordinates.lon = lon;
        PreviewHandler.current_config.coordinates.text = `${lat}N, ${lon}E`;
        PreviewHandler.setLocationAndDateTexts();
    },
    setInitialInputVals: function () {
        let dateTime = PreviewHandler._compileDatetimeForInput(PreviewHandler.current_config.date, true);
        let input = document.querySelector("#map-datetime-input");
        input.value = dateTime;
        PreviewHandler._applyDateChanges(PreviewHandler._getDateObj(dateTime));
        PreviewHandler.setLocationAndDateTexts();
    },
    setLocationAndDateTexts: function () {
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
            TextHandler.editors.misc.setContent("");
            TextHandler.editors.misc.setContent(content.innerHTML);
            TextHandler.editors.misc.fire("change");
        }
        else {
            var intervalus = setInterval(function () {
                if (TextHandler.editors.misc) {
                    TextHandler.editors.misc.setContent("");
                    TextHandler.editors.misc.setContent(content.innerHTML);
                    TextHandler.editors.misc.fire("change");
                    clearInterval(intervalus);
                }
            }, 100);
        }
    },
    dateChanged: function (e) {
        if (!e.target.value)
            return false;
        let now = PreviewHandler._getDateObj(e.target.value);
        PreviewHandler._applyDateChanges(now);
        CelestialHandler.showDate(now);
        PreviewHandler.setLocationAndDateTexts();
    },
    _applyDateChanges: function (date) {
        PreviewHandler.current_config.date = date;
    },
    _getDateObj: function (arg) {
        return arg ? new Date(arg) : new Date();
    },
    _compileDatetimeForInput: function (dateObj, dateTimeInp = true) {
        var d = dateObj;
        var result;
        if (dateTimeInp) {
            result = [d.getFullYear(), (d.getMonth() + 1).AddZero(), d.getDate().AddZero(),].join("-") + "T" + [d.getHours().AddZero(), d.getMinutes().AddZero()].join(":");
        }
        else {
            result = `${d.getDate().AddZero()}.${(d.getMonth() + 1).AddZero()}.${d.getFullYear()}`;
        }
        return result;
    },
    _addZeroInit: function () {
        Number.prototype.AddZero = function (b, c) {
            var l = String(b || 10).length - String(this).length + 1;
            return l > 0 ? new Array(l).join(c || "0") + this : this;
        };
    },
};
const Exporter = {
    svgns: "http://www.w3.org/2000/svg",
    map_svg: '',
    generateSvg: function () {
        return __awaiter(this, void 0, void 0, function* () {
            let export_svg = document.createElementNS(Exporter.svgns, 'svg');
            export_svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            let main_defs = document.createElementNS(Exporter.svgns, 'defs');
            let main_def_style = document.createElement('style');
            main_def_style.setAttribute('type', 'text/css');
            main_def_style.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');";
            main_defs.append(main_def_style);
            export_svg.append(main_defs);
            export_svg.setAttribute('style', 'font-family:"Oswald", sans-serif; font-weight: 200;');
            var sizes = GalaScales.print.size[PreviewHandler.current_config.scale];
            let splitted_sizes = sizes.split('x');
            let sizes_nums = [parseInt(splitted_sizes[0]), parseInt(splitted_sizes[1])];
            var frame_padding = parseInt(GalaThemes[PreviewHandler.current_config.theme].frame.padding[PreviewHandler.current_config.scale]);
            export_svg.setAttribute('width', splitted_sizes[0]);
            export_svg.setAttribute('height', splitted_sizes[1]);
            var bg_frame = document.createElementNS(Exporter.svgns, 'rect');
            bg_frame.setAttribute('fill', GalaThemes[PreviewHandler.current_config.theme].background.color);
            bg_frame.setAttribute('width', splitted_sizes[0]);
            bg_frame.setAttribute('height', splitted_sizes[1]);
            export_svg.appendChild(bg_frame);
            let gala_size = sizes_nums[0].toString();
            let gala_map = yield Exporter.exportMapSvg();
            var gala_svg = new DOMParser().parseFromString(gala_map, 'application/xml');
            gala_svg.documentElement.setAttribute('width', gala_size);
            gala_svg.documentElement.setAttribute('height', gala_size);
            gala_svg.documentElement.setAttribute('x', "0");
            gala_svg.documentElement.setAttribute('y', "0");
            export_svg.appendChild(gala_svg.documentElement);
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
                let mask_stroke_circle = document.createElementNS(Exporter.svgns, 'circle');
                mask_stroke_circle.setAttribute('cx', frame_x_center.toString());
                mask_stroke_circle.setAttribute('cy', (r + frame_padding + map_margin.top).toString());
                mask_stroke_circle.setAttribute('r', r.toString());
                mask_stroke_circle.setAttribute('fill', 'transparent');
                mask_stroke_circle.setAttribute('stroke', GalaThemes[PreviewHandler.current_config.theme].map.background.stroke);
                mask_stroke_circle.setAttribute('stroke-width', (parseInt(GalaThemes[PreviewHandler.current_config.theme].border.width[PreviewHandler.current_config.scale]) * 2).toString());
                mask_svg.appendChild(mask_stroke_circle);
            }
            else if (GalaThemes[PreviewHandler.current_config.theme].map.shape.type == 'heart') {
                let hole_heart_svg = document.createElementNS(Exporter.svgns, 'svg');
                let map_margin = {
                    top: parseInt(GalaThemes[PreviewHandler.current_config.theme].map.offset[PreviewHandler.current_config.scale][1]),
                    left: parseInt(GalaThemes[PreviewHandler.current_config.theme].map.offset[PreviewHandler.current_config.scale][0])
                };
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
            if (PreviewHandler.current_config.texts.main && PreviewHandler.current_config.texts.misc) {
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
                    if (i != 0)
                        offset += parseInt(GalaThemes[PreviewHandler.current_config.theme].text.size[PreviewHandler.current_config.scale][1]) + 15;
                    tmp_text_svg.append(misc_text_svg);
                    document.getElementById('rndr-hlpr').appendChild(tmp_text_svg);
                    let rendered_text = tmp_text_svg.querySelector(".misc-text");
                    document.getElementById('rndr-hlpr').style.display = 'block';
                    misc_text_svg.setAttribute('x', `${(sizes_nums[0] / 2) - (rendered_text.getBBox().width / 2)}px`);
                    tmp_text_svg.innerHTML = '';
                    misc_text_svg.setAttribute('fill', GalaThemes[PreviewHandler.current_config.theme].text.color);
                    export_svg.append(misc_text_svg);
                    document.getElementById('rndr-hlpr').style.display = 'none';
                }
                let svg_dom = new DOMParser().parseFromString(PreviewHandler.current_config.texts.main, 'text/html');
                let proper_svg = Exporter._createCenteredTextSvg(svg_dom, 0, offset);
                export_svg.append(proper_svg);
            }
            else if (PreviewHandler.current_config.texts.main && !PreviewHandler.current_config.texts.misc) {
                let svg_dom = new DOMParser().parseFromString(PreviewHandler.current_config.texts.main, 'text/html');
                let proper_svg = Exporter._createCenteredTextSvg(svg_dom, 0);
                export_svg.append(proper_svg);
            }
            else if (!PreviewHandler.current_config.texts.main && PreviewHandler.current_config.texts.misc) {
                let svg_dom = new DOMParser().parseFromString(PreviewHandler.current_config.texts.misc, 'text/html');
                let proper_svg = Exporter._createCenteredTextSvg(svg_dom, 1);
                export_svg.append(proper_svg);
            }
            return export_svg;
        });
    },
    _createArrWithTextSvgs: function (text_dom) {
        let rows = text_dom.documentElement.querySelectorAll('p');
        let row_arr = [];
        for (let i = 0; i < rows.length; i++) {
            rows[i].querySelectorAll('[data-fontsize]').forEach((element) => {
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
    _createCenteredTextSvg: function (svg, type_index, bottom_offset = null) {
        var sizes = GalaScales.print.size[PreviewHandler.current_config.scale];
        let splitted_sizes = sizes.split('x');
        let sizes_nums = [parseInt(splitted_sizes[0]), parseInt(splitted_sizes[1])];
        var frame_padding = GalaThemes[PreviewHandler.current_config.theme].frame.padding[PreviewHandler.current_config.scale];
        var gala_offset = [parseInt(GalaThemes[PreviewHandler.current_config.theme].map.offset[PreviewHandler.current_config.scale][0]) + parseInt(frame_padding), parseInt(GalaThemes[PreviewHandler.current_config.theme].map.offset[PreviewHandler.current_config.scale][1]) + parseInt(frame_padding)];
        var gala_size = sizes_nums[0] - (gala_offset[1] * 2);
        let misc_svg_arr = Exporter._createArrWithTextSvgs(svg);
        var top_border = gala_offset[1] + gala_size;
        let bottom_border = bottom_offset ? parseInt(frame_padding) + bottom_offset : parseInt(frame_padding);
        let avalaible_space = sizes_nums[1] - top_border - bottom_border;
        var result_svg = document.createElementNS(Exporter.svgns, 'svg');
        var overall_top_offset = 0;
        if (misc_svg_arr.length > 1) {
            for (let i = 0; i < misc_svg_arr.length; i++) {
                let text_svg = new DOMParser().parseFromString(misc_svg_arr[i], 'application/xml').documentElement;
                let in_loop_text_svg = document.createElementNS(Exporter.svgns, 'text');
                in_loop_text_svg.innerHTML = text_svg.innerHTML;
                in_loop_text_svg.setAttribute('style', `font-size:${GalaThemes[PreviewHandler.current_config.theme].text.size[PreviewHandler.current_config.scale][type_index]}`);
                in_loop_text_svg.classList.add('render-text-svg');
                let rendered_text_bbox = Exporter._getTextSvgBBox(in_loop_text_svg, splitted_sizes);
                overall_top_offset += rendered_text_bbox.height / 2;
            }
        }
        avalaible_space -= overall_top_offset;
        for (let i = 0; i < misc_svg_arr.length; i++) {
            let text_svg = new DOMParser().parseFromString(misc_svg_arr[i], 'application/xml').documentElement;
            let in_loop_text_svg = document.createElementNS(Exporter.svgns, 'text');
            in_loop_text_svg.innerHTML = text_svg.innerHTML;
            in_loop_text_svg.setAttribute('style', `font-size:${GalaThemes[PreviewHandler.current_config.theme].text.size[PreviewHandler.current_config.scale][type_index]}`);
            in_loop_text_svg.classList.add('render-text-svg');
            let rendered_text_bbox = Exporter._getTextSvgBBox(in_loop_text_svg, splitted_sizes);
            in_loop_text_svg.setAttribute('x', `${(sizes_nums[0] / 2) - (rendered_text_bbox.width / 2)}px`);
            in_loop_text_svg.setAttribute('y', `${top_border + (avalaible_space / 2)}px`);
            top_border += rendered_text_bbox.height + parseInt(GalaThemes[PreviewHandler.current_config.theme].text.line_space[PreviewHandler.current_config.scale][type_index]);
            result_svg.append(in_loop_text_svg);
        }
        result_svg.setAttribute('fill', GalaThemes[PreviewHandler.current_config.theme].text.color);
        return result_svg;
    },
    _getTextSvgBBox: function (svg, sizes) {
        if (!svg || !sizes)
            return false;
        var render_helper = document.getElementById('rndr-hlpr');
        var tmp_text_svg = document.createElementNS(Exporter.svgns, 'svg');
        tmp_text_svg.setAttribute('width', sizes[0]);
        tmp_text_svg.setAttribute('height', sizes[1]);
        tmp_text_svg.setAttribute('style', "font-family:'Oswald', sans-serif;");
        tmp_text_svg.append(svg);
        render_helper.appendChild(tmp_text_svg);
        render_helper.style.display = 'block';
        let rendered_text = tmp_text_svg.querySelector('.render-text-svg');
        var result = false;
        if (rendered_text) {
            result = rendered_text.getBBox();
        }
        else {
            result = tmp_text_svg.getBBox();
        }
        render_helper.style.display = 'none';
        render_helper.innerHTML = '';
        return result;
    },
    exportMapSvg: function () {
        return __awaiter(this, void 0, void 0, function* () {
            Celestial.exportSVG(fillSvgExport);
            return yield new Promise((res, rej) => {
                let timeout = setInterval(() => {
                    if (Exporter.map_svg) {
                        res(Exporter.map_svg);
                        clearInterval(timeout);
                    }
                }, 100);
            });
            function fillSvgExport(data) {
                Exporter.map_svg = data;
            }
        });
    },
    downloadListener: function (e) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Exporter._downloadPdf(`${PreviewHandler.current_config.scale}-${PreviewHandler.current_config.theme}`);
        });
    },
    _downloadPdf: function (filename) {
        return __awaiter(this, void 0, void 0, function* () {
            const sizes = GalaScales.print.size[PreviewHandler.current_config.scale];
            const [svg_width, svg_height] = sizes.split('x');
            const svg_el = yield Exporter.generateSvg();
            const { width, height } = svg_el.getBBox();
            const serializer = new XMLSerializer();
            const source = serializer.serializeToString(svg_el);
            const canvas = document.createElement('canvas');
            canvas.setAttribute('width', svg_width);
            canvas.setAttribute('height', svg_height);
            const ctx = canvas.getContext("2d");
            const DOMURL = self.URL || self.webkitURL || self;
            const img = new Image();
            const svg = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
            const url = DOMURL.createObjectURL(svg);
            img.onload = function () {
                ctx.drawImage(img, width, height);
                const png = canvas.toDataURL("image/png");
                DOMURL.revokeObjectURL(png);
                const preview_pdf = jspdf.jsPDF({
                    unit: 'px',
                    format: [parseInt(svg_width) * 0.1, parseInt(svg_height) * 0.1]
                });
                preview_pdf.addImage(png, 'PNG', 0, 0, parseInt(svg_width) * 0.1, parseInt(svg_height) * 0.1, '', 'fast');
                const print_pdf = new jspdf.jsPDF({
                    unit: 'px',
                    format: [svg_width, svg_height]
                });
                print_pdf.addImage(png, 'PNG', 0, 0, svg_width, svg_height, '', 'fast');
                var zip = new JSZip();
                zip.file(`${filename}-preview.pdf`, preview_pdf.output('blob'));
                zip.file(`${filename}-print.pdf`, print_pdf.output('blob'));
                zip.generateAsync({ type: "blob" })
                    .then(function (content) {
                    saveAs(content, `${filename}.zip`);
                });
            };
            img.src = url;
        });
    },
};
const index = {
    data: {
        nav: null,
        mobileMenu: null,
        mobileMenuIcons: null,
        mainMenu: null,
    },
    init: function () {
        index.data.nav = document.querySelector('#mainNav');
        index.data.mobileMenu = document.querySelector('#mobileMenu');
        index.data.mobileMenuIcons = index.data.mobileMenu.querySelectorAll('svg');
        index.data.mainMenu = document.querySelector('#mainMenu');
    },
    toggleBurger: function () {
        index.data.mobileMenuIcons.forEach((mmi) => {
            if (mmi.classList.contains('hidden')) {
                mmi.classList.remove('hidden');
            }
            else {
                mmi.classList.add('hidden');
            }
        });
    },
    mobileMenuListeners: function () {
        index.data.mobileMenu.addEventListener('click', (e) => {
            e.preventDefault();
            if (index.data.mainMenu.classList.contains('hidden')) {
                index.data.mainMenu.classList.remove('hidden');
            }
            else {
                index.data.mainMenu.classList.add('hidden');
            }
            index.toggleBurger();
        });
    }
};
window.onload = function () {
    PreviewHandler._addZeroInit();
    index.init();
    index.mobileMenuListeners();
    TextHandler.initMce('#param-text-note', 'main');
    TextHandler.initMce('#param-text-misc', 'misc');
    PreviewHandler.renderPreview();
    document.getElementById('param-holder').addEventListener('click', PreviewHandler.listenerHandler);
    document.getElementById('addtocart').addEventListener('click', Exporter.downloadListener);
    PreviewHandler.locationInputInit();
    document.getElementById('map-datetime-input').addEventListener('change', PreviewHandler.dateChanged);
};
