import template from './sw-cms-el-collapses.html.twig';
import './sw-cms-el-collapses.scss';
 
const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-collapses', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        fields() {
            return this.element.config.fields.value;
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('collapses');
            this.initElementData('collapses');
        },

        toggleActiveItem(e) {
            e.target.classList.toggle('active')
        }
    }
});
