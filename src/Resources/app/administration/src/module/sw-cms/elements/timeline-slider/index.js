import './component';
import './preview';
import './config';

Shopware.Service('cmsService').registerCmsElement({
    name: 'timeline-slider',
    label: 'sw-cms.elements.timeline-slider.label',
    component: 'sw-cms-el-timeline-slider',
    previewComponent: 'sw-cms-el-preview-timeline-slider',
    configComponent: 'sw-cms-el-config-timeline-slider',
    defaultConfig: {
        fields: {
            source: 'static',
            value: []
        },
    }
});