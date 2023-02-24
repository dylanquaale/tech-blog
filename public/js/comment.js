// comment formhandler here 

const commentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = document.querySelector('.new-comment-form').dataset.postid;
    const comment_text = document.querySelector('#comment_text').value.trim();
    console.log(post_id, comment_text)
    if (comment_text) {
		await fetch('/api/comment', {
			method: 'POST',
			body: JSON.stringify({
				post_id,
				comment_text,
			}),
            headers: {
				'Content-Type': 'application/json'
			}
        });

		console.log(comment_text)
		document.location.reload();
	}
};

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);
