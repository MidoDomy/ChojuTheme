import './sw-cms-section-config';
import './sw-cms-section.scss';

const { Component } = Shopware;

Component.override('sw-cms-section', {
  computed: {
    sectionStyles() {
      let backgroundMedia = null;

      if (this.section.backgroundMedia) {
          if (this.section.backgroundMedia.id) {
              backgroundMedia = `url("${this.section.backgroundMedia.url}")`;
          } else {
              backgroundMedia = `url('${this.assetFilter(this.section.backgroundMedia.url)}')`;
          }
      }

      return {
          'background-color': this.section.backgroundColor || 'transparent',
          'background-image': backgroundMedia,
          'background-size': this.section.backgroundMediaMode == 'custom' ? this.section.customFields.backgroundSize : this.section.backgroundMediaMode,
          'background-position': this.section.customFields.backgroundPosition,
          'background-repeat': this.section.customFields.backgroundRepeat
      };
    },
  },

  methods: {
    createdComponent() {
        if (!this.section.backgroundMediaMode) {
            this.section.backgroundMediaMode = 'cover';
        }
        if(!this.section.customFields) {
            this.section.customFields = {
                backgroundSize: 'auto 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',
            }
        }
    },
  }
});
