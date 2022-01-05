<template>
  <div class="container mx-auto">
    <h2 class="mb-6 mt-6 text-center text-3xl font-extrabold">
      Welcome to Weather App.
    </h2>
    <WeatherCard />
  </div>
</template>

<script>
import WeatherCard from "@/components/WeatherCard.vue";
export default {
  name: "Container",
  components: {
    WeatherCard,
  },
};
</script>
