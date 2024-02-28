document.addEventListener("DOMContentLoaded", function() {
    /* images tab */
    var imgTabItems = document.querySelectorAll('.img_tab > li');
    var imgAreaImages = document.querySelectorAll('.img_area > images');

    imgTabItems.forEach(function(item, i) {
        item.addEventListener("click", function() {
            imgTabItems.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');

            imgAreaImages.forEach(function(image) {
                image.style.display = 'none';
            });
            imgAreaImages[i].style.display = 'block';
        });
    });

    /* detail tab */
    var tabBtnItems = document.querySelectorAll('.tab_btn > li');
    var tabContentDivs = document.querySelectorAll('.tab_content > div');

    tabBtnItems.forEach(function(item, i) {
        item.addEventListener("click", function() {
            tabBtnItems.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');

            tabContentDivs.forEach(function(div) {
                div.style.display = 'none';
            });
            tabContentDivs[i].style.display = 'block';
        });
    });

    var popup = document.querySelector('.popup');
    popup.style.display = 'none';

    /* review */
    var reviewListItems = document.querySelectorAll('.reviewlist > li');

    reviewListItems.forEach(function(item) {
        item.addEventListener("click", function() {
            var detail = this.querySelector('.detail');
            if (detail.style.display === 'none' || detail.style.display === '') {
                detail.style.display = 'block';
            } else {
                detail.style.display = 'none';
            }
        });
    });

    var writeButton = document.querySelector('.review .write_button');
    writeButton.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector('.review_popup').style.display = 'block';
    });

    var hideButtons = document.querySelectorAll('.hide');
    hideButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector('.review_popup').style.display = 'none';
            document.querySelector('.qna_popup').style.display = 'none';
        });
    });

    /* qna */
    var qnaItems = document.querySelectorAll('.qna > ul > li');

    qnaItems.forEach(function(item) {
        item.addEventListener("click", function() {
            var qnaContent = this.querySelector('.qnacontent');
            if (qnaContent.style.display === 'none' || qnaContent.style.display === '') {
                qnaContent.style.display = 'block';
            } else {
                qnaContent.style.display = 'none';
            }
        });
    });

    var qnaWriteButton = document.querySelector('.qna .write_button');
    qnaWriteButton.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector('.qna_popup').style.display = 'block';
    });
});
