const newFormHandler = async (event) => {
  event.preventDefault();

// post handler

  const title = document.querySelector("#post-title").value.trim();
  console.log(title);
  const content = document.querySelector("#post-desc").value.trim();
  console.log(content);
  if (title && content) {
    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post");
    }
  }
};

// delete button form handler

const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('data-id')) {
		const id = event.target.getAttribute('data-id');

		const response = await fetch(`/api/post/${id}`, {
			method: 'DELETE',
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to delete review!');
		}
	}
};

// query selectors

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

  document
	.querySelector('.post-list')
	.addEventListener("click", delButtonHandler);
