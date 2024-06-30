const books = [
  {
    title: "harry potter and the philosopher's stone",
    author: "J K Rowling",
    coverImage: "https://res.cloudinary.com/kewalkhondekar/image/upload/v1719758753/books/hp1_lnlnpy.webp",
    price: 385,
    description: "Harry Potter and the Philosopher's Stone is the first book in J.K. Rowling's globally renowned Harry Potter series. It introduces readers to Harry Potter, an eleven-year-old orphan who discovers on his birthday that he is a wizard. Harry is invited to attend Hogwarts School of Witchcraft and Wizardry, where he learns about his magical heritage, makes lifelong friends, and uncovers the truth about his parents' mysterious deaths. The book follows Harry's adventures at Hogwarts, including his encounter with the dark wizard Voldemort, who killed his parents and left Harry with a lightning-shaped scar on his forehead. The story combines elements of fantasy, mystery, and adventure, captivating readers of all ages",
    reviews: ["A delightful start to a magical journey! - Daniel", "An irresistible tale of a young boy discovering his destiny in a world where magic is real. - Boonie"],
    rating: 4
  },
  {
    "title": "harry potter and the chamber of secrets",
    "author": "J K Rowling",
    "coverImage": "https://res.cloudinary.com/kewalkhondekar/image/upload/v1719760308/books/hp2_qpjqwb.webp",
    "price": 350,
    "description": "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft And Wizardry for his second year, Harry hears strange whispers echo through empty corridors and then the attacks start. Students are found as though turned to stone … Dobby's sinister predictions seem to be coming true",
    "reviews": ["A thrilling adventures filled with mystery, danger, and memorable magical moments. - Rosh", "Rowling's second installment dives deeper into the wizarding world's darker corners, crafting an enchanting blend of suspense and charm. - Rachel"],
    "rating": 4
  },
  {
    "title": "Harry Potter and the Prisoner of Azkaban",
    "author": "J K Rowling",
    "coverImage": "https://res.cloudinary.com/kewalkhondekar/image/upload/v1719760308/books/hp3_lbfwsu.webp",
    "price": 400,
    "description": "When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss.",
    "reviews": ["A captivating tale of intrigue and discovery, where Harry confronts his past while navigating the dangers of a notorious escaped prisoner and the mysteries surrounding him. - Joe", "A spellbinding adventure that expands the wizarding world, blending humor, suspense, and emotional depth to captivate readers of all ages. - Chandler"],
    "ratings": 5
  },
  {
    "title": "Harry Potter and the Goblet of Fire",
    "author": "J K Rowling",
    "coverImage": "https://res.cloudinary.com/kewalkhondekar/image/upload/v1719760310/books/hp4_etypyl.webp",
    "price": 350,
    "description": "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through alive!",
    "reviews": ["Thrilling tasks, surprising alliances, and a chilling return of an ancient evil. - johhan", "The Goblet of Fire delivers an immersive and suspenseful narrative, marking a pivotal turning point in Harry's journey amidst escalating magical threats. - anna"],
    "ratings": 4
  },
  {
    "title": "Harry Potter and the Order of the Phoenix",
    "author": "J K Rowling",
    "coverImage": "https://res.cloudinary.com/kewalkhondekar/image/upload/v1719760309/books/hp5_ur2skr.webp",
    "price": 375,
    "description": "ark times have come to Hogwarts. After the Dementor's attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret Order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time.",
    "reviews": ["A darker, emotionally intense installment where Harry faces new threats and challenges while uncovering secrets of the wizarding world. - Charles", "Unfolds with compelling twists, propelling the series towards its climactic showdown with Voldemort. - Max"],
    "ratings": 4
  },
  {
    "title": "Harry Potter and the Half-Blood Prince",
    "author": "J K Rowling",
    "coverImage": "https://res.cloudinary.com/kewalkhondekar/image/upload/v1719760310/books/hp6_vea0wg.webp",
    "price": 380,
    "description": "When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe. Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort's darkest secrets, and Dumbledore prepares him to face his destiny.",
    "reviews": ["A riveting exploration of Voldemort's dark past and Harry's preparation for the ultimate confrontation, filled with secrets and tragedy. - Noris", "Harry's penultimate year at Hogwarts is marked by deepening darkness and poignant moments of sacrifice and love. - George"],
    "ratings": 4
  },
  {
    "title": "Harry Potter and the Deathly Hallows",
    "author": "J K Rowling",
    "coverImage": "https://res.cloudinary.com/kewalkhondekar/image/upload/v1719760310/books/hp6_vea0wg.webp",
    "price": 400,
    "description": "As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves, and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin Harry must stand and face his enemy.",
    "reviews": ["A thrilling conclusion filled with epic battles, sacrifices, and revelations that bring closure to Harry's journey. - George", "The Deathly Hallows explores themes of courage, friendship, and the power of love in the face of ultimate evil. - Lewis"],
    "ratings": 5
  }
]