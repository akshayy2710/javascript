

document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const imageUrl = document.getElementById('imgurl').value;
    const imageName = document.getElementById('uname').value;

    if (imageUrl && imageName) {
        localStorage.setItem('imageUrl', imageUrl);
        localStorage.setItem('imageName', imageName);

        window.location.href = '/index.html';
    } else {
        alert('Please fill out both fields.');
    }
});
