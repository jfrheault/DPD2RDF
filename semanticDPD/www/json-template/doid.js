var mappingObj= {
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
"label" : "is a Subclass of",
"itemType": "uri",
"match" : "rdfs:subClassOf"
},
{
"label" : "Exact Synonym",
"itemType": "literal",
"match" : "oboInOwl:hasExactSynonym"
},
{
"label" : "Related Synonym",
"itemType": "literal",
"match" : "oboInOwl:hasRelatedSynonym"
},
{
"label" : "Database External Reference",
"itemType": "literal",
"match" : "oboInOwl:hasDbXref"
},
{
"label" : "Alternative Identifier",
"itemType": "literal",
"match" : "oboInOwl:hasAlternativeId"
}
]
}
]
};

