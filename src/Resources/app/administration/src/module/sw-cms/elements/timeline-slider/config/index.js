import template from './sw-cms-el-config-timeline-slider.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-timeline-slider', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    data() {
        return {
            // default values added to the newly added title
            defaultValue: {
                title: 'Ab 10',
                description: 'Lorem ipsum dolor sit amet.'
            }
        }
    },

    methods: {
        createdComponent() {
            this.initElementConfig('timeline-slider');
            this.initElementData('timeline-slider');
        }
    }
});