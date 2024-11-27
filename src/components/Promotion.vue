<template>
  <div class="ban1" :style="{ backgroundColor: promotionColor }">
    <div class="sub-ban2">
      <div class="sub-ban1">
        <div class="sub-text">
          <p>{{ promotionTitle }}</p>
        </div>
        <!-- Pass the promotion object to the shopNow method -->
        <Button :buttonColor="buttonColor" @click="shopNow(promotion)" />
      </div>
    </div>
    <img :src="promotionImage" alt="promotion image" />
  </div>
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
      // Example of a promotion object, you can also pass this via props
      promotion: {
        title: this.promotionTitle,
        color: this.promotionColor,
        image: this.promotionImage,
      },
    };
  },
  methods: {
    // Method to handle the click event and accept the promotion object as an argument
    shopNow(promotion) {
      alert("Let's shop: " + promotion.title); // This will show the title of the promotion
      // You can add more actions here, like redirecting or performing other logic
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
</style>
