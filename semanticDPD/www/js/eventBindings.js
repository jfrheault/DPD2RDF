/* eventBindings.js */

//Fonction qui est callee une seule fois dans $document.ready() function et qui bind les events sur les bons objets

function eventBindings(){
  
  $(document).on("keyup",".sBar", function() {
    controller.autoCompleteSearch($(this).val());
  });
  $(document).on("click", ".uriButtondefault", function(){
		controller.updateMappings(mappingObj);
    controller.describeURI($(this).attr('uri'));
    $.mobile.navigate("#describePage", {transition : "slide"});
    return false;
  });

  $(document).on("click", ".uriButtonatc", function(){
		controller.updateMappings(atcMap);
    controller.describeATC($(this).attr('uri'));
    $.mobile.navigate("#describePage", {transition : "slide"});
    return false;
  });
  $(document).on("click", ".uriButtondin", function(){
		controller.updateMappings(dinMap);
    controller.describeDIN($(this).attr('uri'));
    $.mobile.navigate("#describePage", {transition : "slide"});
    return false;
  });
  $(document).on("click", ".uriButtondrugbank", function(){
		controller.updateMappings(drugBankMap);
    controller.describeDrugBank($(this).attr('uri'));
    $.mobile.navigate("#describePage", {transition : "slide"});
    return false;
  });

}
