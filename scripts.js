let buy_el;

window.addEventListener("load", function () {
	buy_el = document.getElementById("buy");
	buy_el.addEventListener("click", onclickBuy);
	autorisation();
});

function autorisation() {
	const autorisation = "Basic dGVzdF80bkU1MDBkcXJWZnVBQ2ozdENyekw2VkRFRGRHNlYySzFPS0xQdklIV2R3";
	fetch("https://api.yookassa.ru/v3/", {
		headers: {
			Authorization: {
				username: "405111",
				password: "test_4nE500dqrVfuACj3tCrzL6VDEDdG6V2K1OKLPvIHWdw"
			}
		}
	})
		.then(response => console.log(response.result))
		.catch(err => console.log(err))

}

function onclickBuy() {

}