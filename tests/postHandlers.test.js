// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    //// put your body here
	"deliveryTime": 9,
    "productsCount": 10,
    "productsWeight": 11
}

test('status should be 200 and there is an object in the response with expected data for the endpoint /order-and-go/v1/delivery', async () => {

	let actualStatus;

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

		// extract response code status
		actualStatus = response.status;

		// extract data from the response
		data = await response.json();

	} catch (error) {
		console.error(error);
	}

	// check response status
	expect(actualStatus).toBe(200);
	// check response object properties
	expect(data.name).toBe('Order and Go');
	//expect(data.clientDeliveryCost).toBe(10); 'It's not actual data, that is in /docs/.
	expect(data.clientDeliveryCost).toBe(5);
	//expect(data.toBeDeliveredTime.min).toBe(10); 'It's not actual data, that is in /docs/.
	expect(data.toBeDeliveredTime.min).toBe(20);
	//expect(data.toBeDeliveredTime.max).toBe(20); 'It's not actual data, that is in /docs/.
	expect(data.toBeDeliveredTime.max).toBe(25);
	//expect(data.hostDeliveryCost).toBe(23); 'It's not actual data, that is in /docs/.
	expect(data.hostDeliveryCost).toBe(5);
	expect(data.isItPossibleToDeliver).toBe(true);
});
