<script setup lang="ts">
  const localePath = useLocalePath();

  const props = defineProps({
    to: {
      type: String,
      required: true,
    },
    light: {
      type: Boolean,
      default: false,
    },
  });
  const linkClass = computed(() => {
    return props.light
      ? 'text-white hover:text-gray-300 hover:underline'
      : 'text-blue-500 hover:text-blue-400 hover:underline';
  });
</script>

<template>
  <NuxtLink :to="localePath(props.to)" :class="linkClass">
    <slot />
  </NuxtLink>
</template>
