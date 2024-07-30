import _ from "lodash";
import axios from "axios";

//Activity 4: Using Third Party Modules

//Task 6: Using loadash
const arr = [1, 2, 3, 4, 5];
console.log(_.isArray(arr));
console.log(_.map(arr, (n) => n * 5));

//Task 7: Using axios
async function fetchData() {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
