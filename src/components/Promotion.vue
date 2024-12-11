<template>
   <router-link to="/productDetail" class="promotion-link">
    <div class="ban1" :style="{ backgroundColor: promotionColor }">
      <div class="sub-ban2">
        <div class="sub-ban1">
          <div class="sub-text">
            <p>{{ promotionTitle }}</p>
          </div>
          <!-- Button for additional interaction -->
          <Button :buttonColor="buttonColor" @click="shopNow(promotion)" />
        </div>
      </div>
      <img :src="promotionImage" alt="promotion image" />
    </div>
  </router-link>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Promotion',
  components: {
    Button,
  },
  props: {
    promotionTitle: String,
    promotionColor: String,
    promotionImage: String,
    buttonColor: String,
  },
  data() {
    return {
      promotion: {
        title: this.promotionTitle,
        color: this.promotionColor,
        image: this.promotionImage,
      },
    };
  },
  methods: {
    shopNow(promotion) {
     // alert("Let's shop: " + promotion.title);
    },
  },
};
</script>

<style scoped>
.ban1 {
  padding: 20px;
  width: 512px;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  border: rgb(220, 209, 209) 1px solid;
  border-radius: 5px;
}

.ban1 img {
  object-fit: contain;
}

.sub-ban1 {
  margin-top: 20%;
  margin-left: 1em;
  align-items: start;
  display: flex;
  flex-direction: column;
}

.sub-text {
  max-width: 100%;
  max-height: 60%;
  object-fit: contain;
}

.sub-text p {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.promotion-link {
  text-decoration: none;
  display: block;
}
</style>