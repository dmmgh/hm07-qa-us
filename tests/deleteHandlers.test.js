// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200 and response json consist of the  property "ok", set up to "true", for DELETE request to endpoint /api/v1/kits', async () => {
    
	let response;
	let actualStatus;
	// create a variable to store a recieved data of the response
	let data;

	// create a variable to store an actual status of the request for deletion
	let actualStatusDeletionRequest;
	// create a variable to store a recieved data of the request for deletion
	let dataDeletionRequest;

	// create a boolean variable: is there the 3 kit in recieved kits for cardID=1? If it exists then it will be deleted.
	let kitExists = false; 

	try {

		response = await fetch(`${config.API_URL}${config.API_ENDPOINT_FOR_GETFOLLOWEDBYDELETE}`);
		actualStatus = response.status;
		data = await response.json();

		if(actualStatus == 200) {
			// Iterate through each kit in cardId=1 to ensure there is the kit id=3 for the deletion
			for (let i = 0; i < data.length; i++) {
				if(data[i]['id'] == 3) {
					kitExists = true;
				}
			}

			if(kitExists) {
				response = await fetch(`${config.API_URL}${config.API_ENDPOINT_FOR_DELETE}`, {
					method: 'DELETE',
				});
		
				// extract response code status
				actualStatusDeletionRequest = response.status;
		
				// extract data from request
				dataDeletionRequest = await response.json();

				response = await fetch(`${config.API_URL}${config.API_ENDPOINT_FOR_GETFOLLOWEDBYDELETE}`);
				actualStatus = response.status;
				data = await response.json();

				kitExists = false; 
				if(actualStatus == 200) {
					// Iterate through each kit in cardId=1 to ensure there is not the kit id=3 after the deletion
					for (let i = 0; i < data.length; i++) {
						if(data[i]['id'] == 3) {
							kitExists = true;
						}
					}

					if(kitExists){
						let actualStatusFinal;
						let dataDeletionRequestFinal;

						actualStatusDeletionRequest = actualStatusFinal;
						dataDeletionRequest = dataDeletionRequestFinal;
					}
				}


			}

		} 		
	} catch (error) {
		console.error(error);
	}

	// check response status for deletion request
	expect(actualStatusDeletionRequest).toBe(200);
	// check response object properties for deletion request
	expect(dataDeletionRequest.ok).toBe(true);
});
