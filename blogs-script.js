const searchBar = document.getElementById("article-search-bar");
const specificArticles = document.querySelectorAll('.specific-articles');

searchBar.addEventListener("input", (searchValue) => {
    let value = searchValue.target.value;

    for(let i of specificArticles){
        let titleOfArticle = i.children[1].children[0].textContent.toLowerCase().includes(value.toLowerCase());
        let authorOfArticle = i.children[1].children[1].textContent.toLowerCase().includes(value.toLowerCase());
        if((!titleOfArticle) && (!authorOfArticle)){
            i.style.display = "none";
        }else if(i.style.display == "none"){
            i.style.display = "flex";
        }
    }
});

console.log(specificArticles[0].children[1].children[1].textContent.toLowerCase());