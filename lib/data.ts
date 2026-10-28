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
        title: '',
        type: 'live',
        video: assetPath('/images/videos/ezgif-2cc0782747beb57c.mp4'),
        date: '2024',
        description: '',
    },
    {
        id: 'live-002',
        title: '',
        type: 'live',
        video: assetPath('/images/videos/ezgif-3d6aa3ee7df39abe.mp4'),
        date: '2024',
        description: '',
    },
    {
        id: 'live-003',
        title: '',
        type: 'live',
        video: assetPath('/images/videos/ezgif-55d61aa28c300bbb.mp4'),
        date: '2024',
        description: '',
    },
    {
        id: 'live-004',
        title: '',
        type: 'live',
        video: assetPath('/images/videos/ezgif-6333395bc3e4023c.mp4'),
        date: '2024',
        description: '',
    },
    {
        id: 'live-005',
        title: '',
        type: 'live',
        video: assetPath('/images/videos/ezgif-72418dbb15a6ae5e.mp4'),
        date: '2024',
        description: '',
    },
    {
        id: 'live-006',
        title: '',
        type: 'live',
        video: assetPath('/images/videos/ezgif-7bdf35f609f2fa58.mp4'),
        date: '2024',
        description: '',
    },
    {
        id: 'live-007',
        title: '',
        type: 'live',
        video: assetPath('/images/videos/ezgif-8ab7f5be57c070cf.mp4'),
        date: '2024',
        description: '',
    },
];

// Cyanotypes - Static gallery with prints
export const cyanotypeWorks: Work[] = [
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
        image: assetPath('/images/videos/ezgif-2cc0782747beb57c.mp4'),
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
