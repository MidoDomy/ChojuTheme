import template from './sw-cms-el-devider.html.twig';
import './sw-cms-el-devider.scss';
 
const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-devider', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        linkConfig() {
            return this.element.config.linkConfig.value;
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('devider');
            this.initElementData('devider');
        },
    }
});
