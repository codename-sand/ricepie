document.addEventListener('DOMContentLoaded', function() {
    var qnaListItems = document.querySelectorAll('.qnalist li');

    qnaListItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var qnaContent = this.querySelector('.qnacontent');
            qnaContent.style.display = qnaContent.style.display === 'none' || qnaContent.style.display === '' ? 'block' : 'none';
        });
    });
});
