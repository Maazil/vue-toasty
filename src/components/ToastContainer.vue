<script setup lang="ts">
import { ref, computed } from 'vue';
import Toast from './Toast.vue';
import type { Toast as ToastType, ToastPosition } from '../types';

const props = defineProps<{
  position?: ToastPosition;
}>();

const toasts = ref<ToastType[]>([]);

const positionClass = computed(() => {
  return `toast-container--${props.position || 'top-right'}`;
});

const addToast = (toast: Omit<ToastType, 'id'>) => {
  const id = Date.now();
  toasts.value.push({
    ...toast,
    id
  });
  return id;
};

const removeToast = (id: number) => {
  toasts.value = toasts.value.filter(toast => toast.id !== id);
};

// Expose methods to parent
defineExpose({
  addToast,
  removeToast
});
</script>

<template>
  <div class="toast-container" :class="positionClass" aria-live="polite" aria-atomic="true">
    <Toast
      v-for="toast in toasts"
      :key="toast.id"
      v-bind="toast"
      @close="removeToast"
    />
  </div>
</template>

<style scoped>
.toast-container {
  position: fixed;
  z-index: 9999;
}

.toast-container--top-right {
  top: 20px;
  right: 20px;
}

.toast-container--top-left {
  top: 20px;
  left: 20px;
}

.toast-container--bottom-right {
  bottom: 20px;
  right: 20px;
}

.toast-container--bottom-left {
  bottom: 20px;
  left: 20px;
}

.toast-container--top-center {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.toast-container--bottom-center {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>