/* The controller is a switchman that will receive input from user and will call the right objects to update the application */


/* 

   Constructor: Instanciate every javascript objects for the application

   Arguments:
   mappingObj (to be deprecated): the mapping for the current database

   Return:
   NA
*/
// TODO: Called with mapping obj right now, but it should be called without any argument
// TODO: It should fetch the right mappings after the user selects it's database
function Controller() {
  this.RESTendpoint = "http://mobile.bio2rdf.org/";
  this.translator = new Translator(mappingObj);
  this.viewer = new Viewer();
  this.queryer = new Queryer();
  this.currentNamespace = "dpd";
}

/*

  After changing database, we need to update the mapping.
  The viewer will be updated correctly.

  Arguments:
  mappingObj: The new mapping object.
  
  Return:
  NA
*/
// TODO: To deprecated once we have a switchDatabase function
Controller.prototype.updateMappings = function(mappingObj) {
  if (this.translator == undefined) {
    this.translator = new Translator(mappingObj);
  } else {
    this.translator.updateMappings(mappingObj);
  }
}

/*

  Update viewer by calling a DESCRIBE with an URI

  Arguments:
  uri: The URI to parse.
  
  Return:
  NA
*/
Controller.prototype.describeURI = function(uri) {
	console.log("describeURI");
  this.fetchURL(this.queryer.buildDescribe(this.currentNamespace, "describe", uri));
}

Controller.prototype.describeATC = function(uri) {
	console.log("describeATC");
  this.fetchURL(this.queryer.buildDescribe(this.currentNamespace, "describeATC", uri));
}

Controller.prototype.describeDIN = function(uri) {
	console.log("describeDIN");
  this.fetchURL(this.queryer.buildDescribe(this.currentNamespace, "describeDIN", uri));
}

Controller.prototype.describeDrugBank= function(uri) {
	console.log("describeDrugBank");
  this.fetchURL(this.queryer.buildDescribe(this.currentNamespace, "describe", uri));
}

/*

  Parse a JSONLD and refresh the page.

  Arguments:
  jsonLD: The JSONLD to parse.

  Return:
  NA
*/
Controller.prototype.parseJSONLD = function(jsonLD) {
 // console.log("jsonLD: " + jsonLD);
  this.viewer.refreshPage(this.translator.translate(jsonLD));
}


Controller.prototype.mappertoolUpdate = function() {
  if ($("#mappingInput").val() != "") {
    mappingObj=$.parseJSON($("#mappingInput").val());
    controller.updateMappings(mappingObj);
  }
  if ($("#url").val() != "") {
    url=$("#url").val();
  }
  $.ajax({
    url: url,
    dataType: "jsonp",
    success: function(data) {
 //     console.log(data);
      controller.parseJSONLD(data);
    }
  });
}



/*

  autoCompleteSearch :
  Make a request to endpoint for a kword

  Arguments:
  kword : kword from html search box

  Return:
  NA
*/
Controller.prototype.autoCompleteSearch = function(kword) {

  //console.log(kword);

  var urlConfig = { "namespace" : this.currentNamespace,
                    "method" : "search_all",
                    "format" : "json-ld",
                    "parameters" : {
                      "parm1" : kword
                    }
                  };

  $.ajax({
    url: this.buildRESTurl(urlConfig),
    context: this,
    dataType: "jsonp"
  }).done(function(data){
    //console.log(data);
    this.viewer.buildSearchListItems(data);
  });
  
}



/*

  Queryer * can be a class on its own ?

  Build the REST url needed for a controller
  to build the ajax query and call the viewer

  Arguments:

  urlConfig = { "namespace" : this.currentNamespace,
    "method" : "search_ns",
    "format" : "json-ld",
    "parameters" : {
      "parm2" : "DOID",
      "parm1" : kword
    }
  };

  Return:
  encoded URI
*/
Controller.prototype.buildRESTurl = function (urlConfig) {
  
  var params = "";
  for (var k in urlConfig.parameters) {
    if(params.length > 0){
      params += "&";
    }
    params += k + "=" + urlConfig.parameters[k];
  }
  
  var url = this.RESTendpoint.concat(urlConfig.namespace, "/", 
                                     urlConfig.method, "/", 
                                     urlConfig.format, "?",
                                     params
                                    );
  return encodeURI(url);
}


/*

  Update viewer by fetching data from a rest URL.

  Arguments:
  uri: The URI to parse.
  
  Return:
  NA
*/
Controller.prototype.fetchURL = function(restURL) {
  $.ajax({
    url: restURL,
    context: this,
    dataType: "jsonp"
  }).done(function(data){
    //console.log(data);
    this.parseJSONLD(data);
  });
}




/*

  Update viewer by fetching data from a rest URL.

  Arguments:
  uri: The URI to parse.
  
  Return:
  NA
*/
Controller.prototype.getLabel = function(uri) {
  var urlConfig = { "namespace" : this.currentNamespace,
                    "method" : "get_label",
                    "format" : "json-ld",
                    "parameters" : {
                      "uri" : uri
                    }
                  };

  $.ajax({
    url: this.buildRESTurl(urlConfig),
    context: this,
    dataType: "jsonp"
  }).done(function(data){
    return data["rdfs:label"];
  });
}

function getLitteral(obj) {
	var value = "Unknown"
	if (typeof obj == "object") {
		if($.isArray(obj) == true){
			for(var i=0; i < obj.length; i++){
				if (obj[i]["@language"] == "en") {
					value=obj[i]["@value"]
				}
			}
		}
		if($.isArray(obj) == false){
			value=obj["@value"]
		}
	}
	if (typeof obj != "object") {
		value=obj
	}
	if (obj == undefined) {
		value="Unknown: Undefined"
	}
	return value;
}
