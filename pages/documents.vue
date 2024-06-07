<script setup lang="ts">
  useHead({
    title: 'Documents',
  });

  const testLoading = ref(false);

  const testClick = () => {
    testLoading.value = !testLoading.value;
  };
</script>

<template>
  <div class="container mx-auto">
    <div class="space-y-4">
      <div>
        <CommonButton @click="testClick()"> Test loading </CommonButton>
      </div>
      <div>
        <CommonButton :loading="testLoading" color="default">
          create
        </CommonButton>
      </div>
      <div>
        <CommonButton :loading="testLoading" color="primary">
          create
        </CommonButton>
      </div>
      <div>
        <CommonButton :loading="testLoading" color="success">
          create
        </CommonButton>
      </div>
      <div>
        <CommonButton :loading="testLoading" color="info">
          create
        </CommonButton>
      </div>
      <div>
        <CommonButton :loading="testLoading" color="warning">
          create
        </CommonButton>
      </div>
      <div>
        <CommonButton :loading="testLoading" color="error">
          create
        </CommonButton>
      </div>
    </div>
  </div>
</template>
