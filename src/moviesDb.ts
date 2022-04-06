const moviesDb = [
    {
        id: 1,
        title: 'Beetlejuice',
        length: 92,
        director: 'Tim Burton',
        posterUrl: 'https://m.media-amazon.com/images/M/MV5BZDdmNjBlYTctNWU0MC00ODQxLWEzNDQtZGY1NmRhYjNmNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    },
    {
        id: 2,
        title: 'The Cotton Club',
        length: 127,
        director: 'Francis Ford Coppola',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
    },
    {
        id: 3,
        title: 'The Shawshank Redemption',
        length: 142,
        director: 'Frank Darabont',
        posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    },
    {
        id: 4,
        title: 'Crocodile Dundee',
        length: 97,
        director: 'Peter Faiman',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg',
    },
    {
        id: 5,
        title: 'Valkyrie',
        length: 121,
        director: 'Bryan Singer',
        posterUrl: 'https://m.media-amazon.com/images/I/91KtH1w9p+L._SL1500_.jpg',
    },
    {
        id: 6,
        title: 'Ratatouille',
        length: 111,
        director: 'Brad Bird, Jan Pinkava',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg',
    },
    {
        id: 7,
        title: 'City of God',
        length: 130,
        director: 'Fernando Meirelles, Kátia Lund',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg',
    },
    {
        id: 8,
        title: 'Memento',
        length: 113,
        director: 'Christopher Nolan',
        posterUrl: 'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    },
    {
        id: 9,
        title: 'The Intouchables',
        length: 112,
        director: 'Olivier Nakache, Eric Toledano',
        posterUrl: 'https://m.media-amazon.com/images/M/MV5BODY0MDM1MDE2OV5BMl5BanBnXkFtZTcwMzEyMjkyNw@@._V1_.jpg',
    },
    {
        id: 10,
        title: 'Stardust',
        length: 127,
        director: 'Matthew Vaughn',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg',
    },
    {
        id: 11,
        title: 'Apocalypto',
        length: 139,
        director: 'Mel Gibson',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg',
    },
    {
        id: 12,
        title: 'Taxi Driver',
        length: 113,
        director: 'Martin Scorsese',
        posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
        id: 13,
        title: 'No Country for Old Men',
        length: 122,
        director: 'Ethan Coen, Joel Coen',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg',
    },
    {
        id: 14,
        title: 'Planet 51',
        length: 91,
        director: 'Jorge Blanco, Javier Abad, Marcos Martínez',
        posterUrl: 'https://m.media-amazon.com/images/I/51X-8l0IHAL._AC_.jpg',
    },
    {
        id: 15,
        title: 'Looper',
        length: 119,
        director: 'Rian Johnson',
        posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTg5NTA3NTg4NF5BMl5BanBnXkFtZTcwNTA0NDYzOA@@._V1_FMjpg_UX1000_.jpg',
    },
    {
        id: 16,
        title: 'Corpse Bride',
        length: 77,
        director: 'Tim Burton, Mike Johnson',
        posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_FMjpg_UX1000_.jpg ',
    },
    {
        id: 17,
        title: 'The Third Man',
        length: 93,
        director: 'Carol Reed',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg',
    },
    {
        id: 18,
        title: 'The Beach',
        length: 119,
        director: 'Danny Boyle',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        id: 19,
        title: 'Scarface',
        length: 170,
        director: 'Brian De Palma',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg',
    },
    {
        id: 20,
        title: 'Sid and Nancy',
        length: 112,
        director: 'Alex Cox',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg',
    },
];

export default moviesDb;