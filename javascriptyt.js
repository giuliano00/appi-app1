let key="AIzaSyAiKq69zlkGWrwQyWr46SVefw42K8kq-zU";
let idCanal="UCekiUWTObDKZnaeS-reYQbg";
let resPorPagina=5;
let url="https://www.googleapis.com/youtube/v3/search?key=" + key + "&channelId=" + idCanal + "&part=snippet,id&order=date&maxResults=" + resPorPagina;
let xmlhttp=new XMLHttpRequest();
xmlhttp.open('GET',url,true);
xmlhttp.send();
xmlhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        let data=JSON.parse(this.responseText);
        console.log(data);
        for(var i=0;i<data.items.length;i++){
            console.log(data.items[i].snippet.title);
        }

    }

}
//links
//https://www.youtube.com/watch?v=qbsNAuyo2pM
// pagina de visualización del proyecto con json
//https://www.googleapis.com/youtube/v3/search?key=AIzaSyAiKq69zlkGWrwQyWr46SVefw42K8kq-zU&channelId=UCekiUWTObDKZnaeS-reYQbg&part=snippet,id&order=date&maxResults=5