//TS type for index main file
type IndexType = {
    data: {
        nav: Element | null;
        mobileMenu: Element | null;
        mobileMenuIcons: NodeList | null;
        mainMenu: Element | null;
    };
    init: () => void;
    toggleBurger: () => void;
    mobileMenuListeners: () => void;
}
/**
 * 
 * @namespace
 */
const index: IndexType = {
    data: {
        nav: null,
        mobileMenu: null,
        mobileMenuIcons: null,
        mainMenu: null,
    },

    /**
     * Fill the namespace with data needed
     */
    init: function () {
        index.data.nav = document.querySelector('#mainNav');
        index.data.mobileMenu = document.querySelector('#mobileMenu');
        index.data.mobileMenuIcons = index.data.mobileMenu!.querySelectorAll('svg');
        index.data.mainMenu = document.querySelector('#mainMenu');
    },

    /**
     * 
     */
    toggleBurger: function () {
        index.data.mobileMenuIcons!.forEach((mmi) => {
            //@ts-ignore ignoring this cause eventho there is a Node instead of element in this loop it works
            if (mmi.classList.contains('hidden')) {
                //@ts-ignore
                mmi.classList.remove('hidden');
            } else {
                //@ts-ignore
                mmi.classList.add('hidden')
            }
        });
    },

    /**
     * 
     * @param {*} mobileMenu 
     */
    mobileMenuListeners: function () {
        index.data.mobileMenu!.addEventListener('click', (e) => {
            e.preventDefault();

            if (index.data.mainMenu!.classList.contains('hidden')) {
                index.data.mainMenu!.classList.remove('hidden');
            } else {
                index.data.mainMenu!.classList.add('hidden')
            }

            index.toggleBurger();
        })
    }


}

/**
 * Once page is loaded start all the code below
 */
window.onload = function () {
    //inicialization of prototype functions
    PreviewHandler._addZeroInit();

    //Inicializate index namespace and gets data required
    index.init();

    //Starts the mobile menu listeners
    index.mobileMenuListeners();

    //Init TinyMCE
    TextHandler.initMce('#param-text-note', 'main');

    //Init TinyMCE
    TextHandler.initMce('#param-text-misc', 'misc');

    //Renders the preview
    PreviewHandler.renderPreview();

    //Listener on param-holder buttons, on change
    document.getElementById('param-holder') !.addEventListener('click', PreviewHandler.listenerHandler);

    //Download svg
    document.getElementById('addtocart') !.addEventListener('click', Exporter.downloadListener);

    //Inicializate google location input
    PreviewHandler.locationInputInit();

    //Listener for date picker for map
    document.getElementById('map-datetime-input') !.addEventListener('change', PreviewHandler.dateChanged);



}