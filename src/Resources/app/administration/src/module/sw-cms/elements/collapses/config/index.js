import template from './sw-cms-el-config-collapses.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-collapses', {
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
                title: 'Lorem ipsum',
                content: `
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                `.trim()
            }
        }
    },

    methods: {
        createdComponent() {
            this.initElementConfig('collapses');
            this.initElementData('collapses');
        }
    }
});