<script setup lang="ts">
  import { defineEmits } from 'vue';

  const emit = defineEmits();
  const closeModal = () => {
    emit('close');
  };
</script>

<template>
  <div
    class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />

    <div
      class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="modal-content py-4 text-left px-6">
        <!-- Title -->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold">Modal Title</p>
          <button @click="closeModal()" class="modal-close cursor-pointer z-50">
            <svg
              class="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M13.418 13.418a1 1 0 0 1-1.414 0L9 10.414l-3.004 3.004a1 1 0 0 1-1.414-1.414L7.586 9 4.582 5.996a1 1 0 0 1 1.414-1.414L9 7.586l3.004-3.004a1 1 0 1 1 1.414 1.414L10.414 9l3.004 3.004a1 1 0 0 1 0 1.414z"
              />
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="modal-body">
          <!-- Your content goes here -->
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          interdum quam et odio sollicitudin, eget fermentum libero rhoncus.
          Vestibulum in libero metus. Cras nec quam non libero rutrum consequat
          non a augue. Fusce vel ex vel felis tristique luctus non in erat. Nam
          ullamcorper lacus ut dolor tempus, nec venenatis libero sodales.
          Integer nec est non elit molestie consectetur.
        </div>

        <!-- Footer -->
        <div class="modal-footer mt-4 flex justify-end">
          <button
            @click="closeModal()"
            class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
