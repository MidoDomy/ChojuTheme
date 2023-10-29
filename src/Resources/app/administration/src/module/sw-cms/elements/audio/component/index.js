import template from './sw-cms-el-audio.html.twig';
import './sw-cms-el-audio.scss';

const { Component, Mixin, Filter } = Shopware;

Component.register('sw-cms-el-audio', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        author() {
            return this.element.config.author.value;
        },

        title() {
            return this.element.config.title.value;
        },

        subtitle() {
            return this.element.config.subtitle.value;
        },

        thumbnailUrl() {
            const staticFallBackImage = this.assetFilter('/administration/static/img/cms/preview_mountain_small.jpg');
            const elemData = this.element.data.thumbnail;
            
            if (this.thumbnailConfigValue) {
                if (elemData?.id) {
                    return this.element.data.thumbnail.url;
                }
            }

            return staticFallBackImage;
        },

        assetFilter() {
            return Filter.getByName('asset');
        },

        thumbnailConfigValue() {
            return this.element?.config?.thumbnail?.value;
        },
    },

    watch: {
        cmsPageState: {
            deep: true,
            handler() {
                this.$forceUpdate();
            },
        },

        thumbnailConfigValue(value) {
            const thumbnailId = this.element?.data?.thumbnail?.id;
            const isSourceStatic = this.element?.config?.thumbnail?.source === 'static';

            if (isSourceStatic && thumbnailId && value !== thumbnailId) {
                this.element.config.thumbnail.value = thumbnailId;
            }
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('audio');
            this.initElementData('audio');
        },
    }
});
