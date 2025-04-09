<script setup lang="ts">
import { useToast } from '../src';
import ToastDemo from './components/ToastDemo.vue';
import DemoHeader from './components/DemoHeader.vue';
import DemoFeatures from './components/DemoFeatures.vue';
import DemoFooter from './components/DemoFooter.vue';
</script>

<template>
  <div class="demo-container">
    <DemoHeader />
    <ToastDemo />
    <DemoFeatures />
    <DemoFooter />
  </div>
</template>

<style>
:root {
  --primary-color: #6366f1;
  --success-color: #10b981;
  --error-color: #ef4444;
  --warning-color: #f59e0b;
  --info-color: #3b82f6;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9fafb;
}

.demo-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

h1, h2, h3 {
  color: #111827;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

button {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  border: none;
  background-color: var(--primary-color);
  color: white;
  transition: all 0.2s;
}

button:hover {
  opacity: 0.9;
}

.btn-success {
  background-color: var(--success-color);
}

.btn-error {
  background-color: var(--error-color);
}

.btn-warning {
  background-color: var(--warning-color);
}

.btn-info {
  background-color: var(--info-color);
}

.btn-group {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

code {
  background-color: #f1f5f9;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
}

.card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>