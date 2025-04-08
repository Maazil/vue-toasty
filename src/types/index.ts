export type ToastType = 'success' | 'error' | 'info' | 'warning';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastOptions {
  type?: ToastType;
  duration?: number;
}

export interface Toast extends ToastOptions {
  id: number;
  message: string;
}