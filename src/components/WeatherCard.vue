<template>
  <div class="container">
    <Select />
    <div
      v-if="weatherInfo && weatherInfo.cod === 200 && weatherInfo.weather"
      class="mt-4 flex items-center justify-center"
    >
      <div
        class="
          flex flex-col
          bg-white
          rounded
          p-4
          w-1/3
          border-slate-300 border border-solid border-slate-100
        "
      >
        <div class="font-bold text-xl">{{ weatherInfo.name }}</div>
        <div class="text-sm text-gray-500">{{ formatDate() }}</div>
        <div
          class="
            mt-6
            text-6xl
            self-center
            inline-flex
            items-center
            justify-center
            rounded-lg
            text-indigo-400
            h-24
            w-24
          "
        >
          <!-- https://openweathermap.org/weather-conditions -->
          <img
            :src="
              'http://openweathermap.org/img/wn/' +
              weatherInfo.weather[0].icon +
              '@2x.png'
            "
            width="120"
            :alt="weatherInfo.weather[0].main"
          />
          <!-- https://openweathermap.org/weather-conditions -->
        </div>
        <div class="flex flex-row items-center justify-center mt-6">
          <div class="font-medium text-6xl">{{ weatherInfo.main.temp }}°C</div>
          <div class="flex flex-col items-center ml-24">
            <div>{{ weatherInfo.weather[0].main }}</div>
            <div class="mt-1">
              <span class="text-sm"><i class="far fa-long-arrow-up"></i></span>
              <span class="text-sm font-light text-gray-500"
                >{{ weatherInfo.main.temp_min }}°C</span
              >
            </div>
            <div>
              <span class="text-sm"
                ><i class="far fa-long-arrow-down"></i
              ></span>
              <span class="text-sm font-light text-gray-500"
                >{{ weatherInfo.main.temp_max }}°C</span
              >
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between mt-6">
          <Info text="Wind" unit="k/h" :value="weatherInfo.wind.speed" />
          <Info text="Humidity" unit="%" :value="weatherInfo.main.humidity" />
          <Info text="Visibility" unit="m" :value="weatherInfo.visibility" />
        </div>
      </div>
    </div>
    <Alert v-if="error" :message="error" />
  </div>
</template>

<script>
import Select from "@/components/Select.vue";
import Info from "@/components/Info.vue";
import Alert from "@/components/Alert.vue";
export default {
  name: "Weather Card",
  components: {
    Select,
    Info,
    Alert,
  },
  computed: {
    weatherInfo() {
      return this.$store.state.weatherInfo;
    },
    error() {
      return this.$store.state.error;
    },
  },
  methods: {
    formatDate() {
      const today = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return today.toLocaleDateString("en-US", options);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>