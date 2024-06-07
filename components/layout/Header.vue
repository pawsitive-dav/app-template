<script setup lang="ts">
  const localePath = useLocalePath();
</script>

<template>
  <header class="bg-blue-600 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-xl font-bold">App Template</div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <CommonLink to="index" light> Home </CommonLink>
          </li>
          <li>
            <CommonLink to="documents" light> Documents </CommonLink>
          </li>
          <li>
            <CommonLink to="/auth/sign-in" light> Sign In </CommonLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
