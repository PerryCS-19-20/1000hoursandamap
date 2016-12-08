function buildMap(siteMapWrapper){
    
    //makes box named "id" and gets the element within "siteMapWrapper"
 var id = document.getElementById(siteMapWrapper);
    //makes box named "map" and creates an unordered list
 var map = document.createElement("ul");
    //?
 map.id = "map";
 
 //takes the element "ul" from the map variable and adds it to the end of "id" 
 id.appendChild(map);
 
 //list
  
  addListItem("La Casa", "home", "index.html", "sitemap");
  addListItem("Biography", "bio", "bio.html", "sitemap");
  addListItem("Proyectos de Clase", "Class Projects", null, "sitemap");
 
 //
 
 var classProjectStuff = document.CreateElement("ul");
    //This gets the the element Id from itself???
 var cProjects = document.getElementById(cProjects);
 
 //let's make a list under Class Projects!!!
 
 addListItem("Spantag and Jscript Events", "Spanttag and Jscript Events", "thoughts.html", "cProjectsList");
 addListItem("Javascript Game", "Breakout", "game.html", "cProjectsList");
 addListItem("POPUP", "popup", "popup.html", "cProjectsList");
 addListItem("Modifying w/ Javascript", "jscript mods", "htmltest.html", "cProjectsList");
 addListItem("Creating Elements", "to-do list", "todolist.html", "cProjectsList");
 addListItem("Chalkboard", "chalkboard", "chalkboard.html", "cProjectsList");
 addListItem("TicTacToe", "tictactoe", "tictactoe.html", "cProjectsList");
 addListItem("Multiplaction Table", "math stuff", "tablex.html", "cProjectsList");
 
}

function addListItem(itemName, itemId, itemLink, parentId)[

]
