function readSingleFile(evt) {
  	document.getElementById('input').innerHTML = "";
  	document.getElementById('output').innerHTML = ""; 
	var f = evt.target.files[0];   
	if (f) {
	  var r = new FileReader();
	  r.onload = function(e) { 
  		var contents = e.target.result;             
	    var ct = r.result;
	    var resIn = [];
	    var resOut = [];
	    var words = ct.split('?').join(' ? ').split('!').join(' ! ').split('\n').join(' ').split(' '); 
		for (var i = 0; i < words.length; i++) {
		  if (words[i] == "?"){
		  	if(!resIn.includes(words[i-1])){
			  	document.getElementById('input').innerHTML += words[i-1]; 
			  	document.getElementById('input').innerHTML += " "; 
			  	resIn.push(words[i-1]);
		  	}
		  }
		  if (words[i] == "!"){
		  	if(!resIn.includes(words[i-1])){
			  	document.getElementById('output').innerHTML += words[i-1]; 
			  	document.getElementById('output').innerHTML += " "; 
			  	resIn.push(words[i-1]);
		  	}
		  }
		}
	  }
	  r.readAsText(f);
	} else { 
	  alert("Failed to load file");
	}
  }


/*function findNexts(first) {
		var nexts = [];
		var tmp = first;
		for (var x = 0; x < couple.length; ++x) {
			if((couple[x].portCompo1.toUpperCase().search(tmp.toUpperCase()) != -1 || couple[x].compo1.toUpperCase().search(tmp.toUpperCase()) != -1)){
				tmp = couple[x].compo2;
				couple[x].view = true;
				nexts.push(tmp);
			}else if ((couple[x].portCompo2.toUpperCase().search(tmp.toUpperCase()) != -1 || couple[x].compo2.toUpperCase().search(tmp.toUpperCase()) != -1)){
				tmp = couple[x].compo1;
				couple[x].view = true;
				nexts.push(tmp);
			}
		}
		return nexts;
	}*/


function findNexts(first) {
		var nexts = [];
		var couple2 = couple;
		var tmp = first;
		for (var x = 0; x < couple2.length; ++x) {
			console.log(tmp);
			if((couple2[x].portCompo1.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].portCompo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1) || (couple2[x].compo1.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].compo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1)){
				if(couple2[x].compo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1){
					tmp = couple2[x].compo2;
					couple[x].view = true;
					nexts.push(tmp);
				}else{
					tmp = couple2[x].compo1;
					couple[x].view = true;
					nexts.push(tmp);
				}
			}else if ((couple2[x].portCompo2.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].portCompo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1) || (couple2[x].compo2.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].compo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1)){
				if(couple2[x].compo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1){
					tmp = couple2[x].compo1;
					couple[x].view = true;
					nexts.push(tmp);
				}else{
					tmp = couple2[x].compo2;
					couple[x].view = true;
					nexts.push(tmp);
				}
			}
		}
		return nexts;
	}


		/*function findNexts(first) {
		var nexts = [];
		var couple2 = couple;
		var tmp = first;
		for (var x = 0; x < couple2.length; ++x) {
			console.log(tmp);
			if((couple2[x].portCompo1.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].portCompo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1) || (couple2[x].compo1.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].compo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1)){
				if(couple2[x].compo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1){
					tmp = couple2[x].compo2;
					couple[x].view = true;
					nexts.push(tmp);
				}else{
					tmp = couple2[x].compo1;
					couple[x].view = true;
					nexts.push(tmp);
				}
			}else if ((couple2[x].portCompo2.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].portCompo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1) || (couple2[x].compo2.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].compo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1)){
				if(couple2[x].compo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1){
					tmp = couple2[x].compo1;
					couple[x].view = true;
					nexts.push(tmp);
				}else{
					tmp = couple2[x].compo2;
					couple[x].view = true;
					nexts.push(tmp);
				}
			}
		}
		return nexts;
	}*/

	function findNexts(first){
		var nexts = [];
		var nextsTmp = [];
		var tmp = first;
		do{
			for (var x = 0; x < couple.length; ++x) {
				if((couple[x].portCompo1.toUpperCase().search(tmp.toUpperCase()) != -1) || (couple[x].compo1.toUpperCase().search(tmp.toUpperCase()) != -1 && couple[x].compo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1) && couple[x].view == false){
					console.log("yolo");
					if(couple[x].compo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1){
						tmp = couple[x].compo2;
						nexts.push(tmp);
						console.log(tmp);
						couple[x].view = true;
					}else{
						tmp = couple[x].compo1;
						nexts.push(tmp);
						console.log(tmp);
						couple[x].view = true;
					}
				}else if ((couple[x].portCompo2.toUpperCase().search(tmp.toUpperCase()) != -1) || (couple[x].compo2.toUpperCase().search(tmp.toUpperCase()) != -1 && couple[x].compo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1)&& couple[x].view == false){
					console.log("yolo");
					if(couple[x].compo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1){
						tmp = couple[x].compo1;
						nexts.push(tmp);
						console.log(tmp);
						couple[x].view = true;
					}else{
						tmp = couple[x].compo2;
						nexts.push(tmp);
						console.log(tmp);
						couple[x].view = true;
					}
				}
			}
		}while(nextsTmp.length != 0)
		return nexts;
	}

	/*function findNexts(first) {
		var nexts = [];
		var couple2 = couple;
		var tmp = first;
		var bool = false;
		if(stillView(couple) == true){
			for (var x = 0; x < couple2.length; ++x) {
				console.log(tmp);
				if((couple2[x].portCompo1.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].portCompo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1) || (couple2[x].compo1.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].compo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1)){
					if(couple2[x].compo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1){
						tmp = couple2[x].compo2;
						couple[x].view = true;
						nexts.push(tmp);
						if(bool == false){
							console.log("bool");
							findNexts(tmp);
							bool = true;
						}
					}else{
						tmp = couple2[x].compo1;
						couple[x].view = true;
						nexts.push(tmp);
						if(bool == false){
							console.log("bool");
							findNexts(tmp);
							bool = true;
						}
					}
				}else if ((couple2[x].portCompo2.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].portCompo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1) || (couple2[x].compo2.toUpperCase().search(tmp.toUpperCase()) != -1 && couple2[x].compo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1)){
					if(couple2[x].compo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1){
						tmp = couple2[x].compo1;
						couple[x].view = true;
						nexts.push(tmp);
						if(bool == false){
							console.log("bool");
							findNexts(tmp);
							bool = true;
						}
					}else{
						tmp = couple2[x].compo2;
						couple[x].view = true;
						nexts.push(tmp);
						if(bool == false){
							console.log("bool");
							findNexts(tmp);
							bool = true;
						}
					}
				}else{
					console.log("fail");
				}
				couple.forEach(function(element){
					console.log(element.view);
				});
			}
		}
		return nexts;
	}*/

	/*function findNexts(first) {
		var nexts = [];
		var tmp = first;
		var bool = true;
		//while(bool == true){
			blockfor: for (var x = 0; x < couple.length; ++x) {
				console.log(tmp);
				if((couple[x].portCompo1.toUpperCase().search(tmp.toUpperCase()) != -1 && couple[x].portCompo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1) || (couple[x].compo1.toUpperCase().search(tmp.toUpperCase()) != -1 && couple[x].compo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1) && couple[x].viex == false){
					if(couple[x].compo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1){
						tmp = couple[x].compo2;
						couple[x].view = true;
						nexts.push(tmp);
						console.log("break for");
						break blockfor;
					}else{
						tmp = couple[x].compo1;
						couple[x].view = true;
						nexts.push(tmp);
						console.log("break for");
						break blockfor;
					}
				}else if ((couple[x].portCompo2.toUpperCase().search(tmp.toUpperCase()) != -1 && couple[x].portCompo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1) || (couple[x].compo2.toUpperCase().search(tmp.toUpperCase()) != -1 && couple[x].compo2.toUpperCase().search(stateCharts[0].toUpperCase()) == -1)){
					if(couple[x].compo1.toUpperCase().search(stateCharts[0].toUpperCase()) == -1){
						tmp = couple[x].compo1;
						couple[x].view = true;
						nexts.push(tmp);
						console.log("break for");
						break blockfor;
					}else{
						tmp = couple[x].compo2;
						couple[x].view = true;
						nexts.push(tmp);
						console.log("break for");
						break blockfor;
					}
				}else{
					bool = false;
					console.log("break while");
					break;
				}
				couple.forEach(function(element){
					console.log(element.view);
				});
			}
		//}
		return nexts;
	}*/

  if(!check){

				for(var y = 0; y < resIn.length; ++y){
					if(couple[x].portCompo2.toUpperCase().search(resIn[y].toUpperCase()) != -1){
						document.getElementById('graph').innerHTML += '['+ couple[x].compo1 + ']' + ' --> ' + '['+ couple[x].compo2 + '] : ' + couple[x].portCompo1 + '=>' + couple[x].portCompo2;
						document.getElementById('graph').innerHTML += "<br>";
						check = true;
					}
				}
				if(resOut.length > 0)
				for(var w = 0; w < resOut.length; ++w){
					if(couple[x].portCompo2.toUpperCase().search(resOut[w].toUpperCase()) != -1){
						document.getElementById('graph').innerHTML += '['+ couple[x].compo1 + ']' + ' <-- ' + '['+ couple[x].compo2 + '] : ' + couple[x].portCompo1 + '=>' + couple[x].portCompo2;
						document.getElementById('graph').innerHTML += "<br>";
						check = true;
					}
				}
				if(resBoth.length > 0)
				for(var z = 0; z < resBoth.length; ++z){
					if(couple[x].portCompo2.toUpperCase().search(resBoth[z].toUpperCase()) != -1){
						document.getElementById('graph').innerHTML += '['+ couple[x].compo1 + ']' + ' <--> ' + '['+ couple[x].compo2 + '] : ' + couple[x].portCompo1 + '=>' + couple[x].portCompo2;
						document.getElementById('graph').innerHTML += "<br>";
						check = true;
					}
				}

				/*document.getElementById('graph').innerHTML += '['+ couple[x].compo1 + ']' + ' --> ' + '['+ couple[x].compo2 + '] : ' + couple[x].portCompo1 + '=>' + couple[x].portCompo2;
				document.getElementById('graph').innerHTML += "<br>";*/
			}


			function toString(obj){
		var result = '';

		result += "Metamodel {\n\tcomponents:\n\t[\n";
		obj.Metamodel.components.forEach(function(element){
			result += '\t\tSoftwareComponent {\n';
			result += '\t\t\tname: ' + element.SoftwareComponent.name + '\n';
			result += '\t\t\tid: ' + element.SoftwareComponent.id + '\n';
			result += '\t\t\tx: ' + element.SoftwareComponent.x + '\n';
			result += '\t\t\ty: ' + element.SoftwareComponent.y + '\n';
			result += '\t\t\ttype: ' + element.SoftwareComponent.type + '\n';
			result += '\t\t\tid_parent: ' + element.SoftwareComponent.id_parent + '\n';
			result += '\t\t},\n';
		});
		result += "\t],\n\tlinks:\n\t[\n";
		obj.Metamodel.links.forEach(function(element){
			result += '\t\tLink {\n';
			result += '\t\t\tname: ' + element.Link.name + '\n';
			result += '\t\t\tid: ' + element.Link.id + '\n';
			result += '\t\t\tx: ' + element.Link.x + '\n';
			result += '\t\t\ty: ' + element.Link.y + '\n';
			result += '\t\t\tfrom:\n';
			result += '\t\t\tSoftwareComponent {\n';
			result += '\t\t\t\tname: ' + element.Link.from.SoftwareComponent.name + '\n';
			result += '\t\t\t\tid: ' + element.Link.from.SoftwareComponent.id + '\n';
			result += '\t\t\t\tx: ' + element.Link.from.SoftwareComponent.x + '\n';
			result += '\t\t\t\ty: ' + element.Link.from.SoftwareComponent.y + '\n';
			result += '\t\t\t\ttype: ' + element.Link.from.SoftwareComponent.type + '\n';
			result += '\t\t\t\tid_parent: ' + element.Link.from.SoftwareComponent.id_parent + '\n';
			result += '\t\t\t},\n';
			result += '\t\t\tto:\n';
			result += '\t\t\tSoftwareComponent {\n';
			result += '\t\t\t\tname: ' + element.Link.to.SoftwareComponent.name + '\n';
			result += '\t\t\t\tid: ' + element.Link.to.SoftwareComponent.id + '\n';
			result += '\t\t\t\tx: ' + element.Link.to.SoftwareComponent.x + '\n';
			result += '\t\t\t\ty: ' + element.Link.to.SoftwareComponent.y + '\n';
			result += '\t\t\t\ttype: ' + element.Link.to.SoftwareComponent.type + '\n';
			result += '\t\t\t\tid_parent: ' + element.Link.to.SoftwareComponent.id_parent + '\n';
			result += '\t\t\t},\n';
			result += '\t\t},\n';
		});
		result += "\t],\n";
		result += "\tmodels:\n\t[\n";
		result += "\t\tcomponents:\n\t\t[\n";
		obj.Metamodel.components.forEach(function(element){
			result += '\t\t\tSoftwareComponent {\n';
			result += '\t\t\t\tname: ' + element.SoftwareComponent.name + '\n';
			result += '\t\t\t\tid: ' + element.SoftwareComponent.id + '\n';
			result += '\t\t\t\tx: ' + element.SoftwareComponent.x + '\n';
			result += '\t\t\t\ty: ' + element.SoftwareComponent.y + '\n';
			result += '\t\t\t\ttype: ' + element.SoftwareComponent.type + '\n';
			result += '\t\t\t\tid_parent: ' + element.SoftwareComponent.id_parent + '\n';
			result += '\t\t\t},\n';
		});
		result += "\t\t],\n\t\tlinks:\n\t\t[\n";
		obj.Metamodel.links.forEach(function(element){
			result += '\t\t\tLink {\n';
			result += '\t\t\t\tname: ' + element.Link.name + '\n';
			result += '\t\t\t\tid: ' + element.Link.id + '\n';
			result += '\t\t\tx: ' + element.Link.x + '\n';
			result += '\t\t\t\ty: ' + element.Link.y + '\n';
			result += '\t\t\t\tfrom:\n';
			result += '\t\t\t\tSoftwareComponent {\n';
			result += '\t\t\t\t\tname: ' + element.Link.from.SoftwareComponent.name + '\n';
			result += '\t\t\t\t\tid: ' + element.Link.from.SoftwareComponent.id + '\n';
			result += '\t\t\t\t\tx: ' + element.Link.from.SoftwareComponent.x + '\n';
			result += '\t\t\t\t\ty: ' + element.Link.from.SoftwareComponent.y + '\n';
			result += '\t\t\t\t\ttype: ' + element.Link.from.SoftwareComponent.type + '\n';
			result += '\t\t\t\t\tid_parent: ' + element.Link.from.SoftwareComponent.id_parent + '\n';
			result += '\t\t\t\t},\n';
			result += '\t\t\t\tto:\n';
			result += '\t\t\t\tSoftwareComponent {\n';
			result += '\t\t\t\t\tname: ' + element.Link.to.SoftwareComponent.name + '\n';
			result += '\t\t\t\t\tid: ' + element.Link.to.SoftwareComponent.id + '\n';
			result += '\t\t\t\t\tx: ' + element.Link.to.SoftwareComponent.x + '\n';
			result += '\t\t\t\t\ty: ' + element.Link.to.SoftwareComponent.y + '\n';
			result += '\t\t\t\t\ttype: ' + element.Link.to.SoftwareComponent.type + '\n';
			result += '\t\t\t\t\tid_parent: ' + element.Link.to.SoftwareComponent.id_parent + '\n';
			result += '\t\t\t\t},\n';
			result += '\t\t\t},\n';
		});
		result += "\t\t],\n";
		result += "\t\tphysicalProcess\n\t\t[\n\t\t],\n"
		result += "\t\turl: undefined"
		result += "\n}"
		return result;
	}