import MainMenuCollapsePlugin from './plugins/navigation/main-menu-collapse.plugin';
import ParallaxPlugin from './plugins/effects/parallax.plugin';
import AudioPlugin from './plugins/audio/audio.plugin';
import CustomVideoPlugin from './plugins/video/custom-video.plugin';
import StickyHeaderPlugin from './plugins/navigation/sticky-header.plugin';

PluginManager.register('MainMenuCollapse', MainMenuCollapsePlugin, '[data-main-menu-collapse');
PluginManager.register('Parallax', ParallaxPlugin, '[data-parallax');
PluginManager.register('Audio', AudioPlugin, '[data-audio');
PluginManager.register('CustomVideo', CustomVideoPlugin, '[data-custom-video]');
PluginManager.register('StickyHeader', StickyHeaderPlugin, '[data-sticky-header]');
