<template>
    <tr v-if="report" class="even:bg-sky-100 odd:bg-gray-50">
      <td class="py-2 px-0 border-b text-xs">{{ report.school }}</td>
      <td class="py-2 px-0 border-b text-xs">{{ report.division }}</td>
      <td class="py-2 px-0 border-b text-xs">{{ report.conference }}</td>
      <td class="py-2 px-0 border-b text-xs">{{ report.ranking }}</td>
      <td class="py-2 px-0 border-b text-xs">{{ formatNumber(report.gpa.min) }}</td>
      <td class="py-2 px-0 border-b text-xs">{{ formatNumber(report.gpa['25%']) }}</td>
      <gpa-column v-if="report" :report="report"></gpa-column>
      <td class="py-2 px-0 border-b text-xs">{{ formatNumber(report.gpa['75%']) }}</td>
      <td class="py-2 px-0 border-b text-xs">{{ formatNumber(report.gpa.max) }}</td>
      <td class="py-2 px-0 border-b text-xs">{{ formatRange(report.sat.reading.min, report.sat.reading.max) }}</td>
      <td class="py-2 px-0 border-b text-xs">{{ formatRange(report.sat.math.min, report.sat.math.max) }}</td>
      <td class="py-2 px-0 border-b text-xs">{{ formatRange(report.act.min, report.act.max) }}</td>  
    </tr>   
</template>
  
<script>
import GpaColumn from "@/components/GpaColumn.vue";
  export default {
    name: "TableRow",
    props: ['report'],
    components: {
    GpaColumn
  },

  methods: {
    formatRange(min, max) {
      if (min === 'N/A' || max === 'N/A') {
        return 'Not Reported';
      }
      return `${min}-${max}`;
    },
    // format Number to 2 decimal places
    formatNumber(number) {
      return number.toFixed(2);
    }

  },
    
  };
</script>