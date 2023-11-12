import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'headline-jost',
    label: 'sw-cms.blocks.choju.headline-jost.label',
    category: 'choju',
    component: 'sw-cms-block-headline-jost',
    previewComponent: 'sw-cms-preview-headline-jost',
    defaultConfig: {
        marginBottom: null,
        marginTop: null,
        marginLeft: null,
        marginRight: null,
        sizingMode: 'boxed'
    },
    slots: {
        'headline': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                            <h2 style="font-family: 'Jost', sans-serif; text-align: center;">Lorem Ipsum dolor sit amet</h2>
                        `.trim(),
                    },
                },
            },
        },
    },
});
