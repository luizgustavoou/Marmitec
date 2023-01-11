<script setup lang="ts"></script>

<template>
  <div class="d-flex flex-column h-100">
    <header>
      <slot name="header"></slot>
    </header>
    <main class="flex-grow-1 p-2" style="overflow: auto">
      <slot name="main"></slot>
    </main>
    <footer
      class="d-flex flex-column justify-content-center align-items-center text-white p-1"
    >
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
footer {
  background-color: #36454fa2;
}
</style>
