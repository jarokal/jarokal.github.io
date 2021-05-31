/**
 * 
 * @namespace
 */
const TextHandler = {

    /**
     * Editors pointers
     */
    editors: {
        main: null,
        misc: null
    },

    /**
     * 
     */
    tiny_config: function (selector: string, editor_type: string): Object | boolean {
        if (!selector || !editor_type) return false;

        var config = {
            selector: selector,
            menubar: false,
            statusbar: false,
            toolbar: editor_type == 'main' ? TextScales.toolbar_main : editor_type == 'misc' ? TextScales.toolbar_misc : '',
            formats: TextHandler._createEditorFormats(editor_type),
            style_formats: TextHandler._createStyleFormats(editor_type),
            width: '100%',
            //@ts-ignore
            setup: function (editor) {
                //On inicialization save pointer for editor into our namespace
                editor.on('init', function () {
                    //@ts-ignore this line of code assigns editor into null variable in the namespace
                    TextHandler.editors[editor_type] = editor;
                });
                //When any change in editor happens
                editor.on('Paste Change Input Undo Redo', function () {
                    TextHandler.updateFromContent(editor.getContent(), editor_type);
                });

                //Create custom button for reset
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
        } else {
            return false;
        }
    },

    /**
     * 
     */
    _createEditorFormats: function (editor_type: string): Object {
        var obj: {
            [key: number]: Object
        } = {};
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

    /**
     * 
     */
    _createStyleFormats: function (editor_type: string) {
        var arr = [];
        for (let i = 0; i < TextScales.sizes[editor_type].length; i++) {
            arr.push({
                title: TextScales.sizes[editor_type][i].title,
                format: `${TextScales.sizes[editor_type][i].val}`
            });
        }
        return arr;
    },

    /**
     * 
     * @param {*} selector 
     */
    initMce: function (selector: string, editor_type: string): string | boolean {
        if (!selector || !editor_type) return false;
        //@ts-ignore
        return tinymce.init(TextHandler.tiny_config(selector, editor_type));
    },

    /**
     * 
     * @param {*} content 
     * @param {*} editor 
     */
    updateFromContent: function (content: string, editor: any) {
        if (!content) {
            if (editor == 'main') PreviewHandler.removeTextContent(TextScales['preview_main_id']);
            if (editor == 'misc') PreviewHandler.removeTextContent(TextScales['preview_misc_id']);
            //@ts-ignore this line of code assigns editor into null variable in the namespace
            PreviewHandler.current_config.texts[editor] = null;
            return false;
        }
        let compiled_content = TextHandler.compileContentForPreview(content, editor);
        PreviewHandler.appendTextContent(compiled_content);
        PreviewHandler.saveContentIntoConfig(content, editor);
    },

    /**
     * 
     * @param {*} content 
     */
    compileContentForPreview: function (content: string, editor: string): HTMLDivElement{
        var id, index, added_class;
        if (editor == 'main') {
            id = TextScales.preview_main_id;
            index = 0;
            added_class = 'm-auto';
        } else if (editor == 'misc') {
            id = TextScales.preview_misc_id;
            index = 1;
            added_class = null;
        } else {
            throw new Error('TextHandler.compileContentForPreview:131 - Error occured, not supported editor received')
        }

        var content_container = document.createElement('div');
        content_container.id = id;
        if (added_class) content_container.classList.add(added_class);
        content_container.style.fontSize = `${(parseInt(GalaThemes[PreviewHandler.current_config.theme].text.size[PreviewHandler.current_config.scale][index]) / 10)}px`;
        content_container.insertAdjacentHTML("afterbegin", content);

        let spans = content_container.querySelectorAll('span');
        for (let i = 0; i < spans.length; i++) {
            let font_size = +spans[i].dataset.fontsize!;
            spans[i].style.fontSize = `${font_size / 10}px`;
        }

        return content_container;
    }
};