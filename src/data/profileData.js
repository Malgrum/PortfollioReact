const profileData = {
  firstName: 'Léo',
  lastName: 'Lienhard',
  age: '23',
  skills: {
    fr: ['Permis B', "Esprit d'équipe", 'Dynamique'],
    en: ["Driver's License B", 'Team Spirit', 'Dynamic'],
  },
  experience: {
    fr: ['Unistra - Agent d\'accueil (2023)', 'Auchan - Agent rayon (2024)', 'KFC (Novembre 2024 - Avril 2026)', 'EVA {Esport virtual arena}(Juillet - Août 2026)'],
    en: ['Unistra - Front desk agent (2023)', 'Auchan - Store associate (2024)', 'KFC (November 2024 - April 2026)', 'EVA (July - August 2026)'],
  },
  associative: {
    fr: [
      "L'ANTRE - Association de loisir d'Epitech (2026-actuel)",
      "AIUS - Amicale des informaticiens de l'université de Strasbourg (2022-2024)",
      'Unigames - Esport Strasbourg (2023-2025)',
      'Festival Décibulles (2023, 2024, 2025)',
      'Warhagine - Club Warhammer (2025 - actuel)',
    ],
    en: [
      "L'ANTRE - Epitech Recreation Association (2026-Now)",
      'AIUS - Informatics Club of the University of Strasbourg (2022-2024)',
      'Unigames - Esport Strasbourg (2023-2025)',
      'Festivale Décibulles (2023, 2024, 2025)',
      'Warhagine - Warhammer Club (2025 - Now)',
    ],
  },
  hobbies: {
    fr: ['Artisanat', 'Jeu de rôle', 'TCG', 'Warhammer', 'Programmation'],
    en: ['Handcrafts', 'Role-playing games', 'TCG', 'Warhammer', 'Programming'],
  },
  projects: [
    {
      title: 'GKT',
      fr: "Ce projet est l'un des premiers que j'ai fait. Un ami qui tient une boutique où se déroulent toute sortes de tournois (Pokémon, Warhammer, etc ...) a perdu son bot discord pour les inscriptions. J'ai eu 24h pour en faire un n'ayant aucune connaissance des bots. Il est toujours utilisé actuellement et continue d'avoir des mises à jour assez régulières. Durée: 24h",
      en: 'This project is one of the first I ever did. A friend who runs a store where all kinds of tournaments (Pokémon, Warhammer, etc.) take place lost his Discord bot for registrations. I had 24 hours to make one, with no knowledge of bots whatsoever. It is still in use today and continues to receive fairly regular updates. Duration: 24 hours.',
    },
    {
      title: 'Anubis',
      fr: "Ce projet m'a été demandé par une amie qui étudiait dans une école concurrente. Son équipe l'avait presque abandonnée, je l'ai donc aidée de A à Z. Le but était de créer un ARG sous forme de site web (HTML, CSS, JavaScript) avec une vidéo d'accompagnement. Durée: 2 semaines",
      en: 'This project was requested by a friend attending a competing school. Her team had almost abandoned her, so I helped from A to Z. The goal was to create an ARG as a website (HTML, CSS, JavaScript) with an accompanying video. Duration: 2 weeks.',
    },
    {
      title: 'Katyusha',
      fr: "Le projet qui m'a pris le plus de temps: une IA vocale développée en Python. Elle peut se connecter à tous mes appareils, faire de la reconnaissance vocale et fonctionner un peu comme ChatGPT. Durée: 4 ans (toujours en développement)",
      en: 'The project that took me the most time: a voice AI developed in Python. It can connect to all my devices, perform voice recognition, and function somewhat like ChatGPT. Duration: 4 years (still in development).',
    },
    {
      title: 'GKS',
      fr: "Le projet est une demande de la même personne que le GKT. Il m'a demandé cette fois de lui faire un logiciel d'inventaire relié aux caisse de ses magasins et à son site.",
      en: 'The project is also a request from the same person as the GKT. This time he asked me to make him an inventory software linked to the cash register of his store and to his website.',
    },
  ],
}

export default profileData
