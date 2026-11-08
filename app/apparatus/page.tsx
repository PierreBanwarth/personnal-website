'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/LanguageContext';
import { useT } from '@/lib/useT';
import { assetPath } from '@/lib/assetPath';

type Bi = { fr: string; en: string };

interface Photo {
    file: string;
    caption: Bi;
}

interface LinkItem {
    label: string;
    url: string;
    desc?: Bi;
}

interface Acknowledgement {
    name: string;
    text: Bi;
    link: Pick<LinkItem, 'label' | 'url'>;
}

interface Section {
    id: string;
    title: Bi;
    text: Bi[];
    photos: Photo[];
    links?: LinkItem[];
    acknowledgements?: Acknowledgement[];
    closingThanks?: Bi;
}

const sections: Section[] = [
    {
        id: 'consoles',
        title: { fr: 'Les appareils que j’utilise', en: 'The cameras I use' },
        text: [
            {
                fr: "J’utilise surtout deux Game Boy pour photographier. La Color est devenue la plus complète et celle que j’ai le plus modifiée. Les autres membres de la famille ont aussi droit à leur tour.",
                en: 'I mostly shoot with two Game Boys. The Color has become the most complete and most modified one. The rest of the family still gets a turn.',
            },
        ],
        photos: [
            {
                file: 'les deux game boy principalement utilisée la game boy color est plus complete.jpg',
                caption: {
                    fr: 'Les deux Game Boy principalement utilisées. La Game Boy Color est la plus complète.',
                    en: 'The two Game Boys used most. The Game Boy Color is the more complete one.',
                },
            },
            {
                file: 'le gang au complet.jpg',
                caption: { fr: 'Le gang au complet.', en: 'The whole gang.' },
            },
            {
                file: 'Game boy qui bronze.jpg',
                caption: { fr: 'Une Game Boy qui bronze.', en: 'A Game Boy getting a tan.' },
            },
        ],
    },
    {
        id: 'shell',
        title: { fr: 'Garder le capteur d’origine', en: 'Keeping the original sensor' },
        text: [
            {
                fr: "J’ai conservé le capteur Mitsubishi d’origine et l’ai installé dans une coque Camera+, avec une bague d’adaptation pour monture CS et un objectif 2,8–12 mm. Cette configuration ouvre de nouvelles possibilités de cadrage tout en gardant le capteur d’origine au cœur de l’appareil.",
                en: 'I kept the original Mitsubishi sensor and moved it into a Camera+ shell, fitted with a CS-mount adapter and a 2.8–12 mm lens. It opens up new framing and photographic possibilities while keeping the original sensor at the heart of the camera.',
            },
        ],
        photos: [
            {
                file: "capteur et bague pour fixer l'objectif.jpg",
                caption: { fr: "Le capteur et la bague pour fixer l'objectif.", en: 'The sensor and the ring that holds the lens.' },
            },
            {
                file: 'installation du capteur originale dans une coque neuve.jpg',
                caption: { fr: "Installation du capteur d'origine dans une coque neuve.", en: 'Installing the original sensor in a new shell.' },
            },
            {
                file: 'premiers tests avec un objectif et une coque custom.jpg',
                caption: { fr: 'Premiers tests avec un objectif et une coque custom.', en: 'First tests with a lens and a custom shell.' },
            },
        ],
        links: [
            {
                label: 'Camera +',
                url: 'https://ko-fi.com/s/9457d1cc6e',
                desc: { fr: 'La coque imprimée en 3D.', en: 'The 3D printed shell.' },
            },
        ],
    },
    {
        id: 'supports',
        title: { fr: 'Adapter l’ensemble', en: 'Making things fit' },
        text: [
            {
                fr: "Quelques pièces de l’installation sont imprimées en 3D : des supports pour les appareils, des berceaux et une base avec une fixation pour trépied. Rien de très sophistiqué : juste des adaptations utiles pour rendre l’appareil plus facile à manipuler et à utiliser.",
                en: 'Some parts of the setup are 3D printed: camera supports, cradles and a base with a tripod mount. Nothing particularly sophisticated, just useful adaptations that make the camera easier to handle and use.',
            },
        ],
        photos: [
            {
                file: 'first_3d_print.jpg',
                caption: { fr: 'La première impression 3D.', en: 'The first 3D print.' },
            },
            {
                file: "installation d'un support pour trépié sur une base imprimé en 3D par .jpg",
                caption: {
                    fr: 'Installation d\u2019un support pour trépied sur une base imprimée en 3D.',
                    en: 'Installing a tripod mount on a 3D printed base.',
                },
            },
        ],
        links: [
            {
                label: 'Random Print \u2014 Cradles',
                url: 'https://randomprint.co/collections/cradles',
                desc: { fr: 'Supports pour Game Boy.', en: 'Game Boy cradles.' },
            },
        ],
    },
    {
        id: 'cartridge',
        title: { fr: 'Une nouvelle cartouche', en: 'A new cartridge' },
        text: [
            {
                fr: "J’ai remplacé la cartouche d’origine par la Game Boy Mini Flashable Camera, un PCB qui fait tourner Photo! d’untoxa.",
                en: 'I replaced the original cartridge with a Game Boy Mini Flashable Camera PCB, running Photo! by untoxa.',
            },
            {
                fr: "Ce logiciel homebrew va plus loin que la Game Boy Camera d’origine : il ajoute des modes de prise de vue, des réglages manuels et un meilleur contrôle du stockage des images.",
                en: 'This homebrew software takes the original Game Boy Camera further, with additional shooting modes, manual settings and more control over image storage.',
            },
            {
                fr: 'J’utilise FlashGBX pour gérer la cartouche, récupérer les photos et mettre le logiciel à jour.',
                en: 'I use FlashGBX to manage the cartridge, retrieve photographs and update the software.',
            },
        ],
        photos: [
            {
                file: 'operation_a_coeur_ouvert.jpg',
                caption: { fr: 'Opération à c\u0153ur ouvert.', en: 'Open-heart surgery.' },
            },
            {
                file: 'premiere cartouche avec pcb custom et photos ! le homebrew installé dessus merci a raphael boichot.jpg',
                caption: {
                    fr: 'Première cartouche avec PCB custom, et premières photos. Le homebrew est installé dessus. Merci à Raphaël Boichot.',
                    en: 'First cartridge with the custom PCB, and first photos. The homebrew is installed on it. Thanks to Raphaël Boichot.',
                },
            },
            {
                file: 'flashgbx pour lire les sauvegardes exporter les photos et mettre a jour le firmware.jpg',
                caption: {
                    fr: 'FlashGBX pour lire les sauvegardes, exporter les photos et mettre à jour le firmware.',
                    en: 'FlashGBX to read saves, export photos and update the firmware.',
                },
            },
        ],
        links: [
            {
                label: 'Game Boy Mini Flashable Camera',
                url: 'https://github.com/Raphael-Boichot/Game_Boy_Mini_Flashable_Camera',
                desc: { fr: 'Le PCB custom qui remplace celui de la Game Boy Camera, et toute la documentation.', en: 'The custom PCB that replaces the Game Boy Camera one, with full documentation.' },
            },
            {
                label: 'Photo! (gb-photo)',
                url: 'https://github.com/untoxa/gb-photo',
                desc: { fr: 'Le logiciel homebrew.', en: 'The homebrew software.' },
            },
            {
                label: 'FlashGBX',
                url: 'https://github.com/lesserkuma/FlashGBX',
            },
        ],
    },
    {
        id: 'screen',
        title: { fr: 'Voir ce que je photographie', en: 'Seeing what I’m shooting' },
        text: [
            {
                fr: "L’écran d’origine peut être difficile à utiliser, surtout dans les salles de concert sombres. Un écran LCD rétroéclairé facilite le cadrage et me permet de continuer à photographier quand la lumière manque.",
                en: 'The original Game Boy screen can be difficult to use, especially in dark concert venues. A backlit LCD makes framing much easier and lets me keep shooting in low-light conditions.',
            },
        ],
        photos: [
            {
                file: "installation d'un ecran lcd rétro éclairé pour prendre des photos plus facilement en concert sinon ecran sombre.jpg",
                caption: {
                    fr: 'Installation d\u2019un écran LCD rétroéclairé pour prendre des photos plus facilement en concert.',
                    en: 'Installing a backlit LCD screen to shoot more easily at concerts.',
                },
            },
        ],
    },
    {
        id: 'transfer',
        title: { fr: 'Faire sortir les images', en: 'Getting the pictures out' },
        text: [
            {
                fr: 'Récupérer les photos de la Game Boy fait aussi partie du processus.',
                en: 'Getting the photographs off the Game Boy is part of the process too.',
            },
            {
                fr: 'Des projets comme TinyGB Printer et Pico GB Printer permettent de transférer les images numériquement en émulant l’imprimante Game Boy d’origine. Avec un câble link et FlashGBX, ils ouvrent la voie vers un flux de travail numérique actuel.',
                en: 'Projects such as TinyGB Printer and Pico GB Printer provide ways to transfer images digitally by emulating the original Game Boy Printer. Combined with a link cable and FlashGBX, they make it possible to bring these tiny images into a modern digital workflow.',
            },
            {
                fr: 'Il reste toujours un peu de bricolage : tous les essais ne fonctionnent pas du premier coup.',
                en: 'There is still some tinkering involved. Not every experiment works on the first try.',
            },
        ],
        photos: [
            {
                file: 'Cable link avec ses extensions pour grosses game boy.jpg',
                caption: { fr: 'Câble link avec ses extensions pour les grosses Game Boy.', en: 'Link cable with its extensions for the bulkier Game Boys.' },
            },
            {
                file: 'test du game boy printer.jpg',
                caption: { fr: 'Test de la Game Boy Printer.', en: 'Testing the Game Boy Printer.' },
            },
            {
                file: 'pico remote printer tentative semi réussi de soudure maison projet open source merci raphael boichot pour les pcb et le travail sur les différents projet.jpg',
                caption: {
                    fr: 'Pico remote printer : tentative semi-réussie de soudure maison. Projet open source, merci à Raphaël Boichot pour les PCB et le travail sur les différents projets.',
                    en: 'Pico remote printer: a half-successful home soldering attempt. Open source project, thanks to Raphaël Boichot for the PCBs and his work on these projects.',
                },
            },
            {
                file: 'pico remote aussi .jpg',
                caption: { fr: 'Le pico remote aussi.', en: 'The pico remote too.' },
            },
        ],
        links: [
            { label: 'TinyGB Printer', url: 'https://github.com/Raphael-Boichot/The-TinyGB-Printer' },
            { label: 'Pico GB Printer', url: 'https://github.com/untoxa/pico-gb-printer' },
        ],
    },
    {
        id: 'community',
        title: { fr: 'Un projet nourri par le partage', en: 'Built on shared knowledge' },
        text: [
            {
                fr: 'Une grande partie de cette aventure n’existerait pas sans celles et ceux qui partagent leur travail, leur documentation et leurs découvertes.',
                en: 'Very little of this would exist without the people who share their work, documentation and discoveries.',
            },
        ],
        photos: [
            {
                file: 'passion modding.jpg',
                caption: { fr: 'Passion modding.', en: 'Modding passion.' },
            },
        ],
        links: [
            {
                label: 'Discord Game Boy Camera',
                url: 'https://discord.gg/xfdKPhCAP',
                desc: { fr: 'La communauté autour de la Game Boy Camera.', en: 'The Game Boy Camera community.' },
            },
            {
                label: 'Discord Marius',
                url: 'https://discord.gg/kXdqmAGrQ',
                desc: { fr: 'Communauté francophone de bidouilleurs de consoles rétro.', en: 'French-speaking community of retro console tinkerers.' },
            },
        ],
        acknowledgements: [
            {
                name: 'Raphaël Boichot',
                text: {
                    fr: 'Un merci tout particulier à Raphaël Boichot, dont les projets et la documentation m’ont fait découvrir le modding de la Game Boy Camera. Son travail m’a permis de monter mon propre appareil et d’explorer bien plus loin que je n’aurais pu le faire seul.',
                    en: 'A special thank you to Raphaël Boichot, whose projects and documentation introduced me to Game Boy Camera modding. His work made it possible for me to build my own setup and explore much further than I could have on my own.',
                },
                link: {
                    label: 'Awesome Game Boy Camera and Game Boy Printer projects',
                    url: 'https://github.com/Raphael-Boichot/Awesome-Game-Boy-Camera-and-Game-Boy-Printer-projects',
                },
            },
            {
                name: 'untoxa',
                text: {
                    fr: 'Merci aussi à untoxa pour Photo!, le logiciel homebrew devenu indispensable dans mon appareil.',
                    en: 'Thanks also to untoxa for Photo!, the homebrew software that has become an essential part of my camera.',
                },
                link: {
                    label: 'github.com/untoxa',
                    url: 'https://github.com/untoxa',
                },
            },
        ],
        closingThanks: {
            fr: 'Enfin, merci à toutes celles et ceux des communautés Game Boy Camera et du modding rétro. Cette aventure rappelle tout ce que le partage de nos créations peut rendre possible.',
            en: 'And finally, thanks to everyone in the Game Boy Camera and retro modding communities. This whole adventure is a good reminder of what can happen when people share what they make.',
        },
    },
];

function ExtLink({ item, lang }: { item: LinkItem; lang: 'fr' | 'en' }) {
    return (
        <li className="border-l-2 border-charcoal/20 pl-4">
            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-charcoal underline hover:text-charcoal/60"
            >
                {item.label} →
            </a>
            {item.desc && <p className="text-sm text-charcoal/70 mt-1">{item.desc[lang]}</p>}
        </li>
    );
}

export default function ApparatusPage() {
    const t = useT();
    const { language } = useLanguage();

    return (
        <div className="bg-warm-white min-h-screen">
            <header className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-tight">{t('equipment.title')}</h1>
                <p className="text-xl text-charcoal/75 font-light max-w-3xl xl:max-w-4xl">{t('equipment.subtitle')}</p>
                <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl xl:max-w-4xl">{t('equipment.description')}</p>
            </header>

            {sections.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-charcoal/10"
                >
                    <h2 className="text-3xl font-bold text-charcoal tracking-tight mb-6">{section.title[language]}</h2>
                    <div className="max-w-3xl xl:max-w-4xl space-y-4 mb-8">
                        {section.text.map((p, i) => (
                            <p key={i} className="text-lg text-charcoal/80 leading-relaxed">
                                {p[language]}
                            </p>
                        ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {section.photos.map((photo, i) => (
                            <figure
                                key={photo.file}
                                className={section.photos.length % 2 === 1 && i === 0 ? 'sm:col-span-2' : ''}
                            >
                                <img
                                    src={assetPath(`/images/appareil/${encodeURIComponent(photo.file)}`)}
                                    alt={photo.caption[language]}
                                    loading="lazy"
                                    className="w-full h-auto bg-charcoal/5"
                                />
                                <figcaption className="mt-2 text-sm text-charcoal/70">{photo.caption[language]}</figcaption>
                            </figure>
                        ))}
                    </div>

                    {section.links && (
                        <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                            {section.links.map((l) => (
                                <ExtLink key={l.url} item={l} lang={language} />
                            ))}
                        </ul>
                    )}
                    {section.acknowledgements && (
                        <div className="mt-10 max-w-3xl space-y-8">
                            {section.acknowledgements.map((acknowledgement) => (
                                <article key={acknowledgement.name}>
                                    <h3 className="text-xl font-semibold text-charcoal mb-3">{acknowledgement.name}</h3>
                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                                        {acknowledgement.text[language]}
                                    </p>
                                    <a
                                        href={acknowledgement.link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-charcoal underline hover:text-charcoal/60"
                                    >
                                        {acknowledgement.link.label} →
                                    </a>
                                </article>
                            ))}
                        </div>
                    )}
                    {section.closingThanks && (
                        <p className="mt-8 max-w-3xl text-lg text-charcoal/80 leading-relaxed">
                            {section.closingThanks[language]}
                        </p>
                    )}
                </section>
            ))}

            <section className="bg-charcoal text-warm-white py-16 md:py-24">
                <div className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">{t('equipment.backToWorkTitle')}</h2>
                    <p className="text-warm-white/80 mb-8">{t('equipment.backToWorkText')}</p>
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-warm-white text-charcoal hover:bg-warm-white/90 transition-colors font-medium"
                    >
                        {t('home.title')} →
                    </Link>
                </div>
            </section>
        </div>
    );
}
