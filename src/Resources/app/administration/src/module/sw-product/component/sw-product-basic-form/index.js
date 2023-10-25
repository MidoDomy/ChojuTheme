import template from './sw-product-basic-form.html.twig';

const { Component } = Shopware;

Component.override('sw-product-basic-form', {
    template,

    created() {
        this.initCustomField();
    },

    methods: {
        initCustomField() {
            this.product.customFields = this.product.customFields ?? {};
        },
    },
});
