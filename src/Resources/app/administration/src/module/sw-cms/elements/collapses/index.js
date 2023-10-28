import './component';
import './preview';
import './config';

Shopware.Service('cmsService').registerCmsElement({
    name: 'collapses',
    label: 'sw-cms.elements.collapses.label',
    component: 'sw-cms-el-collapses',
    previewComponent: 'sw-cms-el-preview-collapses',
    configComponent: 'sw-cms-el-config-collapses',
    defaultConfig: {
        fields: {
            source: 'static',
            value: []
        },
        columnsNumber: {
            source: 'static',
            value: 1
        }
    }
});