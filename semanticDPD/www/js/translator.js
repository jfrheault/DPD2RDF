/* 

   Constructor

   Arguments:
   mappingObj: the mapping for the current database.

   Return:
   NA
*/
function Translator(mappingObj) {
  this.mappingObj = mappingObj;
}

Translator.prototype.updateMappings = function(mappingObj) {
  this.mappingObj = mappingObj;

}

/* 

   Translate a jsonld into a page object using current database mapping.

   Arguments:
   jsonld: The jsonld to translate.

   Return:
   pageObject: The page object that will be consumed by the viewer.
   
*/
Translator.prototype.translate = function(jsonld) {
  console.log(jsonld);
  context = jsonld["@context"]
  atIdObject = {}
  this.extractContext(context,atIdObject);


  pageObject = {};

  // Parse HEADER data
  pageObject['header'] = [];
  for (var i in this.mappingObj.header) {
    for (var key in mappingObj.header[i]){

      var predicate = this.mappingObj.header[i][key];
      var elem = {};
      elem[key] = jsonld[predicate];
      pageObject['header'].push(elem);
    }
  }

  // Parse SECTION data
  // Ajouter les sections
  pageObject['sections'] = [];
  for (var i in mappingObj.sections) {
    //	console.log("section: " + section[0].label)
    // Aller chercher le label de la section
    var section_label = this.mappingObj.sections[i].label	
    pageObject['sections'].push({"label" : section_label, "containers" : []})
    for (var j in this.mappingObj.sections[i].containers) {
      var label = this.mappingObj.sections[i].containers[j].label
      var type = this.mappingObj.sections[i].containers[j].itemType
      var predicate = this.mappingObj.sections[i].containers[j].match
      var elem = { "label" : label, "itemType" : type, "items" : [] }
      // il faut checker le type
      if (type == "literal") {
				elem.items = jsonld[predicate]
      }
      else if (type == "uri") {
				if ($.isArray(jsonld[predicate]) == false ) {
					var label = jsonld[predicate]["@id"]
					var idA = jsonld[predicate]["@id"].split(":")
					var uri = context[idA[0]] + idA[1];
					var obj = { "label" : label, "uri" : uri };
					elem.items.push(obj);
				}
				if ($.isArray(jsonld[predicate]) == true ) {
					for (var k in jsonld[predicate]) {
						var label = jsonld[predicate][k]["@id"]; // TODO: ask queryer for label
						var idA = jsonld[predicate][k]["@id"].split(":");
						var uri = context[idA[0]] + idA[1];
						console.log(idA[0]);
						console.log(idA[1]);
						var obj = { "label" : label, "uri" : uri };
						elem.items.push(obj);
					}
				}
      }
      // ajouter elem
      pageObject['sections'][i].containers.push(elem)
    }
  }
  return pageObject; 
}


/*

  Extract JSONLD context from jsonld to simple object

  Arguments:
  context : data["@context"] from jsonld REST called
  atIdObject : empty json obj. to populate

  Return:
  NA
*/
Translator.prototype.extractContext = function(context, atIdObject) {
  for (var index in context){
    // console.log(index);
    atIdObject[index] = context[index];
  }
}
