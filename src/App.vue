<template>
  <div class="container">
    <AcademicFitReport :athlete="athlete_info"/>
  </div>
</template>

<script>
import AcademicFitReport from "@/components/AcademicFitReport.vue";
import AthleteData from "@/assets/data.json";
import './assets/tailwind.css';

export default {
  name: "app",
  components: {
    AcademicFitReport
  },
  mounted() {
    this.$store.commit('setReport', AthleteData.data[0]);
  },
  data: function() {
    return {
      athlete_info: AthleteData.data[0]
    };
  }
};
</script>
