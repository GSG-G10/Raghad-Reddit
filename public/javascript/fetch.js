fetch('/check-user')
  .then((respond) => respond.json())
  .then((name) => {
    if (name) {
      // eslint-disable-next-line no-undef
      addUser(name);
    }
  });

// eslint-disable-next-line no-unused-vars
const fetchUserProfile = (username) => {
  fetch(`/user/${username}`)
    .then((response) => response.json)
    // eslint-disable-next-line no-undef
    .then((name, date) => updateProfilePage(name, date));
};
