  
  
	function augmentingPath(graph, start, end) //  function to default graph to not visited
    {
        let visited = new Array(this.graph); // creates array to rember which nodes have been visited
        for(let i = 0; i < this.graph; i++) // marks all nodes as not visited as default 
            visited[i] = false;
			let path = [];// stores the path for returning 
		var n = start; // creates a variable called n to uses as an iterator
		while (n != end){ // runs until nwe find path
		console.log(n);
			visited[n] = true; // sets current node as visited
			for(let z=0; z <= graph.length; z++ ){ // iterates nthrouugh outer nodes
				if (graph[n] = end ){ // checks to see if we have finished the path
					for(var g =0; g < visited.length; g++){// fills path for returning
						if (visited[g] == true) // checks to see if node has been visited
						path.push(String(graph[n])); // appends name of node
					}
					return(path) // returns the path
				}else if(graph[n][z] == 1 && visited[z] == false){// traverses through the graph by checking if there is samn edge and if it's been visited. 
					n = graph.; // goes down the selected edge
				}
			}
		}
    }
	augmentingPath({foo: {bar: 1, foo: 0},bar: {foo: 0, bar: 0}},'foo','bar'); // first test for testing 