import contact from './templates/form-contact/index';
import newsletter from './templates/form-newsletter/index';
import './sw-cms-el-form.scss';

const { Component } = Shopware;

Component.override('sw-cms-el-form', {
  components: {
    contact,
    newsletter,
  },
});
