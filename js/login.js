document.addEventListener('DOMContentLoaded', function() {
    var account = document.querySelector('.account');
    var idInput = document.querySelector('.id');
    var pwInput = document.querySelector('.pw');
    var accountForId = document.querySelector('.accountForId');
    var accountForPw = document.querySelector('.accountForPw');
    var hideButton = document.querySelector('.hide');

    account.style.display = 'none';

    accountForId.addEventListener('click', function() {
        account.style.display = 'block';
        idInput.style.display = 'block';
        pwInput.style.display = 'none';
    });

    accountForPw.addEventListener('click', function() {
        account.style.display = 'block';
        pwInput.style.display = 'block';
        idInput.style.display = 'none';
    });

    hideButton.addEventListener('click', function() {
        account.style.display = 'none';
        return false;
    });
});
