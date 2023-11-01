import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'audio-two-col',
    label: 'sw-cms.blocks.choju.audio-two-col.label',
    category: 'choju',
    component: 'sw-cms-block-audio-two-col',
    previewComponent: 'sw-cms-preview-audio-two-col',
    defaultConfig: {
        marginBottom: null,
        marginTop: null,
        marginLeft: null,
        marginRight: null,
        sizingMode: 'boxed'
    },
    slots: {
        'audio1': 'audio',
        'audio2': 'audio'
    }
});
