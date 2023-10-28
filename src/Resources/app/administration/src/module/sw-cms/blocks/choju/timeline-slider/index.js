import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'timeline-slider',
    label: 'sw-cms.blocks.choju.timeline-slider.label',
    category: 'choju',
    component: 'sw-cms-block-timeline-slider',
    previewComponent: 'sw-cms-preview-timeline-slider',
    defaultConfig: {
        marginBottom: '0',
        marginTop: '0',
        marginLeft: '0',
        marginRight: '0',
        sizingMode: 'boxed'
    },
    slots: {
        'timeline-slider': 'timeline-slider'
    }
});
