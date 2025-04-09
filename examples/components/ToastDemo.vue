<script setup lang="ts">
import { ref } from 'vue';
import { useToast, ToastPosition } from '../../src';

const positions = ref<ToastPosition[]>([
  'top-right',
  'top-center',
  'top-left',
  'bottom-right',
  'bottom-center',
  'bottom-left'
]);

const selectedPosition = ref<ToastPosition>('top-right');
const message = ref('This is a notification message!');
const duration = ref(3000);

const toast = ref(useToast(selectedPosition.value));

const updatePosition = () => {
  // Re-create the toast instance with the new position
  toast.value = useToast(selectedPosition.value);
};

const showSuccessToast = () => {
  toast.value.success(message.value, { duration: duration.value });
};

const showErrorToast = () => {
  toast.value.error(message.value, { duration: duration.value });
};

const showInfoToast = () => {
  toast.value.info(message.value, { duration: duration.value });
};

const showWarningToast = () => {
  toast.value.warning(message.value, { duration: duration.value });
};
</script>

<template>
  <div class="card demo-card">
    <h2>Try it out</h2>
    
    <div class="form-group">
      <label for="message">Message:</label>
      <input 
        type="text" 
        id="message" 
        v-model="message" 
        placeholder="Enter notification message"
      />
    </div>
    
    <div class="form-group">
      <label for="duration">Duration (ms):</label>
      <input 
        type="number" 
        id="duration" 
        v-model="duration" 
        min="500" 
        step="500"
      />
    </div>
    
    <div class="form-group">
      <label for="position">Position:</label>
      <select 
        id="position" 
        v-model="selectedPosition" 
        @change="updatePosition"
      >
        <option v-for="pos in positions" :key="pos" :value="pos">
          {{ pos }}
        </option>
      </select>
    </div>
    
    <div class="btn-group">
      <button @click="showSuccessToast" class="btn-success">Success</button>
      <button @click="showErrorToast" class="btn-error">Error</button>
      <button @click="showInfoToast" class="btn-info">Info</button>
      <button @click="showWarningToast" class="btn-warning">Warning</button>
    </div>
    
    <div class="code-snippet">
      <pre><code>// Example usage
import { useToast } from 'vue-toasty-notif';

const toast = useToast('{{ selectedPosition }}');
toast.success('{{ message }}', { duration: {{ duration }} });</code></pre>
    </div>
  </div>
</template>

<style scoped>
.demo-card {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input, select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-family: inherit;
}

.code-snippet {
  background-color: #1e293b;
  border-radius: 0.375rem;
  padding: 1rem;
  overflow-x: auto;
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
</style>