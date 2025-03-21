<template>
  <button>
    {{ text }}
  </button>
</template>

<style scoped>

</style>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'button'
  }
})
</script>
