// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    //// put your body here
	"deliveryTime": 9,
    "productsCount": 10,
    "productsWeight": 11
}

test('status should be 200 for post  request for the endpoint /order-and-go/v1/delivery', async () => {

	let actualStatus;

    try {
		const response = await fetch(`${config.API_URL}${config.API_ENDPOINT_FOR_POST}`, {
			method: 'POST',
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

	// check response status
	expect(actualStatus).toBe(200);

});

test('parsing the response of POST request for the endpoint /order-and-go/v1/delivery', async () => {

	// create a variable to store a recieved data of the response
	let data;

    try {
		const response = await fetch(`${config.API_URL}${config.API_ENDPOINT_FOR_POST}`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		// extract data from the response
		data = await response.json();

	} catch (error) {
		console.error(error);
	}

	// check response object properties
	expect(data.name).toBe('Order and Go');
	expect(data.clientDeliveryCost).toBe(5);
	expect(data.toBeDeliveredTime.min).toBe(20);
	expect(data.toBeDeliveredTime.max).toBe(25);
	expect(data.hostDeliveryCost).toBe(5);
	expect(data.isItPossibleToDeliver).toBe(true);
});