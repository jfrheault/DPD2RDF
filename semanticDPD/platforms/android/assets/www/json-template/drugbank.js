var drugBankMap = {
	"header" : [
		{"title": "rdfs:label"},
		{"description" : "dcterms:description"}
	],
	"sections" : [
		{
"label" : "General information",
"containers" : [
	{
		"label" : "Synonyms", 
		"itemType": "literal",
		"match" : "bm:drugbank_vocabulary:synonym"
	},
	{
		"label" : "Indication",
		"itemType": "literal",
		"match" : "bm:drugbank_vocabulary:indication"
	},
	{
		"label" : "Pharmacology",
		"itemType": "literal",  
		"match" : "bm:drugbank_vocabulary:pharmacology"
	}
]
		}
	]
};
