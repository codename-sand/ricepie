document.addEventListener('DOMContentLoaded', function() {
    var storeModal = document.querySelector('.store_modal');
    var modalImages = document.querySelectorAll('.store_modal div img');

    storeModal.style.display = 'none';

    function hideAllModalImages() {
        modalImages.forEach(function(img) {
            img.style.display = 'none';
        });
    }

    document.querySelectorAll('.store_img').forEach(function(element, index) {
        element.addEventListener('click', function() {
            storeModal.style.display = 'block';
            hideAllModalImages();
            modalImages[index].style.display = 'block';
        });
    });

    document.querySelector('.hide').addEventListener('click', function() {
        storeModal.style.display = 'none';
        return false;
    });
});
