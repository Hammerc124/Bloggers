//PURPOSE: ALLOW THE USER TO EDIT BLOG POSTS FROM THE BLOG POST PAGE
let blogPost = window.location.pathname.split("/");
const submitEdit = async (event) => {
  event.preventDefault();
  const title = document.getElementById("titleInput").value;
  const description = document.getElementById("bodyInput").value;

  if (title && description) {
    const response = await fetch(`/api/blogPost/${blogPost[2]}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.assign("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const submitButton = document.getElementById("submitEdit");

// THIS IS AN EVENT LISTENER
submitButton.addEventListener("submit", submitEdit);