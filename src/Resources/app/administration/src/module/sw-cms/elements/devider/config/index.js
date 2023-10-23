import template from './sw-cms-el-config-devider.html.twig';

const { Component, Mixin } = Shopware;
const { Criteria, EntityCollection } = Shopware.Data;

Component.register('sw-cms-el-config-devider', {
    template,

    inject: [
        'repositoryFactory',
    ],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },
    
    data() {
        return {
            categoryCollection: [],
        };
    },

    computed: {
        entityFilter() {
            const criteria = new Criteria(1, 25);

            criteria.addAssociation('options.group');

            criteria.addFilter(
                Criteria.multi(
                    'OR',
                    [
                        Criteria.equals('product.childCount', 0),
                        Criteria.equals('product.childCount', null),
                    ],
                ),
            );

            return criteria;
        },

        categoryRepository() {
            return this.repositoryFactory.create('category');
        },
    },

    methods: {
        createdComponent() {
            this.initElementConfig('devider');
            this.initElementData('devider');

            this.setCategoryCollection()
        },

        async setCategoryCollection() {
            const linkConfig = this.element.config.linkConfig.value

            if (linkConfig.type == 'navigation' && linkConfig.target)
                this.categoryCollection = await this.getCategoryCollection(linkConfig.target);
            else
                this.categoryCollection = this.getEmptyCategoryCollection();
        },

        getCategoryCollection(categoryId) {
            const categoryCriteria = (new Criteria(1, 25)).addFilter(Criteria.equals('id', categoryId));
            return this.categoryRepository.search(categoryCriteria);
        },

        getEmptyCategoryCollection() {
            return new EntityCollection(
                this.categoryRepository.route,
                this.categoryRepository.entityName,
                Shopware.Context.api,
            );
        },

        replaceCategorySelection(category) {
            this.element.config.linkConfig.value.target = category.id;
        },

        removeCategorySelection() {
            this.element.config.linkConfig.value.target = '';
        },
    }
});