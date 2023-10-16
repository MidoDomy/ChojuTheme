import Plugin from 'src/plugin-system/plugin.class';

export default class MainMenuCollapsePlugin extends Plugin {

    static options = {
        headerSelector: '.header-main',
    };

    init() {
        this.headerMain = this.el.parentNode.closest(this.options.headerSelector);

        this.registerEvents();
    }

    registerEvents() {
        this.el.addEventListener('click', this.toggleClass.bind(this));
    }

    toggleClass() {
        this.headerMain.classList.add('collapse-menu-activated');
        this.headerMain.classList.toggle('collapse-menu-open');
    }
}
