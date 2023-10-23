import './component';
import './preview';
import './config';

Shopware.Service('cmsService').registerCmsElement({
    name: 'devider',
    label: 'sw-cms.elements.devider.label',
    component: 'sw-cms-el-devider',
    previewComponent: 'sw-cms-el-preview-devider',
    configComponent: 'sw-cms-el-config-devider',
    defaultConfig: {
        linkConfig: {
            source: 'static',
            value: {
                text: '',
                type: 'link',
                target: '',
                newTab: false
            },
        },
    }
});