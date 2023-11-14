import Plugin from 'src/plugin-system/plugin.class';

export default class StickyHeaderPlugin extends Plugin {
    init() {
        this.header = this.el;
        this.headerHeight = this.header.offsetHeight;

        this._registerEvents();
    }

    _registerEvents() {
        var lastScrollTop = 0;

        document.addEventListener('scroll', () => {
            var st = window.pageYOffset || document.documentElement.scrollTop;

            if (st > this.headerHeight) {
                this.header.classList.add('sticky-active');

                if (st > lastScrollTop){
                    // scroll down
                    this.header.style.top = -this.headerHeight + 'px';
                } else {
                    //scroll up
                    this.header.style.top = 0;
                }
            }

            lastScrollTop = st <= 0 ? 0 : st;
        });
    }
}
