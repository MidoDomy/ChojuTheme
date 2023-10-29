import template from './image-text-card-form.html.twig';
import './image-text-card-form.scss';

const { Component } = Shopware;
const { cloneDeep } = Shopware.Utils.object;
const Criteria = Shopware.Data.Criteria;
const { mapState } = Shopware.Component.getComponentHelper();


Component.register('image-text-card-form', {
    template,

    inject: ['repositoryFactory'],

    props: {
        value: {
            type: Object,
            required: true
        },

        index: {
            type: Number
        }
    },

    data() {
        return {
            mediaModalIsOpen: false,
            initialFolderId: null,
            entity: this.element,
            mediaItems: [],
        };
    },

    computed: {
        cardInfo: {
          get () { return this.value },
          set (cardInfo) { this.$emit('input', cardInfo) }
        },

        ...mapState('imageTextCards', [
            'element',
            'defaultFolder',
            'cmsPageState'
        ]),

        mediaRepository() {
            return this.repositoryFactory.create('media');
        },

        uploadTag() {
            return `cms-element-config-${this.index}`;
        },

        previewSource() {
            if(this.element.config.cardMediaItems.value && this.element.data.cardMediaItems) {
                let dataProperty = this.element.data.cardMediaItems.find(element => element.media.id === this.cardInfo.imageId);
                
                if (dataProperty) {
                    return dataProperty.media;
                }
            }
        },

        cardMediaItems() {
            if (this.element.data && this.element.data.cardMediaItems && this.element.data.cardMediaItems.length > 0) {
                return this.element.data.cardMediaItems;
            }

            return [];
        },

        mediaUrl() {
            if(this.element.config.cardMediaItems.value && this.element.data.cardMediaItems) {
                const dataProperty = this.element.data.cardMediaItems.find(element => element.media.id === this.cardInfo.imageId);

                if (dataProperty && dataProperty.media.url) {
                    return dataProperty.media.url;
                }
            } 

            return '/administration/static/img/cms/preview_mountain_small.jpg';
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        async createdComponent() {
            if (this.element.config.cardMediaItems.value.length > 0) {
                const mediaIds = this.element.config.cardMediaItems.value.map((configElement) => {
                    return configElement.mediaId;
                });

                const criteria = new Criteria();
                criteria.setIds(mediaIds);

                const searchResult = await this.mediaRepository.search(criteria, Shopware.Context.api);
                this.mediaItems = mediaIds.map((mediaId) => {
                    return searchResult.get(mediaId);
                });
            }
        },

        async successfulUpload({ targetId }) {
            const mediaItem = await this.mediaRepository.get(targetId, Shopware.Context.api);
            this.$forceUpdate();

            /* Emit a root event, so it can be caught in the element config, and thus update the config */
            this.$root.$emit('image-text-cards-config-update', mediaItem);

            this.cardInfo.imageId = mediaItem.id;
            this.cardInfo.hasImage = true;
            this.mediaItems.push(mediaItem);
            this.updateMediaDataValue();
        },

        onItemRemove() {
            const key = this.cardInfo.imageId;

            this.element.config.cardMediaItems.value =
                this.element.config.cardMediaItems.value.filter(
                    item => (item.mediaId !== key)
                );

            this.mediaItems = this.mediaItems.filter(
                item => (item.id !== key)
            );

            this.updateMediaDataValue();
            this.cardInfo.hasImage = false;
        },

        onMediaSelectionChange(mediaItems) {
            mediaItems.forEach((item) => {
                /* Emit a root event, so it can be caught in the element config, and thus update the config */
                this.$root.$emit('image-text-cards-config-update', item);

                this.cardInfo.imageId = item.id;
                this.cardInfo.hasImage = true;
            });

            this.mediaItems.push(...mediaItems);

            this.updateMediaDataValue();
        },

        updateMediaDataValue() {
            if (this.element.config.cardMediaItems.value) {
                const cardMediaItems = cloneDeep(this.element.config.cardMediaItems.value);
                
                cardMediaItems.forEach((galleryItem) => {
                    this.mediaItems.forEach((mediaItem) => {
                        if (galleryItem.mediaId === mediaItem.id) {
                            galleryItem.media = mediaItem;
                        }
                    });
                });

                /* Emit a root event, so it can be caught in the element config in order to update the element data */
                this.$root.$emit('image-text-cards-data-update', cardMediaItems);
            }
        },

        onOpenMediaModal() {
            this.mediaModalIsOpen = true;
        },

        onCloseMediaModal() {
            this.mediaModalIsOpen = false;
        },

        onBlur(content) {
            this.emitChanges(content);
        },

        onInput(content) {
            this.emitChanges(content);
        },

        emitChanges(content) {
            if (content !== this.collapseInfo.description) {
                this.collapseInfo.description = content;
            }
        }
    }
});
