import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Alberto',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Alexandra',
      email: 'nanku@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
      {
        name: 'Elden Ring',
        slug: 'elden-ring',
        category: 'PC',
        image: '/images/juego1.png',
        price: 60,
        region: 'BR',
        brand: 'From Software',
        rating: 4.9,
        numReviews: 5,
        countInStock: 0,
        description: 'Elden Ring para PC es un RPG de acción (ARPG).',
      
      },
      {
        name: 'WWE 2K22 Deluxe Edition',
        slug: 'wwe-2k22-deluxe-edition',
        category: 'PC',
        image: '/images/juego2.jpg',
        price: 72,
        region: 'US',
        brand: '2K',
        rating: 4.2,
        numReviews: 14,
        countInStock: 100,
        description: 'UN JUEGO QUE QUIZÁS PEGUE DEMASIADO FUERTE',
      },
      {
        name: 'God Of War',
        slug: 'god-of-war',
        category: 'PC',
        image: '/images/juego3.jpg',
        price: 40,
        region: 'TR',
        brand: 'Santa Monica Studio',
        rating: 4.7,
        numReviews: 43,
        countInStock: 20,
        description:
          'God of War para PC fue objeto de rumores durante meses, desde aproximadamente la mitad de 2021 hasta que los desarrolladores finalmente sacaron a los jugadores de su lenta espera y confirmaron el lanzamiento en PC para enero de 2022. Es la versión para PC del juego God of War de 2018, que inicialmente solo estaba disponible en PlayStation. El título permite a los jugadores de PC disfrutar del intenso juego de acción y aventuras del dios nórdico.',
      },
      {
        name: 'MotoGP 22',
        slug: 'moto-gp-22',
        category: 'XBOX',
        image: '/images/motogp22.jpg',
        images: '/images/motogp222.jpg',
        price: 40,
        region: 'TR',
        brand: 'Milestone S.r.l',
        rating: 0.0,
        numReviews: 0,
        countInStock: 22,
        description:
        "Motores en marcha: arranca el videojuego con la experiencia más inmersiva y auténtica de MotoGP™ de la historia. .MUNDO DE MOTOGP™ AL COMPLETOExplora el contenido de la temporada 2022 en todas las clases de MotoGP™ y las demás categorías."},
        {
          name: 'Steam Gift Card 20€ - EU',
          slug: 'steam-gift-card-20-eurozone',
          category: 'Tarjetas Regalo',
          image: '/images/steam20.jpg',
          price: 18,
          region: 'EU',
          brand: 'Steam',
          rating: 4.7,
          numReviews: 12,
          countInStock: 22,
          description:
          "Las tarjetas regalo de Steam funcionan como vales que pueden canjearse para adquirir juegos, software, hardware o cualquier otro artículo disponible en Steam. "
        },
        {
          name: 'FIFA 22',
          slug: 'fifa-22',
          category: 'PlayStation',
          image: '/images/fifa22.jpg',
          price: 49,
          region: 'BR',
          brand: 'EA Esports',
          rating: 4,
          numReviews: 85,
          countInStock: 2,
          description:
          "EA SPORTS™ FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos. ¿Qué es FIFA? Juega al juego del mundo con más de 17 000 jugadores, más de 700 equipos, más de 90 estadios y más de 30 ligas de todo el mundo. "
        },
        {
          name: 'NordVpn 3 meses',
          slug: 'nordvpn',
          category: 'VPN',
          image: '/images/nordvpn.webp',
          price: 12,
          region: 'EU/BR/TR/US',
          brand: 'Tefincom & Co., S.A',
          rating: 5,
          numReviews: 164,
          countInStock: 999,
          description:
          "Suscripción trimestral. NordVPN es un software que permite acceder a cuentas personales, sin guardar historial de navegación, todo esto de una manera segura. La ventaja de usar NordVPN es que permite la protección de hasta 6 dispositivos que pueden ser usados al mismo tiempo."
        },
      
    ],
};
export default data;
