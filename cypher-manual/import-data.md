---
id: import-data
title: Import data
sidebar_label: Import data
---

For adding new data, you can use the following clauses.

- `CREATE`, for creating new nodes and relationships.
- `SET`, for adding new or updating existing labels and properties.

You can still use the `RETURN` clause to produce results after writing, but it
is not mandatory.

Details on which kind of data can be stored in Memgraph can be found in the
[Storage](/memgraph/concepts/storage) chapter.

:::info

Indexing can increase performance when executing queries. Please take a look at
our [documentation on indexing](/docs/memgraph/reference-guide/indexing) for
more details.

:::

## CREATE

This clause is used to add new nodes and relationships to the database. The creation is
done by providing a pattern, similarly to `MATCH` clause.

For example, use this query to create two new nodes connected with a new relationship.

```cypher
CREATE (node2)-[:RELATIONSHIP_TYPE]->(node2);
```

Labels and properties can be set during creation using the same syntax as in
`MATCH` patterns. For example, creating a node with a label and a property:

```cypher
CREATE (node:Label {property: 'my property value'});
```

Additional information on `CREATE` is available [here](./clauses/create.md).

## WITH

The write part of the query cannot be simply followed by another read part. To
combine them, the `WITH` clause must be used. The names this clause establishes
are transferred from one part to another.

For example, creating a node and finding all nodes with the same property.

```cypher
CREATE (node {property: 42}) WITH node.property AS propValue
MATCH (n {property: propValue}) RETURN n;
```

Note that the `node` is not visible after `WITH`, since only `node.property` was
carried over.

This clause behaves very much like `RETURN`, so you should refer to features of
`RETURN`.

## MERGE

The `MERGE` clause is used to ensure that a pattern you are looking for exists
in the database. This means that it will be created if the pattern is not found.
In a way, this clause is like a combination of `MATCH` and `CREATE`.

For example, ensure that a person has at least one friend:

```cypher
MATCH (n:Person) MERGE (n)-[:FRIENDS_WITH]->(m);
```

The clause also provides additional features for updating the values depending
on whether the pattern was created or matched. This is achieved with `ON CREATE`
and `ON MATCH` sub clauses.

For example, set different properties depending on what `MERGE` did:

```cypher
MATCH (n:Person) MERGE (n)-[:FRIENDS_WITH]->(m)
ON CREATE SET m.prop = "created" ON MATCH SET m.prop = "existed";
```

For more details, check out [this guide](./clauses/merge.md).

## Import existing data from CSV

Using CSV files is just one of the ways to [import your
data](/docs/memgraph/import-data) into Memgraph. The `LOAD CSV` clause enables
you to [load and use data](/docs/memgraph/import-data/load-csv-clause) from a
CSV file. Memgraph supports the Excel CSV dialect, as it's the most commonly
used one. For the syntax of the clause, please check the [LOAD
CSV](/cypher-manual/clauses/load-csv) page in the Cypher manual.
