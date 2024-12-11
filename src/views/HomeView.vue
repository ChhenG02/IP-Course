<template>
  <br>
        <ShowCase/>
    <div>
      <!-- Menu Section (Navigation Bar for Categories) -->
      <Menu 
        mode="categories" 
        @categorySelected="filterCategories" 
      />
  
      <!-- Categories Section -->
      <div class="categories">
        <Category
          v-for="(category, index) in filteredCategories"
          :key="index"
          :categoryImage="category.image"
          :categoryText="category.name"
          :itemsCount="category.productCount"
          :categoryColor="category.color"
        />
      </div>
  
      <br />
  
      <!-- Promotions Section -->
      <div class="promotions">
        <Promotion
          v-for="(promotion, index) in promotions"
          :key="index"
          :promotionTitle="promotion.title"
          :promotionImage="promotion.image"
          :promotionColor="promotion.color"
          :buttonColor="promotion.buttonColor"
          :promotionUrl="promotion.url"
        />
      </div>
  
      <br />
  
      <!-- Menu Section (Navigation Bar for Products) -->
      <Menu 
        mode="products" 
        @productSelected="filterProducts" 
      />
  
      <!-- Products Section -->
      <div class="products">
        <Product
          v-for="(product, index) in filteredProducts"
          :key="index"
          :productId="product.id"
        />
      </div>
    </div>
  </template>
  
  <script>
  // Import Components
  import Category from '@/components/Category.vue';
  import Promotion from '@/components/Promotion.vue';
  import Menu from '@/components/Menu.vue';
  import Product from '@/components/Product.vue';
  import NavBar from '@/components/NavBar.vue';
  import ShowCase from '@/components/ShowCase.vue';
  import { useProductStore } from '@/stores/productStore'; 
  
  export default {
    name: 'App',
  
    components: {
      Category,
      Promotion,
      Menu,
      Product,
      NavBar,
      ShowCase,
    },
  
    data() {
      return {
        selectedCategoryGroup: 'All', 
        selectedProductGroup: 'All', 
        filteredCategories: [], 
        filteredProducts: [], 
      };
    },
  
    computed: {
      promotions() {
        return this.productStore.promotions; 
      },
      allCategories() {
        return this.productStore.categories; 
      },
      allProducts() {
        return this.productStore.products; 
      },
    },
  
    methods: {
   
      filterCategories(group) {
        this.selectedCategoryGroup = group;
        this.filteredCategories =
          group === 'All'
            ? this.allCategories 
            : this.productStore.getCategoriesByGroup(group); 
      },
  
      filterProducts(group) {
        this.selectedProductGroup = group;
        this.filteredProducts =
          group === 'All'
            ? this.allProducts // Show all products
            : this.productStore.getProductsByGroup(group); // Filter by group
      },
    },
  
    mounted() {
      // Fetch categories, promotions, and products when the component is mounted
      this.productStore.fetchCategories().then(() => {
        this.filteredCategories = this.allCategories;
      });
      this.productStore.fetchPromotions();
      this.productStore.fetchProducts().then(() => {
        this.filteredProducts = this.allProducts; 
      });
    },
  
    setup() {
      const productStore = useProductStore();
      return { productStore };
    },
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap');
  
  body {
    font-family: 'Quicksand', sans-serif;
    margin: 1em;
  }
  
  .categories,
  .promotions,
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>
  