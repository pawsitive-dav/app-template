<script setup lang="ts">
  useHead({
    title: 'Home',
  });

  const showModal = ref(false);
</script>

<template>
  <div>
    <div>Home Page</div>
    <div>
      {{ $t('home.test') }}
    </div>
    <div>ทดสอบภาษาไทย</div>

    <div>
      <!-- Button to open modal -->
      <button
        @click="showModal = true"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>

      <!-- Modal component -->
      <CommonModal v-if="showModal" @close="showModal = false" />
      <CommonLanguageDropdown />
    </div>
  </div>
</template>
