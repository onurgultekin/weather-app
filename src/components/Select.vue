<template>
  <div class="flex justify-center">
    <div class="mb-3 w-1/3">
      <select
        class="
          form-select
          appearance-none
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700
          focus:bg-white
          focus:border-blue-600
          focus:outline-none
        "
        aria-label="Default select example"
        v-model="selectedCity"
        @change="getWeatherInfoAction"
      >
        <option selected value="0">Select a city</option>
        <option v-for="(city, key) in cities" :key="key" :value="city.name">
          {{ city.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      selectedCity: 0,
    };
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
  },
  methods: {
    getCities() {
      return this.$store.dispatch("getCities");
    },
    getWeatherInfoAction() {
      if (this.selectedCity !== 0) {
        return this.$store.dispatch("getWeatherInfo", this.selectedCity);
      }
    },
  },
  mounted() {
    this.getCities();
  },
};
</script>

<style lang="scss" scoped>
</style>