// Texte de Thierry Chabanis, en français (original) et en anglais. Les images renvoient à l'index dans cyanotypeWorks.

export interface Bi {
    fr: string;
    en: string;
}

export type ArticleBlock =
    | { type: 'h2'; text: Bi }
    | { type: 'h3'; text: Bi }
    | { type: 'p'; text: Bi }
    | { type: 'bullets'; items: Bi[] }
    | { type: 'flow'; steps: Bi[] }
    | { type: 'step'; n: number; title: Bi }
    | { type: 'image'; index: number }
    | { type: 'photo'; index: number };

export const articleHeader = {
    title: { fr: 'De la Game Boy au cyanotype', en: 'From Game Boy to Cyanotype' } as Bi,
    subtitle: {
        fr: 'L\'art du tireur face au défi du pixel',
        en: 'The printer\'s art facing the pixel challenge',
    } as Bi,
    byline: { fr: 'par Thierry Chabanis', en: 'by Thierry Chabanis' } as Bi,
};

export const stepLabel: Bi = { fr: 'Étape', en: 'Step' };

export const article: ArticleBlock[] = [
    { type: 'image', index: 0 },
    {
        type: 'h2',
        text: {
            fr: 'Pourquoi le tirage est l\'âme de la photographie ?',
            en: 'Why is the print the soul of photography?',
        },
    },
    {
        type: 'p',
        text: {
            fr: `Dans l'imaginaire collectif, la photographie se résume souvent à un instant unique : le clic de l'appareil. Pourtant, l'image capturée n'est qu'une matière première, une partition muette en attente d'interprétation. C'est dans la pénombre du laboratoire ou devant l'écran de développement que s'opère la véritable métamorphose. Le tireur n'est pas un simple exécutant technique ; il est l'artisan de l'ombre, l'interprète qui insuffle une atmosphère, sculpte la lumière et donne un corps physique à une vision éphémère.`,
            en: `In the collective imagination, photography is often reduced to a single instant: the click of the camera. Yet the captured image is only raw material, a silent score waiting to be interpreted. It is in the dim light of the darkroom, or in front of the development screen, that the real metamorphosis takes place. The printer is not a mere technical executor; he is the craftsman of shadow, the interpreter who breathes in an atmosphere, sculpts the light and gives a physical body to a fleeting vision.`,
        },
    },
    {
        type: 'p',
        text: {
            fr: `Cette réflexion prend tout son sens face aux projets les plus extrêmes, là où la technologie semble imposer ses limites. Récemment, j'ai été confronté à un défi singulier : donner vie à des images capturées avec une Game Boy Camera des années 90. C'est à travers ce dialogue entre la contrainte technique brute et l'alchimie d'un procédé historique qu'est née la démarche présentée ci-dessous. Une preuve par le bleu que la vérité d'une photographie réside autant dans la main qui la révèle que dans l'œil qui l'a saisie.`,
            en: `This reflection takes on its full meaning with the most extreme projects, where technology seems to impose its limits. Recently, I was faced with a singular challenge: bringing to life images captured with a Game Boy Camera from the 1990s. It is through this dialogue between raw technical constraint and the alchemy of a historical process that the approach presented below was born. Proof, in blue, that the truth of a photograph lies as much in the hand that reveals it as in the eye that captured it.`,
        },
    },

    {
        type: 'h2',
        text: { fr: 'Quand le pixel rencontre le bleu de Prusse', en: 'When the pixel meets Prussian blue' },
    },
    { type: 'h3', text: { fr: 'Le défi de la Game Boy', en: 'The Game Boy challenge' } },
    {
        type: 'p',
        text: {
            fr: `Lorsque Pierre Banwarth m'a confié des images prises avec une Game Boy Camera, j'ai fait face à un défi vertigineux. Cette console produit des fichiers minuscules (128 pixels de large) pour des tirages grands comme un timbre-poste et ne possède que quatre niveaux de gris. Pour feindre des dégradés, il utilise des motifs géométriques, des patterns, une sorte de mosaïque de points. Impossible ici d'utiliser mes outils habituels de tireur, comme les masques d'ombrage ou de lumière. Il fallait trouver une autre manière de donner une âme à cette matière numérique brute.`,
            en: `When Pierre Banwarth entrusted me with images taken with a Game Boy Camera, I faced a dizzying challenge. This console produces tiny files (128 pixels wide) for prints the size of a postage stamp, and has only four levels of grey. To fake gradients, it uses geometric patterns, a sort of mosaic of dots. Using my usual printer's tools, such as shading or light masks, was impossible here. I had to find another way to give a soul to this raw digital material.`,
        },
    },
    { type: 'photo', index: 0 },
    { type: 'h3', text: { fr: 'L\'alchimie du cyanotype', en: 'The alchemy of cyanotype' } },
    {
        type: 'p',
        text: {
            fr: `Au lieu de lutter contre les limites de la Game Boy, j'ai proposé à Pierre de les sublimer grâce au cyanotype, un procédé photographique historique du XIXe siècle. Le cyanotype est connu pour sa difficulté à rendre les dégradés fluides mais il excelle à restituer des contrastes francs. C'était l'écrin parfait : ses nuances bleues allaient accueillir avec une fidélité absolue les quatre niveaux de gris de la console, transformant un fichier informatique froid en une œuvre organique et matérielle.`,
            en: `Instead of fighting the limits of the Game Boy, I suggested to Pierre that we sublimate them with cyanotype, a historical photographic process from the 19th century. Cyanotype is known for its difficulty in rendering smooth gradients, but it excels at reproducing strong contrasts. It was the perfect setting: its shades of blue would welcome the console's four levels of grey with absolute fidelity, turning a cold computer file into an organic, material work.`,
        },
    },
    { type: 'image', index: 3 },

    { type: 'h3', text: { fr: 'Un jeu d\'optique et de distance', en: 'A play of optics and distance' } },
    {
        type: 'p',
        text: {
            fr: `Le second choix fort a été de métamorphoser la taille de l'image en l'agrandissant au format A3. Ce changement d'échelle bouscule le spectateur et l'invite à bouger :`,
            en: `The second bold choice was to transform the size of the image by enlarging it to A3 format. This change of scale unsettles the viewer and invites them to move:`,
        },
    },
    {
        type: 'bullets',
        items: [
            {
                fr: `De près, l'image disparaît pour laisser place à une mosaïque abstraite de gros pixels et de textures.`,
                en: `Up close, the image disappears to make way for an abstract mosaic of big pixels and textures.`,
            },
            {
                fr: `De loin, en prenant du recul, la magie opère : les points se fondent les uns dans les autres, les détails fusionnent, l'illusion opère et la scène se révèle au spectateur.`,
                en: `From afar, stepping back, the magic happens: the dots blend into one another, details merge, the illusion works and the scene reveals itself to the viewer.`,
            },
        ],
    },
    {
        type: 'p',
        text: {
            fr: `Par ce travail de tirage, la Game Boy d'autrefois devient une expérience artistique vivante.`,
            en: `Through this printing work, the Game Boy of yesteryear becomes a living artistic experience.`,
        },
    },

    {
        type: 'h2',
        text: {
            fr: 'Des pixels au soleil, la recette d\'un tirage hors du temps',
            en: 'From pixels to sunlight: the recipe for a timeless print',
        },
    },
    {
        type: 'flow',
        steps: [
            { fr: 'Image numérique Game Boy', en: 'Digital Game Boy image' },
            { fr: 'Agrandissement & négatif', en: 'Enlargement & negative' },
            { fr: 'Papier photosensible & exposition au soleil', en: 'Light-sensitive paper & sun exposure' },
            { fr: 'Tirage physique au cyanotype', en: 'Physical cyanotype print' },
        ],
    },
    {
        type: 'p',
        text: {
            fr: `Comment passe-t-on d'une image virtuelle stockée sur une console de jeu à un grand tirage d'un bleu profond ? Voici les coulisses de mon travail de tireur, un pont jeté entre la nostalgie numérique et l'alchimie du XIXe siècle.`,
            en: `How do you go from a virtual image stored on a game console to a large print of deep blue? Here is the behind-the-scenes of my work as a printer, a bridge between digital nostalgia and 19th-century alchemy.`,
        },
    },
    {
        type: 'step',
        n: 1,
        title: { fr: 'La préparation de la potion magique', en: 'Preparing the magic potion' },
    },
    {
        type: 'p',
        text: {
            fr: `Tout commence dans la pénombre de l'atelier. Je prépare la solution photosensible en mélangeant deux produits chimiques (du citrate d'ammonium de fer et du ferricyanure de potassium). À l'aide d'un pinceau, j'étale délicatement ce liquide jaune-vert sur un papier aquarelle épais. Ce papier est choisi pour son grain et sa capacité à résister aux futurs bains d'eau. Une fois étalé, je laisse le papier sécher à l'abri de la lumière : il est désormais prêt à réagir aux rayons du soleil.`,
            en: `It all begins in the dim light of the workshop. I prepare the light-sensitive solution by mixing two chemicals (ferric ammonium citrate and potassium ferricyanide). With a brush, I delicately spread this yellow-green liquid onto thick watercolour paper. This paper is chosen for its grain and its ability to withstand the water baths to come. Once spread, I let the paper dry away from light: it is now ready to react to the sun's rays.`,
        },
    },
    { type: 'image', index: 4 },
    {
        type: 'step',
        n: 2,
        title: { fr: 'La préparation du papier photosensible', en: 'Preparing light-sensitive paper' },
    },
    {
        type: 'p',
        text: {
            fr: `Le papier aquarelle épais a été préalablement préparé et sensibilisé. Chaque feuille doit être traitée avec soin, en couches régulières de solution photosensible. Le papier est ensuite laissé à sécher complètement à l'abri de la lumière, prêt pour les étapes suivantes du processus.`,
            en: `Thick watercolour paper has been previously prepared and sensitized. Each sheet must be treated carefully, in even layers of light-sensitive solution. The paper is then left to dry completely away from light, ready for the next steps in the process.`,
        },
    },
    { type: 'image', index: 7 },
    {
        type: 'step',
        n: 3,
        title: { fr: 'Le traitement numérique de l\'image', en: 'Digital image processing' },
    },
    {
        type: 'p',
        text: {
            fr: `Pendant que le papier sèche, je m'occupe du fichier de la Game Boy. Pour passer de la taille d'un timbre-poste à un format A3 sans que l'image ne devienne floue et illisible, j'extrapole les pixels numériquement. Je veille à conserver la netteté parfaite de chaque petit carré d'origine.`,
            en: `While the paper dries, I work on the Game Boy file. To go from the size of a postage stamp to A3 without the image becoming blurry and unreadable, I extrapolate the pixels digitally. I take care to preserve the perfect sharpness of each little original square.`,
        },
    },
    { type: 'image', index: 5 },
    {
        type: 'step',
        n: 4,
        title: { fr: 'La création du négatif', en: 'Creating the negative' },
    },
    {
        type: 'p',
        text: {
            fr: `Le cyanotype est un procédé de contact : il faut que le négatif soit à la même taille que le tirage final. J'inverse donc les couleurs de mon image A3 sur ordinateur (le blanc devient noir, les gris clairs deviennent foncés) et j'imprime ce résultat sur un film transparent, semblable à un calque. Nous venons de recréer un négatif, indispensable à cette technique artisanale.`,
            en: `Cyanotype is a contact process: the negative must be the same size as the final print. So I invert the colours of my A3 image on the computer (white becomes black, light greys become dark) and print the result on a transparent film, similar to tracing paper. We have just recreated a negative, essential to this craft technique.`,
        },
    },
    { type: 'image', index: 6 },
    {
        type: 'step',
        n: 5,
        title: { fr: 'L\'exposition et le développement', en: 'Exposure and development' },
    },
    {
        type: 'p',
        text: {
            fr: `Je place mon papier aquarelle enduit (devenu sensible) sur une table. Je pose le calque imprimé directement par-dessus, et je plaque le tout sous une vitre. J'expose ensuite ce "sandwich" directement aux rayons du soleil. Là où le calque est transparent, les UV traversent et « cuisent » le papier. Là où le calque a de gros pixels noirs, la lumière est bloquée.`,
            en: `I place my coated (now sensitive) watercolour paper on a table. I lay the printed film directly on top, and press the whole thing under a pane of glass. I then expose this "sandwich" directly to the sun's rays. Where the film is transparent, the UV rays pass through and "cook" the paper. Where the film has big black pixels, the light is blocked.`,
        },
    },
    {
        type: 'p',
        text: {
            fr: `Après quelques minutes d'exposition, je plonge le papier dans un bac d'eau claire. C'est le moment le plus magique : la chimie qui n'a pas vu la lumière se dissout et s'en va, tandis que les zones frappées par le soleil se fixent et se colorent instantanément d'un bleu de Prusse vibrant. Les quatre niveaux de gris de la Game Boy sont désormais gravés dans les fibres du papier.`,
            en: `After a few minutes of exposure, I immerse the paper in a tub of clear water. This is the most magical moment: the chemistry that has not seen the light dissolves and washes away, while the areas struck by the sun fix and instantly turn a vibrant Prussian blue. The Game Boy's four levels of grey are now engraved in the paper's fibres.`,
        },
    },
    { type: 'image', index: 8 },
    { type: 'image', index: 2 },
];
