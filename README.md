# Vue Simple Toasts

A lightweight, customizable toast notification system for Vue 3 applications with TypeScript support.

## Installation

```bash
npm install vue-simple-toasts
# or
yarn add vue-simple-toasts
```

## Usage

Import and use the `useToast` composable in your Vue components:

```vue
<script setup lang="ts">
import { useToast } from 'vue-simple-toasts';

// Create a toast instance
const toast = useToast('top-right');

const showToast = () => {
  toast.success('Operation successful!');
};
</script>

<template>
  <button @click="showToast">Show Toast</button>
</template>
```

## API

### useToast

```typescript
const toast = useToast(position?: ToastPosition);
```

Position options:
- `'top-right'` (default)
- `'top-left'`
- `'bottom-right'`
- `'bottom-left'`
- `'top-center'`
- `'bottom-center'`

The `useToast` composable returns an object with the following methods:
- `success(message, options)`: Display a success toast
- `error(message, options)`: Display an error toast
- `info(message, options)`: Display an info toast
- `warning(message, options)`: Display a warning toast
- `remove(id)`: Manually remove a toast by ID

Options:
- `duration`: Time in milliseconds before the toast disappears (default: 3000)

## TypeScript Support

This package includes TypeScript definitions:

```typescript
import { ToastOptions, ToastPosition } from 'vue-simple-toasts';

// Example using types
const customOptions: ToastOptions = {
  duration: 5000,
  type: 'success'
};

const position: ToastPosition = 'bottom-center';
```

## License

MIT
