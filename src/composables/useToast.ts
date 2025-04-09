import { markRaw, createApp, h } from 'vue';
import ToastContainer from '../components/ToastContainer.vue';
import type { ToastOptions, ToastPosition } from '../types';

interface ToastApi {
  success: (message: string, options?: ToastOptions) => number;
  error: (message: string, options?: ToastOptions) => number;
  info: (message: string, options?: ToastOptions) => number;
  warning: (message: string, options?: ToastOptions) => number;
  remove: (id: number) => void;
}

let containerInstance: any = null;

const createContainer = (position: ToastPosition = 'top-right') => {
  // Create a div to mount the toast container
  const containerDiv = document.createElement('div');
  document.body.appendChild(containerDiv);
  
  // Create the container app
  const app = createApp({
    render() {
      return h(ToastContainer, { position, ref: 'container' });
    }
  });
  
  const instance = app.mount(containerDiv);
  return markRaw(instance);
};

export const useToast = (position?: ToastPosition): ToastApi => {
  // Create the container if it doesn't exist
  if (!containerInstance) {
    containerInstance = createContainer(position);
  }
  
  const addToast = (message: string, options: ToastOptions = {}) => {
    return containerInstance.$refs.container.addToast({
      message,
      ...options
    });
  };
  
  const removeToast = (id: number) => {
    containerInstance.$refs.container.removeToast(id);
  };
  
  return {
    success: (message: string, options: ToastOptions = {}) => 
      addToast(message, { ...options, type: 'success' }),
    error: (message: string, options: ToastOptions = {}) => 
      addToast(message, { ...options, type: 'error' }),
    info: (message: string, options: ToastOptions = {}) => 
      addToast(message, { ...options, type: 'info' }),
    warning: (message: string, options: ToastOptions = {}) => 
      addToast(message, { ...options, type: 'warning' }),
    remove: removeToast
  };
};