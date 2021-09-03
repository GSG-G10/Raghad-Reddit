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

// function to add delete btn and event to delete the post when its the user post
const deletePost = () => {
  fetchData(`${endPoint}/profile`, (data) => {
    if (data.boolean) {
      const postOptions = document.querySelectorAll('.post-options');
      postOptions.forEach((elem) => {
        const postDelete = createNode('button', 'post-option', elem);
        postDelete.textContent = 'Delete';
        const deleteIcon = createNode('i', 'fas', postDelete);
        deleteIcon.classList.add('fa-trash');
        postDelete.onclick = () => {
          const postId = 1;
          fetch(`/delete-post/${postId}`, {
            method: 'DELETE',
          });
        };
      });
    }
  }, () => {});
};

// events to fetch each profile buttons data
postBtn.onclick = () => {
  postBtn.style.cssText = 'color:rgb(0, 121, 211); border-bottom:2px solid rgb(0, 121, 211)';
  savedBtn.style.cssText = 'color:black; border-bottom:none';
  followerBtn.style.cssText = 'color:black; border-bottom:none';
  commentBtn.style.cssText = 'color:black; border-bottom:none';
  fetchData(`/all-post/${searchedUsername}`, displayPostData, () => {
    changeSaveForm();
    deletePost();
  });
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
  fetchData('/saved', displayPostData, changeSaveForm);
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
