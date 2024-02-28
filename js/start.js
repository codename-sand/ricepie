document.addEventListener('DOMContentLoaded', function() {
    var infoView = document.querySelector('.info_view');
    var qnaClick = document.querySelector('.qna_click');

    infoView.style.display = 'none';

    qnaClick.addEventListener('click', function() {
        if (infoView.style.display === 'none' || infoView.style.display === '') {
            infoView.style.display = 'block';
        } else {
            infoView.style.display = 'none';
        }
    });
});
