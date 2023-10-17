import MainMenuCollapsePlugin from './plugins/navigation/main-menu-collapse.plugin';
import ParallaxPlugin from './plugins/effects/parallax.plugin';

PluginManager.register('MainMenuCollapse', MainMenuCollapsePlugin, '[data-main-menu-collapse');
PluginManager.register('Parallax', ParallaxPlugin, '[data-parallax');
