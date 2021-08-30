fetch('/community')
  .then((response) => response.json())
  // eslint-disable-next-line no-undef
  .then((names) => displayCommunityName(names));
