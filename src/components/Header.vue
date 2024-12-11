<template>
  <nav class="header">
    <h1>Header</h1>
    <p>
      <router-link 
        to="/page1" 
        class="router-link" 
        active-class="active"
        @click.native="setPage(1)"
      >
        Page 1
      </router-link>
      <router-link 
        to="/page2" 
        class="router-link" 
        active-class="active"
        @click.native="setPage(2)"
      >
        Page 2
      </router-link>
      <router-link 
        to="/page3" 
        class="router-link" 
        active-class="active"
        @click.native="setPage(3)"
      >
        Page 3
      </router-link>
    </p>
  </nav>
</template>

<script>
export default {
  name: "Header",
  methods: {
    setPage(pageNumber) {
      this.$emit('page-changed', pageNumber);
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: teal; 
  color: white;
}

.header p {
  display: flex;
  gap: 1.5rem; 
  margin: 0;
  padding: 0;
  font-size: 1.5em;
}

.router-link {
  text-decoration: none; 
  color: white; 
  font-size: 1rem;
  background: none; 
  transition: color 0.3s ease;
}

.router-link:hover {
  color: #ff6961; 
}

.router-link.active {
  color: #ff6961; 
  font-weight: bold;
}
</style>
