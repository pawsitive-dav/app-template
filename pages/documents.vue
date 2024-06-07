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
      <div class="flex space-x-4">
        <CommonButton @click="testClick()"> Test loading </CommonButton>
      </div>
    </div>
    <div class="py-4 space-x-2">
      <CommonButton variant="solid"> Button </CommonButton>
      <CommonButton variant="text"> Button </CommonButton>
      <CommonButton variant="outline"> Button </CommonButton>
      <CommonButton variant="soft"> Button </CommonButton>
    </div>
    <div class="py-4 space-x-2">
      <CommonButton variant="solid" color="primary"> Button </CommonButton>
      <CommonButton variant="text" color="primary"> Button </CommonButton>
      <CommonButton variant="outline" color="primary"> Button </CommonButton>
      <CommonButton variant="soft" color="primary"> Button </CommonButton>
    </div>
    <div class="py-4 space-x-2">
      <CommonButton variant="solid" color="info"> Button </CommonButton>
      <CommonButton variant="text" color="info"> Button </CommonButton>
      <CommonButton variant="outline" color="info"> Button </CommonButton>
      <CommonButton variant="soft" color="info"> Button </CommonButton>
    </div>
    <div class="py-4 space-x-2">
      <CommonButton variant="solid" color="success"> Button </CommonButton>
      <CommonButton variant="text" color="success"> Button </CommonButton>
      <CommonButton variant="outline" color="success"> Button </CommonButton>
      <CommonButton variant="soft" color="success"> Button </CommonButton>
    </div>
    <div class="py-4 space-x-2">
      <CommonButton variant="solid" color="warning"> Button </CommonButton>
      <CommonButton variant="text" color="warning"> Button </CommonButton>
      <CommonButton variant="outline" color="warning"> Button </CommonButton>
      <CommonButton variant="soft" color="warning"> Button </CommonButton>
    </div>
    <div class="py-4 space-x-2">
      <CommonButton variant="solid" color="error"> Button </CommonButton>
      <CommonButton variant="text" color="error"> Button </CommonButton>
      <CommonButton variant="outline" color="error"> Button </CommonButton>
      <CommonButton variant="soft" color="error"> Button </CommonButton>
    </div>
    <div class="py-4 space-x-2">
      <CommonButton
        :loading="testLoading"
        variant="solid"
        color="primary"
        size="sm"
      >
        Small button
      </CommonButton>
      <CommonButton
        :loading="testLoading"
        variant="solid"
        color="primary"
        size="md"
      >
        Medium button
      </CommonButton>
      <CommonButton
        :loading="testLoading"
        variant="solid"
        color="primary"
        size="lg"
      >
        Large Button
      </CommonButton>
    </div>
  </div>
</template>
