<template>
  <div class="app-container">
    <div class="menu-container">
      <aside class="menu-sidebar">
        <h3>Menu</h3>
        <ul>
          <li
            v-for="section in sections"
            :key="section.id"
            :class="{ active: section.id === activeSection }"
            @click="setActiveSection(section.id)"
          >
            {{ section.title }}
          </li>
        </ul>
      </aside>
      <main class="menu-content">
        <h1>Welcome to Page {{ page }}</h1>
        <hr />
        <p v-if="sectionClicked">This is Section {{ activeSection }} of Page {{ page }}</p>
        
        <p v-if="displayMessage">{{ displayMessage }}</p>

        <div class="input-container">
          <label for="message">Message:</label>
          <input type="text" v-model="message" id="message" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      sections: [
        { id: 1, title: "Section 1" },
        { id: 2, title: "Section 2" },
        { id: 3, title: "Section 3" },
        { id: 4, title: "Section 4" },
      ],
      activeSection: null,
      message: "",
      displayMessage: "",
      sectionClicked: false, 
    };
  },
  watch: {
    page(newPage, oldPage) {
      if (this.message) {
        this.displayMessage = `Message from Page ${oldPage}: ${this.message}`;
      }
      this.message = "";
    },
  },
  methods: {
    setActiveSection(id) {
      this.activeSection = id;
      this.displayMessage = ""; 
      this.sectionClicked = true; 
    },
  },
};
</script>



<style scoped>
.menu-container {
  display: flex;
  height: 100vh;
  background-color: #121212;
  color: white;
}

.menu-sidebar {
  width: 20%;
  background-color: #1f1f1f;
  padding: 1rem;
  border-right: 1px solid #333;
}

.menu-sidebar h3 {
  margin: 0;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.2rem;
}

.menu-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-sidebar li {
  padding: 0.75rem;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.menu-sidebar li:hover {
  background-color: #2c3e50;
}

.menu-sidebar li.active {
  background-color: #34495e;
  font-weight: bold;
}

.menu-content {
  flex-grow: 1;
  padding: 2rem;
  text-align: center;
}

.menu-content h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.menu-content hr {
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid #555;
}

.menu-content p {
  font-size: 1.2rem;
}

.input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}

.input-container label {
  margin-right: 1rem;
  font-size: 1rem;
}

.input-container input {
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
}
</style>