// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200 and there are 4 warehouses in the respond for endpoint /api/v1/warehouses', async () => {

	let actualStatus;

	// create a variable to store a recieved data of the response
	let data;

	try {

		// The first task

		// make request
		const response = await fetch(`${config.API_URL}${config.API_ENDPOINT_FOR_GET}`);
		// extract response code status
		actualStatus = response.status;

		// The second task
		// extract data from request
		data = await response.json();

		// the next line of code are used to handle the data for the given GET request: it's whether
		// an array (to use the .length property) or an object.
		console.log(data);

	} catch (error) {
		console.error(error);
	}

	// check response status
	expect(actualStatus).toBe(200);
	// check if in the recieved data there are all the existing couriers (4, "Couriers - Get a list of deliveries" section in apiDoc)
    expect(data.length).toBe(4);
});
