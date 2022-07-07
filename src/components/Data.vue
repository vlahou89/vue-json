<script>
import data from '../assets/data.js';

// Get engineer normal time pay and overtime pay
const engineerNormalTime = data.ratesPerRole.engineer.normal_time;
const engineerOverTime = data.ratesPerRole.engineer.overtime;
// Get plumber normal time pay and overtime pay
const plumberNormalTime = data.ratesPerRole.plumber.normal_time;
const plumberOverTime = data.ratesPerRole.plumber.normal_time;
// Get the engineers array with name
const engineers = data.roles.engineers;

// Function created in order to use it for groupin the array based on employee's name
var groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

//  grouped array
// {"Alan B": [ {...}, {...}, {...},], "Mary C": [ {...}, {...}, {...},] }
const grouped = groupBy(data.workedHours, 'employee');

export default {
  computed: {
    newArray() {
      var item = [];
      // for each grouped by key object
      for (const key in grouped) {
        // map throough the array and return employee name, day, workedHours and totalEarned
        const x = grouped[key].map((x) => {
          return {
            name: x.employee,
            day: x.day,
            hoursWorked: x.overtime_hours + x.normal_hours,
            // checking if employees name is included in engineers Array
            // if yes, calculating earning for engineer, otherwise calculating for plumbers
            totalEarned: engineers.includes(x.employee)
              ? engineerOverTime * x.overtime_hours +
                engineerNormalTime * x.normal_hours
              : plumberOverTime * x.overtime_hours +
                plumberNormalTime * x.normal_hours,
          };
        });
        // push array of objects to the empty item array
        item.push(x);
      }
      // (2) [Array(3), Array(3)]
      // example object: {name: 'Alan B', day: 'Monday', hoursWorked: 8, totalEarned: 100}
      return item;
    },
  },
};
</script>

<template>
  <div
    class="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
  >
    <div class="flex flex-row items-center p-20 justify-center">
      <div
        class="mb-20 flex flex-col p-20 mr-20 w-2/5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-blue-200 hover:border-gray-700"
        v-for="item in newArray"
        :key="item.name"
      >
        <div>
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-center text-indigo-600 p-20"
          >
            {{ [...item].find((x) => x.name).name }}
          </h5>
        </div>
        <div v-for="dayInfo in item" :key="dayInfo.day">
          <div class="py-5 px-2">
            <h5
              class="mr-2 text-2xl font-bold tracking-tight text-center text-indigo-400"
            >
              {{ dayInfo.day }}
            </h5>
            <p class="mb-3 font-normal text-gray-700 text-center">
              Hours worked: {{ dayInfo.hoursWorked }} <br />
              Total earned: £{{ dayInfo.totalEarned }}
            </p>
            <div class="h-1 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
