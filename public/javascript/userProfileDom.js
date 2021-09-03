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

// function to create a container for the following
const createFollowingContainer = (url, username) => {
  const followingContainer = createNode('section', 'following-section', postsSection);
  const userContainer = createNode('div', 'user-container', followingContainer);
  const followingImg = createNode('img', 'following-img', userContainer);
  if (url) {
    followingImg.src = url;
  } else {
    followingImg.src = '..//image//user-img.png';
  }
  const followeingName = createNode('p', 'following-name', userContainer);
  followeingName.textContent = username;
  const btnContainer = createNode('div', 'btn-container', followingContainer);
  const profileBtn = createNode('a', 'profile-btn', btnContainer);
  profileBtn.href = `/user/${username}`;
  profileBtn.textContent = 'View Profile';
  fetchData(`${endPoint}/profile`, (data) => {
    if (data.boolean) {
      const unFollow = createNode('a', 'unFollow-btn', btnContainer);
      unFollow.href = `/unfollow/${username}`;
      unFollow.textContent = 'Unfollow';
    }
  }, () => {});
};

// function to display the following
const displayFollowing = (data) => {
  postsSection.textContent = '';
  if (!data.length) {
    postsSection.textContent = 'No following to show';
  } else {
    data.forEach((elem) => {
      createFollowingContainer(elem.img, elem.username);
    });
  }
};

// function to add delete btn and event to delete the post when its the user post
const deletePost = () => {
  fetchData(`${endPoint}/profile`, (data) => {
    if (data.boolean) {
      const postOptions = document.querySelectorAll('.post-options');
      postOptions.forEach((elem, index) => {
        const postDelete = createNode('button', 'post-option', elem);
        postDelete.textContent = 'Delete';
        const deleteIcon = createNode('i', 'fas', postDelete);
        deleteIcon.classList.add('fa-trash');
        postDelete.onclick = () => {
          const postId = document.querySelectorAll('.save-form')[index].action.split('-post/')[1];
          fetch(`/delete-post/${postId}`).then(() => { window.location.reload(); });
        };
      });
    }
  }, () => {});
};

// events to fetch each profile buttons data
postBtn.onclick = () => {
  postBtn.style.cssText = 'color:rgb(0, 121, 211); border-bottom:2px solid rgb(0, 121, 211)';
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
  fetchData(`/all-comment/${searchedUsername}`);
};

savedBtn.onclick = () => {
  postBtn.style.cssText = 'color:black; border-bottom:none';
  followerBtn.style.cssText = 'color:black; border-bottom:none';
  commentBtn.style.cssText = 'color:black; border-bottom:none';
  fetchData('/saved', displayPostData, changeSaveForm);
};

followerBtn.onclick = () => {
  followerBtn.style.cssText = 'color:rgb(0, 121, 211); border-bottom:2px solid rgb(0, 121, 211)';
  postBtn.style.cssText = 'color:black; border-bottom:none';
  commentBtn.style.cssText = 'color:black; border-bottom:none';
  fetchData(`/following/${searchedUsername}`, displayFollowing, () => {});
};

// function to submit change profile img form
changeBtn.onchange = (event) => {
  userProfilePic.src = URL.createObjectURL(event.target.files[0]);
  userProfilePic.value = URL.createObjectURL(event.target.files[0]);
  changePicForm.submit();
};
