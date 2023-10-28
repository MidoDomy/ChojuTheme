import template from './sw-cms-el-image-text-cards.html.twig';
import './sw-cms-el-image-text-cards.scss';
 
const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-image-text-cards', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        fields() {
            // Get only three items
            return this.element.config.fields.value.slice(0, 3);
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('image-text-cards');
            this.initElementData('image-text-cards');
        },

        mediaUrl(imageId) {
            const context = Shopware.Context.api;
            
            if(imageId && this.element.config.cardMediaItems && this.element.data.cardMediaItems) {
                const dataProperty = this.element.data.cardMediaItems.find(element => element.media.id === imageId);
                let elemData;
                
                if (dataProperty) {
                    elemData =  dataProperty.media;
                    
                    if (elemData && elemData.id) {
                        return dataProperty.media.url;
                    }
        
                    if (elemData && elemData.url) {
                        return `${context.assetsPath}${elemData.url}`;
                    }
                }
            }

            return '/administration/static/img/cms/preview_mountain_small.jpg';
        }
    }
});
