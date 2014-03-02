var atcMap = {
	"header" : [
		{"title": "rdfs:label"},
	],
	"sections" : [
		{
"label" : "General information",
"containers" : [
	{
		"label" : " Informations on DrugBank :", // oboInOwl:hasRelatedSynonym
		"itemType": "uri",        // array of String
		"match" : "bm:drugbank_vocabulary:xref"
	},
	{
		"label" : "Informations on Wikipedia :", // oboInOwl:hasRelatedSynonym
		"itemType": "uri",        // array of String
		"match" : "rdfs:seeAlso"
	},
	{
		"label" : "Found in these drugs :", // oboInOwl:hasRelatedSynonym
		"itemType": "uri",        // array of String
		"match" : "dpd:xATC"
	}
]
		}
	]
};

var dinMap = {
  "header" : [
    {"title": "rdfs:label"},
    // {"description" : "dpd_vocabulary:drugId"}
  ],
  "sections" : [
    {
			"label" : "Information from the DPD",
      "containers" : [
        {
          "label" : "External Informations", // oboInOwl:hasRelatedSynonym
          "itemType": "uri",        // array of uri
          "match" : "rdfs:seeAlso"
        },
        {
          "label": "Ingredient Information",
          "itemType": "group",
          "match": [
            {"label": "Ingredient", "predicate": "dpd_vocabulary:associatedIngredient", "type": "uri"},
            {"label": "Strength", "predicate": "dpd_vocabulary:strength", "type": "literal"},
            {"label": "StrengthUnit", "predicate": "dpd_vocabulary:strengthUnit", "type": "literal"},
            {"label": "Dosage", "predicate": "dpd_vocabulary:dosageVal", "type": "literal"},
            {"label": "DosageUnit", "predicate": "dpd_vocabulary:dosageUnit", "type": "literal"}
          ]
        },
        {
          "label": "ATC Code",
          "itemType": "literal",
          "match": "dpd_vocabulary:hasATCcode"
        },
        {
          "label": "AHFS Code",
          "itemType": "literal",
          "match": "dpd_vocabulary:hasAHFScode"
        },
        {
          "label": "Product Class",
          "itemType": "literal",
          "match": "dpd_vocabulary:prodClass"
        },
        {
          "label": "Pediatric Flag",
          "itemType": "literal",
          "match": "dpd_vocabulary:pediatricFlag"
        },
        {
          "label": "Drug ID",
          "itemType": "literal",
          "match": "dpd_vocabulary:drugId"
        },
      ]
    }
  ]
};


var ingMap = {
  "header" : [
    {"title": "rdfs:label"}
  ],
  "sections" : [
    {
      "containers" : [
        {
          "label" : "Associated Drug Products", // oboInOwl:hasRelatedSynonym
          "itemType": "uri",        // array of uri
          "match" : "dpd_vocabulary:associatedProduct"
        }
      ]
    }
  ]
};
