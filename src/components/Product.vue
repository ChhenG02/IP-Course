<template>
  <router-link to="/productDetail" class="product-link">
    <div class="product-card">
      <!-- Ribbon for promotion -->
      <div class="ribbon" v-if="promotionPercentage > 0">
        -{{ promotionPercentage }}%
      </div>
  
      <!-- Product Image -->
      <img :src="image" :alt="name" class="product-image" />
  
      <!-- Product Details -->
      <div class="product-details">
        <h4 class="product-brand">{{ group }}</h4>
        <h3 class="product-name">{{ name }}</h3>
  
        <!-- Rating -->
        <div class="rating">
          <span
            class="filled"
            v-for="star in Math.floor(rating)"
            :key="'star-' + star"
            >★</span
          >
          <span
            class="empty"
            v-for="empty in 5 - Math.floor(rating)"
            :key="'empty-' + empty"
            >☆</span>
          <span class="rating-value">({{ rating.toFixed(1) }})</span>
        </div>
  
        <!-- Size -->
        <p class="product-size">{{ size }}</p>
  
        <!-- Price and Add to Cart Section -->
        <div class="price-and-cart">
          <div class="price-section">
            <span class="price">${{ discountedPrice }}</span>
            <span
              class="original-price"
              v-if="promotionPercentage > 0"
              >${{ price }}</span
            >
          </div>
          <button class="add-to-cart" @click="addToCart">
            Add <span class="plus">+</span>
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { useProductStore } from "../stores/productStore";
import { computed } from "vue";

export default {
  name: "Product",
  props: {
    productId: { type: Number, required: true },
  },
  setup(props) {
    const productStore = useProductStore();

    // Fetch product details based on the given productId
    const product = computed(() =>
      productStore.products.find((p) => p.id === props.productId)
    );

    // Computed properties for product fields
    const name = computed(() => product.value?.name || "Product Name");
    const rating = computed(() => product.value?.rating || 0);
    const size = computed(() => product.value?.size || "N/A");
    const image = computed(
      () =>
        product.value?.image ||
        "https://via.placeholder.com/250?text=No+Image+Available"
    );
    const price = computed(() => product.value?.price || 0);
    const promotionPercentage = computed(
      () => product.value?.promotionAsPercentage || 0
    );
    const discountedPrice = computed(() =>
      promotionPercentage.value > 0
        ? (price.value * (1 - promotionPercentage.value / 100)).toFixed(2)
        : price.value
    );
    const group = computed(() => product.value?.group || "Unknown");

    const addToCart = () => {
      console.log(`Added ${name.value} to the cart.`);
    };

    return {
      name,
      rating,
      size,
      image,
      price,
      promotionPercentage,
      discountedPrice,
      group,
      addToCart,
    };
  },
};
</script>

<style scoped>
.product-card {
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  background: #fff;
}

/* Ribbon styling */
.ribbon {
  position: absolute;
  top: 10px;
  left: 0;
  background: #ff6347;
  color: white;
  padding: 5px 15px;
  font-size: 14px;
  font-weight: bold;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.product-details {
  margin-top: 1rem;
}

.product-brand {
  font-size: 12px;
  color: #888;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
}

.rating {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #ffc107;
}

.rating .filled {
  color: #ffc107;
}

.rating .rating-value {
  color: #555;
  font-size: 12px;
}

.product-size {
  font-size: 12px;
  color: #555;
  margin: 5px 0;
}

/* Price and Add to Cart Section */
.price-and-cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.price-section {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.price {
  color: #27ae60;
  font-size: 18px;
  font-weight: bold;
}

.original-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.add-to-cart {
  padding: 8px 15px;
  background: #e0f8ea;
  color: #66a489;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
}

.add-to-cart:hover {
  background: #219150;
}

.add-to-cart .plus {
  font-weight: bold;
}

/* Remove default router-link styles */
.product-link {
  text-decoration: none;
  display: block;
}
</style>
