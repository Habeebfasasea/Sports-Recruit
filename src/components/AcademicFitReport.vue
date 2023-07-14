<template>
  <div v-if="reportData" class="p-6 w-full border-t-8 border-b-8 border-sky-300">
      <div class="flex flex-wrap mt-6">
        <div class="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0 ">
          <div class="flex items-center">
        <!-- Rounded Image -->
        <div class="w-20 h-20 rounded-full overflow-hidden ml-4">
          <img src="https://s3.amazonaws.com/sr-application-demo/images/lacrosserecruits/2017/5/447_20476_252_20476_high-school-girls-lacrosse-player-8732457.jpg" alt="User Profile Image" class="object-cover w-full h-full">
        </div>
        <!-- User Info -->
        <div class="w-full sm:w-1/2 ml-0 py-4 pl-2 lg:text-left">
          <h3 class="text-sky-300 font-bold">{{reportData.name}}</h3>
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
            <p class="mb-2 text-gray-600">Logo</p>
            <p class="mb-2 font-semibold text-gray-600">Academic Fit Report</p>
          </div>
        </div>
      </div>
    
    <div v-if="reportData" class="overflow-x-auto p-4 mb-4">  
      <table class="min-w-full bg-black border border-gray-200 mt-10">
        <thead>
          <tr>
            <th class="z-10 text-white py-2 px-4 border-b text-sm">School Name</th>
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
    <div class="p-4 mt-20">
      <p class="text-sm">*Rankings for Division I schools based on NCAA data (www.ncaa.com) and rankings for Division II & III schools are based on data from Hero Sports (www.herosports.com/rankings)</p>
      <p class="text-sm">** GPA is based on SportsRecruits members who have shown interest in (favorited) the school and have provided their GPA on their profile</p>
      <p class="text-sm">***SAT and ACT scores based on national data provided by the National Center of Education Statistics- https://nces.ed.gov/ipeds/</p>
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
  props: ['athlete'],
  
  data() {
    return {
      playerName: this.$store.state.report?.name || '',        
    };
  },
  mounted(){
      console.log(this.playerName);
  },
  
  computed: {
    reportData () {     
      return this.$store.state.report
    },
    playerInitials() {
      // Get the initials from the first and last name of the athelete
      const firstName = this.playerName.split(' ')[0];
      const lastName = this.playerName.split(' ')[1];
      const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

      return initials.toUpperCase();
    },
    avatarColor() {
      // Get the first character of the player's last name
      const lastNameFirstChar = this.playerName.split(' ')[1].charAt(0);

      // Map the first character to the corresponding color from the palette
      const colors = {
        M: '#f1603c',
        C: '#6082fa',
        B: '#827cb8',
        A: '#0097a4',
        J: '#ffe066',
        D: '#ffa94d'
      };

      // Return the color based on first character
      return colors[lastNameFirstChar.toUpperCase()];
    }
  },


};
</script>


<style scoped>
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.placeholder {
  font-size: 36px;
  font-weight: bold;
  color: white;
}
</style>