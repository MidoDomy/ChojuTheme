!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p=(window.__sw__.assetPath + '/bundles/chojutheme/'),t(t.s="WIAw")}({BOwr:function(e){e.exports=JSON.parse('{"sw-category":{"fullScreen":{"label":"Is full screen"}}}')},ED6f:function(e,n,t){var o=t("xhIx");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("ydqr").default)("24d89fe6",o,!0,{})},KyxM:function(e,n,t){var o=t("xis7");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("ydqr").default)("602eaef2",o,!0,{})},"O/zR":function(e,n,t){var o=t("xI17");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("ydqr").default)("e4bdeaf6",o,!0,{})},Phdy:function(e){e.exports=JSON.parse('{"sw-category":{"fullScreen":{"label":"Is full screen"}},"sw-cms":{"detail":{"label":{"backgroundMediaModeCustom":"Custom","backgroundSizeField":"Background size","backgroundPositionField":"Background position","backgroundRepeatField":"Background repeat","backgroundRepeatNoRepeat":"No repeat","backgroundRepeatRepeat":"Repeat","backgroundRepeatRepeatX":"Repeat X","backgroundRepeatRepeatY":"Repeat Y"}},"elements":{"productSlider":{"config":{"label":{"content":"Content"}}},"form":{"config":{"label":{"text":"Text"}}}}}}')},WIAw:function(e,n,t){"use strict";t.r(n);var o=t("BOwr"),r=t("Phdy"),l=Shopware.Locale;l.extend("de-DE",o),l.extend("en-GB",r);Shopware.Component.override("sw-category-detail-menu",{template:'{% block sw_category_detail_information_visible %}\n    {% parent %}\n\n    <sw-switch-field\n        v-model="category.customFields.fullScreen"\n        borderd\n        :disabled="!acl.can(\'category.editor\')"\n        :label="$tc(\'sw-category.fullScreen.label\')"\n    />\n{% endblock %}\n',watch:{category:function(){this.initCustomField()}},created:function(){this.initCustomField()},methods:{initCustomField:function(){var e;this.category.customFields=null!==(e=this.category.customFields)&&void 0!==e?e:{}}}});Shopware.Component.override("sw-cms-section-config",{template:'{% block sw_cms_section_config_background_image_position_field %}\n  <sw-select-field\n    {% if VUE3 %}\n    v-model:value="section.backgroundMediaMode"\n    {% else %}\n    v-model="section.backgroundMediaMode"\n    {% endif %}\n    :label="$tc(\'sw-cms.detail.label.backgroundMediaMode\')"\n    :disabled="!section.backgroundMediaId"\n  >\n    <option value="auto">\n        {{ $tc(\'sw-cms.detail.label.backgroundMediaModeAuto\') }}\n    </option>\n    <option value="contain">\n        {{ $tc(\'sw-cms.detail.label.backgroundMediaModeContain\') }}\n    </option>\n    <option value="cover">\n        {{ $tc(\'sw-cms.detail.label.backgroundMediaModeCover\') }}\n    </option>\n    <option value="custom">\n        {{ $tc(\'sw-cms.detail.label.backgroundMediaModeCustom\') }}\n    </option>\n  </sw-select-field>\n  \n  <sw-text-field\n    v-if="section.backgroundMediaMode == \'custom\'"\n    {% if VUE3 %}\n    v-model:value="section.customFields.backgroundSize"\n    {% else %}\n    v-model="section.customFields.backgroundSize"\n    {% endif %}\n    :label="$tc(\'sw-cms.detail.label.backgroundSizeField\')"\n    :disabled="!section.backgroundMediaId || section.backgroundMediaMode != \'custom\'"\n  />\n  \n  <sw-text-field\n    {% if VUE3 %}\n    v-model:value="section.customFields.backgroundPosition"\n    {% else %}\n    v-model="section.customFields.backgroundPosition"\n    {% endif %}\n    :label="$tc(\'sw-cms.detail.label.backgroundPositionField\')"\n    :disabled="!section.backgroundMediaId"\n  />\n\n  <sw-select-field\n    {% if VUE3 %}\n    v-model:value="section.customFields.backgroundRepeat"\n    {% else %}\n    v-model="section.customFields.backgroundRepeat"\n    {% endif %}\n    :label="$tc(\'sw-cms.detail.label.backgroundRepeatField\')"\n    :disabled="!section.backgroundMediaId"\n  >\n    <option value="no-repeat">\n        {{ $tc(\'sw-cms.detail.label.backgroundRepeatNoRepeat\') }}\n    </option>\n    <option value="repeat">\n        {{ $tc(\'sw-cms.detail.label.backgroundRepeatRepeat\') }}\n    </option>\n    <option value="repeat-x">\n        {{ $tc(\'sw-cms.detail.label.backgroundRepeatRepeatX\') }}\n    </option>\n    <option value="repeat-y">\n        {{ $tc(\'sw-cms.detail.label.backgroundRepeatRepeatY\') }}\n    </option>\n  </sw-select-field>\n{% endblock %}\n'});t("O/zR");Shopware.Component.override("sw-cms-section",{computed:{sectionStyles:function(){var e=null;return this.section.backgroundMedia&&(e=this.section.backgroundMedia.id?'url("'.concat(this.section.backgroundMedia.url,'")'):"url('".concat(this.assetFilter(this.section.backgroundMedia.url),"')")),{"background-color":this.section.backgroundColor||"transparent","background-image":e,"background-size":"custom"==this.section.backgroundMediaMode?this.section.customFields.backgroundSize:this.section.backgroundMediaMode,"background-position":this.section.customFields.backgroundPosition,"background-repeat":this.section.customFields.backgroundRepeat}}},methods:{createdComponent:function(){this.section.backgroundMediaMode||(this.section.backgroundMediaMode="cover"),this.section.customFields||(this.section.customFields={backgroundSize:"auto 100%",backgroundPosition:"center",backgroundRepeat:"repeat"})}}});Shopware.Component.override("sw-cms-el-config-product-slider",{template:'{% block sw_cms_element_product_slider_config_content_title %}\n    {% parent %}\n\n    <sw-text-editor\n        :label="$tc(\'sw-cms.elements.productSlider.config.label.content\')"\n        :value="element.config.content.value"\n        :allow-inline-data-mapping="true"\n        sanitize-input\n        enable-transparent-background\n        @input="onInput"\n    />\n{% endblock %}\n',methods:{onInput:function(e){this.emitChanges(e)},emitChanges:function(e){e!==this.element.config.content.value&&(this.element.config.content.value=e,this.$emit("element-update",this.element))}}});t("ED6f");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==s(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===s(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Shopware.Component.override("sw-cms-el-product-slider",{template:'{% block sw_cms_element_product_slider_title %}\n    {# Text content #}\n    <div class="sw-cms-el-product-slider__text-content">\n        {% parent %}\n    \n        <div\n            v-if="element.config.content.value"\n            class="sw-cms-el-product-slider__text"\n            v-html="element.config.content.value"\n        ></div>\n    </div>\n{% endblock %}\n\n{% block sw_cms_element_product_slider_content %}\n    {# Navigation #}\n    <div class="sw-cms-el-product-slider__navigation-container">\n        {% block sw_cms_element_product_slider_arrow_left %}\n            <div\n                v-if="hasNavigation"\n                class="sw-cms-el-product-slider__navigation"\n            >\n                <sw-icon\n                    class="sw-cms-el-product-slider__navigation-button"\n                    name="regular-chevron-left"\n                    size="16"\n                />\n            </div>\n        {% endblock %}\n\n        {% block sw_cms_element_product_slider_arrow_right %}\n            <div\n                v-if="hasNavigation"\n                class="sw-cms-el-product-slider__navigation"\n            >\n                <sw-icon\n                    class="sw-cms-el-product-slider__navigation-button"\n                    name="regular-chevron-right"\n                    size="16"\n                />\n            </div>\n        {% endblock %}\n    </div>\n\n    <div class="sw-cms-el-product-slider__content">\n        {# Product boxes #}\n        {% block sw_cms_element_product_slider_product_holder %}\n            <div\n                ref="productHolder"\n                class="sw-cms-el-product-slider__product-holder"\n                :style="sliderBoxMinWidth"\n            >\n                <template v-if="!element.data || !element.data.products">\n                    {% block sw_cms_element_product_slider_demo_data %}\n                        <sw-cms-el-product-box\n                            v-for="index in sliderBoxLimit"\n                            :key="index"\n                            :element="demoProductElement"\n                        />\n                    {% endblock %}\n                </template>\n\n                <template v-else>\n                    {% block sw_cms_element_product_slider_products %}\n                        <sw-cms-el-product-box\n                            v-for="(product, index) in element.data.products"\n                            v-if="index < sliderBoxLimit"\n                            :key="product.id"\n                            :element="getProductEl(product)"\n                        />\n                    {% endblock %}\n                </template>\n            </div>\n        {% endblock %}\n    </div>\n{% endblock %}\n'});var d=Shopware.Service("cmsService").getCmsElementRegistry()["product-slider"],u=d.defaultConfig;d.defaultConfig=c(c({},u),{},{content:{source:"static",value:'\n          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \n            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \n            sed diam voluptua. \n          </p>\n          <div>\n            <a target="_self" href="#" class="btn btn-primary">Mehr erfahren</a>\n          </div>\n        '}});Shopware.Component.override("sw-cms-el-config-form",{template:'{% block sw_cms_el_form_config_content_form_title %}\n    {% parent %}\n\n    <sw-textarea-field\n        :label="$tc(\'sw-cms.elements.form.config.label.text\')"\n        v-model="element.config.text.value"\n    />\n{% endblock %}\n'});var m={template:'<div class="sw-cms-el-form-contact">\n    <h3\n        v-if="formSettings.title.value.length > 0"\n        class="sw-cms-el-form-headline"\n    >\n        {{ formSettings.title.value }}\n    </h3>\n\n    <p\n        v-if="formSettings.text.value"\n        class="sw-cms-el-form-text"\n    >\n        {{ formSettings.text.value }}\n    </p>\n\n    <div class="sw-cms-el-form_content">\n        <div class="sw-cms-el-form-contact-form-group three-items">\n            <sw-select-field :label="$tc(\'sw-cms.elements.form.element.label.salutation\')">\n                <option\n                    value=""\n                    disabled\n                    selected\n                >\n                    {{ $tc(\'sw-cms.elements.form.element.label.salutationUndisclosed\') }}\n                </option>\n            </sw-select-field>\n\n            <sw-text-field\n                :label="$tc(\'sw-cms.elements.form.element.label.firstName\')"\n                :value="$tc(\'sw-cms.elements.form.element.placeholder.firstName\')"\n            />\n\n            <sw-text-field\n                :label="$tc(\'sw-cms.elements.form.element.label.lastName\')"\n                :value="$tc(\'sw-cms.elements.form.element.placeholder.lastName\')"\n            />\n        </div>\n\n        <div class="sw-cms-el-form-contact-form-group two-items">\n            <sw-text-field\n                :label="$tc(\'sw-cms.elements.form.element.label.email\')"\n                :value="$tc(\'sw-cms.elements.form.element.placeholder.email\')"\n            />\n\n            <sw-text-field\n                :label="$tc(\'sw-cms.elements.form.element.label.phone\')"\n                :value="$tc(\'sw-cms.elements.form.element.placeholder.phone\')"\n            />\n        </div>\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.subject\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.subject\')"\n        />\n\n        <sw-textarea-field\n            :label="$tc(\'sw-cms.elements.form.element.label.message\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.message\')"\n        />\n\n        <div class="sw-cms-el-form__bottom">\n            <sw-checkbox-field :label="$tc(\'sw-cms.elements.form.element.helpText.privacy\')" />\n        \n            <div class="sw-cms-el-form__action">\n                {{ $tc(\'sw-cms.elements.form.element.label.send\') }}\n            </div>\n        </div>\n    </div>\n</div>\n',props:["formSettings"]},f={template:'<div class="sw-cms-el-form-newsletter">\n    <h3\n        v-if="formSettings.title.value.length > 0"\n        class="sw-cms-el-form-headline"\n    >\n        {{ formSettings.title.value }}\n    </h3>\n\n    <p\n        v-if="formSettings.text.value"\n        class="sw-cms-el-form-text"\n    >\n        {{ formSettings.text.value }}\n    </p>\n\n    <div class="sw-cms-el-form_content">\n        <div class="sw-cms-el-form-contact-form-group two-items">\n            <sw-text-field\n                :label="$tc(\'sw-cms.elements.form.element.label.firstName\')"\n                :value="$tc(\'sw-cms.elements.form.element.placeholder.firstName\')"\n            />\n    \n            <sw-text-field\n                :label="$tc(\'sw-cms.elements.form.element.label.lastName\')"\n                :value="$tc(\'sw-cms.elements.form.element.placeholder.lastName\')"\n            />\n        </div>\n    \n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.email\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.email\')"\n        />\n\n        <div class="sw-cms-el-form__bottom">\n            <sw-checkbox-field :label="$tc(\'sw-cms.elements.form.element.helpText.privacy\')" />\n        \n            <div class="sw-cms-el-form__action">\n                {{ $tc(\'sw-cms.elements.form.element.label.send\') }}\n            </div>\n        </div>\n    </div>\n</div>\n\n',props:["formSettings"]};t("KyxM");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==p(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!==p(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===p(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Shopware.Component.override("sw-cms-el-form",{components:{contact:m,newsletter:f}});var w=Shopware.Service("cmsService").getCmsElementRegistry().form,h=w.defaultConfig;w.defaultConfig=v(v({},h),{},{text:{source:"static",value:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}})},xI17:function(e,n,t){},xhIx:function(e,n,t){},xis7:function(e,n,t){},ydqr:function(e,n,t){"use strict";function o(e,n){for(var t=[],o={},r=0;r<n.length;r++){var l=n[r],s=l[0],i={id:e+":"+r,css:l[1],media:l[2],sourceMap:l[3]};o[s]?o[s].parts.push(i):t.push(o[s]={id:s,parts:[i]})}return t}t.r(n),t.d(n,"default",(function(){return p}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},s=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,c=0,a=!1,d=function(){},u=null,m="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,n,t,r){a=t,u=r||{};var s=o(e,n);return b(s),function(n){for(var t=[],r=0;r<s.length;r++){var i=s[r];(c=l[i.id]).refs--,t.push(c)}n?b(s=o(e,n)):s=[];for(r=0;r<t.length;r++){var c;if(0===(c=t[r]).refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete l[c.id]}}}}function b(e){for(var n=0;n<e.length;n++){var t=e[n],o=l[t.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](t.parts[r]);for(;r<t.parts.length;r++)o.parts.push(g(t.parts[r]));o.parts.length>t.parts.length&&(o.parts.length=t.parts.length)}else{var s=[];for(r=0;r<t.parts.length;r++)s.push(g(t.parts[r]));l[t.id]={id:t.id,refs:1,parts:s}}}}function v(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var n,t,o=document.querySelector("style["+m+'~="'+e.id+'"]');if(o){if(a)return d;o.parentNode.removeChild(o)}if(f){var r=c++;o=i||(i=v()),n=y.bind(null,o,r,!1),t=y.bind(null,o,r,!0)}else o=v(),n=_.bind(null,o),t=function(){o.parentNode.removeChild(o)};return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else t()}}var w,h=(w=[],function(e,n){return w[e]=n,w.filter(Boolean).join("\n")});function y(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=h(n,r);else{var l=document.createTextNode(r),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(l,s[n]):e.appendChild(l)}}function _(e,n){var t=n.css,o=n.media,r=n.sourceMap;if(o&&e.setAttribute("media",o),u.ssrId&&e.setAttribute(m,n.id),r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}});