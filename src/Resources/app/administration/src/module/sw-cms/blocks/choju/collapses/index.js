import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'collapses',
    label: 'sw-cms.blocks.choju.collapses.label',
    category: 'choju',
    component: 'sw-cms-block-collapses',
    previewComponent: 'sw-cms-preview-collapses',
    defaultConfig: {
        marginBottom: '0',
        marginTop: '0',
        marginLeft: '0',
        marginRight: '0',
        sizingMode: 'boxed'
    },
    slots: {
        'collapses': 'collapses'
    }
});
