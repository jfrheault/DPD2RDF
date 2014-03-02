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
	],
	"sections" : [
		{
"label" : "",
"containers" : [
	{
		"label" : " :", // oboInOwl:hasRelatedSynonym
		"itemType": "uri",        // array of String
		"match" : ""
	},
]
		}
	]
};

