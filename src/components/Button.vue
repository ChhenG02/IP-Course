<template>
  <button :style="{ backgroundColor: buttonColor }" class="shop-bt">
    Shop Now <i class="fa fa-arrow-right"></i>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonColor: {
      type: String,
      default: '#3BB77E', // Default color (green)
    },
  },
};
</script>

<style scoped>
.shop-bt {
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.shop-bt:hover {
  background-color: #369b66; /* Darker shade for hover effect */
}

.shop-bt i {
  margin-left: 8px;
  font-weight: normal;
}
</style>
