// FUNCTION TO HANDLE NEW COMMENTS
async function newCommentHandler(event) {
    event.preventDefault();
  
    console.log("clicked me");
  
    const comment_body = document.getElementById("comment").value.trim();
    // GET THE BLOG POST ID FROM THE URL
    const url = window.location.toString().split("/");
    const blogPost_id = url[url.length - 1];
  
    if (comment_body) {
      const response = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({
          blogPost_id,
          comment_body,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  // THIS IS AN EVENT LISTENER FOR THE COMMENT FORM
  console.log("HERE!");
  console.log(document.getElementById("comment-form"));
  document
    .getElementById("comment-form")
    .addEventListener("submit", newCommentHandler);