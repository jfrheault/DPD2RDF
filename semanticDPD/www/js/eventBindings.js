/* eventBindings.js */

//Fonction qui est callee une seule fois dans $document.ready() function et qui bind les events sur les bons objets

function eventBindings(){
  
  $(document).on("keyup",".sBar", function() {
    controller.autoCompleteSearch($(this).val());
  });
  $(document).on("click", ".uriButtondefault", function(){
		controller.updateMappings(wikiMap);
    controller.describeURI($(this).attr('uri'));
    $.mobile.navigate("#describePage", {transition : "slide"});
		$("#logo").html("<img src='img/wikipedia_icon.png'>Wikipedia</img>")
    return false;
  });

  $(document).on("click", ".uriButtoning", function(){
		controller.updateMappings(ingMap);
    controller.describeING($(this).attr('uri'));
		$("#logo").html("<img src='img/dpd_icon.png'>DPD</img>")
    $.mobile.navigate("#describePage", {transition : "slide"});
    return false;
  });
  $(document).on("click", ".uriButtondin", function(){
		controller.updateMappings(dinMap);
    controller.describeDIN($(this).attr('uri'));
    $.mobile.navigate("#describePage", {transition : "slide"});
		$("#logo").html("<img src='img/dpd_icon.png'>DPD</img>")
    return false;
  });
  $(document).on("click", ".uriButtondrugBank", function(){
		controller.updateMappings(drugBankMap);
    controller.describeDrugBank($(this).attr('uri'));
		$("#logo").html("<img src='img/drugBank_icon.png'>DrugBank</img>")
    $.mobile.navigate("#describePage", {transition : "slide"});
    return false;
  });

}
