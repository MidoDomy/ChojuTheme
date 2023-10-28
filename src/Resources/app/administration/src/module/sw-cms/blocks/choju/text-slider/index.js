import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-slider',
    label: 'sw-cms.blocks.choju.text-slider.label',
    category: 'choju',
    component: 'sw-cms-block-text-slider',
    previewComponent: 'sw-cms-preview-text-slider',
    defaultConfig: {
        marginBottom: '0',
        marginTop: '0',
        marginLeft: '0',
        marginRight: '0',
        sizingMode: 'boxed'
    },
    slots: {
        'text-slider': 'text-slider'
    }
});
