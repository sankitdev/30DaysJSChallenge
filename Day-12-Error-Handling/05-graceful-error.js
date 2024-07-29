//Activity 5: Graceful Error Handling in Fetch

//Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
const invalidURL = "invalidurl.com";
fetch(invalidURL)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(`Error hai ye:-${error}`));

//Task 9:Use the fetch API to requrest data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
const handleFetch = async () => {
  const invalidURL = "invalidurl.com";
  try {
    let response = await fetch(invalidURL);
    if (!response.ok) {
      throw new Error("${response.status}");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error hai ye:- ${error}`);
  }
};

handleFetch();
