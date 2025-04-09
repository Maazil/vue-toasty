<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import type { Toast as ToastType } from '../types';

const props = defineProps<{
  id: number;
  message: string;
  type?: ToastType['type'];
  duration?: number;
}>();

const emit = defineEmits<{
  (e: 'close', id: number): void;
}>();

let timer: number | undefined;

onMounted(() => {
  if (props.duration) {
    timer = window.setTimeout(() => {
      emit('close', props.id);
    }, props.duration);
  }
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});

const handleClose = () => {
  emit('close', props.id);
};
</script>

<template>
  <div 
    class="toast" 
    :class="[`toast--${type || 'info'}`]"
  >
    <span>{{ message }}</span>
    <button 
      class="toast__close" 
      @click="handleClose"
      aria-label="Close toast"
    >
    ✖
    </button>
  </div>
</template>

<style scoped>
.toast {
  padding: 12px 16px;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
  max-width: 350px;
}

.toast--success {
  background-color: #4caf50;
}

.toast--error {
  background-color: #f44336;
}

.toast--info {
  background-color: #2196f3;
}

.toast--warning {
  background-color: #ff9800;
}

.toast__close {
  background: transparent;
  border: none;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;
}
</style>