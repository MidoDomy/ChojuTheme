import template from './sw-cms-el-config-product-slider.html.twig';

const { Component } = Shopware;

Component.override('sw-cms-el-config-product-slider', {
  template,

  methods: {
    onInput(content) {
        this.emitChanges(content);
    },

    emitChanges(content) {
      if (content !== this.element.config.content.value) {
        this.element.config.content.value = content;
        this.$emit('element-update', this.element);
      }
    },
  },
});