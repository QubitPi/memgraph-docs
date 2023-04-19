---
sidebar_label: pyg_translator
title: gqlalchemy.transformations.translators.pyg_translator
---

import OptionalDependenciesNote from '../../../templates/_optional_dependencies_note.mdx';

<OptionalDependenciesNote/>

Used to translate Memgraph data to PyG graph representation and vice-versa. Only features of numerical types (e.g., float, double, and int) are allowed. They can be scalars, vectors or multi-dimensional tensors (PyG requirement). Each node feature has a unique name and each edge feature has a unique name. A feature is created via tensor assignment, which assigns a feature to each node/edge in the graph. The leading dimension of that tensor must be equal to the number of nodes/edges in the graph. You cannot assign a feature to a subset of the nodes/edges in the graph. Features of the same name must have the same dimensionality and data type.

### Methods

#### `__init__`

```python
def __init__(self, 
    default_node_label="NODE",
    default_edge_type="RELATIONSHIP",
    host: str = mg_consts.MG_HOST,
    port: int = mg_consts.MG_PORT,
    username: str = mg_consts.MG_USERNAME,
    password: str = mg_consts.MG_PASSWORD,
    encrypted: bool = mg_consts.MG_ENCRYPTED,
    client_name: str = mg_consts.MG_CLIENT_NAME,
    lazy: bool = mg_consts.MG_LAZY,
    ) -> None
```

Initializes translator object with given parameters.

##### Input

- `default_node_label: str=NODE` -> Default node label that will be given to nodes when no other can be inferred.
- `default_edge_type: str=RELATIONSHIP` -> Default edge type that will be given to edges when no other can be inferred.
- `host: str=127.0.0.1` -> Host connection info for connecting to the Memgraph instance.
- `port: int=7687` -> Port connection info for connecting to the Memgraph instance.
- `username: str=""` -> Username connection info for connecting to the Memgraph instance.
- `password: str=""` -> Password connection info for connecting to the Memgraph instance.
- `encrypted: bool=False` -> Encrypted flag for connecting to the Memgraph instance.
- `client_name: str=GQLAlchemy` -> Client name used for connecting to the Memgraph instance.
- `lazy: bool=False` -> Lazy flag for connecting to the Memgraph instance.

#### `to_cypher_queries`

```python
def to_cypher_queries(self, graph) -> None
```

Produces Cypher queries for data saved as part of the `PyG` graph. The method handles both homogeneous and heterogeneous graphs. The method converts 1D, as well as multidimensional features. If there are some isolated nodes inside the graph, they won't get transferred. Nodes and edges created in Memgraph DB will, for consistency reasons, have the property `pyg_id` set to the `id` they have as part of the `PyG` graph. Note that this method doesn't insert anything inside the database, it just creates Cypher queries.

##### Input

- `graph: Union[torch_geometric.data.Data, torch_geometric.data.HeteroData]`

#### Example

Use the following query to transfer `PyG` graph to Cypher queries and execute them in Memgraph:

```python
memgraph = Memgraph()
pyg_graph = HeteroData(...)
for query in PyGTranslator().to_cypher_queries(pyg_graph):
    memgraph.execute(query)
```

#### `get_instance`

```python
def get_instance(self) -> dgl.DGLHeteroGraph
```

Creates an instance of `PyG` graph from all edges that are inside Memgraph. Currently, isolated nodes are ignored because they don't contribute to message-passing neural networks. Only numerical features that are set on all nodes or all edges are transferred to the `PyG` instance since this is `PyG's` requirement. That means that any string value properties won't be transferred, as well as numerical properties that aren't set on all nodes. However, features that are of a type list are transferred to the `PyG` instance and can be used as any other feature in the `PyG` graph. Regardless of data residing inside the Memgraph database, the created `PyG` graph is a heterograph instance.

#### Example

Use the following block of code to create an instance of the `PyG` graph from the data residing inside `Memgraph`:

```python
pyg_translator = PyGTranslator()
pyg_graph = pyg_translator.get_instance()
```
