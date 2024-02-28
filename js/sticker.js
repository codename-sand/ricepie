document.addEventListener('DOMContentLoaded', function() {
    var replyForms = document.querySelectorAll('.detail_comment_list form');

    replyForms.forEach(function(form) {
        form.style.display = 'none';
    });

    var replyButtons = document.querySelectorAll('.reply');

    replyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var nextSibling = this.parentElement.nextElementSibling.nextElementSibling;
            if (nextSibling.style.display === 'none' || nextSibling.style.display === '') {
                nextSibling.style.display = 'block';
            } else {
                nextSibling.style.display = 'none';
            }
        });
    });
});
