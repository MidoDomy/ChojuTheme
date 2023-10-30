import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'video',
    label: 'sw-cms.blocks.choju.video.label',
    category: 'choju',
    component: 'sw-cms-block-video',
    previewComponent: 'sw-cms-preview-video',
    defaultConfig: {
        marginBottom: null,
        marginTop: null,
        marginLeft: null,
        marginRight: null,
        sizingMode: 'boxed'
    },
    slots: {
        'video': 'video'
    }
});
