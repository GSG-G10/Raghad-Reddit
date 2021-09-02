/* eslint-disable no-undef */
// events to show and hide create post form

const endPoint = window.location.pathname;
const searchedUsername = endPoint.split('/')[2];

// events to show and hide create post form
createPostBtn.onclick = () => {
  createPostForm.style.display = 'block';
};
closeBtn.onclick = () => {
  createPostForm.style.display = 'none';
};

// events to fetch each profile buttons data
postBtn.onclick = () => {
  fetchData(`/all-post/${searchedUsername}`, displayPostData);
};
commentBtn.onclick = () => {
  fetchData(`/all-comment/${searchedUsername}`);
};
saveBtn.onclick = () => {
  fetchData('/saved');
};
followerBtn.onclick = () => {
  fetchData(`/follower/${searchedUsername}`);
};

// function to submit change profile img form
changeBtn.onchange = (event) => {
  userProfilePic.src = URL.createObjectURL(event.target.files[0]);
  userProfilePic.value = URL.createObjectURL(event.target.files[0]);
  changePicForm.submit();
};
