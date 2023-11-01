import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'audio',
    label: 'sw-cms.elements.audio.label',
    component: 'sw-cms-el-audio',
    configComponent: 'sw-cms-el-config-audio',
    previewComponent: 'sw-cms-el-preview-audio',
    defaultConfig: {
        audio: {
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
        author: {
            source: 'static',
            value: 'Dr. med. Johannes Zwick',
        },
        title: {
            source: 'static',
            value: 'Title Lorem ipsum',
        },
        subtitle: {
            source: 'static',
            value: 'Episode 1',
        },
    }
});
