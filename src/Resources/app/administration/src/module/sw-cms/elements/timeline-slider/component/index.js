import template from './sw-cms-el-timeline-slider.html.twig';
import './sw-cms-el-timeline-slider.scss';
 
const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-timeline-slider', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        fields() {
            return this.element.config.fields.value.slice(0, 4);
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('timeline-slider');
            this.initElementData('timeline-slider');
        },
    }
});
