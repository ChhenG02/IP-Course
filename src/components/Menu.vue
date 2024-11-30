<template>
    <div class="menu-container">
      <!-- Title and Navbar -->
      <div class="navbar-container">
        <p class="m-title">{{ mode === 'categories' ? 'Featured Categories' : 'Popular Products' }}</p>
        <nav class="navbar">
          <ul class="nav-list">
            <li 
              @click="selectGroup('All')" 
              :class="{ active: selectedGroupName === 'All' }"
            >
              All
            </li>
            <li 
              v-for="group in unifiedGroups" 
              :key="group" 
              @click="selectGroup(group)" 
              :class="{ active: selectedGroupName === group }"
            >
              {{ group }}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  import { computed, ref } from "vue";
  import { useProductStore } from "@/stores/productStore";
  
  export default {
    name: "Menu",
    emits: ["categorySelected", "productSelected"],
  
    props: {
      mode: {
        type: String,
        default: "categories", 
      },
    },
  
    setup(props, { emit }) {
      const productStore = useProductStore();
      const selectedGroupName = ref("All");
  
      // Unified group list for both categories and products
      const unifiedGroups = computed(() => [
        "Milks & Diaries",
        "Coffees & Teas",
        "Pet Foods",
        "Meats",
        "Vegetables",
        "Fruits",
      ]);
  
      // Method to handle group selection
      const selectGroup = (groupName) => {
        selectedGroupName.value = groupName; 
        productStore.setSelectedGroup(groupName); 
        emit(
          props.mode === "categories" ? "categorySelected" : "productSelected",
          groupName
        ); 
      };
  
      return {
        unifiedGroups,
        selectedGroupName,
        selectGroup,
      };
    },
  };
  </script>
  
  <style scoped>
  .menu-container {
    width: 100%;
    padding: 1rem;
  }
  
  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
  }
  
  .m-title {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
  }
  
  .nav-list {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .nav-list li {
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    color: #333;
  }
  
  .nav-list li.active {
    font-weight: 700;
    color: #007bff; 
  }
  </style>
  