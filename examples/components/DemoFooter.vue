<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="usage-section">
      <h2>Installation</h2>
      <div class="code-snippet">
        <pre><code>npm install vue-toasty-notif
# or
yarn add vue-toasty-notif</code></pre>
      </div>
    </div>
    
    <p class="copyright">
      &copy; {{ currentYear }} Vue Toasty. MIT License.
    </p>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.usage-section {
  margin-bottom: 2rem;
}

.code-snippet {
  background-color: #1e293b;
  border-radius: 0.375rem;
  padding: 1rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.code-snippet pre {
  margin: 0;
}

.code-snippet code {
  color: #e2e8f0;
  background-color: transparent;
  padding: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
}

.copyright {
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
}
</style>