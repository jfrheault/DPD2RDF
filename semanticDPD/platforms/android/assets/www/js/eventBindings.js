/* eventBindings.js */

//Fonction qui est callee une seule fois dans $document.ready() function et qui bind les events sur les bons objets

function eventBindings(){
  
  $(document).on("keyup",".sBar", function() {
    controller.autoCompleteSearch($(this).val());
  });

  $(document).on("click", ".uriButton", function(){
    controller.describeURI($(this).attr('uri'));
    $.mobile.navigate("#describePage", {transition : "slide"});
    return false;
  });

}
