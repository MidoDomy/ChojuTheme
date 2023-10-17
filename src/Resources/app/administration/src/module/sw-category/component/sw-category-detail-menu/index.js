import template from './sw-category-detail-menu.html.twig';

const { Component } = Shopware;

Component.override('sw-category-detail-menu', {
    template,

    watch: {
        category() {
            this.initCustomField();
        }
    },

    created() {
        this.initCustomField();
    },

    methods: {
        initCustomField() {
            this.category.customFields = this.category.customFields ?? {};
        },
    },
});
