import template from './timeline-form.html.twig';

const { Component } = Shopware;

Component.register('timeline-form', {
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
        timelineInfo: {
          get () { return this.value },
          set (timelineInfo) { this.$emit('input', timelineInfo) }
        }
    },
});
