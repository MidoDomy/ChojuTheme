import Plugin from 'src/plugin-system/plugin.class';

export default class ParallaxPlugin extends Plugin {

    init() {
        this.registerEvents();
    }

    registerEvents() {
        window.addEventListener("scroll", this.addBackgroundPosition.bind(this));
    }

    addBackgroundPosition() {
      let offset = window.pageYOffset;
      this.el.style.backgroundPositionY = offset * 0.7 + "px";
    }
}
