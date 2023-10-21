import './config';
import './component';

const cmsElements = Shopware.Service('cmsService').getCmsElementRegistry();

const cmsElImage = cmsElements['form'];
const cmsElImageDefaultConfig = cmsElImage.defaultConfig;

cmsElImage.defaultConfig = {
    ...cmsElImageDefaultConfig,
    text: {
        source: 'static',
        value: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
    }
}