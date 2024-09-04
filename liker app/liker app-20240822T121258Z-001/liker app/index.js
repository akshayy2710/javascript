let likeCount = Number(localStorage.getItem("likeCount") || 0);
const likeCountSpan = document.getElementById("LikeCount");
likeCountSpan.innerHTML = likeCount;
document.getElementById("like").addEventListener("click", () => {
  likeCount ++;
  likeCountSpan.innerHTML = likeCount;
  localStorage.setItem("likeCount", likeCount);
});

let CommentCount = Number(localStorage.getItem("commentCount")|| 0);
const commentCountSpan = document.getElementById("CommentCount");
commentCountSpan.innerHTML = CommentCount;
document.getElementById("comment").addEventListener("click", () => {
  CommentCount ++;
  commentCountSpan.innerHTML = CommentCount;
  localStorage.setItem("commentCount", CommentCount);
});

let shareCount = Number(sessionStorage.getItem("share")|| 0);
const shareCountSpan = document.getElementById("ShareCount");
shareCountSpan.innerHTML = shareCount;

document.getElementById("share").addEventListener("click", () => {
  shareCount++;
  shareCountSpan.innerHTML = shareCount;
  sessionStorage.setItem("shareCount", shareCount);
});

document.getElementById('followBtn').addEventListener('click', function() {
  const btn = this;

  if (btn.classList.contains('following')) {
    btn.classList.remove('following');
    btn.innerHTML = 'Follow';
  } else {
    btn.classList.add('following');
    btn.innerHTML = 'Following';
  }
});