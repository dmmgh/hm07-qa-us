// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"price": 175
}

test('status should be 200 for an existing product id and 404 for a non-existing product for PUT request to the endpoint /api/v1/products',	async () => {

	let actualStatus;

    try {
		const response = await fetch(`${config.API_URL}${config.API_ENDPOINT_FOR_PUT}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		// extract response code status
		actualStatus = response.status;

	} catch (error) {
		console.error(error);
	}

	// for an existing item, e.g., for id=7 as in /docs/
	// check response status
	//expect(actualStatus).toBe(200);

	// for an non-existing item, e.g., for id=777
	// check response status
	expect(actualStatus).toBe(404);
});

test('parsing the response of PUT request for an existing/non-existing product id to the endpoint /api/v1/products',	async () => {

	// create a variable to store a recieved data of the response
	let data;

    try {
		const response = await fetch(`${config.API_URL}${config.API_ENDPOINT_FOR_PUT}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		// extract data from request
		data = await response.json();

	} catch (error) {
		console.error(error);
	}

	// for an existing item, e.g., for id=7 as in /docs/
	// check response object properties
		//expect(data.ok).toBe(true);

	// for an non-existing item, e.g., for id=777
	// check response object properties
	expect(data.code).toBe(404);
	expect(data.message).toBe('Not Found'); // It's an actual property value, in /docs/ the message is 'Not found'.
});
