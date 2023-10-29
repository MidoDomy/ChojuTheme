import MainMenuCollapsePlugin from './plugins/navigation/main-menu-collapse.plugin';
import ParallaxPlugin from './plugins/effects/parallax.plugin';
import AudioPlugin from './plugins/audio/audio.plugin';

PluginManager.register('MainMenuCollapse', MainMenuCollapsePlugin, '[data-main-menu-collapse');
PluginManager.register('Parallax', ParallaxPlugin, '[data-parallax');
PluginManager.register('Audio', AudioPlugin, '[data-audio');
