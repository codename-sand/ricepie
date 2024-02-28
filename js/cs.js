document.addEventListener("DOMContentLoaded", function() {
    var tabBtns = document.querySelectorAll('.tab_btn > div');
    var eventImages = document.querySelectorAll('.event_img > images');

    tabBtns.forEach(function(btn, i) {
        btn.addEventListener("click", function() {
            tabBtns.forEach(function(btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            eventImages.forEach(function(image) {
                image.style.display = 'none';
            });
            eventImages[i].style.display = 'block';
        });
    });
});
