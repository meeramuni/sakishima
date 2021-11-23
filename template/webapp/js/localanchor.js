/* 
This allows anchors to be pointed to from the current page rather than the base
*/
document.addEventListener('DOMContentLoaded', function(){
  var es = document.querySelectorAll("a.local");
  for(var i=0; i<es.length; i++){
    es[i].addEventListener('click', function(e) {
      e.preventDefault()
      document.location.hash = e.target.getAttribute('href')
    })
  }
})