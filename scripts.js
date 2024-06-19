let buy_el;

window.addEventListener("load", function () {
	buy_el = document.getElementById("buy");
	buy_el.addEventListener("click", onclickBuy);
	autorisation();
});

function autorisation() {
	const success_url = "https://zdias569.github.io/success"

	const params = {
		"amount": {
			"value": "100",
			"currency": "RUB"
		},
		"payment_method_data": {
			"type": "bank_card"
		},
		"confirmation": {
			"type": "redirect",
			"return_url": success_url
		},
		"description": "Списываем оплату",
		"save_payment_method": "false"
	}

	fetch("https://api.yookassa.ru/v3/payments", {
		method: 'POST',
		body: JSON.stringify(params),
		headers: {
			'Authorization': 'Basic NDA1MTExOnRlc3RfNG5FNTAwZHFyVmZ1QUNqM3RDcnpMNlZERURkRzZWMksxT0tMUHZJSFdkdw==',
			'Content-type': 'application/json; charset=UTF-8',
		}
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error occurred!');
			}
			return response.json();
		})
		.then((data) => {
			console.log(data)
		})
		.catch(err => console.log(err))

}

function onclickBuy() {

}