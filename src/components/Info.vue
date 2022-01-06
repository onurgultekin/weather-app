<template>
  <div class="flex flex-col items-center">
    <div class="font-medium text-sm">{{ text }}</div>
    <div class="text-sm text-gray-500">{{ value }} {{ unit }}</div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    text: {
      required: true,
      type: String,
    },
    value: {
      required: true,
      type: Number,
    },
    unit: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>