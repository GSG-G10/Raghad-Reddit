fetch('/check-user')
  .then((respond) => respond.json())
  .then((name) => {
    addUser(name);
  });
