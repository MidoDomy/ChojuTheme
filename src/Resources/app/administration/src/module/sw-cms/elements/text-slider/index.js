import './component';
import './preview';
import './config';

Shopware.Service('cmsService').registerCmsElement({
    name: 'text-slider',
    label: 'sw-cms.elements.text-slider.label',
    component: 'sw-cms-el-text-slider',
    previewComponent: 'sw-cms-el-preview-text-slider',
    configComponent: 'sw-cms-el-config-text-slider',
    defaultConfig: {
        fields: {
            source: 'static',
            value: []
        },
        maxWidth: {
            source: 'static',
            value: '100%',
        },
        horizontalAlign: {
            source: 'static',
            value: 'right',
        },
    }
});