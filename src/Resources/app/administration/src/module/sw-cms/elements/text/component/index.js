import template from './sw-cms-el-text.html.twig';
import './sw-cms-el-text.scss';

const { Component } = Shopware;

Component.override('sw-cms-el-text', {
    template,
});