<template>
   
  <div class="container mx-auto">    
      <div class="">
        <table class="min-w-full bg-black border border-gray-200 mt-10">
          <thead>
            <tr>
              <th class="text-white py-2 px-4 border-b text-sm">School Name</th>
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
            <tr v-for="(report, index) in athlete.report" :key="index" class="even:bg-sky-100 odd:bg-gray-50">
              <td class="py-2 px-4 border-b text-xs">{{ report.school }}</td>
              <td class="py-2 px-4 border-b text-xs">{{ report.division }}</td>
              <td class="py-2 px-4 border-b text-xs">{{ report.conference }}</td>
              <td class="py-2 px-4 border-b text-xs">{{ report.ranking }}</td>
              <td class="py-2 px-4 border-b text-xs">{{ report.gpa.min }}</td>
              <td class="py-2 px-4 border-b text-xs">{{ report.gpa['25%'] }}</td>
              <td class="py-2 px-4 border-b text-xs">{{ report.gpa['50%'] }}</td>
              <td class="py-2 px-4 border-b text-xs">{{ report.gpa['75%'] }}</td>
              <td class="py-2 px-4 border-b text-xs">{{ report.gpa.max }}</td>
              <td class="py-2 px-4 border-b text-xs">{{ formatRange(report.sat.reading.min, report.sat.reading.max) }}</td>
              <td class="py-2 px-4 border-b text-xs">Data 3</td>
              <td class="py-2 px-4 border-b text-xs">Data 3</td>              
            </tr>
          </tbody>
        </table>


      </div>   
  </div>
</template>

<script>
export default {
  name: "AcademicFitReport",
  props: {
    athlete: {
      type: Object,
      required: false
    }
  },
  methods: {
    formatRange(min, max) {
      if (min === 'N/A' || max === 'N/A') {
        return 'Not Reported';
      }
      return `${min}-${max}`;
    },

  }
};
</script>