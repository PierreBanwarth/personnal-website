export interface CartelText {
    title: string;
    text: string; // paragraphes séparés par \n
}

// Morceau associé à une photo : `artist` et/ou `title` quand ils sont connus, jamais inventés.
export interface CartelTrack {
    artist?: string;
    title?: string;
    url: string;
}

// Lien externe vers autre chose qu'un morceau (ex. page d'un groupe)
export interface CartelLink {
    intro: { fr: string; en: string };
    label: string;
    url: string;
}

export interface Cartel extends CartelText {
    slug: string;
    // Sélection musicale affichée sous le texte
    tracks?: CartelTrack[];
    links?: CartelLink[];
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
        title: 'Grimace – Robin',
        text: "Il y a des amitiés qui durent toute une vie, même si la distance ne permet pas toujours de se voir pendant plusieurs années.\nC'est à l'occasion de leur mariage que j'ai eu le plaisir de retrouver Maxime et Noémie.\nJ'ai aussi profité de l'occasion pour faire la rencontre de Robin. Notre passion commune pour Kirby nous a rapidement rapprochés et j'ai pu faire son portrait le lendemain, pendant le mariage de ses parents.",
        tracks: [
            { artist: 'Le Seigneur des Anneaux', title: 'La Comté', url: 'https://youtu.be/LML6SoNE7xE' },
        ],
        en: {
            title: 'Grimace – Robin',
            text: "Some friendships last a lifetime, even when distance means we don't always see each other for several years.\nIt was at their wedding that I had the pleasure of seeing Maxime and Noémie again.\nI also took the opportunity to meet Robin. Our shared passion for Kirby quickly brought us closer, and I was able to take his portrait the next day, during his parents' wedding.",
        },
    },
    {
        slug: 'grimaces',
        title: 'Grimaces',
        text: "Maï est une petite fille pleine d'énergie qui vadrouille à son aise dans les pubs où ses parents musiciens l'ont très tôt emmenée.\nUne tranche de vie au pub, où chacun trouve sa place, partage et découvre, pas seulement musicalement mais aussi humainement.\nLa série associée rassemble plusieurs tranches de vie photographiées en festival.",
        tracks: [{ artist: 'Kneecap', title: "I'm a Hood", url: 'https://youtu.be/h1J_DVutL-w' }],
        series: { fr: 'Photos du festival Fisel', en: 'Photos from the Fisel festival' },
        en: {
            title: 'Grimaces',
            text: "Maï is an energetic little girl who roams freely around the pubs where her musician parents took her from a very young age.\nA slice of life at the pub, where everyone finds their place, shares and discovers, not only musically but also humanly.\nThe associated series gathers several slices of life photographed at festivals.",
        },
    },
    {
        slug: 'kilian-flatot',
        title: 'Kilian Flattot',
        text: "Kilian est l'un des premiers amis musiciens que j'ai rencontrés lorsque je suis venu jouer pour la première fois en bal dans le coin du Morvan et de la Bourgogne.\nSon jeu d'accordéon m'a beaucoup inspiré. Nous avons énormément échangé, aussi bien autour de la buvette qu'assis côte à côte à jouer.\nIl est aujourd'hui membre de plusieurs groupes autour de Poitiers, notamment MUR MUR, dont je vous recommande vivement l'écoute.\nLa série qui accompagne ce portrait rassemble plusieurs amis musiciens particulièrement actifs dans le Morvan.",
        links: [
            {
                intro: { fr: 'À découvrir', en: 'Discover' },
                label: 'MUR MUR',
                url: 'https://www.facebook.com/MUR.MUR.musique',
            },
        ],
        tracks: [
            { artist: 'Sébastien Lagrange & Gaël Rutkowski', url: 'https://youtu.be/0rMBZeiS_88' },
            { artist: 'Gallica', url: 'https://youtu.be/HpST3itrBRs' },
            { artist: 'Matawa', url: 'https://youtu.be/tYlnvmwbstg' },
        ],
        series: { fr: "Photos de la Fête de l'accordéon de Luzy", en: "Photos from the Fête de l'accordéon in Luzy" },
        en: {
            title: 'Kilian Flattot',
            text: "Kilian is one of the first musician friends I met when I came to play for the first time at a dance in the Morvan and Burgundy area.\nHis accordion playing inspired me greatly. We exchanged a great deal, as much around the bar as sitting side by side playing.\nHe is now a member of several bands around Poitiers, notably MUR MUR, whom I highly recommend listening to.\nThe series accompanying this portrait gathers several musician friends who are particularly active in the Morvan.",
        },
    },
    {
        slug: 'julien-padovani',
        title: 'Julien Padovani',
        text: "Julien Padovani, charismatique, pendant le bal du Grand Barouf au festival Fisel. On y retrouve Grégory Jolivet, également présent dans cette exposition. Comme quoi, le monde est petit !\nJulien est une véritable source d'inspiration et participe activement au renouveau des musiques traditionnelles.",
        tracks: [
            { artist: 'Ciac Boum', url: 'https://youtu.be/shPmNKOyfEg' },
            { artist: 'Osso', url: 'https://youtu.be/-6MqyLmTmnc' },
            { artist: 'Fall Foen', url: 'https://youtu.be/STeHIdIZu-s' },
            { artist: 'Startijenn', url: 'https://youtu.be/bMbhRGeBGuA' },
            { artist: 'Le Grand Barouf', url: 'https://youtu.be/7zDVP0kZREc' },
        ],
        series: { fr: 'Photos du festival Fisel', en: 'Photos from the Fisel festival' },
        en: {
            title: 'Julien Padovani',
            text: "Charismatic Julien Padovani during the Grand Barouf dance at the Fisel festival. Grégory Jolivet, who also appears in this exhibition, can be seen there too. It's a small world!\nJulien is a true source of inspiration and takes an active part in the revival of traditional music.",
        },
    },
    {
        slug: 'liam-roudil',
        title: 'Liam Roudil',
        text: "Musicien hors pair et ami très proche, j'ai eu la chance de jouer quelque temps avec Liam au sein du groupe Esling, aux côtés de Rémi Bouguennec, Daravan Souvanna, Raphaël Chevé et moi-même.\nIl met aujourd'hui son talent au service de musiciens de renommée internationale comme Ryan Young ou Calum Stewart.\nSon travail plus récent avec le groupe rennais Talea vaut également le détour.\nLa série qui accompagne ce portrait illustre ces longues soirées à jouer de la musique, rire et boire un verre avec une équipe de musiciens hors pair et d'amis proches.",
        tracks: [
            { artist: 'Talea', url: 'https://youtu.be/YmpL1kLT6dw' },
            { artist: 'Esling', url: 'https://youtu.be/Z2wS2STHiIA' },
        ],
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
            text: "An outstanding musician and very close friend, I was lucky to play for a while with Liam in the band Esling, alongside Rémi Bouguennec, Daravan Souvanna, Raphaël Chevé and myself.\nToday he puts his talent at the service of internationally renowned musicians such as Ryan Young or Calum Stewart.\nHis more recent work with the Rennes-based band Talea is also well worth a listen.\nThe series accompanying this portrait illustrates those long evenings of playing music, laughing and having a drink with a team of outstanding musicians and close friends.",
        },
    },
    {
        slug: 'maxime-barbeau',
        title: 'Maxime Barbeau',
        text: "Doigt levé, sûrement pour donner un avis hyper éclairé sur un sujet étrange.\nFan de Buffy et de Pelicase, Maxime est un précieux ami de buvette ! Demandez-lui d'où lui viennent ses ciseaux rouges et vous passerez un bon moment.\nAvec Ma Petite, il a contribué à faire évoluer la manière dont certains groupes abordent l'arrangement et le chant traditionnel.\nUn artiste autant sur scène qu'à la buvette !",
        tracks: [
            { artist: 'Ma Petite', url: 'https://youtu.be/4XKq94UeSFw' },
            { artist: 'Framboyan', url: 'https://youtu.be/e2rKOUqrvAQ' },
            { artist: 'Sérac', url: 'https://youtu.be/j2OzSFxkwCo' },
        ],
        series: { fr: "Photos de la Fête de l'accordéon de Luzy", en: "Photos from the Fête de l'accordéon in Luzy" },
        en: {
            title: 'Maxime Barbeau',
            text: "Finger raised, surely to give a very well-informed opinion on some strange subject.\nA fan of Buffy and Pelicase, Maxime is a precious bar friend! Ask him where his red scissors come from and you'll have a good time.\nWith Ma Petite, he helped change the way some bands approach arrangement and traditional singing.\nAn artist as much on stage as at the bar!",
        },
    },
    {
        slug: 'camille-a-la-plage',
        title: 'Camille à la plage',
        text: "Un des premiers clichés réalisés pendant une sortie à la plage avec ma merveilleuse femme.\nLa série associée présente les nombreux tests effectués avec son aide, ainsi que des souvenirs de nos trop rares vadrouilles ensemble.",
        tracks: [{ title: 'Where Is My Husband?', url: 'https://youtu.be/rK5TyISxZ_M' }],
        series: { fr: 'Camille en photos', en: 'Camille in photos' },
        en: {
            title: 'Camille at the beach',
            text: 'One of the first shots taken during a trip to the beach with my wonderful wife.\nThe associated series presents the many tests carried out with her help, as well as memories of our all too rare outings together.',
        },
    },
    {
        slug: 'fest-noz',
        title: 'Fest-noz',
        text: "Le kan ha diskan, que l'on peut traduire par « chant et contre-chant », est une technique de chant traditionnel breton dans laquelle deux chanteurs se relaient pour accompagner la danse.",
        tracks: [
            { title: 'Kan ha diskan', url: 'https://youtu.be/j_7AsE5o1a4' },
            { artist: 'Litha', url: 'https://youtu.be/EPTzjddJXUM' },
            { artist: 'Barou Pelen', url: 'https://youtu.be/YjwyzG4sJgE' },
            { artist: 'Ampouailh', url: 'https://youtu.be/6OJvtjm2tBc' },
        ],
        originalsTitle: { fr: 'Le duo Garan Lintanf', en: 'The duo Garan Lintanf' },
        series: {
            fr: 'Les autres artistes du Fest Noz de la Harpe',
            en: 'Other artists at the Fest Noz de la Harpe',
        },
        en: {
            title: 'Fest-noz',
            text: 'The kan ha diskan, which can be translated as "song and counter-song", is a traditional Breton singing technique in which two singers take turns to accompany the dance.',
        },
    },
    {
        slug: 'manege',
        title: 'Manège',
        text: "Une photographie un peu lunaire, prise place Sainte-Anne, à Rennes, sur le fameux manège.\nJ'ai associé ce cliché à plusieurs autres images réalisées dans les rues de Rennes. Une petite parenthèse urbaine au milieu des portraits de musiciens et des scènes de concert.",
        en: {
            title: 'Carousel',
            text: "A slightly lunar photograph, taken on Place Sainte-Anne in Rennes, on the famous carousel.\nI paired this shot with several other images taken in the streets of Rennes. A small urban parenthesis amid the portraits of musicians and concert scenes.",
        },
    },
    {
        slug: 'jolivet',
        title: 'Jolivet',
        text: "Dans le monde foisonnant de la vielle à roue, certains musiciens, par leur personnalité et leur style de jeu, font évoluer l'instrument et le propulsent dans le XXIe siècle.\nValentin Clastrier fut l'un des premiers à bousculer le monde de la vielle à roue. Grégory Jolivet en prolonge aujourd'hui le lumineux chemin musical.\nQuelques questions au vielleux sur sa musique et ses luthiers.",
        tracks: [
            { artist: 'Longskateurs', url: 'https://youtu.be/R5vcrw14uM0' },
            { title: 'La Machine', url: 'https://youtu.be/605thscHvtM' },
        ],
        series: { fr: "Photos de la Fête de l'accordéon de Luzy", en: "Photos from the Fête de l'accordéon in Luzy" },
        en: {
            title: 'Jolivet',
            text: "In the teeming world of the hurdy-gurdy, some musicians, through their personality and playing style, make the instrument evolve and propel it into the 21st century.\nValentin Clastrier was one of the first to shake up the world of the hurdy-gurdy. Grégory Jolivet carries on its luminous musical path today.\nA few questions for the hurdy-gurdy player about his music and his instrument makers.",
        },
    },
    {
        slug: 'session-girls',
        title: 'Session Girls',
        text: "Photographie prise pendant la session de Mesquer, où la priorité était donnée aux musiciennes.\nCette image représente bien l'ambiance des sessions. Et si elle permet aussi de mettre en avant la place des femmes dans la musique, c'est encore mieux.\nEn triant mes photographies, je me suis rendu compte que, photographiant majoritairement des scènes, les femmes y sont finalement assez peu représentées, hormis les chanteuses.\nAlors, encouragez les filles de votre entourage à venir boire des coups au pub et à participer aux sessions. Et encouragez aussi les garçons à leur laisser la place et à les laisser jouer tranquillement !",
        tracks: [
            { url: 'https://youtu.be/pDy0-8OnXYk?si=F9SltXq14wkb6RII' },
            { url: 'https://youtu.be/dvi1CE6jVtg?list=PLrDYooAzDhCjEWfDhdyXCDyyUJ3pDtWIz' },
            { url: 'https://youtu.be/_NToWEbC2UQ?list=PLrDYooAzDhCjEWfDhdyXCDyyUJ3pDtWIz' },
        ],
        group: {
            prefix: 'girls',
            title: { fr: 'Portrait de musiciennes', en: 'Portraits of women musicians' },
        },
        en: {
            title: 'Session Girls',
            text: "Photograph taken during the Mesquer session, where priority was given to women musicians.\nThis image captures the atmosphere of the sessions well. And if it also highlights the place of women in music, even better.\nWhile sorting through my photographs, I realised that, since I mostly photograph stages, women are actually fairly under-represented in them, apart from the singers.\nSo encourage the girls around you to come and have a drink at the pub and to take part in the sessions. And encourage the boys to make room for them and let them play in peace!",
        },
    },
];
