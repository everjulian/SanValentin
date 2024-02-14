document.addEventListener('DOMContentLoaded', function() {
    const messages = [
      "Eres lo mejor que me ha pasado.",
      "Tu amor ilumina cada día de mi vida.",
      "Gracias por ser mi apoyo incondicional.",
      "Te amo más de lo que las palabras pueden expresar.",
      "Contigo cada día es una aventura maravillosa.",
      "Eres mi refugio en los momentos difíciles.",
      "Tu sonrisa es mi luz en los días oscuros.",
      "Juntos podemos superar cualquier obstáculo.",
      "Cada momento contigo es un tesoro invaluable.",
      "Eres el amor de mi vida y mi mejor amigo.",
      // Frases adicionales:
      "Nuestro amor es mi razón para sonreír.",
      "Tu presencia en mi vida hace todo más hermoso.",
      "Cada día a tu lado es un regalo.",
      "Eres mi inspiración para ser una mejor persona.",
      "Amarte es lo más fácil que he hecho en mi vida.",
      "Eres mi sueño hecho realidad.",
      "No puedo imaginar mi vida sin ti.",
      "Eres mi sol en los días nublados.",
      "Eres mi porto seguro en medio de la tormenta.",
      "Gracias por llenar mi vida de amor y alegría.",
      "Eres la melodía de mi corazón.",
      "Nuestro amor es eterno como el tiempo.",
      "Eres la razón por la que creo en el amor verdadero.",
      "A tu lado, cada día es un nuevo comienzo.",
      "Nuestro amor es un viaje interminable de felicidad.",
      "Eres el compañero perfecto para este viaje llamado vida.",
      "No hay palabras para describir lo que siento por ti.",
      "Contigo, el futuro está lleno de posibilidades.",
      "Eres mi roca en tiempos de incertidumbre.",
      "Tu amor me da fuerza para enfrentar cualquier desafío.",
      "Gracias por amarme tal como soy.",
      "Cada momento juntos es una aventura mágica.",
      "Eres mi todo y más.",
      "Nuestro amor es como un diamante, fuerte e inquebrantable.",
      "Eres el motivo por el que cada día es especial.",
      "Tus abrazos son mi refugio favorito.",
      "Gracias por ser mi pareja de vida.",
      "Eres el destino de mi corazón.",
      "Contigo, cada día es una fiesta de amor y felicidad.",
      "Eres mi mejor regalo de la vida.",
      "Tu amor es el mejor regalo que he recibido.",
      "Eres la pieza que faltaba en mi rompecabezas.",
      "A tu lado, cada día es un nuevo capítulo de amor.",
      "Eres la chispa que enciende mi corazón.",
      "Nuestro amor es un cuento de hadas hecho realidad.",
      "Eres mi más grande bendición.",
      "No puedo esperar a pasar el resto de mi vida contigo.",
      "Cada día contigo es un sueño hecho realidad.",
      "Gracias por ser mi razón para sonreír cada día.",
      "Eres mi amor, mi vida, mi todo."
    ];
  
    const changeButtons = document.querySelectorAll('.changeButton');
  
    changeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        const card = this.closest('.card');
        card.querySelector('.card-text').textContent = messages[randomIndex];
      });
    });
  });
  