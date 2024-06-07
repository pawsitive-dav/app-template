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
      default: 'md', // sm, md, lg
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
      'inline-flex items-center justify-center transition-colors rounded-md font-normal focus:outline-none tracking-wider';

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
              : 'text-white bg-gray-600 hover:bg-opacity-90',
          text:
            disabled || loading
              ? 'text-gray-600'
              : 'text-gray-600 bg-gray-600 hover:bg-opacity-5',
          outline:
            disabled || loading
              ? 'text-gray-600 bg-gray-600 bg-opacity-0'
              : 'text-gray-600 bg-gray-600 bg-opacity-0 hover:bg-opacity-5',
          soft:
            disabled || loading
              ? 'text-gray-600 bg-gray-600 bg-opacity-5'
              : 'text-gray-600 bg-gray-600 bg-opacity-5 hover:bg-opacity-10',
        },
        primary: {
          solid:
            disabled || loading
              ? 'text-white bg-primary-700'
              : 'text-white bg-primary-700 hover:bg-opacity-90',
          text:
            disabled || loading
              ? 'text-primary-700'
              : 'text-primary-700 bg-primary-700 hover:bg-opacity-5',
          outline:
            disabled || loading
              ? 'text-primary-700 bg-primary-700 bg-opacity-0'
              : 'text-primary-700 bg-primary-700 bg-opacity-0 hover:bg-opacity-5',
          soft:
            disabled || loading
              ? 'text-primary-700 bg-primary-700 bg-opacity-5'
              : 'text-primary-700 bg-primary-700 bg-opacity-5 hover:bg-opacity-10',
        },
        info: {
          solid:
            disabled || loading
              ? 'text-white bg-primary-500'
              : 'text-white bg-primary-500 hover:bg-opacity-90',
          text:
            disabled || loading
              ? 'text-primary-500'
              : 'text-primary-500 bg-primary-500 hover:bg-opacity-5',
          outline:
            disabled || loading
              ? 'text-primary-500 bg-primary-500 bg-opacity-0'
              : 'text-primary-500 bg-primary-500 bg-opacity-0 hover:bg-opacity-5',
          soft:
            disabled || loading
              ? 'text-primary-500 bg-primary-500 bg-opacity-5'
              : 'text-primary-500 bg-primary-500 bg-opacity-5 hover:bg-opacity-10',
        },
        success: {
          solid:
            disabled || loading
              ? 'text-white bg-green-500'
              : 'text-white bg-green-500 hover:bg-opacity-90',
          text:
            disabled || loading
              ? 'text-green-500'
              : 'text-green-500 bg-green-500 hover:bg-opacity-5',
          outline:
            disabled || loading
              ? 'text-green-500 bg-green-500 bg-opacity-0'
              : 'text-green-500 bg-green-500 bg-opacity-0 hover:bg-opacity-5',
          soft:
            disabled || loading
              ? 'text-green-500 bg-green-500 bg-opacity-5'
              : 'text-green-500 bg-green-500 bg-opacity-5 hover:bg-opacity-10',
        },
        warning: {
          solid:
            disabled || loading
              ? 'text-white bg-amber-400'
              : 'text-white bg-amber-400 hover:bg-opacity-90',
          text:
            disabled || loading
              ? 'text-amber-400'
              : 'text-amber-400 bg-amber-400 hover:bg-opacity-5',
          outline:
            disabled || loading
              ? 'text-amber-400 bg-amber-400 bg-opacity-0'
              : 'text-amber-400 bg-amber-400 bg-opacity-0 hover:bg-opacity-5',
          soft:
            disabled || loading
              ? 'text-amber-400 bg-amber-400 bg-opacity-5'
              : 'text-amber-400 bg-amber-400 bg-opacity-5 hover:bg-opacity-10',
        },
        error: {
          solid:
            disabled || loading
              ? 'text-white bg-red-500'
              : 'text-white bg-red-500 hover:bg-opacity-90',
          text:
            disabled || loading
              ? 'text-red-500'
              : 'text-red-500 bg-red-500 hover:bg-opacity-5',
          outline:
            disabled || loading
              ? 'text-red-500 bg-red-500 bg-opacity-0'
              : 'text-red-500 bg-red-500 bg-opacity-0 hover:bg-opacity-5',
          soft:
            disabled || loading
              ? 'text-red-500 bg-red-500 bg-opacity-5'
              : 'text-red-500 bg-red-500 bg-opacity-5 hover:bg-opacity-10',
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
      text: 'bg-opacity-0',
      outline: 'border border-current',
      soft: 'bg-opacity-10',
    };

    const sizeClasses: Record<string, string> = {
      sm: props.loading ? 'pl-2 pr-3 h-8 text-xs' : 'px-3 h-8 text-xs',
      md: props.loading ? 'pl-2.5 pr-4 h-9 text-sm' : 'px-4 h-9 text-sm',
      lg: props.loading ? 'pl-3 pr-5 h-11 text-base' : 'px-5 h-11 text-base',
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

  const emit = defineEmits(['click']);
  const handleClick = () => {
    emit('click');
  };
</script>

<template>
  <button :class="buttonClass" :disabled="props.disabled" @click="handleClick">
    <CommonIcon
      v-if="props.loading"
      size="sm"
      name="arrow-path"
      class="mr-2"
      spinning
    />
    <slot />
  </button>
</template>
