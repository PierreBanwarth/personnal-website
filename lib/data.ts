export type WorkType = 'live' | 'cyanotype';

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
        title: 'Live Performance #1',
        type: 'live',
        video: '/images/videos/ezgif-2cc0782747beb57c.mp4',
        date: '2024',
        description: 'Concert performance captured with Game Boy Camera',
    },
    {
        id: 'live-002',
        title: 'Live Performance #2',
        type: 'live',
        video: '/images/videos/ezgif-3d6aa3ee7df39abe.mp4',
        date: '2024',
        description: 'Moment of music and movement',
    },
    {
        id: 'live-003',
        title: 'Live Performance #3',
        type: 'live',
        video: '/images/videos/ezgif-55d61aa28c300bbb.mp4',
        date: '2024',
        description: 'Performance in light and shadow',
    },
    {
        id: 'live-004',
        title: 'Live Performance #4',
        type: 'live',
        video: '/images/videos/ezgif-6333395bc3e4023c.mp4',
        date: '2024',
        description: 'Captured in motion',
    },
    {
        id: 'live-005',
        title: 'Live Performance #5',
        type: 'live',
        video: '/images/videos/ezgif-72418dbb15a6ae5e.mp4',
        date: '2024',
        description: 'Live moment from stage',
    },
    {
        id: 'live-006',
        title: 'Live Performance #6',
        type: 'live',
        video: '/images/videos/ezgif-7bdf35f609f2fa58.mp4',
        date: '2024',
        description: 'Performance sequence',
    },
    {
        id: 'live-007',
        title: 'Live Performance #7',
        type: 'live',
        video: '/images/videos/ezgif-8ab7f5be57c070cf.mp4',
        date: '2024',
        description: 'Concert documentation',
    },
];

// Cyanotypes - Static gallery with prints
export const cyanotypeWorks: Work[] = [
    {
        id: 'cyan-001',
        title: 'Cyanotype Print #1',
        type: 'cyanotype',
        image: '/images/cyanotypes/6P7J95Nx.jpg',
        date: '2024',
        technique: 'Cyanotype print on paper',
        description: 'Exploration of tonal range and light in the cyanotype process',
    },
    {
        id: 'cyan-002',
        title: 'Cyanotype Print #2',
        type: 'cyanotype',
        image: '/images/cyanotypes/i7EOVJz_.jpg',
        date: '2024',
        technique: 'Cyanotype print on paper',
        description: 'Study of form and shadow through the analog printing method',
    },
    {
        id: 'cyan-003',
        title: 'Cyanotype Print #3',
        type: 'cyanotype',
        image: '/images/cyanotypes/qM8RrTKU.jpg',
        date: '2024',
        technique: 'Cyanotype print on paper',
        description: 'Transformation from digital to analog: the physicality of the print',
    },
];

export const liveProjects: Project[] = [
    {
        id: 'live-all',
        title: 'Live Images',
        slug: 'live-images',
        type: 'live',
        description: 'A collection of videos capturing moments from concert performances and live events using Game Boy Camera.',
        image: '/images/videos/ezgif-2cc0782747beb57c.mp4',
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
        image: '/images/cyanotypes/6P7J95Nx.jpg',
        works: cyanotypeWorks.map(w => w.id),
    },
];
