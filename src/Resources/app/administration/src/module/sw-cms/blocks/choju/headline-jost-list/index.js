import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'headline-jost-list',
    label: 'sw-cms.blocks.choju.headline-jost-list.label',
    category: 'choju',
    component: 'sw-cms-block-headline-jost-list',
    previewComponent: 'sw-cms-preview-headline-jost-list',
    defaultConfig: {
        marginBottom: null,
        marginTop: null,
        marginLeft: null,
        marginRight: null,
        sizingMode: 'boxed'
    },
    slots: {
        'textLeft': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                            <h2 style="font-family: 'Jost', sans-serif;">Lorem Ipsum dolor sit amet</h2>
                        `.trim(),
                    },
                },
            },
        },
        'textRight': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                            <h3>
                                01 Lorem ipsum dolor sit amet
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, facilis consequatur fugit ipsam quas dolorem consectetur porro numquam architecto ut.
                            </p>

                            <h3>
                                02 Lorem ipsum dolor sit amet
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, facilis consequatur fugit ipsam quas dolorem consectetur porro numquam architecto ut.
                            </p>

                            <h3>
                                03 Lorem ipsum dolor sit amet
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, facilis consequatur fugit ipsam quas dolorem consectetur porro numquam architecto ut.
                            </p>
                        `.trim(),
                    },
                },
            },
        },
    },
});
