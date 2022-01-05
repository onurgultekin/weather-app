<template>
  <div class="container mx-auto">
    <h2 class="mb-12 text-center text-3xl font-extrabold">
      Welcome to Weather App.
    </h2>
    <Select />
  </div>
</template>

<script>
import Select from "@/components/Select.vue";
export default {
  name: "Container",
  components: {
    Select,
  },
};
</script>
