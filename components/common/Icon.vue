<script setup>
  import { computed } from 'vue';
  import * as OutlineIcons from '@heroicons/vue/24/outline';

  const props = defineProps({
    name: {
      type: String,
      default: 'home',
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value),
    },
    spinning: {
      type: Boolean,
      default: false,
    },
  });

  const attrs = useAttrs();

  const toPascalCase = (str) => {
    return str.replace(/(^\w|-\w)/g, clearAndUpper);
  };

  const clearAndUpper = (text) => {
    return text.replace(/-/, '').toUpperCase();
  };

  const iconComponent = computed(() => {
    const iconName = `${toPascalCase(props.name)}Icon`;
    return OutlineIcons[iconName] || null;
  });

  const iconSizeClass = computed(() => {
    switch (props.size) {
      case 'sm':
        return 'w-5 h-5';
      case 'lg':
        return 'w-8 h-8';
      case 'md':
      default:
        return 'w-6 h-6';
    }
  });

  const spinningClass = computed(() => {
    return props.spinning ? 'animate-spin' : '';
  });
</script>

<template>
  <component
    :is="iconComponent"
    :class="[iconSizeClass, spinningClass]"
    v-bind="attrs"
  />
</template>
