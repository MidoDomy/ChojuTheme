import './component';
import './config';

const cmsElements = Shopware.Service('cmsService').getCmsElementRegistry();

const cmsElText = cmsElements['text'];
const cmsElTextDefaultConfig = cmsElText.defaultConfig;

cmsElText.defaultConfig = {
    ...cmsElTextDefaultConfig,
    horizontalAlign: {
        source: 'static',
        value: 'center',
    },
    maxWidth: {
        source: 'static',
        value: '100%',
    },
}