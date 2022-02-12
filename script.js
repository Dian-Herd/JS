const inputKeyword = document.querySelector('.input-keyword');
console.log(inputKeyword.value);
inputKeyword.addEventListener('keyup', async function(){
    try{
        const news = await getNews(inputKeyword.value);
        updateNews(news);
    } catch(err){
        document.querySelector('.cards-container').innerHTML = err;
    };
});

function getNews(keyword){
    return fetch('https://newsapi.org/v2/top-headlines?q='+ keyword +'&country=id&apiKey=9b16c48b13dd488ba1b525afb2e12a51')
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if(response.totalResults === 0){
                throw new Error(showError());
            }
            return response.articles;
        });
};

function updateNews(news){
    let cards = '';
    news.forEach(n => {
        cards += showNews(n);
    });
    document.querySelector('.cards-container').innerHTML = cards;
};

function showNews(n){
    return `<!-- cards -->
                <div class="col-md-4 my-4">
                    <div class="card">
                        <img src="${n.urlToImage}" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">${n.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${n.author} - ${n.publishedAt}</h6>
                        <p class="card-text">${n.description}</p>
                        <a href="#" class="btn btn-primary readmore-button">Read More...</a>
                        </div>
                    </div>
                </div>`;
};

function showError(){
    return `<!-- error -->
                <div class="alert alert-danger" role="alert">
                Berita tidak ditemukan!
                </div>`;
};