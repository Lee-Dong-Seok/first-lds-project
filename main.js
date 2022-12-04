let news = []
const getLatestNews = async() =>{
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business`);
    let header = new Headers({'x-api-key':'_jbgtmsDiGy9uPagOp1D4OeeSWg10ro9smG4NwjHddg'})

    let response = await fetch(url,{headers:header});
    let data = await response.json()
    console.log("this is data", data);
    news = data.articles
    console.log(news)
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
getLatestNews();