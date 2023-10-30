import template from './sw-cms-el-config-video.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-video', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    inject: ['repositoryFactory'],

    data() {
        return {
            mediaModalIsOpen: false,
            initialFolderId: null,
            currentTarget: '',
            thumbnail: null
        };
    },

    computed: {
        mediaRepository() {
            return this.repositoryFactory.create('media');
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

        uploadTag(target) {
            return `cms-element-video-config-${target}-${this.element.id}`;
        },

        mediaSource(target) {
            if (this.element?.data[target]?.id) {
                return this.element.data[target];
            }

            return this.element.config[target].value;
        },

        // on Upload
        async onMediaUpload(targetId, target) {
            const mediaEntity = await this.mediaRepository.get(targetId);

            this.element.config[target].value = mediaEntity.id;
            this.element.config[target].source = 'static';

            this.updateElementData(mediaEntity);
            this.$emit('element-update', this.element);
        },

        // On media remove
        onMediaRemove(target) {
            this.currentTarget = target;

            this.element.config[this.currentTarget].value = null;

            this.updateElementData();
            this.$emit('element-update', this.element);
        },

        // On media selection
        onSelectionChanges(mediaEntity) {
            const media = mediaEntity[0];
            this.element.config[this.currentTarget].value = media.id;
            this.element.config[this.currentTarget].source = 'static';

            this.updateElementData(media);

            this.$emit('element-update', this.element);
        },

        // On update data
        updateElementData(media = null) {
            const mediaId = media === null ? null : media.id;

            this.$set(this.element.data, `${this.currentTarget}Id`, mediaId);
            this.$set(this.element.data, this.currentTarget, media);

            if(this.currentTarget == 'video' && this.element.data[this.currentTarget]) {
                if(this.element.data.video.fileExtension !== "mp4") {
                    this.onMediaRemove('video');
                }
            }
        },

        // on remove from modal
        onMediaModalRemove() {
            this.onMediaRemove(this.currentTarget);
        },

        // Media modal
        onCloseModal() {
            this.mediaModalIsOpen = false;
        },

        onOpenMediaModal(target) {
            this.currentTarget = target;
            this.mediaModalIsOpen = true;
        },
    }
});
