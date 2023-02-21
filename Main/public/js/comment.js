const commentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = document.querySelector('.new-comment-form').dataset.postid;
    const comment_text = document.querySelector('#comment_text').value.trim();
    
    if (comment_text) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				post_id,
				comment_text,
			}),
            headers: {
				'Content-Type': 'application/json'
			}
        });
		document.location.reload();
	}
};

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);
