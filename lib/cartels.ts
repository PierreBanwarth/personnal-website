export interface CartelText {
    title: string;
    text: string;
}

export interface Cartel extends CartelText {
    slug: string;
    // Chemin dans /public (ex: '/images/photos/photo-001.png'), optionnel
    image?: string;
    // Titre de la section des photos de la série (hors originaux)
    series?: { fr: string; en: string };
    // Titre de la section des originaux quand une œuvre centrale (originale0) existe
    originalsTitle?: { fr: string; en: string };
    // Photos dont le nom commence par `prefix`, affichées séparément juste après l'original
    group?: {
        prefix: string;
        title: { fr: string; en: string };
        quote?: { fr: string; en: string }; // paragraphes séparés par \n
        quoteAuthor?: string;
        pixelated?: boolean; // false pour les photos non Game Boy
    };
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
        series: { fr: 'Photos du festival Fisel', en: 'Photos from the Fisel festival' },
        en: {
            title: 'grimaces',
            text: 'In front of the pub, a little photo session with my friend, the little whirlwind',
        },
    },
    {
        slug: 'kilian-flatot',
        title: 'Kilian Flatot',
        text: "Portrait d'un ami de longue date pendant son passage à la scène ouverte de la Fête de l'accordéon de Luzy",
        series: { fr: "Photos de la Fête de l'accordéon de Luzy", en: "Photos from the Fête de l'accordéon in Luzy" },
        en: {
            title: 'Kilian Flatot',
            text: "Portrait of a longtime friend during his turn at the open stage of the Fête de l'accordéon in Luzy",
        },
    },
    {
        slug: 'julien-padovani',
        title: 'Julien Padovani',
        text: 'Charismatique Julien Padovani pendant le bal du grand barouf au festival Fisel',
        series: { fr: 'Photos du festival Fisel', en: 'Photos from the Fisel festival' },
        en: {
            title: 'Julien Padovani',
            text: 'Charismatic Julien Padovani during the Grand Barouf dance at the Fisel festival',
        },
    },
    {
        slug: 'liam-roudil',
        title: 'Liam Roudil',
        text: 'Liam Roudil, guitariste talentueux et ami proche. Une de mes premières photos, réalisée pendant une session de musique irlandaise',
        series: { fr: 'Photos de copains en session', en: 'Friends at sessions' },
        group: {
            prefix: 'fraude',
            title: { fr: 'Le montage de Thierry Chabanis', en: 'The montage by Thierry Chabanis' },
            quote: {
                fr: `Tu t'es peut-être demandé : Pourquoi il a collé une affiche Guinness sur ma photo ?\nJe n'ai pas collé une numérisation, je l'ai dessiné pixel par pixel sur Photoshop avec la méthode que j'utilisais sur mon Oric 1 en 1983, je faisais mon dessin sur du papier millimétré, puis je saisissais des lignes de data 0 et 1, que j'en voyais dans la mémoire écran.`,
                en: `You may have wondered: why did he stick a Guinness poster on my photo?\nI didn't paste a scan, I drew it pixel by pixel in Photoshop, using the method I used on my Oric 1 in 1983: I made my drawing on graph paper, then entered lines of 0 and 1 data, the way I saw them in screen memory.`,
            },
            quoteAuthor: 'Thierry Chabanis',
            pixelated: false,
        },
        en: {
            title: 'Liam Roudil',
            text: 'Liam Roudil, talented guitarist and close friend. One of my first photos, taken during an Irish music session',
        },
    },
    {
        slug: 'maxime-barbeau',
        title: 'Maxime Barbeau',
        text: 'Doigt levé, sûrement pour donner un avis hyper éclairé sur un sujet hyper chelou',
        series: { fr: "Photos de la Fête de l'accordéon de Luzy", en: "Photos from the Fête de l'accordéon in Luzy" },
        en: {
            title: 'Maxime Barbeau',
            text: 'Finger raised, surely to give a very well-informed opinion on a very weird subject',
        },
    },
    {
        slug: 'camille-a-la-plage',
        title: 'Camille à la plage',
        text: 'Un des premiers clichés réalisés pendant une sortie à la plage avec ma merveilleuse femme',
        series: { fr: 'Camille en photos', en: 'Camille in photos' },
        en: {
            title: 'Camille at the beach',
            text: 'One of my first shots, taken during a trip to the beach with my wonderful wife',
        },
    },
    {
        slug: 'fest-noz',
        title: 'Fest Noz',
        text: 'Fest Noz de rentrée, le duo Garan Lintanf fait danser la salle',
        originalsTitle: { fr: 'Le duo Garan Lintanf', en: 'The duo Garan Lintanf' },
        series: {
            fr: 'Les autres artistes du Fest Noz de la Harpe',
            en: 'Other artists at the Fest Noz de la Harpe',
        },
        en: {
            title: 'Fest Noz',
            text: 'Back-to-school Fest Noz, the duo Garan Lintanf gets the room dancing',
        },
    },
    {
        slug: 'manege',
        title: 'Manège',
        text: 'Manège de la place Sainte-Anne à Rennes, bonne musique et possibilité de chevaucher un hippocampe',
        en: {
            title: 'Carousel',
            text: 'Carousel on Place Sainte-Anne in Rennes. Good music and the chance to ride a seahorse',
        },
    },
    {
        slug: 'jolivet',
        title: 'Jolivet',
        text: "Gregory Jolivet, membre du duo Longskateur, sur la scène de la Fête de l'accordéon",
        series: { fr: "Photos de la Fête de l'accordéon de Luzy", en: "Photos from the Fête de l'accordéon in Luzy" },
        en: {
            title: 'Jolivet',
            text: "Gregory Jolivet, member of the duo Longskateur, on stage at the Fête de l'accordéon",
        },
    },
    {
        slug: 'session-girls',
        title: 'Session Girls',
        text: "Photo prise au festival de musique irlandaise de Mesquer. Servane, Aline et Ghita, trois copines. Je trouve que cette photo retranscrit particulièrement bien l'ambiance des sessions.",
        group: {
            prefix: 'girls',
            title: { fr: 'Portrait de musiciennes', en: 'Portraits of women musicians' },
        },
        en: {
            title: 'Session Girls',
            text: 'Photo taken at the Irish music festival in Mesquer. Servane, Aline and Ghita, three friends. I think this photo captures the atmosphere of the sessions particularly well.',
        },
    },
];
