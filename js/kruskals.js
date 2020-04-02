
/**
 * an algorithm that finds the minimum spanning tree for a graph
 * 
 * @param {araray} nodes    The nodes that exist in the graph
 * @param {array} edges     The edges that exist in the graph
 * @returns {array}         The edges in the minimum spanning tree
 */
function kruskalsMST(nodes, edges) {
	// TODO: Implement Kruskal's Algorithm
	console.log(nodes)
	console.log(edges)

	let sortedEdges = edges.sort(function (a, b) {
		return a.label > b.label ? 1 : -1;
	});

	let uf = new UnionFind(nodes.length);

	let t = []; // the edges in the MST

	let k = 0;

	while (t.length < nodes.length - 1) {

		let edge = sortedEdges[k];

		let representativeTo = uf.find(edge.to);
		let representativeFrom = uf.find(edge.from);

		if (representativeTo != representativeFrom) {
			uf.union(representativeTo, representativeFrom);
			t.push(edge);
		}

		k++;
	}

	return t; // the edges in the MST
}
