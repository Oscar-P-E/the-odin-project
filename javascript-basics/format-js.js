const band = {
  name: "XYZ",
  nationality: "Australia",
  genre: "Rock",
  members: 3,
  formed: 1981,
  split: 2001,
  albums: [
    {
      name: "Maths is Fun",
      released: 1981,
    },
    {
      name: "Notes Down Under",
      released: 1989,
    },
    {
      name: "Kangaroo Jam",
      released: 1999,
    },
  ],
};

bandInfo = `${band.name} was a ${band.genre} band from ${
  band.nationality
}. They were active for ${band.split - band.formed} years (${band.formed} - ${
  band.split
}). Their first album ${band.albums[0].name} was released in ${
  band.albums[0].released
}.`;
