// Array actividades, contiene informacion de cada una
let actividades = [
	{
		nombre: 'trekking',
		locacion: 'Volcan Villarrica',
		descripcion:
			'Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional.',
		img: 'https://picsum.photos/id/1003/1280/720',
	},
	{
		nombre: 'natacion',
		locacion: 'Lago Cochrane',
		descripcion:
			'Deporte o ejercicio que consiste en nadar en las pruebas de natacion, se compite en velocidad, en cualquiera de los cuatro estilos: Braza, crol, espalda y mariposa',
		img: 'https://picsum.photos/id/684/1280/720',
	},
	{
		nombre: 'ferry',
		locacion: 'Lago Llanquihue',
		descripcion:
			'Embarcación que realiza alternativamente el mismo recorrido entre dos puntos. Especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros',
		img: 'https://picsum.photos/id/564/1280/720',
	},
];
let selectActividad = document.getElementById('actividad');
let overlayCard = document.getElementById('overlay');
let cardWrapper = document.getElementById('cardWrapper');
let cardImage = document.getElementById('cardImg');
let cardTitle = document.getElementById('cardTitle');
let cardSubtitle = document.getElementById('cardSubtitle');
let cardText = document.getElementById('cardText');

// Insertar datos de cada actividad
let insertarDatos = (actividad) => {
	cardImage.setAttribute('src', `${actividad.img}`);
	cardTitle.innerText = actividad.nombre;
	cardSubtitle.innerText = actividad.locacion;
	cardText.innerText = actividad.descripcion;
};
// Funcion encontrar item igual a value del select
let encontrarActividad = (name) => {
	const encontrado = actividades.find((element) => element.nombre == name);
	insertarDatos(encontrado);
};

selectActividad.addEventListener('change', () => {
	encontrarActividad(selectActividad.value);
});

// Overlay cuando mouse entra y sale de imagen
cardImage.addEventListener('mouseenter', () => {
	overlayCard.classList.remove('d-none');
});
cardImage.addEventListener('mouseleave', () => {
	overlayCard.classList.add('d-none');
});
