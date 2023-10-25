import template from './collapse-form.html.twig';

const { Component } = Shopware;

Component.register('collapse-form', {
    template,

    props: {
        value: {
            type: Object,
            required: true
        },
        index: {
            type: Number
        }
    },

    computed: {
        collapseInfo: {
          get () { return this.value },
          set (collapseInfo) { this.$emit('input', collapseInfo) }
        }
    },

    methods: {
        onBlur(content) {
            this.emitChanges(content);
        },

        onInput(content) {
            this.emitChanges(content);
        },

        emitChanges(content) {
            if (content !== this.collapseInfo.content) {
                this.collapseInfo.content = content;
            }
        }
    }
});
