function rate(stars) {
  document.getElementById('rating-result').innerText = `You rated us ${stars} star${stars > 1 ? 's' : ''}! Thank you!`;
}

function postComment() {
  const commentInput = document.getElementById('commentInput');
  const commentText = commentInput.value.trim();

  if (commentText !== '') {
    const commentDiv = document.getElementById('comments');
    const newComment = document.createElement('p');
    newComment.textContent = commentText;
    commentDiv.appendChild(newComment);
    commentInput.value = '';
  } else {
    alert('Please write a comment before posting.');
  }
}