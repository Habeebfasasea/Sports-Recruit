<template>
   
  <div class="container">
    <div v-if="reportData" class="">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0 ">
            <div class="flex items-center">
          <!-- Rounded Image -->
          <div class="w-20 h-20 rounded-full overflow-hidden ml-4">
            <img src="https://s3.amazonaws.com/sr-application-demo/images/lacrosserecruits/2017/5/447_20476_252_20476_high-school-girls-lacrosse-player-8732457.jpg" alt="User Profile Image" class="object-cover w-full h-full">
          </div>
          <!-- User Info -->
          <div class="w-full sm:w-1/2 ml-0 py-4 pl-2 lg:text-left">
            <h3 class="text-teal-400 font-bold">{{reportData.name}}</h3>
            <p class="text-sm"><span class="font-bold text-sm">Sport:</span> {{reportData.sport}}</p>
            <p class="text-sm"><span class="font-bold text-sm">Class:</span> {{reportData.grad_year}}</p>
            <p class="text-sm"><span class="font-bold text-sm">CLub:</span> {{reportData.club.name}}</p>
          </div>
        </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0 lg:text-left">
            <div class="bg-white p-4 mt-6 ">                            
              <p class="text-sm"><span class="font-bold text-sm">High School:</span> {{reportData.high_school.name}}</p>
              <p class="text-sm"><span class="font-bold text-sm">GPA:</span> {{reportData.gpa}}</p>
              <p class="text-sm"><span class="font-bold text-sm">Desired Major:</span> {{reportData.major}}</p>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/2 lg:text-right">
            <div class="bg-white p-4">
              <p class="mb-2">Logo</p>
              <p class="mb-2">Academic Fit Report</p>
            </div>
          </div>
        </div>
      
      <div v-if="reportData" class="overflow-x-auto">  
        <table class="min-w-full bg-black border border-gray-200 mt-10">
          <thead>
            <tr>
              <th class="sticky left-0 z-10 text-white py-2 px-4 border-b text-sm">School Name</th>
              <th class="text-white py-2 px-4 border-b text-sm">Athletic Div</th>
              <th class="text-white py-2 px-4 border-b text-sm">Conference</th>
              <th class="text-white py-2 px-4 border-b text-sm">Ranking*<p class="text-xs">(DI NCAA)</p><p class="text-xs">(DIll & Dill Hero Sports)</p></th>
              <th class="text-white py-2 px-4 border-b text-sm">Min</th>
              <th class="text-white py-2 px-4 border-b text-sm">25%</th>
              <th class="text-white py-2 px-4 border-b text-sm"><p>GPA**</p> 50%</th>
              <th class="text-white py-2 px-4 border-b text-sm">75%</th>
              <th class="text-white py-2 px-4 border-b text-sm">Max</th>
              <th class="text-white py-2 px-4 border-b text-sm"><p class="text-xs">SAT Reading***</p> 25%-75%</th>
              <th class="text-white py-2 px-4 border-b text-sm"><p class="text-xs">SAT Math***</p> 25%-75%</th>
              <th class="text-white py-2 px-4 border-b text-sm"><p class="text-xs">ACT Composite***</p> 25%-75%</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <table-row v-for="(report, index) in reportData.report" :key="index" :report="report" class="even:bg-sky-100 odd:bg-gray-50">
                          
            </table-row>
          </tbody>
        </table>
      </div> 
    </div>  
  </div>
</template>

<script>
import TableRow from "@/components/TableRow.vue";
export default {
  name: "AcademicFitReport",
  components: {
    TableRow
  },
  props: {
    athlete: {
      type: Object,
      required: false
    }
  },
  
  computed: {
    reportData () {     
      return this.$store.state.report
    }
  },

  
};
</script>