<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="flex items-center space-x-1">
      <span>{{ $i18n.locale }}</span>
      <svg
        class="w-4 h-4 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute z-10 mt-2 bg-white border border-gray-200 rounded shadow-lg"
    >
      <ul>
        <li v-for="(locale, index) in locales" :key="index">
          <button
            @click="changeLocale(locale.code)"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            {{ locale.code }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  const { locale, locales, setLocale } = useI18n();

  const isOpen = ref(false);
  const changeLocale = (locale) => {
    setLocale(locale);
    isOpen.value = false;
  };
</script>
