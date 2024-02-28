document.addEventListener('DOMContentLoaded', () => {
    /* tab */
    const tabItems = document.querySelectorAll('.tab_btn > li');
    const tabContents = document.querySelectorAll('.tab_content > div');

    tabItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            tabItems.forEach(tabItem => tabItem.classList.remove('active'));
            item.classList.add('active');

            tabContents.forEach(content => content.style.display = 'none');
            tabContents[index].style.display = 'block';
        });
    });

    /* answer slidedown */
    const downBtn = document.querySelector('.down_btn');
    // const downBtnImages = document.querySelector('.down_btn');
    // const answer = document.querySelector('.answer');
    // answer.style.display = 'none';

    downBtn.addEventListener('click', () => {
        const answer = document.querySelector('.answer');
        const downBtnSrc = downBtn.getAttribute('src');

        // downBtn.setAttribute('src', downBtnSrc.includes('down.jpg') ? downBtnSrc.replace('down.jpg', 'up.jpg') : downBtnSrc.replace('up.jpg', 'down.jpg'));

        if(downBtnSrc.includes('down.jpg')){
            console.log('1');
            downBtn.setAttribute('src', downBtnSrc.replace('down.jpg', 'up.jpg'))
            answer.style.display = 'none';

        }else{
            console.log('2');
            downBtn.setAttribute('src', downBtnSrc.replace('down.jpg', 'up.jpg'))

            downBtnSrc.replace('up.jpg', 'down.jpg');
            answer.style.display = 'block';
        }
    });
});
