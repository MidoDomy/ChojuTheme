import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'collapses-three-col',
    label: 'sw-cms.blocks.choju.collapses-three-col.label',
    category: 'choju',
    component: 'sw-cms-block-collapses-three-col',
    previewComponent: 'sw-cms-preview-collapses-three-col',
    defaultConfig: {
        marginBottom: '0',
        marginTop: '0',
        marginLeft: '0',
        marginRight: '0',
        sizingMode: 'boxed'
    },
    slots: {
        'collapses1': 'collapses',
        'collapses2': 'collapses',
        'collapses3': 'collapses'
    }
});
