<?php

namespace ChojuTheme\Service;


use Shopware\Core\Content\Category\CategoryEntity;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class CategoryExtension extends AbstractExtension
{
    /**
     * @var EntityRepository
     */
    private $categoryRepository;

    public function __construct(EntityRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }
    public function getFunctions(): array
    {
        return [
            new TwigFunction('getCategoryById', $this->getCategoryById(...)),
        ];
    }

    public function getCategoryById(string $id, Context $context): ?CategoryEntity
    {
        if (empty($id)) {
            return null;
        }

        $criteria = new Criteria([$id]);

        /** @var CategoryEntity $category */
        $category = $this->categoryRepository
            ->search($criteria, $context)
            ->first();

        return $category;
    }
}