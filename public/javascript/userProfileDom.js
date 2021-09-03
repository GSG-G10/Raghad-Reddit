/* eslint-disable no-undef */
// events to show and hide create post form

const endPoint = window.location.pathname;
const searchedUsername = endPoint.split('/')[2];

// events to show and hide create post form
createPostBtn.onclick = () => {
  createPostForm.style.visibility = 'visible';
  createPostForm.scrollIntoView();
};
closeBtn.onclick = () => {
  createPostForm.style.visibility = 'hidden';
};

// function to change save to unsave and change the action of the save form
const changeSaveForm = () => {
  const savedForm = document.querySelectorAll('.save-form');
  const saveFormText = document.querySelectorAll('.post-option-save');

  saveFormText.forEach((element) => {
    element.textContent = 'UNSAVE';
  });

  savedForm.forEach((element) => {
    const postId = element.action.split('save-post/')[1];
    element.action = `/unsave-post/${postId}`;
  });
};

// events to fetch each profile buttons data
postBtn.onclick = () => {
  postBtn.style.cssText = 'color:rgb(0, 121, 211); border-bottom:2px solid rgb(0, 121, 211)';
  savedBtn.style.cssText = 'color:black; border-bottom:none';
  followerBtn.style.cssText = 'color:black; border-bottom:none';
  commentBtn.style.cssText = 'color:black; border-bottom:none';
  fetchData(`/all-post/${searchedUsername}`, displayPostData);
};

commentBtn.onclick = () => {
  commentBtn.style.cssText = 'color:rgb(0, 121, 211); border-bottom:2px solid rgb(0, 121, 211)';
  postBtn.style.cssText = 'color:black; border-bottom:none';
  followerBtn.style.cssText = 'color:black; border-bottom:none';
  savedBtn.style.cssText = 'color:black; border-bottom:none';
  fetchData(`/all-comment/${searchedUsername}`);
};

savedBtn.onclick = () => {
  savedBtn.style.cssText = 'color:rgb(0, 121, 211); border-bottom:2px solid rgb(0, 121, 211)';
  postBtn.style.cssText = 'color:black; border-bottom:none';
  followerBtn.style.cssText = 'color:black; border-bottom:none';
  commentBtn.style.cssText = 'color:black; border-bottom:none';
  fetchData('/saved', (data) => {
    displayPostData(data);
    changeSaveForm();
  });
};

followerBtn.onclick = () => {
  followerBtn.style.cssText = 'color:rgb(0, 121, 211); border-bottom:2px solid rgb(0, 121, 211)';
  postBtn.style.cssText = 'color:black; border-bottom:none';
  savedBtn.style.cssText = 'color:black; border-bottom:none';
  commentBtn.style.cssText = 'color:black; border-bottom:none';
  fetchData(`/follower/${searchedUsername}`);
};

// function to submit change profile img form
changeBtn.onchange = (event) => {
  userProfilePic.src = URL.createObjectURL(event.target.files[0]);
  userProfilePic.value = URL.createObjectURL(event.target.files[0]);
  changePicForm.submit();
};
