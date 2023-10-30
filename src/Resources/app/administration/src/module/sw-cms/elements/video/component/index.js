import template from './sw-cms-el-video.html.twig';
import './sw-cms-el-video.scss';

const { Component, Mixin, Filter } = Shopware;

Component.register('sw-cms-el-video', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
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
            this.initElementConfig('video');
            this.initElementData('video');
        },
    }
});
