// Listen for form submit
document.getElementById('myBtn').addEventListener('click', saveBookmark);


function saveBookmark(e){
  
  var siteName =document.getElementById('siteName').value;
  var siteUrl =document.getElementById('siteUrl').value;

 

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  
  
  if(localStorage.getItem('bookmarks') === null){
  
    var bookmarks = [];
 
    bookmarks.push(bookmark);
   
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
   
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
   
    bookmarks.push(bookmark);
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  document.getElementById('myForm').reset();


  my();

  e.preventDefault();
}

function deleteBookmark(url){

  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


  my();
}

function my(){

  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');


  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
  }
}


