//Activiy 2:Chaining Promises

//Task 3: Create a sequence of promises that simulate fetching data from a server.Chain the promises to log messages in a specific order.

const fetchData1 = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received from Server 1");
    }, 1000);
  });
};

const fecthData2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received from Server 2");
    }, 2000);
  });
};
const fetchData3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received from Server 3");
    }, 1500);
  });
};

fetchData1()
  .then((response) => {
    console.log(response);
    return fecthData2();
  })
  .then((response) => {
    console.log(response);
    return fetchData3();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));
