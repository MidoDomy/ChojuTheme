import template from './sw-cms-el-text-slider.html.twig';
import './sw-cms-el-text-slider.scss';
 
const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-text-slider', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        fields() {
            return this.element.config.fields.value.slice(0, 1);
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('text-slider');
            this.initElementData('text-slider');
        },
    }
});
