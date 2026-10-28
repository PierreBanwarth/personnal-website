/**
 * Cyanotype Project Editorial Content
 * 
 * This file contains the French editorial texts for the cyanotype project.
 * Texts written by Thierry.
 * 
 * IMPORTANT: These texts are preserved exactly as provided and must not be modified,
 * translated, paraphrased, shortened, or rewritten.
 */

export const cyanotypeTexts = {
    // Project Presentation
    presentation: {
        title: 'Cyanotypes',
        subtitle: 'Une série de cyanotypes réalisés à partir de photos Game Boy Camera, explorant le passage d\'une esthétique numérique rétro à un procédé photographique historique.',
    },

    // Process Section
    process: {
        title: 'À propos du processus',
        intro: 'Le cyanotype est l\'un des plus anciens procédés d\'impression photographique. Développé en 1842 par Sir John Herschel, il s\'agit d\'une méthode chimique directe pour tirer des photographies.',

        steps: [
            {
                title: 'Préparation',
                description: 'Une solution de citrate de fer ammoniacal et de ferricyanure de potassium est appliquée au pinceau sur le papier. Ce dernier sèche ensuite dans l\'obscurité, prêt à recevoir l\'image.',
            },
            {
                title: 'Exposition',
                description: 'Un négatif (créé à partir d\'une image Game Boy Camera) est placé au contact du papier sensibilisé, puis exposé à la lumière UV. Les zones claires du négatif laissent passer la lumière et déclenchent une réaction chimique, tandis que les zones sombres protègent le papier.',
            },
            {
                title: 'Développement',
                description: 'Le papier exposé est rincé à l\'eau claire. Les produits chimiques qui n\'ont pas réagi sont éliminés, révélant une image d\'un bleu de Prusse intense.',
            },
            {
                title: 'Séchage',
                description: 'Le tirage sèche naturellement à l\'air libre, le bleu gagnant en profondeur à mesure que les pigments se stabilisent. Chaque impression devient ainsi un objet unique, façonné par le temps, la lumière et la matérialité du processus.',
            },
        ],
    },

    // Characteristics
    characteristics: {
        title: 'Caractéristiques du cyanotype',
        items: [
            'Teinte bleue distinctive (bleu de Prusse)',
            'Contraste tonal élevé',
            'Excellente conservation dans le temps (les tirages peuvent traverser les siècles)',
            'Relation directe et physique entre le négatif et l\'impression',
            'Fabrication artisanale rendant chaque œuvre unique',
        ],
    },

    // Why Cyanotype
    whyCyanotype: {
        title: 'Pourquoi le cyanotype ?',
        text: 'Le procédé du cyanotype crée une relation directe et tangible entre la prise de vue et le tirage photographique. En partant d\'une image Game Boy Camera — un médium numérique par nature contraint et pixélisé —, le cyanotype transforme cette limite technique en une texture physique. Ce bleu profond évoque à la fois les origines de la photographie et une exploration de la matière. C\'est un processus qui exige de l\'intention : maîtrise du temps, rigueur chimique et choix des matériaux. Ici, rien n\'est automatique. Chaque tirage émerge du bain comme un objet singulier.',
    },

    // Scale and Perception
    scalePerception: {
        title: 'Le jeu d\'échelle et de perception',
        text: 'Au cœur de ce projet réside un travail sur le changement d\'échelle. L\'image d\'origine, capturée par la Game Boy Camera, ne fait que 128 pixels de large. En la transposant sur un format physique A3, le pixel numérique devient une matière à observer. Ce grand écart crée une double expérience de lecture : de près, le regard se perd dans une texture qui s\'apparente à une mosaïque de carrés bleus ; en prenant du recul, les détails fusionnent, l\'illusion opère et la scène se révèle au spectateur.',
    },

    // Credits
    credits: {
        author: 'Textes : Thierry',
        photography: 'Photographie : Pierre Banwarth',
        collaboration: 'Collaboration artistique et technique pour la production des cyanotypes',
    },
} as const;
