const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  const div = document.createElement("div");
  const icon = document.createElement("i");
  const span = document.createElement("span");
  const div2 = document.createElement("div");
  const span2 = document.createElement("span");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  div.className = "video__comment-left";
  icon.className = "fas fa-comment";
  span.innerText = ` ${text}`;
  div.className = "video__comment-right";
  span2.innerText = "❌";
  div.appendChild(icon);
  div.appendChild(span);
  newComment.appendChild(div);
  div2.appendChild(span2);
  newComment.appendChild(div2);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  textarea.value = "";
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

const handleDeleteComment = () => {
  alert("Delete Comment");
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}
