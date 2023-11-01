import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'video',
    label: 'sw-cms.elements.video.label',
    component: 'sw-cms-el-video',
    configComponent: 'sw-cms-el-config-video',
    previewComponent: 'sw-cms-el-preview-video',
    defaultConfig: {
        height: {
            source: 'static',
            value: '',
        },
        video: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'media'
            }
        },
        thumbnail: {
            source: 'static',
            value: null,
            entity: {
                name: 'media'
            }
        },
    }
});
