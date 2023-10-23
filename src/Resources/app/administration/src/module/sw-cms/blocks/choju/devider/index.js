import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'devider',
    label: 'sw-cms.blocks.choju.devider.label',
    category: 'choju',
    component: 'sw-cms-block-devider',
    previewComponent: 'sw-cms-preview-devider',
    defaultConfig: {
        marginBottom: '0',
        marginTop: '0',
        marginLeft: '0',
        marginRight: '0',
        sizingMode: 'boxed'
    },
    slots: {
        'devider': 'devider'
    }
});
