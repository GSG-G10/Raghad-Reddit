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

// function to create comment container on profile
const CreateCommentContainerProfile = (userName, time, userImg, text, voteNum) => {
  const commentsContainer = createNode('section', 'comments-container', postsSection);
  const commentContainer = createNode('section', 'comment-container', commentsContainer);
  commentsContainer.classList.add('comment-container-profile');
  const userSection = createNode('section', 'comment-user-section', commentContainer);
  const userImage = createNode('img', 'comment-user-img', userSection);
  if (userImg) {
    userImage.src = userImg;
  } else {
    userImage.src = '..//image//user-img.png';
  }
  const commentUserName = createNode('p', 'comment-user-name', userSection);
  commentUserName.textContent = userName;
  const commentTime = createNode('p', 'comment-time', userSection);
  commentTime.textContent = time;
  const commentSection = createNode('section', 'comment-text-section', commentContainer);
  const commentText = createNode('p', 'comment-text', commentSection);
  commentText.textContent = text;
  const commentOpt = createNode('section', 'comment-options', commentContainer);
  const upVote = createNode('img', 'up-vote', commentOpt);
  const totalVotes = createNode('span', 'comment-vote', commentOpt);
  totalVotes.textContent = voteNum;
  const downVote = createNode('img', 'down-vote', commentOpt);
  upVote.src = '..//image//upvote.png';
  downVote.src = '..//image//downvote.png';
};

// function to display the comment data on profile
const displayCommentDataProfile = (data) => {
  postsSection.textContent = '';
  if (!data.length) {
    postsSection.textContent = 'No comments to show';
  } else {
    data.forEach((element) => {
      CreateCommentContainerProfile(
        element.username,
        element.comment_date,
        element.img,
        element.comment_text,
        element.vote,
      );
    });
  }
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

// function to add delete btn and event to delete the comment when its the user comment
const deleteComment = (array) => {
  const commentOptions = document.querySelectorAll('.comment-options');
  commentOptions.forEach((elem, index) => {
    const commentDelete = createNode('button', 'comment-option', elem);
    commentDelete.textContent = 'Delete';
    const deleteIcon = createNode('i', 'fas', commentDelete);
    deleteIcon.classList.add('fa-trash');
    commentDelete.onclick = () => {
      const commentId = array[index];
      fetch(`/delete-comment/${commentId}`).then(() => { window.location.reload(); });
    };
  });
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
  fetchData(`/all-comment/${searchedUsername}`, (data) => {
    displayCommentDataProfile(data);
    return data.map((elem) => elem.id);
  }, (array) => {
    deleteComment(array);
  });
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
