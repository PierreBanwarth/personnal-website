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
        fr: 'L\u2019art du tireur face au d\u00e9fi du pixel',
        en: 'The printer\u2019s art facing the pixel challenge',
    } as Bi,
    byline: { fr: 'par Thierry Chabanis', en: 'by Thierry Chabanis' } as Bi,
};

export const stepLabel: Bi = { fr: '\u00c9tape', en: 'Step' };

export const article: ArticleBlock[] = [
    { type: 'image', index: 0 },
    {
        type: 'h2',
        text: {
            fr: 'Pourquoi le tirage est l\u2019\u00e2me de la photographie ?',
            en: 'Why is the print the soul of photography?',
        },
    },
    {
        type: 'p',
        text: {
            fr: `Dans l'imaginaire collectif, la photographie se r\u00e9sume souvent \u00e0 un instant unique : le clic de l'appareil. Pourtant, l'image capt\u00e9e n'est qu'une mati\u00e8re premi\u00e8re, une partition muette en attente d'interpr\u00e9tation. C\u2019est dans la p\u00e9nombre du laboratoire ou devant l'\u00e9cran de d\u00e9veloppement que s'op\u00e8re la v\u00e9ritable m\u00e9tamorphose. Le tireur n'est pas un simple ex\u00e9cutant technique ; il est l'artisan de l'ombre, l'interpr\u00e8te qui insuffle une atmosph\u00e8re, sculpte la lumi\u00e8re et donne un corps physique \u00e0 une vision \u00e9ph\u00e9m\u00e8re.`,
            en: `In the collective imagination, photography is often reduced to a single instant: the click of the camera. Yet the captured image is only raw material, a silent score waiting to be interpreted. It is in the dim light of the darkroom, or in front of the development screen, that the real metamorphosis takes place. The printer is not a mere technical executor; he is the craftsman of shadow, the interpreter who breathes in an atmosphere, sculpts the light and gives a physical body to a fleeting vision.`,
        },
    },
    {
        type: 'p',
        text: {
            fr: `Cette r\u00e9flexion prend tout son sens face aux projets les plus extr\u00eames, l\u00e0 o\u00f9 la technologie semble imposer ses limites. R\u00e9cemment, j'ai \u00e9t\u00e9 confront\u00e9 \u00e0 un d\u00e9fi singulier : donner vie \u00e0 des images captur\u00e9es avec une Game Boy Camera des ann\u00e9es 90. C'est \u00e0 travers ce dialogue entre la contrainte technique brute et l'alchimie d'un proc\u00e9d\u00e9 historique qu'est n\u00e9e la d\u00e9marche pr\u00e9sent\u00e9e ci-dessous. Une preuve par le bleu que la v\u00e9rit\u00e9 d'une photographie r\u00e9side autant dans la main qui la r\u00e9v\u00e8le que dans l'\u0153il qui l'a saisie.`,
            en: `This reflection takes on its full meaning with the most extreme projects, where technology seems to impose its limits. Recently, I was faced with a singular challenge: bringing to life images captured with a Game Boy Camera from the 1990s. It is through this dialogue between raw technical constraint and the alchemy of a historical process that the approach presented below was born. Proof, in blue, that the truth of a photograph lies as much in the hand that reveals it as in the eye that captured it.`,
        },
    },
    { type: 'image', index: 1 },

    {
        type: 'h2',
        text: { fr: 'Quand le pixel rencontre le bleu de Prusse', en: 'When the pixel meets Prussian blue' },
    },
    { type: 'h3', text: { fr: 'Le d\u00e9fi de la Game Boy', en: 'The Game Boy challenge' } },
    {
        type: 'p',
        text: {
            fr: `Lorsque Pierre Banwarth m'a confi\u00e9 des images prises avec une Game Boy Camera, j'ai fait face \u00e0 un d\u00e9fi vertigineux. Cette console produit des fichiers minuscules (128 pixels de large) pour des tirages grands comme un timbre-poste et ne poss\u00e8de que quatre niveaux de gris. Pour feindre des d\u00e9grad\u00e9s, il utilise des motifs g\u00e9om\u00e9triques, des patterns, une sorte de mosa\u00efque de points. Impossible ici d'utiliser mes outils habituels de tireur, comme les masques d'ombrage ou de lumi\u00e8re. Il fallait trouver une autre mani\u00e8re de donner une \u00e2me \u00e0 cette mati\u00e8re num\u00e9rique brute.`,
            en: `When Pierre Banwarth entrusted me with images taken with a Game Boy Camera, I faced a dizzying challenge. This console produces tiny files (128 pixels wide) for prints the size of a postage stamp, and has only four levels of grey. To fake gradients, it uses geometric patterns, a sort of mosaic of dots. Using my usual printer's tools, such as shading or light masks, was impossible here. I had to find another way to give a soul to this raw digital material.`,
        },
    },
    { type: 'photo', index: 0 },
    { type: 'h3', text: { fr: 'L\u2019alchimie du cyanotype', en: 'The alchemy of cyanotype' } },
    {
        type: 'p',
        text: {
            fr: `Au lieu de lutter contre les limites de la Game Boy, j'ai propos\u00e9 \u00e0 Pierre de les sublimer gr\u00e2ce au cyanotype, un proc\u00e9d\u00e9 photographique historique du XIXe si\u00e8cle. Le cyanotype est connu pour sa difficult\u00e9 \u00e0 rendre les d\u00e9grad\u00e9s fluides mais il excelle \u00e0 restituer des contrastes francs. C\u2019\u00e9tait l'\u00e9crin parfait : ses nuances bleues allaient accueillir avec une fid\u00e9lit\u00e9 absolue les quatre niveaux de gris de la console, transformant un fichier informatique froid en une \u0153uvre organique et mat\u00e9rielle.`,
            en: `Instead of fighting the limits of the Game Boy, I suggested to Pierre that we sublimate them with cyanotype, a historical photographic process from the 19th century. Cyanotype is known for its difficulty in rendering smooth gradients, but it excels at reproducing strong contrasts. It was the perfect setting: its shades of blue would welcome the console's four levels of grey with absolute fidelity, turning a cold computer file into an organic, material work.`,
        },
    },
    { type: 'image', index: 2 },

    { type: 'h3', text: { fr: 'Un jeu d\u2019optique et de distance', en: 'A play of optics and distance' } },
    {
        type: 'p',
        text: {
            fr: `Le second choix fort a \u00e9t\u00e9 de m\u00e9tamorphoser la taille de l'image en l'agrandissant au format A3. Ce changement d'\u00e9chelle bouscule le spectateur et l'invite \u00e0 bouger :`,
            en: `The second bold choice was to transform the size of the image by enlarging it to A3 format. This change of scale unsettles the viewer and invites them to move:`,
        },
    },
    {
        type: 'bullets',
        items: [
            {
                fr: `De pr\u00e8s, l'image dispara\u00eet pour laisser place \u00e0 une mosa\u00efque abstraite de gros pixels et de textures.`,
                en: `Up close, the image disappears to make way for an abstract mosaic of big pixels and textures.`,
            },
            {
                fr: `De loin, en prenant du recul, la magie op\u00e8re : les points se fondent les uns dans les autres, les d\u00e9tails fusionnent, l'illusion op\u00e8re et la sc\u00e8ne se r\u00e9v\u00e8le au spectateur.`,
                en: `From afar, stepping back, the magic happens: the dots blend into one another, details merge, the illusion works and the scene reveals itself to the viewer.`,
            },
        ],
    },
    {
        type: 'p',
        text: {
            fr: `Par ce travail de tirage, la Game Boy d'autrefois devient une exp\u00e9rience artistique vivante.`,
            en: `Through this printing work, the Game Boy of yesteryear becomes a living artistic experience.`,
        },
    },

    {
        type: 'h2',
        text: {
            fr: 'Des pixels au soleil, la recette d\u2019un tirage hors du temps',
            en: 'From pixels to sunlight: the recipe for a timeless print',
        },
    },
    {
        type: 'flow',
        steps: [
            { fr: 'Image num\u00e9rique Game Boy', en: 'Digital Game Boy image' },
            { fr: 'Agrandissement & n\u00e9gatif', en: 'Enlargement & negative' },
            { fr: 'Papier photosensible & exposition au soleil', en: 'Light-sensitive paper & sun exposure' },
            { fr: 'Tirage physique au cyanotype', en: 'Physical cyanotype print' },
        ],
    },
    {
        type: 'p',
        text: {
            fr: `Comment passe-t-on d'une image virtuelle stock\u00e9e sur une console de jeu \u00e0 un grand tirage d'un bleu profond ? Voici les coulisses de mon travail de tireur, un pont jet\u00e9 entre la nostalgie num\u00e9rique et l'alchimie du XIXe si\u00e8cle.`,
            en: `How do you go from a virtual image stored on a game console to a large print of deep blue? Here is the behind-the-scenes of my work as a printer, a bridge between digital nostalgia and 19th-century alchemy.`,
        },
    },
    {
        type: 'step',
        n: 1,
        title: { fr: 'La pr\u00e9paration de la potion magique', en: 'Preparing the magic potion' },
    },
    {
        type: 'p',
        text: {
            fr: `Tout commence dans la p\u00e9nombre de l'atelier. Je pr\u00e9pare la solution photosensible en m\u00e9langeant deux produits chimiques (du citrate d'ammonium de fer et du ferricyanure de potassium). \u00c0 l'aide d'un pinceau, j'\u00e9tale d\u00e9licatement ce liquide jaune-vert sur un papier aquarelle \u00e9pais. Ce papier est choisi pour son grain et sa capacit\u00e9 \u00e0 r\u00e9sister aux futurs bains d'eau. Une fois \u00e9tal\u00e9, je laisse le papier s\u00e9cher \u00e0 l'abri de la lumi\u00e8re : il est d\u00e9sormais pr\u00eat \u00e0 r\u00e9agir aux rayons du soleil.`,
            en: `It all begins in the dim light of the workshop. I prepare the light-sensitive solution by mixing two chemicals (ferric ammonium citrate and potassium ferricyanide). With a brush, I delicately spread this yellow-green liquid onto thick watercolour paper. This paper is chosen for its grain and its ability to withstand the water baths to come. Once spread, I let the paper dry away from light: it is now ready to react to the sun's rays.`,
        },
    },
    {
        type: 'step',
        n: 2,
        title: { fr: 'Le grand saut num\u00e9rique', en: 'The big digital leap' },
    },
    {
        type: 'p',
        text: {
            fr: `Pendant que le papier s\u00e8che, je m'occupe du fichier de la Game Boy. Pour passer de la taille d'un timbre-poste \u00e0 un format A3 sans que l'image ne devienne floue et illisible, j'extrapole les pixels num\u00e9riquement. Je veille \u00e0 conserver la nettet\u00e9 parfaite de chaque petit carr\u00e9 d'origine.`,
            en: `While the paper dries, I work on the Game Boy file. To go from the size of a postage stamp to A3 without the image becoming blurry and unreadable, I extrapolate the pixels digitally. I take care to preserve the perfect sharpness of each little original square.`,
        },
    },
    {
        type: 'step',
        n: 3,
        title: { fr: 'La cr\u00e9ation du n\u00e9gatif', en: 'Creating the negative' },
    },
    {
        type: 'p',
        text: {
            fr: `Le cyanotype est un proc\u00e9d\u00e9 de contact : il faut que le n\u00e9gatif soit \u00e0 la m\u00eame taille que le tirage final. J'inverse donc les couleurs de mon image A3 sur ordinateur (le blanc devient noir, les gris clairs deviennent fonc\u00e9s) et j'imprime ce r\u00e9sultat sur un film transparent, semblable \u00e0 un calque. Nous venons de recr\u00e9er un n\u00e9gatif, indispensable \u00e0 cette technique artisanale.`,
            en: `Cyanotype is a contact process: the negative must be the same size as the final print. So I invert the colours of my A3 image on the computer (white becomes black, light greys become dark) and print the result on a transparent film, similar to tracing paper. We have just recreated a negative, essential to this craft technique.`,
        },
    },
    {
        type: 'step',
        n: 4,
        title: { fr: 'L\u2019insolation ou le rendez-vous avec le soleil', en: 'Exposure, or the appointment with the sun' },
    },
    {
        type: 'p',
        text: {
            fr: `Je place mon papier aquarelle enduit (devenu sensible) sur une table. Je pose le calque imprim\u00e9 directement par-dessus, et je plaque le tout sous une vitre. J'expose ensuite ce "sandwich" directement aux rayons du soleil. L\u00e0 o\u00f9 le calque est transparent, les UV traversent et \u00ab cuisent \u00bb le papier. L\u00e0 o\u00f9 le calque a de gros pixels noirs, la lumi\u00e8re est bloqu\u00e9e.`,
            en: `I place my coated (now sensitive) watercolour paper on a table. I lay the printed film directly on top, and press the whole thing under a pane of glass. I then expose this "sandwich" directly to the sun's rays. Where the film is transparent, the UV rays pass through and "cook" the paper. Where the film has big black pixels, the light is blocked.`,
        },
    },
    {
        type: 'step',
        n: 5,
        title: { fr: 'Le bain r\u00e9v\u00e9lateur', en: 'The developing bath' },
    },
    {
        type: 'p',
        text: {
            fr: `Apr\u00e8s quelques minutes d'exposition, je plonge le papier dans un bac d'eau claire. C'est le moment le plus magique : la chimie qui n'a pas vu la lumi\u00e8re se dissout et s'en va, tandis que les zones frapp\u00e9es par le soleil se fixent et se colorent instantan\u00e9ment d'un bleu de Prusse vibrant. Les quatre niveaux de gris de la Game Boy sont d\u00e9sormais grav\u00e9s dans les fibres du papier.`,
            en: `After a few minutes of exposure, I immerse the paper in a tub of clear water. This is the most magical moment: the chemistry that has not seen the light dissolves and washes away, while the areas struck by the sun fix and instantly turn a vibrant Prussian blue. The Game Boy's four levels of grey are now engraved in the paper's fibres.`,
        },
    },
    { type: 'image', index: 3 },
];
