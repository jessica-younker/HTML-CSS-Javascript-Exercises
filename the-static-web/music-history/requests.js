var dataRequest = new XMLHttpRequest();

		dataRequest.addEventListener("load", dataRequestComplete);
		dataRequest.addEventListener("error", dataRequestFailed);

		function dataRequestComplete(event) {
			console.log("transfer complete, we have data");
			var data = JSON.parse(event.target.responseText);
			console.log("the data", data);
			return resolve(data);
		}
		
			dataRequest.open("GET", "JSON/songs1.json");
			dataRequest.send();// add it to the event loop
			//have to do open and then send
			

		function dataRequestFailed(event){
			console.log("Oops, an error occurred while transferring the file");
			reject();
			// .catch
		}