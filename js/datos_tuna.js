populateTables();


function getText(){
    var request = new XMLHttpRequest();
    request.open('GET', "https://drive.google.com/file/d/1hUgB72kwGTLUepRokjSk-7xqpvx5jqKL/view", true);
    request.send(null);
    request.onreadystatechange = function () {
		
			console.log("ooo    == > "+request.getResponseHeader());
		
        if (request.readyState === 4 && request.status === 200) {
			
            var type = request.getResponseHeader('Content-Type');
			
			console.log("type     == > "+type);
			console.log("request  == > "+request);
			
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}


function populateTables(){
    
    var outer_text = getText();
	console.log("outer_text  == > "+outer_text);
    outer_text = outer_text.split('\n');    // you can adjust the manner of parsing the received file (regexp)
    
}