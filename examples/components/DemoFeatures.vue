<script setup lang="ts">
const features = [
  {
    title: "Multiple Toast Types",
    description: "Success, error, info, and warning toast notifications with appropriate styling"
  },
  {
    title: "Configurable Positioning",
    description: "Six different positions for displaying toasts: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right"
  },
  {
    title: "Customizable Duration",
    description: "Set how long toast notifications stay visible before auto-dismissing"
  },
  {
    title: "TypeScript Support",
    description: "Full TypeScript support with type definitions for all APIs"
  },
  {
    title: "Vue 3 Composable API",
    description: "Modern Composition API with useToast() composable function"
  },
  {
    title: "Lightweight",
    description: "Minimal dependencies and small bundle size"
  }
];
</script>

<template>
  <section class="features-section">
    <h2>Features</h2>
    <div class="features-grid">
      <div v-for="(feature, index) in features" :key="index" class="feature-card">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  margin: 3rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #4b5563;
  margin-bottom: 0;
}
</style>