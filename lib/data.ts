import { assetPath } from './assetPath';

export type WorkType = 'live' | 'cyanotype' | 'photo';

export interface Work {
    id: string;
    title: string;
    type: WorkType;
    image?: string;
    video?: string;
    sourceImage?: string;
    date?: string;
    location?: string;
    artist?: string;
    description?: string;
    technique?: string;
    dimensions?: string;
    credits?: string;
    instagramUrl?: string;
    // Version anglaise des textes affichés (title, description, location)
    en?: { title?: string; description?: string; location?: string };
}

export interface Project {
    id: string;
    title: string;
    slug: string;
    type: WorkType;
    description: string;
    image: string;
    year?: number;
    works: string[]; // work IDs
}

// Live Images - Concert Videos
export const liveWorks: Work[] = [
    {
        id: 'live-001',
        title: 'Poppy Seeds',
        type: 'live',
        video: assetPath('/images/videos/ezgif-55d61aa28c300bbb.mp4'),
        date: '2026',
        location: 'Festival de Mesquer',
        description: '',
        en: { location: 'Mesquer festival' },
    },
    {
        id: 'live-002',
        title: "After movie de la Fête de l'accordéon",
        type: 'live',
        video: assetPath('/images/videos/ezgif-6333395bc3e4023c.mp4'),
        date: '2026',
        location: 'Luzy',
        description: '',
        en: { title: "Fête de l'accordéon after movie" },
    },
    {
        id: 'live-003',
        title: 'Jeanne Lemoine',
        type: 'live',
        video: assetPath('/images/videos/ezgif-72418dbb15a6ae5e.mp4'),
        date: '2026',
        location: 'Festival Fisel',
        description: 'En solo.',
        en: { description: 'Solo set.' },
    },
    {
        id: 'live-004',
        title: 'OSSO',
        type: 'live',
        video: assetPath('/images/videos/ezgif-7bdf35f609f2fa58.mp4'),
        date: '2026',
        description:
            'Un groupe qui utilise des oscillateurs pour imiter des sons traditionnels, pour un bal fest-noz moderne.',
        en: {
            description:
                'A band that uses oscillators to imitate traditional sounds for a modern fest-noz dance.',
        },
    },
    {
        id: 'live-005',
        title: "Souvenirs de l'été",
        type: 'live',
        video: assetPath('/images/videos/ezgif-8ab7f5be57c070cf.mp4'),
        date: '2026',
        description: 'Des moments de vie captés à la Game Boy Camera, avec un peu de musique.',
        en: {
            title: 'Summer memories',
            description: 'Moments of everyday life captured with the Game Boy Camera, with a little music.',
        },
    },
];

// Cyanotypes - Static gallery with prints
export const cyanotypeWorks: Work[] = [
    {
        id: 'cyan-000',
        title: '',
        type: 'cyanotype',
        image: assetPath('/images/cyanotypes/JLUgwY57.jpg'),
        date: '2026',
        technique: 'Cyanotype',
        description: '',
    },
    {
        id: 'cyan-001',
        title: '',
        type: 'cyanotype',
        image: assetPath('/images/cyanotypes/6P7J95Nx.jpg'),
        date: '2024',
        technique: 'Cyanotype',
        description: '',
    },
    {
        id: 'cyan-002',
        title: '',
        type: 'cyanotype',
        image: assetPath('/images/cyanotypes/i7EOVJz_.jpg'),
        date: '2024',
        technique: 'Cyanotype',
        description: '',
    },
    {
        id: 'cyan-003',
        title: '',
        type: 'cyanotype',
        image: assetPath('/images/cyanotypes/qM8RrTKU.jpg'),
        date: '2024',
        technique: 'Cyanotype',
        description: '',
    },
];

// Gallery Photos - Game Boy Camera photographs
export const photoWorks: Work[] = [
    {
        id: 'photo-001',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-001.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-002',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-002.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-003',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-003.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-004',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-004.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-005',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-005.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-006',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-006.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-007',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-007.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-008',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-008.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-009',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-009.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-010',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-010.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-011',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-011.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-012',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-012.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-013',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-013.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-014',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-014.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-015',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-015.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-016',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-016.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-017',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-017.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-018',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-018.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
    {
        id: 'photo-019',
        title: '',
        type: 'photo',
        image: assetPath('/images/photos/photo-019.png'),
        date: '2024',
        technique: 'Game Boy Camera',
        description: '',
    },
];

export const liveProjects: Project[] = [
    {
        id: 'live-all',
        title: 'Live Images',
        slug: 'live-images',
        type: 'live',
        description: 'A collection of videos capturing moments from concert performances and live events using Game Boy Camera.',
        image: assetPath('/images/videos/ezgif-55d61aa28c300bbb.mp4'),
        works: liveWorks.map(w => w.id),
    },
];

export const cyanotypeProjects: Project[] = [
    {
        id: 'cyan-all',
        title: 'Cyanotypes',
        slug: 'cyanotypes',
        type: 'cyanotype',
        description: 'A series of cyanotype prints created from Game Boy Camera images, exploring the transformation from digital to physical medium.',
        image: assetPath('/images/cyanotypes/6P7J95Nx.jpg'),
        works: cyanotypeWorks.map(w => w.id),
    },
];
