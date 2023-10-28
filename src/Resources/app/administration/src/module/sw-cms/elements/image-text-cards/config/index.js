import imageTextCardsState from '../component/state';
import template from './sw-cms-el-config-image-text-cards.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-image-text-cards', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    beforeCreate() {
        Shopware.State.registerModule('imageTextCards', imageTextCardsState);
    },

    created() {
        this.createdComponent();

        Shopware.State.commit('imageTextCards/setElementObject', this.element);
        Shopware.State.commit('imageTextCards/setDefaultFolder', this.cmsPageState._entityName);
    },

    beforeDestroy() {
        Shopware.State.unregisterModule('imageTextCards');
    },

    data() {
        return {
            defaultValue: {
                title: 'Lorem Ipsum',
                description: 'Lorem Ipsum dolor sit amet',
            }
        }
    },

    mounted() {
        this.$root.$on('image-text-cards-data-update', cardMediaItems => {
            /* Add items to Element's Data */
            this.$set(this.element.data, 'cardMediaItems', cardMediaItems);

            /* Update the State with the new Element object */
            Shopware.State.commit('imageTextCards/setElementObject', this.element);
        });

        this.$root.$on('image-text-cards-config-update', mediaItem => {
            /* Add new item to Element's Config */
            this.element.config.cardMediaItems.value.push({
                media: mediaItem,
                mediaUrl: mediaItem.url,
                mediaId: mediaItem.id,
            });

            /* Update the State with the new Element object */
            Shopware.State.commit('imageTextCards/setElementObject', this.element);
        });
    },

    methods: {
        createdComponent() {
            this.initElementConfig('image-text-cards');
            this.initElementData('image-text-cards');

            Shopware.State.commit('imageTextCards/setCmsPageState', this.cmsPageState);
        }
    }
});