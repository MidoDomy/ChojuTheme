import './config';
import './component';

const cmsElements = Shopware.Service('cmsService').getCmsElementRegistry();

const cmsElImage = cmsElements['product-slider'];
const cmsElImageDefaultConfig = cmsElImage.defaultConfig;

cmsElImage.defaultConfig = {
    ...cmsElImageDefaultConfig,
    content: {
        source: 'static',
        value: `
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
            sed diam voluptua. 
          </p>
          <div>
            <a target="_self" href="#" class="btn btn-primary">Mehr erfahren</a>
          </div>
        `,
    }
}