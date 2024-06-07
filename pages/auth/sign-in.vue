<script setup lang="ts">
  useHead({
    title: 'Sign In',
  });
  definePageMeta({
    layout: 'auth',
  });
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign In
        </button>
      </form>
      <div class="pt-4">
        Don’t have an account yet?
        <CommonLink to="/auth/sign-up"> Sign Up Now </CommonLink>
      </div>
    </div>
  </div>
</template>
