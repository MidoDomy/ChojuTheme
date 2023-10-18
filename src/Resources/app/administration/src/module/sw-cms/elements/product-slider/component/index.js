import template from './sw-cms-el-product-slider.html.twig';
import './sw-cms-el-product-slider.scss';

const { Component } = Shopware;

Component.override('sw-cms-el-product-slider', {
  template
});
