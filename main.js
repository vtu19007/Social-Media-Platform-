// static/js/main.js

// Example: Handling like button click
document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postId = button.getAttribute('data-post-id');
            handleLike(postId);
        });
    });

    function handleLike(postId) {
        // Implement logic to send like request to backend (AJAX/fetch)
        fetch(`/like/${postId}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
            body: JSON.stringify({}),
        })
        .then(response => {
            if (response.ok) {
                // Update UI to reflect like status
                button.innerHTML = 'Liked';
                button.disabled = true;
            } else {
                console.error('Failed to like post.');
            }
        })
        .catch(error => {
            console.error('Error occurred while liking post:', error);
        });
    }

    // Function to get CSRF cookie for Django
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});
