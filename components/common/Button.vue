<script setup lang="ts">
  const props = defineProps({
    color: {
      type: String,
      default: 'default', // default, primary, info, success, warning, error
    },
    variant: {
      type: String,
      default: 'solid', // solid, text, outline, soft
    },
    size: {
      type: String,
      default: 'md', // xs, sm, md, lg, xl
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  });

  const buttonClass = computed(() => {
    const baseClass =
      'inline-flex items-center justify-center font-medium transition-colors rounded focus:outline-none tracking-wider';

    const getVariantClasses = (
      color: string,
      variant: string,
      disabled: boolean,
      loading: boolean
    ): string => {
      const baseColorClasses: Record<string, Record<string, string>> = {
        default: {
          solid:
            disabled || loading
              ? 'text-white bg-gray-600'
              : 'text-white bg-gray-600 hover:bg-gray-700',
          text:
            disabled || loading
              ? 'text-gray-600'
              : 'text-gray-600 hover:text-gray-700',
          outline:
            disabled || loading
              ? 'text-gray-600 bg-gray-600 bg-opacity-0'
              : 'text-gray-600 bg-gray-600 bg-opacity-0 hover:bg-opacity-10',
          soft:
            disabled || loading
              ? 'text-gray-600 bg-gray-600 bg-opacity-10'
              : 'text-gray-600 bg-gray-600 bg-opacity-10 hover:bg-opacity-20',
        },
        primary: {
          solid:
            disabled || loading
              ? 'text-white bg-blue-500'
              : 'text-white bg-blue-500 hover:bg-blue-600',
          text:
            disabled || loading
              ? 'text-blue-600'
              : 'text-blue-600 hover:text-blue-700',
          outline:
            disabled || loading
              ? 'text-blue-600 bg-blue-500 bg-opacity-0'
              : 'text-blue-600 bg-blue-500 bg-opacity-0 hover:bg-opacity-10',
          soft:
            disabled || loading
              ? 'text-blue-600 bg-blue-500 bg-opacity-10'
              : 'text-blue-600 bg-blue-500 bg-opacity-10 hover:bg-opacity-20',
        },
        info: {
          solid:
            disabled || loading
              ? 'text-white bg-blue-500'
              : 'text-white bg-blue-500 hover:bg-blue-600',
          text:
            disabled || loading
              ? 'text-blue-600'
              : 'text-blue-600 hover:text-blue-700',
          outline:
            disabled || loading
              ? 'text-blue-600 bg-blue-500 bg-opacity-0'
              : 'text-blue-600 bg-blue-500 bg-opacity-0 hover:bg-opacity-10',
          soft:
            disabled || loading
              ? 'text-blue-600 bg-blue-500 bg-opacity-10'
              : 'text-blue-600 bg-blue-500 bg-opacity-10 hover:bg-opacity-20',
        },
        success: {
          solid:
            disabled || loading
              ? 'text-white bg-green-500'
              : 'text-white bg-green-500 hover:bg-green-600',
          text:
            disabled || loading
              ? 'text-green-600'
              : 'text-green-600 hover:text-green-700',
          outline:
            disabled || loading
              ? 'text-green-600 bg-green-500 bg-opacity-0'
              : 'text-green-600 bg-green-500 bg-opacity-0 hover:bg-opacity-10',
          soft:
            disabled || loading
              ? 'text-green-600 bg-green-500 bg-opacity-10'
              : 'text-green-600 bg-green-500 bg-opacity-10 hover:bg-opacity-20',
        },
        warning: {
          solid:
            disabled || loading
              ? 'text-white bg-yellow-500'
              : 'text-white bg-yellow-500 hover:bg-yellow-600',
          text:
            disabled || loading
              ? 'text-yellow-600'
              : 'text-yellow-600 hover:text-yellow-700',
          outline:
            disabled || loading
              ? 'text-yellow-600 bg-yellow-500 bg-opacity-0'
              : 'text-yellow-600 bg-yellow-500 bg-opacity-0 hover:bg-opacity-10',
          soft:
            disabled || loading
              ? 'text-yellow-600 bg-yellow-500 bg-opacity-10'
              : 'text-yellow-600 bg-yellow-500 bg-opacity-10 hover:bg-opacity-20',
        },
        error: {
          solid:
            disabled || loading
              ? 'text-white bg-red-500'
              : 'text-white bg-red-500 hover:bg-red-600',
          text:
            disabled || loading
              ? 'text-red-600'
              : 'text-red-600 hover:text-red-700',
          outline:
            disabled || loading
              ? 'text-red-600 bg-red-500 bg-opacity-0'
              : 'text-red-600 bg-red-500 bg-opacity-0 hover:bg-opacity-10',
          soft:
            disabled || loading
              ? 'text-red-600 bg-red-500 bg-opacity-10'
              : 'text-red-600 bg-red-500 bg-opacity-10 hover:bg-opacity-20',
        },
      };

      return baseColorClasses[color][variant] || '';
    };

    const colorClasses: Record<string, string> = {
      default: getVariantClasses(
        'default',
        props.variant,
        props.disabled,
        props.loading
      ),
      primary: getVariantClasses(
        'primary',
        props.variant,
        props.disabled,
        props.loading
      ),
      info: getVariantClasses(
        'info',
        props.variant,
        props.disabled,
        props.loading
      ),
      success: getVariantClasses(
        'success',
        props.variant,
        props.disabled,
        props.loading
      ),
      warning: getVariantClasses(
        'warning',
        props.variant,
        props.disabled,
        props.loading
      ),
      error: getVariantClasses(
        'error',
        props.variant,
        props.disabled,
        props.loading
      ),
    };

    const variantClasses: Record<string, string> = {
      solid: '',
      text: 'bg-transparent',
      outline: 'border border-current',
      soft: 'bg-opacity-10',
    };

    const sizeClasses: Record<string, string> = {
      xs: props.loading ? 'pl-1.5 pr-2.5 h-7 text-xs' : 'px-2.5 h-7 text-xs',
      sm: props.loading ? 'pl-2 pr-3 h-8 text-sm' : 'px-3 h-8 text-sm',
      md: props.loading ? 'pl-2.5 pr-4 h-9 text-base' : 'px-4 h-9 text-base',
      lg: props.loading ? 'pl-3 pr-5 h-11 text-base' : 'px-5 h-11 text-base',
      xl: props.loading ? 'pl-3 pr-6 h-12 text-lg' : 'px-6 h-12 text-lg',
    };

    const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : '';
    const loadingClass = props.loading ? 'opacity-80 cursor-not-allowed' : '';
    const blockClass = props.block ? 'w-full' : '';

    return [
      baseClass,
      variantClasses[props.variant] || variantClasses['solid'],
      colorClasses[props.color] || colorClasses['default'],
      sizeClasses[props.size] || sizeClasses['md'],
      loadingClass,
      disabledClass,
      blockClass,
    ].join(' ');
  });

  const iconSize = computed(() => {
    switch (props.size) {
      case 'xs':
        return 'sm';
      case 'sm':
        return 'sm';
      case 'md':
        return 'md';
      case 'lg':
        return 'md';
      case 'xl':
        return 'md';
      default:
        return 'md';
    }
  });

  const emit = defineEmits(['click']);
  const handleClick = () => {
    emit('click');
  };
</script>

<template>
  <button :class="buttonClass" :disabled="props.disabled" @click="handleClick">
    <span v-if="props.loading" class="mr-2">
      <CommonIcon :size="iconSize" name="arrow-path" spinning />
    </span>
    <slot />
  </button>
</template>
