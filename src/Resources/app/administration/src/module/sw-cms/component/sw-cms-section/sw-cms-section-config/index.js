import template from './sw-cms-section-config.html.twig';
import './sw-cms-section-config.scss';

const { Component } = Shopware;

Component.override('sw-cms-section-config', {
    template,
});
