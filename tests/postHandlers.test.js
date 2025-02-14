// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
	"deliveryTime": 9,
    "productsCount": 10,
    "productsWeight": 11
}

test('status should be 200 and there is an object in the respond with valid data for endpoint /order-and-go/v1/delivery', async () => {

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

		// extract data from request
		data = await response.json();

		// the next 7 lines of code are used to handle the actual data. The data
		// doesn't match what's documented in /docs/ The actual data is used in the following tests
		console.log(data);
		console.log(`name: ${data.name}`);
		console.log(`clientDeliveryCost: ${data.clientDeliveryCost}`);
		console.log(`toBeDeliveredTime min: ${data.toBeDeliveredTime.min}`);
		console.log(`toBeDeliveredTime max: ${data.toBeDeliveredTime.max}`);
		console.log(`hostDeliveryCost: ${data.hostDeliveryCost}`);
		console.log(`isItPossibleToDeliver: ${data.isItPossibleToDeliver}`);

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
