
let resumen = document.getElementById('form-resumen');
let notification = document.getElementById('form-notification');



const valorTicket = parseInt(1000);

resumen.addEventListener('click', pepe);

function pepe(){

	let cant = parseInt(document.getElementById('form-cant').value); // Input de Cantidad
	let product = parseInt(document.getElementById('form-product').value); // Select de Producto

	if (product==1) {
		resumen = ((cant * valorTicket)*0.2) + ' (80% Off)'; // 80% OFF
	} else if(product==2) {
		resumen = ((cant * valorTicket)*0.50) + ' (50% Off)'; // 50% OFF
	} else if(product==3) {
		resumen = ((cant * valorTicket)*0.85) + ' (15% Off)'; // 15% OFF
	} else {
		resumen = (cant * valorTicket) + ' (Sin descuento)'; // 0% OFF
	}
	notification.innerHTML = resumen;
}
