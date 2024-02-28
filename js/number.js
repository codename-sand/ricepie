document.addEventListener('DOMContentLoaded', function() {
    /* Create quantity buttons */
    var quantityInputs = document.querySelectorAll('.quantity input');

    quantityInputs.forEach(function(input) {
        var quantityNav = document.createElement('div');
        quantityNav.className = 'quantity-nav';
        quantityNav.innerHTML = '<div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div>';
        input.parentNode.insertBefore(quantityNav, input.nextSibling);

        var spinner = input.parentNode;
        var btnUp = spinner.querySelector('.quantity-up');
        var btnDown = spinner.querySelector('.quantity-down');
        var min = parseFloat(input.getAttribute('min')) || 1;
        var max = parseFloat(input.getAttribute('max')) || Infinity;

        btnUp.addEventListener('click', function() {
            var oldValue = parseFloat(input.value);
            var newVal = oldValue >= max ? oldValue : oldValue + 1;
            input.value = newVal;
            input.dispatchEvent(new Event('change'));
        });

        btnDown.addEventListener('click', function() {
            var oldValue = parseFloat(input.value);
            var newVal = oldValue <= min ? oldValue : oldValue - 1;
            input.value = newVal;
            input.dispatchEvent(new Event('change'));
        });
    });
});
