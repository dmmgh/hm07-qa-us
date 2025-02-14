// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200 and response json consist of the property "ok", set up to "true", for request to endpoint /api/v1/kits', async () => {
    
	let actualStatus;

	// create a variable to store a recieved data of the response
	let data;

	try {
		const response = await fetch(`${config.API_URL}${config.API_ENDPOINT_FOR_DELETE}`, {
			method: 'DELETE',
		});

		// extract response code status
		actualStatus = response.status;

		// The second task
		// extract data from request
		data = await response.json();

		// the next line of code are used to handle the actual response data for the given DELETE request.
		console.log(data);

	} catch (error) {
		console.error(error);
	}

	// check response status
	expect(actualStatus).toBe(200);
	// check response object properties
	expect(data.ok).toBe(true);
});
