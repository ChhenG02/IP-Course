<template>
   <router-link to="/pageHeader" class="category-link">
    <div class="cat1" :style="{ backgroundColor: categoryColor }">
      <img :src="categoryImage" alt="category image" />
      <p class="title">{{ categoryText }}</p>
      <p class="subtitle">{{ itemsCount }} items</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    categoryImage: String,
    categoryText: String,
    itemsCount: Number,
    categoryColor: String,
  },
};
</script>

<style>
.cat1 {
  height: 150px;
  width: 120px;
  border-radius: 5px;
  border: rgb(220, 209, 209) 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}


.category-link {
  text-decoration: none; 
  display: block;
}

.cat1 img {
  margin-bottom: 8px;
  max-width: 70%;
  max-height: 50%;
  object-fit: contain;
}

.cat1 .title {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  margin-top: 1em;
}

.cat1 .subtitle {
  font-size: 12px;
  color: #555;
  margin: 4px 0 0;
}
</style>
