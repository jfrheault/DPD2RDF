var url="http:mobile.bio2rdf.org/ontobee/describe/json-ld?uri=http://purl.obolibrary.org/obo/DOID_0050329"

var mappingObj = {
	"header" : [
		{"title": "rdfs:label"},
		{"id" : "@id"},
		{"description" : "rdfs:comment"},
		{"namespace": "oboInOwl:hasOBONamespace"}
	],
	"sections" : [
		{
"label" : "Information",
"containers" : [
	{
		"label" : "Related Synonyms", // oboInOwl:hasRelatedSynonym
		"itemType": "literal",        // array of String
		"match" : "oboInOwl:hasRelatedSynonym"
	},
	{
		"label" : "SuperClasses", // rdfs:subClassOf
		"itemType": "uri",        // array of URI
		"match" : "rdfs:subClassOf"
	}
]
		}
	]
};

var jsonld = {
	"@context": {
		"geneid_vocabulary": "http://bio2rdf.org/geneid_vocabulary:",
		"bm": "http://bio2rdf.org/",
		"owl": "http://www.w3.org/2002/07/owl#",
		"rdfs": "http://www.w3.org/2000/01/rdf-schema#",
		"dcterms": "http://purl.org/dc/terms/",
		"dc": "http://purl.org/dc/elements/1.1/",
		"oboInOwl": "http://www.geneontology.org/formats/oboInOwl#"
	},
	"@id": "http://purl.obolibrary.org/obo/CHEBI_49167",
	"@type": "owl:Class",
	"http://purl.obolibrary.org/obo/IAO_0000115": "A drug used to treat asthma.",
	"oboInOwl:hasOBONamespace": "chebi_ontology",
	"oboInOwl:hasRelatedSynonym": [
		"anti-asthmatic agents",
		"anti-asthmatic agent",
		"anti-asthmatic drugs"
	],
	"oboInOwl:id": "CHEBI:49167",
	"rdfs:comment": "A drug used to treat asthma.",
	"rdfs:label": "anti-asthmatic drug",
	"rdfs:subClassOf": [
		{
"@id": "http://purl.obolibrary.org/obo/CHEBI_65023"
		},
		{
"@id": "http://purl.obolibrary.org/obo/CHEBI_23888"
		}
	],
	"oboInOwl:hasDbXref": [
		{
"@id": "http://purl.obolibrary.org/obo/DIO_XXXXX"
		}
	]

};

