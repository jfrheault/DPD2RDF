/* The main role of the queryer is to build request (i.e.: build the html request) */

/* 

Constructor:

Arguments:
  NA

Return:
  NA
*/
function Queryer() {
  this.sparqlPoint = "http://mobile.bio2rdf.org";
}


/*

Build a DESCRIBE request

Arguments:
  namespace: the name of the database to query
  uri: the uri to describe
  
Return:
  restURL: the URL ready to be queryed
*/
Queryer.prototype.buildDescribe = function(namespace, uri) {
  return this.sparqlPoint + "/" + namespace + "/describe/json-ld?uri=" + uri;
}

/*

Dummy function to test getJSON

Arguments:
  NA
  
Return:
  NA
*/
Queryer.prototype.testRequest = function() {
  restURL = "http://mobile.bio2rdf.org/ontobee/describe/json-ld?uri=http://purl.obolibrary.org/obo/DOID_2841";
  console.log("def: " + restURL);
  $.ajax({
    url: restURL,
    dataType: "jsonp",
    success: function(data) {
      console.log(data);      
    }
  });

}
