//TS type for TextScales data namespace for proper calls
type TextScalesType = {
    toolbar_main: string;
    toolbar_misc: string;
    sizes: {
        [key: string]: {
            title: string,
            val: number
        } []
    },
    preview_main_id: string;
    preview_misc_id: string;
}

/**
 * 
 * @namespace
 */
const TextScales: TextScalesType = {

    //List of toolbar items for main editor
    toolbar_main: 'undo redo | bold | styleselect',

    //List of toolbar items for misc editor
    toolbar_misc: 'resetMiscContentBtn | undo redo | bold | styleselect',

    //array of all pixels supported in text editors
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

    //container with main editor texts in preview
    preview_main_id: 'preview-main-text',

    //container with misc editor texts in preview
    preview_misc_id: 'preview-misc-text'

}