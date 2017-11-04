
document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate(e) {
    var siteName=document.getElementById("name").value;
    var siteUrl=document.getElementById("url").value;

var bookmark = {
name: siteName,
URL: siteUrl
}
if(localStorage.getItem('bookmarks')===null){

  var bookmarks =[];
  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));   
}
  else{
    var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);
  }
       e.preventDefault(); 
}

      function my(){
 var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
var results=document.getElementById('results');
results.innerHTML ='';
for(var i=0;i<bookmarks.length;i++){
var name=bookmarks[i].name;
var url=bookmarks[i].url;
results.innerHTML+='<div class="well">'+
'<h3>'+name+
'<a class="btn btn-success" target="_blank" href="'+url+'">Visit</a> '
'<a class="btn btn-danger"  href="'+url+'">Visit</a> '
'</h3>'+'</div>' ;
}
       }
 
