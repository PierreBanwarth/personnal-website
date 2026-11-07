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

interface Section {
    id: string;
    title: Bi;
    text: Bi[];
    photos: Photo[];
    links?: LinkItem[];
}

const sections: Section[] = [
    {
        id: 'consoles',
        title: { fr: 'Les deux Game Boy', en: 'The two Game Boys' },
        text: [
            {
                fr: "Deux Game Boy servent principalement à photographier. La Game Boy Color est la plus complète : c'est elle qui reçoit le plus de modifications. Le reste de la famille suit.",
                en: 'Two Game Boys do most of the shooting. The Game Boy Color is the more complete one and receives most of the modifications. The rest of the family follows.',
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
        title: { fr: 'Le capteur, la coque et l\u2019objectif', en: 'Sensor, shell and lens' },
        text: [
            {
                fr: "Le capteur reste celui de la Game Boy Camera d'origine (Mitsubishi M64282FP). Il est transféré dans une coque neuve, la Camera+, accompagné d'une bague qui permet de fixer un objectif à monture CS (2,8\u201312 mm).",
                en: 'The sensor remains the original Game Boy Camera one (Mitsubishi M64282FP). It is moved into a new shell, the Camera+, along with a ring that holds a CS-mount lens (2.8\u201312 mm).',
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
        title: { fr: 'Supports et impressions 3D', en: 'Supports and 3D printing' },
        text: [
            {
                fr: "Quelques pièces imprimées en 3D complètent l'ensemble, dont une base qui accueille un support de trépied. Pour poser une Game Boy et la tenir en place, il existe aussi des cradles.",
                en: 'A few 3D printed parts complete the setup, including a base that carries a tripod mount. To hold a Game Boy in place, there are also cradles.',
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
        title: { fr: 'La cartouche', en: 'The cartridge' },
        text: [
            {
                fr: "La cartouche d'origine est remplacée par un PCB custom, la Game Boy Mini Flashable Camera, qui accueille le homebrew Photo! (untoxa). Photo! élargit les possibilités de la Game Boy Camera : réglages de capture plus accessibles, modes de prise de vue, contrôles manuels, stockage et transfert. FlashGBX permet de lire les sauvegardes, d'exporter les photos et de mettre à jour le firmware.",
                en: 'The original cartridge is replaced by a custom PCB, the Game Boy Mini Flashable Camera, which runs the Photo! homebrew (untoxa). Photo! extends the Game Boy Camera: more accessible capture settings, shooting modes, manual controls, storage and transfer. FlashGBX reads the saves, exports the photos and updates the firmware.',
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
        title: { fr: 'L\u2019écran', en: 'The screen' },
        text: [
            {
                fr: "L'écran d'origine est sombre, surtout en concert. Un écran LCD rétroéclairé le remplace pour cadrer plus facilement.",
                en: 'The original screen is dark, especially at concerts. A backlit LCD replaces it to make framing easier.',
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
        title: { fr: 'Récupérer les photos', en: 'Getting the photos out' },
        text: [
            {
                fr: "Deux projets open source permettent à la Game Boy de dialoguer avec un ordinateur et de récupérer les photos numériquement : le TinyGB Printer et le Pico GB Printer. Ils imitent la Game Boy Printer. Le câble link, avec ses extensions pour les grosses Game Boy, relie le tout.",
                en: 'Two open source projects let the Game Boy talk to a computer and retrieve the photos digitally: the TinyGB Printer and the Pico GB Printer. Both emulate the Game Boy Printer. The link cable, with its extensions for the bulkier Game Boys, connects everything.',
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
        title: { fr: 'La communauté', en: 'The community' },
        text: [
            {
                fr: "Tout cela se construit en bonne partie sur des serveurs Discord et des dépôts partagés. Deux communautés m'ont particulièrement aidé.",
                en: 'Much of this is built on Discord servers and shared repositories. Two communities helped me in particular.',
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
    const fr = language === 'fr';

    return (
        <div className="bg-warm-white min-h-screen">
            <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-tight">{t('equipment.title')}</h1>
                <p className="text-xl text-charcoal/75 font-light max-w-3xl">{t('equipment.subtitle')}</p>
                <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl">{t('equipment.description')}</p>
            </header>

            {sections.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-charcoal/10"
                >
                    <h2 className="text-3xl font-bold text-charcoal tracking-tight mb-6">{section.title[language]}</h2>
                    <div className="max-w-3xl space-y-4 mb-8">
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
                </section>
            ))}

            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-charcoal/10">
                <h2 className="text-3xl font-bold text-charcoal tracking-tight mb-6">
                    {fr ? 'Merci Raphaël Boichot' : 'Thank you, Raphaël Boichot'}
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                    {fr
                        ? "Un grand merci à Raphaël Boichot pour son travail de documentation, ses développements autour de la Game Boy Camera et sa disponibilité. Ses projets open source m'ont permis de découvrir cet univers, de bricoler mon propre matériel et d'explorer de nouvelles possibilités photographiques. Sans ses contributions et ses conseils, cette aventure aurait certainement pris un tout autre chemin."
                        : 'A big thank you to Raphaël Boichot for his documentation work, his developments around the Game Boy Camera and his availability. His open source projects let me discover this world, tinker with my own hardware and explore new photographic possibilities. Without his contributions and advice, this adventure would certainly have taken a very different path.'}
                </p>
                <a
                    href="https://github.com/Raphael-Boichot/Awesome-Game-Boy-Camera-and-Game-Boy-Printer-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-charcoal underline hover:text-charcoal/60"
                >
                    Awesome Game Boy Camera and Game Boy Printer projects →
                </a>
            </section>

            <section className="bg-charcoal text-warm-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
