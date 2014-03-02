var wikiMap = {
	"header" : [
		{"title": "rdfs:label"},
		{"description" : "http://dbpedia.org/ontology/abstract"},
	],
	"sections" : [
		{
"label" : "General information",
"containers" : [
	{
		"label" : "Synonyms", // oboInOwl:hasRelatedSynonym
		"itemType": "literal",        // array of String
		"match" : "http://bio2rdf.org/drugbank_vocabulary:synonym"
	},
	{
		"label" : "Indication", // oboInOwl:hasRelatedSynonym
		"itemType": "literal",        // array of String
		"match" : "http://bio2rdf.org/drugbank_vocabulary:indication"
	},
	{
		"label" : "Pharmacology", // oboInOwl:hasRelatedSynonym
		"itemType": "literal",        // array of String
		"match" : "http://bio2rdf.org/drugbank_vocabulary:pharmacology"
	}
]
		}
	]
};
