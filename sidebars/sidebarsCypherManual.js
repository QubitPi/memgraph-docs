module.exports = {
  cypher_manual: [
    "overview",
    "what-are-graph-databases",
    {
      type: "category",
      label: "Cypher query language",
      link: {type: 'doc', id: 'cypher-query-language'},
      items: [
        "differences",
      ],
    }, 
    "working-with-memgraph",
    "import-data",
    "connecting-nodes",
    "reading-existing-data",
    "updating-nodes-and-relationships",
    "deleting-nodes-and-relationships",
    {
      type: "category",
      label: "Clauses",
      link: {type: 'doc', id: 'clauses/clauses'},
      items: [
        "clauses/create",
        "clauses/delete",
        "clauses/load-csv",
        "clauses/match",
        "clauses/merge",
        "clauses/optional-match",
        "clauses/remove",
        "clauses/return",
        "clauses/set",
        "clauses/union",
        "clauses/unwind",
        "clauses/where",
        "clauses/with",
      ],
    },
    "extension-clauses",
    "functions",
    "query-modules",
    "other-features",
  ],
};
