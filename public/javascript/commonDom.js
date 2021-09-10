/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const searchBtn = document.querySelector('.search-icon');
const searchInput = document.querySelector('#search-input');
const navBar = document.querySelector('.home-nav');
const communitySection = document.querySelector('.communities-section');
const postsSection = document.querySelector('.posts-section');
const topBtn = document.querySelector('#top-btn');
const newBtn = document.querySelectorAll('.filter-btn')[0];
const timeFilterLabel = document.querySelector('.time-filter-label');
const timeFilterSelect = document.querySelector('#time-filter');
const searchForrm = document.querySelector('.search-form');
const signUpBtn = document.querySelector('#sign-up-btn');
const signInBtn = document.querySelector('#sign-in-btn');
const dropList = document.querySelector('.drop-list');
const droplistBtn = document.querySelector('.drop-btn');
const profileBtn = document.querySelector('.profile');
const signOutBtn = document.querySelector('.sign-out');
const homeBtn = document.querySelector('.home');
const changeBtn = document.querySelector('#file');
const userProfilePic = document.querySelector('.user-profile-img');
const changePicForm = document.querySelector('.change-pic-form');
const commentBtn = document.querySelector('.comment-btn');
const postBtn = document.querySelector('.post-btn');
const savedBtn = document.querySelector('.saved-btn');
const followerBtn = document.querySelector('.follower-btn');
const createPostBtn = document.querySelector('.add-post-btn');
const createPostForm = document.querySelector('.add-post-form');
const closeBtn = document.querySelector('.close-icon');
const profileContainer = document.querySelector('.profile-container');
const filterUser = document.querySelector('.filter-user');
const userNameContainer = document.querySelector('.user-name');
const UserDate = document.querySelector('.user-date');
const addPostBtn = document.querySelector('.add-post-btn');
const profileSection = document.querySelector('.right-profile-section');

// general function to create a new tag, give it a class and append it to a parent.
const createNode = (tag, className, parentNode) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

// function to change sign up and sign in to user profile options
const addUser = (username) => {
  signInBtn.style.display = 'none';
  signUpBtn.style.display = 'none';
  droplistBtn.style.visibility = 'visible';
  createNode('i', 'far', droplistBtn).classList.add('fa-user');
  createNode('span', 'nav-user-name', droplistBtn).textContent = username;
  createNode('i', 'fas', droplistBtn).classList.add('fa-sort-down');
  droplistBtn.onclick = () => {
    droplistBtn.classList.toggle('dropped');
    dropList.classList.toggle('show');
  };
  profileBtn.href = `/user/${username}`;
  signOutBtn.href = '/sign-out';
  homeBtn.href = '/';
  navBar.style.flexDirection = 'column';
};

// function to fetch users profiles when search by their username
searchForrm.onsubmit = () => {
  const searchedValue = searchInput.value.trim();
  searchForrm.action = `/user/${searchedValue}`;
};

// function to create a container for comments
const CreateCommentContainer = (index, commentId, userName, time, userImg, text, voteNum) => {
  if (document.querySelector('.reply-form')) {
    document.querySelector('.reply-form').style.display = 'none';
  }
  const commentContainer = createNode('section', 'comment-container', document.querySelectorAll('.comments-section')[index]);
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
  upVote.onclick = () => {
    fetch(`/upvote-comment/${commentId}`)
      .then(() => {
        window.location.reload();
      });
  };
  downVote.onclick = () => {
    fetch(`/downvote-comment/${commentId}`)
      .then(() => {
        window.location.reload();
      });
  };
};

// function to display the comment data
const displayCommentData = (data, index) => {
  const commentsSection = document.querySelectorAll('.comments-section')[index];
  commentsSection.textContent = '';
  if (!data.length) {
    commentsSection.textContent = 'No comments to show';
  }
  data.forEach((element) => {
    CreateCommentContainer(
      index,
      element.id,
      element.username,
      element.comment_date,
      element.img,
      element.comment_text,
      element.vote,
    );
  });
};

// function to create a container for a post
const createPostContainer = (
  index,
  postId,
  communityName,
  userName,
  userImg,
  time, title,
  postString,
  voteNum,
) => {
  const postCommentContainer = createNode('section', 'post-comment-container', postsSection);
  const postContainer = createNode('section', 'post-container', postCommentContainer);
  const commentsSection = createNode('section', 'comments-section', postCommentContainer);
  commentsSection.style.display = 'none';
  const postVote = createNode('section', 'post-vote-container', postContainer);
  const upVote = createNode('img', 'up-vote', postVote);
  upVote.onclick = () => {
    fetch(`/up-vote/${postId}`)
      .then((data) => {
        if (data.redirected) {
          window.location.href = data.url;
        } else {
          window.location.reload();
        }
      });
  };
  const totalVotes = createNode('span', 'post-vote', postVote);
  totalVotes.textContent = voteNum;
  const downVote = createNode('img', 'down-vote', postVote);
  downVote.onclick = () => {
    fetch(`/down-vote/${postId}`)
      .then((data) => {
        if (data.redirected) {
          window.location.href = data.url;
        } else {
          window.location.reload();
        }
      });
  };
  upVote.src = '..//image//upvote.png';
  downVote.src = '..//image//downvote.png';
  const post = createNode('section', 'post', postContainer);
  const userInfo = createNode('section', 'user-info', post);
  const userImage = createNode('img', 'user-info-img', userInfo);
  if (userImg) {
    userImage.src = userImg;
  } else {
    userImage.src = '..//image//user-img.png';
  }
  const userInfoText = createNode('a', 'post-community-name', userInfo);
  userInfoText.textContent = `${communityName} community`;
  userInfoText.href = `/community/${communityName}`;
  createNode('span', 'user-info-text', userInfo).textContent = ' Posted by ';
  const userNameA = createNode('a', 'post-user-name', userInfo);
  userNameA.textContent = userName;
  userNameA.href = `/user/${userName}`;
  createNode('span', 'post-time', userInfo).textContent = time;
  const postText = createNode('section', 'post-text', post);
  const postTitle = createNode('h3', 'post-title', postText);
  postTitle.textContent = title;
  const postDescription = createNode('p', 'post-description', postText);
  postDescription.textContent = postString;
  const postOptions = createNode('section', 'post-options', post);
  const postComments = createNode('button', 'post-option', postOptions);
  postComments.textContent = 'comments';
  postComments.onclick = () => {
    commentsSection.style.display = 'block';
    fetch(`/comments/${postId}`).then((data) => data.json()).then((data) => {
      displayCommentData(data, index);
    });
  };
  const commentIcon = createNode('i', 'far', postComments);
  commentIcon.classList.add('fa-comment-alt');

  const saveForm = createNode('form', 'save-form', postOptions);
  const postSave = createNode('button', 'post-option', saveForm);
  saveForm.action = `/save-post/${postId}`;
  postSave.textContent = 'Save';
  postSave.classList.add('post-option-save');
  const saveIcon = createNode('i', 'far', postSave);
  saveIcon.classList.add('fa-bookmark');
  const postReply = createNode('button', 'post-option', postOptions);
  postReply.textContent = 'Reply';
  const replyIcon = createNode('i', 'far', postReply);
  replyIcon.classList.add('fa-comment-dots');
  postReply.onclick = () => {
    const replyForm = createNode('form', 'reply-form', postCommentContainer);
    const close = createNode('img', 'close', replyForm);
    close.src = './/image//close.svg';
    close.alt = 'close icon';
    const label = createNode('label', 'reply-label', replyForm);
    label.for = 'reply';
    const input = createNode('input', 'reply-input', label);
    input.type = 'text';
    input.id = 'reply';
    input.name = 'reply';
    input.required = 'required';
    input.placeholder = 'Add your comment';
    const button = createNode('button', 'reply-button', replyForm);
    button.type = 'submit';
    button.textContent = 'Reply';
    replyForm.method = 'POST';
    replyForm.action = `/add-comment/${postId}`;
    close.onclick = () => { replyForm.style.display = 'none'; };
  };
};

// function to display the post data
const displayPostData = (data) => {
  postsSection.textContent = '';
  if (!data.length) {
    postsSection.textContent = 'No posts to show';
  }
  data.forEach((element, index) => {
    createPostContainer(
      index,
      element.id,
      element.community_name,
      element.username,
      element.img,
      element.post_date,
      element.title,
      element.post_text,
      element.vote,
    );
  });
};

// function to change save btn text content and save form action
const changeSaveForm = () => {
  fetchData('/saved', (data) => {
    if (data.length) {
      const idArray = data.map((elem) => elem.id);
      const saveFormText = document.querySelectorAll('.post-option-save');
      const savedForm = document.querySelectorAll('.save-form');
      savedForm.forEach((elem, index) => {
        const postId = Number(elem.action.split('-post/')[1]);
        if (idArray.includes(postId)) {
          saveFormText[index].textContent = 'Unsave';
          savedForm[index].action = `/unsave-post/${postId}`;
        }
      });
    }
  }, () => {});
};
