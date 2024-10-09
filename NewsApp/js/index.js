
document.getElementById('image').src = localStorage.getItem('img');

const displayNews = (add) => {

    const newsDataDiv = document.getElementById('newsData');
    newsDataDiv.innerHTML = "";

    add.map((ele, index) => {
        let title = document.createElement("h3");
        title.textContent = ele.title;

        let img = document.createElement("img");
        img.src = ele.image;

        let description = document.createElement("p");
        description.textContent = ele.description

        let div = document.createElement("div");
        div.append(title, img, description);

        newsDataDiv.append(div);
    });
};s
displayNews(add);

