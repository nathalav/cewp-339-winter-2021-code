
	var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=1; i<=10; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<1; j++){
           var td = document.createElement('TD');
           //td.width='75';
           td.width='20';
		   td.align='center';
           //td.appendChild(document.createTextNode("Cell " + i + "," + j));
           td.appendChild(document.createTextNode(i));
		   tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
	
