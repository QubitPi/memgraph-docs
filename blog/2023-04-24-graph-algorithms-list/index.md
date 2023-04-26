---
title: 19 Graph Algorithms We Can Use Right Now
description: An survey on some of the important applications of knowledge graph
slug: graph-algorithms-list
authors:
  - name: Memgraph
    title: Memgraph Blog
    url: https://memgraph.com/blog/graph-algorithms-list
    image_url: https://assets.website-files.com/611e21f2cab5d3fde1f1197b/615ef39ac3d7b1149ed87422_Memgraph-logo-p-500.png
tags: [Graph Algorithms, Community Detection, Node2Vec, PageRank]
hide_table_of_contents: false
---

![Error loading memgraph-19-graph-algorithms-cover.png](./memgraph-19-graph-algorithms-cover.png)

<!--truncate-->

Betweenness Centrality
----------------------

[Centrality analysis][betweenness centrality implementation link] provides information about the node's importance for 
an information flow or connectivity of the network. [Betweenness centrality][betweenness centrality wikipedia] is one 
of the most used centrality metrics that measures the extent to which a node lies on paths between other nodes in the 
graph. Thus, nodes with high betweenness may have considerable influence within a network under their control over 
information passing between others. The calculation of betweenness centrality is not standardized, and there are many 
ways to solve it.

It is defined as the number of shortest paths in the graph that passes through the node divided by the total number of 
shortest paths. The implemented algorithm is described in the paper "A Faster Algorithm for
[Betweenness Centrality](./betweenness-centrality-paper.pdf)" by Ulrik Brandes of the
[University of Konstanz][University of Konstanz].

![Error loading betweenness-centrality-example.png](./betweenness-centrality-example.png)

A larger circle means larger betweenness centrality. The middle one has the largest amount of shortest paths flowing 
through it.


https://qubitpi.github.io/networkx/auto_examples/algorithms/plot_betweenness_centrality.html

https://qubitpi.github.io/networkx/reference/algorithms/generated/networkx.algorithms.centrality.betweenness_centrality.html#betweenness-centrality



[betweenness centrality implementation link]: https://qubitpi.github.io/memgraph-docs/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm/#implementation
[betweenness centrality wikipedia]: https://en.wikipedia.org/wiki/Betweenness_centrality

[University of Konstanz]: https://www.uni-konstanz.de/en/