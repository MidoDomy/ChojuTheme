import template from './text-form.html.twig';

const { Component } = Shopware;

Component.register('text-form', {
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
        textInfo: {
          get () { return this.value },
          set (textInfo) { this.$emit('input', textInfo) }
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
            if (content !== this.textInfo.content) {
                this.textInfo.content = content;
            }
        }
    }
});
