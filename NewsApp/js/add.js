
document.getElementById('addNews').addEventListener('submit', (e) => {
    e.preventDefault();

    const add = JSON.parse(localStorage.getItem('news')) || [];
    const newsDetails = {
        title: document.getElementById('title').value,
        image: document.getElementById('imge').value,
        description: document.getElementById('content').value
    };

    add.push(newsDetails);
    localStorage.setItem('news', JSON.stringify(add));

    window.location.href = '/index.html';
});
