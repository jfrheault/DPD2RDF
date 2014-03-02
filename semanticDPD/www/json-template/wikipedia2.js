var wikiMap = { 
   "header" : [
      {"title": "rdfs:label"},
      {"description" : "http://dbpedia.org/ontology/abstract"},
      {"picture" : "http://xmlns.com/foaf/0.1/depiction"}
   ],
   "sections" : [ 
   {
      "label" : "General information",
      "containers" : [ 
      //Identifiers
      {
         "label" : "CAS",
         "itemType": "literal",
         "match" : "http://dbpedia.org/ontology/casNumber"
      },
      {
         "label" : "ATC code", //multiple (bm:atc:X00XX00)
         "itemType": "uri",
         "match" : "rdfs:seeAlso"
      },
      {
         "label" : "PubChem", //(needs parse : add "CID " in front of the code)
         "itemType": "literal",
         "match" : "http://dbpedia.org/ontology/pubchem"
      },
      {
         "label" : "IUPHAR ligand",
         "itemType": "literal",
         "match" : "http://dbpedia.org/property/iupharLigand"
      },
      {
         "label" : "DrugBank",
         "itemType": "literal",
         "match" : "http://dbpedia.org/ontology/drugbank"
      },
      {
         "label" : "ChemSpider",
         "itemType": "literal",
         "match" : "http://dbpedia.org/property/chemspiderid"
      }, 
      {
         "label" : "UNII",
         "itemType": "literal",
         "match" : "http://dbpedia.org/ontology/fdaUniiCode"
      },
      {
         "label" : "KEGG",
         "itemType": "literal",
         "match" : "http://dbpedia.org/property/kegg"
      },
      {
         "label" : "ChEBI", //(needs parse : add "CHEBI:" in front of the code)
         "itemType": "literal",
         "match" : "http://dbpedia.org/ontology/chEBI"
      },
      {
         "label" : "ChEMBL", //(needs parse : add "CHEMBL" in front of the code)
         "itemType": "literal",
         "match" : "http://dbpedia.org/property/chembl"
      },
      //Chemical data
      {
         "label" : "SMILES",
         "itemType": "literal",
         "match" : "http://dbpedia.org/property/smiles"
      },
      {
         "label" : "InChI key",
         "itemType": "literal",
         "match" : "http://dbpedia.org/property/stdinchikey"
      }
			]
   }]
};

