var book1 = {
  author: "Daniel Dennet",
  title: "Elbow Room",
  pages: 218,
  year: 1984,
  publisher: "MIT Press",
}

var book2 = {
  author: "Christopher Hitchens",
  title: "Hitch 22",
  pages: 448,
  year: 2011,
  publisher: "Twelve",
}

function book_title(b) {
  //alert(book_title);
  delete b.title; //this interferes with the next line.
  document.getElementById("dictionary").innerHTML = b.title; //this should return 'undefined'since the KVP was deleted above
}