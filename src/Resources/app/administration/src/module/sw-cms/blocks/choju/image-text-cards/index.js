import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'image-text-cards',
    label: 'sw-cms.blocks.choju.image-text-cards.label',
    category: 'choju',
    component: 'sw-cms-block-image-text-cards',
    previewComponent: 'sw-cms-preview-image-text-cards',
    defaultConfig: {
        marginBottom: '0',
        marginTop: '0',
        marginLeft: '0',
        marginRight: '0',
        sizingMode: 'boxed'
    },
    slots: {
        'image-text-cards': 'image-text-cards'
    }
});
