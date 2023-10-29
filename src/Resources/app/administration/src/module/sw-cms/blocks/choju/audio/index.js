import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'audio',
    label: 'sw-cms.blocks.choju.audio.label',
    category: 'choju',
    component: 'sw-cms-block-audio',
    previewComponent: 'sw-cms-preview-audio',
    defaultConfig: {
        marginBottom: null,
        marginTop: null,
        marginLeft: null,
        marginRight: null,
        sizingMode: 'boxed'
    },
    slots: {
        'audio': 'audio'
    }
});
