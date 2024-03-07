const data = [
  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: "Iron Man",
    description:
      "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world",
    genre: "Action/Sci-fi",
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    cover: "grave-of-the-fireflies.jpg",
    title: "Grave of the fireflies",
    description:
      "Two siblings struggle to stay together and survive during the outbreak of World War II.",
    genre: "War/Horror",
    rating: 4,
    price: 90,
  },
  {
    id: crypto.randomUUID(),
    cover: "jawan.jpg",
    title: "Jawan",
    description:
      "A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many.",
    genre: "Action/Thriller",
    rating: 4,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: "Parasite",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy/Drama/Thriller",
    rating: 4,
    price: 250,
  },
  {
    id: crypto.randomUUID(),
    cover: "my-name-is-khan.jpg",
    title: "My Name Is Khan",
    description:
      "Rizwan, a man with Asperger's syndrome, marries Mandira. When unfortunate events unfold after the twin tower attacks, he embarks on a journey to change people's perception of his community.",
    genre: "Drama/Romance/Thriller",
    rating: 5,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "sherlock.jpg",
    title: "Sherlock Holmes",
    description:
      "Detective Sherlock Holmes and his partner, Dr Watson, send Blackwood, a serial killer, to the gallows. However, they are shocked to learn that he is back from the dead and must pursue him again.",
    genre: " Mystery/Action",
    rating: 5,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "taxi-driver.jpg",
    title: "A Taxi Driver",
    description:
      "Kim Man-seob, a taxi driver, ferries Peter, a German journalist, into Gwangju to report on political turmoil. They then persevere to fulfil their roles behind the constant danger they face.",
    genre: "Action/Comedy ",
    rating: 5,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "dark-knight-rises.jpg",
    title: "The Dark Knight Rises",
    description:
      "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.",
    genre: " Action/Thriller",
    rating: 5,
    price: 100,
  },
];

function getAllMovies() {
  return data;
}

export { getAllMovies };
