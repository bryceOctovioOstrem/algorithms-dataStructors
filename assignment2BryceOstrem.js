
	function augmentingPath(graph, start, end) //  function to default graph to not visited
    {
        let visited = new Array(this.graph); // creates array to rember which nodes have been visited
        for(let h = 0; h < this.graph; h++) // marks all nodes as not visited as default 
            visited[h] = false;
			let path = [];// stores the path for returning 
			//let options = ['foo', 'boo', 'bar'];
		var n = start; // creates a variable called n to uses as an iterator
		var b = graph[start];
		
		for(var j =0; j < 100; j++){ // runs until nwe find path
		
			b = graph[n];
			visited[n] = true; // sets current node as visited
			path.push(n);
				  if (Object.keys(b).includes(end)){
				    b = graph[end];
				    n = end;
				    visited[n] = true;
				    path.push(end);
				  break;
			} else{
			  for(var i =0; i < Object.keys(b).length; i++)
			  if(!(path.includes(Object.keys(b)[i]))){
			  n = Object.keys(b)[i];
			  }
			}// goes down the selected edge
					//console.log(graph[n][z]);
			}
		if (path.includes(end)){
		  console.log(path);
		}else{
		  path = {};
		  console.log(path);
		}
		}
//var graph = {'foo': {'boo': 7},'boo': {'foo': 3, 'bar': 2},'bar': {'boo': 4}};
var graph = {'foo': {'boo': 7},'boo': {'foo': 3},'bar': {'boo': 4}};
	augmentingPath( graph,'foo','bar'); // second test for testing
