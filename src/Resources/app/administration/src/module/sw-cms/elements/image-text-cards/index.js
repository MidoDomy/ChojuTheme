import './component';
import './preview';
import './config';

Shopware.Service('cmsService').registerCmsElement({
    name: 'image-text-cards',
    label: 'sw-cms.elements.image-text-cards.label',
    component: 'sw-cms-el-image-text-cards',
    previewComponent: 'sw-cms-el-preview-image-text-cards',
    configComponent: 'sw-cms-el-config-image-text-cards',
    defaultConfig: {
        fields: {
            source: 'static',
            value: []
        },
        cardMediaItems: {
            source: 'static',
            value: [],
            entity: {
                name: 'media'
            }
        },
        typeCards: {
            source: 'static',
            value: 'slider',
            required: true,
        },
        rows: {
            source: 'static',
            value: '3',
        },
    },
    enrich: function enrich(elem, data) {
        if (Object.keys(data).length < 1) {
            return;
        }

        Object.keys(elem.config).forEach((configKey) => {
            const entity = elem.config[configKey].entity;

            if (!entity) {
                return;
            }

            const entityKey =`entity-${entity.name}-0`;
            if (!data[entityKey]) {
                return;
            }

            elem.data[configKey] = [];
            elem.config[configKey].value.forEach((cardMediaItem) => {
                elem.data[configKey].push({
                    mediaType: cardMediaItem.mediaType,
                    media: data[entityKey].get(cardMediaItem.mediaId)
                });
            });
        });
    }
});
