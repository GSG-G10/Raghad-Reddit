/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// general fetch function
const fetchData = (endPoint, callback1, callback2) => {
  fetch(endPoint)
    .then((response) => response.json())
    .then((data) => callback1(data))
    .then((data) => callback2(data));
};

fetchData('/check-user', (name) => {
  if (name) {
    addUser(name);
  }
}, () => {});
