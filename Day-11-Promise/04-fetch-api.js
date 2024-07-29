//Activity 4:Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

const api = "https://randomuser.me/api/";

fetch(api)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network issue" + response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(`Error aya dekh:- ${error}`));

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function getData() {
  try {
    let response = await fetch(api);
    if (!response.ok) {
      throw new Error("Response was not ok..");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Dekh Error aya:- ${error}`);
  }
}

getData();
