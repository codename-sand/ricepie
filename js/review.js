document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.review_area .button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var detail = this.nextElementSibling;

            if (detail.style.display === 'none' || detail.style.display === '') {
                detail.style.display = 'block';
                this.textContent = '닫기';
            } else {
                detail.style.display = 'none';
                this.textContent = '보기';
            }
        });
    });
});
