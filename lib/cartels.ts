export interface CartelText {
    title: string;
    text: string;
}

export interface Cartel extends CartelText {
    slug: string;
    // Chemin dans /public (ex: '/images/photos/photo-001.png'), optionnel
    image?: string;
    en: CartelText;
}

export const cartels: Cartel[] = [
    {
        slug: 'grimace',
        title: 'grimace',
        text: 'Robin tire la langue pendant le mariage de ses parents',
        en: {
            title: 'grimace',
            text: "Robin sticks his tongue out during his parents' wedding",
        },
    },
    {
        slug: 'grimaces',
        title: 'grimaces',
        text: 'Devant le pub, petite séance photo avec ma pote la petite tornade',
        en: {
            title: 'grimaces',
            text: 'In front of the pub, a little photo session with my friend, the little whirlwind',
        },
    },
    {
        slug: 'kilian-flatot',
        title: 'Kilian Flatot',
        text: "Portrait d'un ami de longue date pendant son passage a la scène ouverte de la Fete de l'accordéon de Luzy",
        en: {
            title: 'Kilian Flatot',
            text: "Portrait of a longtime friend during his turn at the open stage of the Fête de l'accordéon in Luzy",
        },
    },
    {
        slug: 'julien-padovani',
        title: 'Julien Padovani',
        text: 'Charismatique Julien Padovani pendant le bal du grand barouf au festival Fisel',
        en: {
            title: 'Julien Padovani',
            text: 'Charismatic Julien Padovani during the Grand Barouf dance at the Fisel festival',
        },
    },
    {
        slug: 'liam-roudil',
        title: 'Liam Roudil',
        text: 'Liam Roudil guitariste talentueux et ami proche une de mes premiere photo réalisée pendant une session de musique irlandaise',
        en: {
            title: 'Liam Roudil',
            text: 'Liam Roudil, talented guitarist and close friend. One of my first photos, taken during an Irish music session',
        },
    },
    {
        slug: 'maxime-barbeau',
        title: 'Maxime Barbeau',
        text: 'Doigt levé surement pour donner un avis hyper eclairé sur un sujet hyper chelou',
        en: {
            title: 'Maxime Barbeau',
            text: 'Finger raised, surely to give a very well-informed opinion on a very weird subject',
        },
    },
    {
        slug: 'camille-a-la-plage',
        title: 'Camille a la plage',
        text: 'Un des premier cliché réalisé pendant une sortie a la plage avec ma merveilleuse femme',
        en: {
            title: 'Camille at the beach',
            text: 'One of my first shots, taken during a trip to the beach with my wonderful wife',
        },
    },
    {
        slug: 'fest-noz',
        title: 'Fest Noz',
        text: 'Fest Noz de rentré le duo Garan Lintanf fait danser la',
        en: {
            title: 'Fest Noz',
            text: 'Back-to-school Fest Noz, the duo Garan Lintanf gets the',
        },
    },
    {
        slug: 'manege',
        title: 'Manege',
        text: 'Manege de la place sainte annes a Rennes bonne musique et possibilité de chevaucher un hyppocampe',
        en: {
            title: 'Carousel',
            text: 'Carousel on Place Sainte-Anne in Rennes. Good music and the chance to ride a seahorse',
        },
    },
    {
        slug: 'jolivet-1',
        title: 'Jolivet 1',
        text: "Gregory Jolivet membre du duo longskateur sur la scène de la Fete de l'accordéon",
        en: {
            title: 'Jolivet 1',
            text: "Gregory Jolivet, member of the duo Longskateur, on stage at the Fête de l'accordéon",
        },
    },
    {
        slug: 'jolivet-2',
        title: 'Jolivet 2',
        text: "Gregory Jolivet membre du duo longskateur sur la scène de la Fete de l'accordéon",
        en: {
            title: 'Jolivet 2',
            text: "Gregory Jolivet, member of the duo Longskateur, on stage at the Fête de l'accordéon",
        },
    },
    {
        slug: 'session-girls',
        title: 'Session Girls',
        text: "Photo prise au festival de musique irlandaise de Mesquer. Servane Aline et Ghita trois copines. Je trouve que cette photo retranscrit particulierement bien l'ambiance des sessions.",
        en: {
            title: 'Session Girls',
            text: 'Photo taken at the Irish music festival in Mesquer. Servane, Aline and Ghita, three friends. I think this photo captures the atmosphere of the sessions particularly well.',
        },
    },
];
