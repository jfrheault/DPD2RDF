var drugBankMap = { 
  "header" : [
     {"title": "rdfs:label"},
     {"description" : "dcterms:description"}
  ],
  "sections" : [ 
  {
     "label" : "General information",
     "containers" : [ 
     //identification
     {
        "label" : "Synonyms",   //multiple (next step:devrait etre uri)
        "itemType": "literal",
        "match" : "bm:drugbank_vocabulary:synonym"
     },  
		 /*{*/
		 /*"label" : "Brand names", //multiple, uri*/
		 /*"itemType": "literal",  */
		 /*"match" : "bm:drugbank_vocabulary:product"*/
		 /*},*/
		 /*{*/
		 /*"label" : "Brand mixtures",   //multiple, uri*/
		 /*"itemType": "literal",  */
		 /*"match" : "bm:drugbank_vocabulary:mixture"*/
		 /*},  */
     {
        "label" : "Categories",   //multiple, uri
        "itemType": "literal",  
        "match" : "bm:drugbank_vocabulary:category"
     },
     //Pharmacology
     {
        "label" : "Indication",
        "itemType": "literal",
        "match" : "bm:drugbank_vocabulary:indication"
     },  
     {
        "label" : "Pharmacodynamics",
        "itemType": "literal",  
        "match" : "bm:drugbank_vocabulary:pharmacology"
     },
     {
        "label" : "Mechanism of action",
        "itemType": "literal",  
        "match" : "bm:drugbank_vocabulary:mechanism-of-action"
     },
     {
        "label" : "Absorption",
        "itemType": "literal",  
        "match" : "bm:drugbank_vocabulary:absorption"
     },
     /*{
        "label" : "Metabolism",
        "itemType": "literal",  
        "match" : "bm:drugbank_vocabulary:biotransformation"
     },*/
     /*{
        "label" : "Route of elimination",
        "itemType": "literal",  
        "match" : "bm:drugbank_vocabulary:route-of-elimination"
     },*/
     {
        "label" : "Half life",
        "itemType": "literal",  
        "match" : "bm:drugbank_vocabulary:half-life"
     },
     {
        "label" : "Toxicity",
        "itemType": "literal",  
        "match" : "bm:drugbank_vocabulary:toxicity"
     },
     //Pharmacoeconomics
     {
        "label" : "Manufacturers", //multiple (?? vs Packagers)
        "itemType": "literal",  
        "match" : "bm:drugbank_vocabulary:manufacturer"
     },
     /*{
        "label" : "Packagers",   //multiple, uri  (?? vs Manufacturers)
        "itemType": "literal",  
        "match" : "bm:drugbank_vocabulary:packager"
     },*/
     /*{
        "label" : "Dosage forms", //multiple, uri
        "itemType": "literal",  
        "match" : "bm:drugbank_vocabulary:dosage"
     },*/
     //References
		 /*{*/
		 /*"label" : "External References", //multiple uri*/
		 /*"itemType": "literal",  */
		 /*"match" : "bm:drugbank_vocabulary:xref"*/
		 /*},*/
     //Interactions
		 /*{*/
		 /*"label" : "Drug Interactions",   //multiple, uri*/
		 /*"itemType": "literal",  */
		 /*"match" : "bm:drugbank_vocabulary:ddi-interactor-in"*/
		 /*}*/
			]
  }]
};
