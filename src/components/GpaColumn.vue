<template>    
  <td :class="calculateGpaColor(report.gpa['50%'] )" class="py-2 px-4 border-b text-xs">{{ formatNumber(report.gpa['50%']) }}</td>
</template>
  
<script>
  export default {
    name: "GpaColumn",
    props: ['report'],
   
    data() {
      return {
        studentGpa: this.$store.state.report.gpa,        
      };
    },
    mounted(){
      console.log(this.studentGpa);
    },
    computed: {
      calculateGpaColor() {
        return (schoolGpa) => {
          const difference = schoolGpa - this.studentGpa;
          if (difference > 0.10) {
            return 'bg-[#d7737d]'; // CSS class for color #d7737d
          } else if (difference <= 0.1 && difference >= 0) {
            return 'bg-[#c194b5]'; // CSS class for color #c194b5
          } else if (difference === 0) {
            return 'bg-[#b4a7d6]'; // CSS class for color #b4a7d6
          } else if (difference < 0 && difference >= -0.1) {
            return 'bg-[#a6a8da]'; // CSS class for color #a6a8da
          } else {
            return 'bg-[#75ace5]'; // CSS class for color #75ace5
          }
        };
      }
    },
    methods: { 
      formatNumber(number) {
        return number.toFixed(2);
      }

    },
};
    
</script>