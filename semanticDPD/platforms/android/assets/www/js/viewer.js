/*

  Constructor

  Arguments:
  NA

  Return:
  NA
*/
function Viewer() {
  this.pageTagList=["searchPage","describePage","aboutPage"];
  this.generateHeaders();
  this.generateFooters();
	/*for (var i=0; i < this.pageTagList.length ;i++){*/
	/*$("#"+this.pageTagList[i]).trigger('refresh');*/
	/*}*/
}



/*

  Generate the headers html code. Goal : Clean index code from unnessesary html

  Arguments:
  NA

  Return:
  NA
*/
Viewer.prototype.generateHeaders = function(){
  var headerHTML = '<!-- HEADER HTML -->'
    +' 	<div id="header" data-position="fixed" data-id="persistent" class="ui-state-persist" data-role="header" data-theme="c">'
    +'     <div data-role="popup" id="popupLogo" class="ui-content" style="overflow-y:scroll;">'
    +'       <fieldset data-role="controlgroup" data-theme="b" id="dbPick" data-mini="true">'
    +'         <input type="radio" name="radio-choice" id="radio-bio2rdf" value="bio2rdf" checked="true" />'
    +'         <label for="radio-bio2rdf" style="text-align:center"><img src="img/bio2rdf.png" width="100px"></label>'
    +'         <input type="radio" name="radio-choice" id="radio-go" value="go" />'
    +'         <label for="radio-go" style="text-align:center"><img src="img/go.png" width="100px"></label>'
    +'         <input type="radio" name="radio-choice" id="radio-do" value="do" />'
    +'         <label for="radio-do" style="text-align:center"><img src="img/do.png" width="100px"></label>'
    +'         <input type="radio" name="radio-choice" id="radio-chebi" value="chebi" />'
    +'         <label for="radio-chebi" style="text-align:center"><img src="img/chebi.png" width="100px"></label>'
    +'       </fieldset>'
    +'     </div>'
    +'     <!-- Header Logo -->'
    +'     <h1 style="text-align:center;font-family:verdana;font-size:12px;font-style:italic">'
    +'       <a href="#popupLogo" data-rel="popup"><img id="logoHead" src="img/bio2rdf.png" width="80px"/></a>'
    +'     </h1>'
    +'     <a href="#searchPanel" id="searchButton" data-inline="true" data-icon="search" data-iconpos="notext"></a>   '
    +'     <div id="describeHeader">'
    +'       <h1 style="text-align:center"></h1>'
    +'     </div>           '
    +'   </div>';

  for (var i=0; i < this.pageTagList.length ;i++){
    /*console.log(this.pageTagList[i]);*/
    $("#"+this.pageTagList[i]).prepend(headerHTML);
    $("#"+this.pageTagList[i] + " > #header").trigger('create');
  }
}


/*

  Generate the footers html code. Goal : Clean index code from unnessesary html

  Arguments:
  NA

  Return:
  NA
*/
Viewer.prototype.generateFooters = function(){
  var describeFooterHTML = '<div id="footer" data-id="persistent" data-role="footer" data-position="fixed" data-theme="c">'
    +'<div data-role="navbar">'
    +'	<ul>'
    +'		<li><a href="#searchPage" data-transition="slide" data-direction="reverse" data-icon="search">Search</a></li>'
    +'		<li><a href="#describePage" class="ui-btn-active ui-state-persist" data-icon="bars">Content</a></li>'
    +'		<li><a href="#aboutPage" data-transition="slide" data-icon="info">About</a></li>'
    +'	</ul>'
    +' 	</div><!-- /navbar -->'
    +' </div> <!-- FOOTER -->'

  var searchFooterHTML = '<div id="footer" data-role="footer" data-id="persistent" data-position="fixed" data-theme="c">'
    +'<div data-role="navbar">'
    +'	<ul>'
    +'		<li><a href="#searchPage" class="ui-btn-active ui-state-persist"  data-icon="search">Search</a></li>'
    +'		<li><a href="#describePage" data-transition="slide" data-icon="bars">Content</a></li>'
    +'		<li><a href="#aboutPage" data-transition="slide" data-icon="info">About</a></li>'
    +'	</ul>'
    +'</div><!-- /navbar -->'
    +'</div> <!-- FOOTER -->'
  
  var aboutFooterHTML = '<div id="footer" data-role="footer" data-id="persistent" data-position="fixed" data-theme="c">'
    +'<div data-role="navbar">'
    +'	<ul>'
    +'		<li><a href="#searchPage" data-transition="slide" data-direction="reverse" data-icon="search">Search</a></li>'
    +'		<li><a href="#describePage" data-transition="slide" data-direction="reverse" data-icon="bars">Content</a></li>'
    +'		<li><a href="#aboutPage" class="ui-btn-active ui-state-persist" data-icon="info">About</a></li>'
    +'	</ul>'
    +'</div><!-- /navbar -->'
    +'</div> <!-- FOOTER -->'
  /*var historicFooterHTML =*/


  $("#describePage").append(describeFooterHTML);
  $("#describePage > #footer").trigger('create');
  $("#searchPage").append(searchFooterHTML);
  $("#searchPage > #footer").trigger('create');
  $("#aboutPage").append(aboutFooterHTML);
  $("#aboutPage > #footer").trigger('create');

}



/*

  Clear current content and repopulate the page using a page object.

  Arguments:
  pageObject: An object created by the translator with a mapping and a jsonld.
  In json format.

  Return:
  NA
*/
Viewer.prototype.refreshPage = function(pageObject) {
  $("#sections").html("");
  var header = pageObject.header;
  var sections = pageObject.sections;

  // Generation du header
  for (var index in header) {

    for (var key in header[index]){
      switch(key){
      case "title":
	$("#title").html("<h2>" + capitalize(header[index][key]) + "</h2>");
	break;
      case "id":
	$("#id").html("<h3>" + header[index][key] + "</h3>");
	break;
      case "description":
	$("#description").html("<h4>" + header[index][key] + "</h4>");
	break;
      case "namespace":
	$("#namespace").html("<h4>" + header[index][key] + "</h4>");
	break;
      case "picture":
	$("#picture").html("<img src='" + header[index][key] + "'></img>");
	break;
      default:
	console.log("Default : " + key + " " +header[index][key]);
      }
    }
  }	

  //Generation des sections
  for (var sectionIndex in sections){
    $("#sections").append("<div id='section"+sectionIndex+"' class='describeSection'>"+appendDiv(
      "h3",sections[sectionIndex].label)+"</div>");
    for (var containerIndex in sections[sectionIndex].containers){
      var container=sections[sectionIndex].containers[containerIndex];
      switch(container.itemType){
      case "literal":
	if (container.items != undefined) {
	  var capitalized=[];
	  for (var itemIndex in container.items) {
	    capitalized.push(capitalize(container.items[itemIndex]));
	  }
	  this.appendCollapsible("section"+sectionIndex,container.label,capitalized.sort());
	}
	break;
      case "uri":
	if (container.items != undefined) {
	  var uriTags=[];
	  for (var itemIndex in container.items){
	    var item=container.items[itemIndex];
	    uriTags.push("<a class='uriButton' uri='"+item.uri+"'>"+item.label+"</a>");
	  }
	  this.appendCollapsible("section"+sectionIndex,container.label,uriTags);
	}
	break;
      default:
	console.log(itemType);
      }
    }
  }
}

/*

  /*

  Add a new collapsible element in a div

  Arguments:
  divId: The id of the div in which we have to append a new collapsible.
  label: The label of the collapsible.
  itemArray: The content of the collapsible.

  Return:
  NA
*/
Viewer.prototype.appendCollapsible = function(divId, label, itemArray) {
  //function appendCollapsible(divId,label,itemArray){
  var $collapsible=$("<div data-role='collapsible' data-theme='c'>"+appendDiv("h3",label)+"</div>");
  var $listview=$("<ul data-role='listview'></ul>");
  for (var itemIndex in itemArray){
    var $item=$("<li>"+itemArray[itemIndex]+"</li>");
    $listview.append($item);
  }
  $collapsible.append($listview);
  /*$("#"+divId).append($("<div data-role='collapsible' data-theme='c'>"+appendDiv("h3",label)+"</div>"));*/
  $("#"+divId).append($collapsible);
  $("#"+divId).trigger('create');
}


/*

  Build the search List Items in searchpages

  Arguments:
  data from controller

  Return:
  NA
*/
Viewer.prototype.buildSearchListItems = function(data) {
  var $selectorContent = $("#searchPage #content");
  $selectorContent.html("");
  var $listview=$("<ul data-role='listview'></ul>");
  this.searchResultsIterator(data, $listview);
  $selectorContent.append($listview);
  $selectorContent.trigger('create');
}



/*

  Iterator over search results from search request (search_ns REST)

  Arguments:
  data : from REST called
  $listview : jquery listview to populate in the html file

  Return:
  NA
*/
Viewer.prototype.searchResultsIterator = function(data,$listview) {

  var id = "";
  var label = "";

  var context = data["@context"];
  var itemsArray = data["@graph"];
  var atIdObject = {};
  this.extractContext(data,atIdObject);

  for (var i in itemsArray){
    id = itemsArray[i]["@id"];
    label = itemsArray[i]["rdfs:label"];
    if(label ==  undefined){
      label = itemsArray[i]["oboInOwl:hasExactSynonym"];
    }
    var idA = id.split(":");
    uri = context[idA[0]] + idA[1];
    $listview.append(this.buildButton(uri,label));
  }

}


/*

  Extract JSONLD context from jsonld to simple object

  Arguments:
  context : data["@context"] from jsonld REST called
  atIdObject : empty json obj. to populate

  Return:
  NA
*/
Viewer.prototype.extractContext = function(context, atIdObject) {
  for (var index in context){
    // console.log(index);
    atIdObject[index] = context[index];
  }
}

// Build button for searcher
Viewer.prototype.buildButton = function(uri,label){
  return "<li class='uriButton' "+"uri='"+uri+"'>"+"<a>"+label+"</a></li>";
}