<script setup lang="ts">
// No props or emits needed
</script>

<template>
  <header>
    <h1>Vue Toasty</h1>
    <p class="tagline">
      A lightweight, customizable toast notification system for Vue 3 applications
    </p>
    <div class="actions">
      <a href="https://github.com/maazil/vue-toasty-notif" target="_blank" class="github-link">
        GitHub
      </a>
      <a href="https://www.npmjs.com/package/vue-toasty-notif" target="_blank" class="npm-link">
        npm
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 0;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.tagline {
  font-size: 1.2rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.actions a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

.github-link {
  background-color: #24292e;
  color: white;
}

.npm-link {
  background-color: #cb3837;
  color: white;
}

.actions a:hover {
  opacity: 0.9;
}
</style>