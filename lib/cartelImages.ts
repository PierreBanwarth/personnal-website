import fs from 'node:fs';
import path from 'node:path';
import { assetPath } from './assetPath';

const IMAGE_EXT = /\.(png|jpe?g|jfif|webp|gif)$/i;
// originale-1.png, originale1.png, originaux.png... (le numéro 0 ou un nom sans numéro est l'œuvre centrale)
const ORIGINAL = /^origin(?:ale|aux)-?(\d+)?(?:\.[a-z]+)+$/i;

export interface CartelImages {
    main?: string;
    originals: string[];
    group: string[];
    others: string[];
}

// Lit public/images/cartels/<slug> au build ; les "originale-1 (2).png" (doublons Windows) sont ignor\u00e9s.
export function getCartelImages(slug: string, groupPrefix?: string): CartelImages {
    const dir = path.join(process.cwd(), 'public', 'images', 'cartels', slug);
    if (!fs.existsSync(dir)) return { originals: [], group: [], others: [] };

    const files = fs.readdirSync(dir).filter((f) => IMAGE_EXT.test(f));
    const url = (f: string) => assetPath(`/images/cartels/${slug}/${encodeURIComponent(f)}`);
    const byName = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true });

    const originalFiles = files.filter((f) => ORIGINAL.test(f)).sort(byName);
    const mainFile =
        originalFiles.find((f) => ORIGINAL.exec(f)?.[1] === '0') ??
        originalFiles.find((f) => ORIGINAL.exec(f)?.[1] === undefined);

    const inGroup = (f: string) => !!groupPrefix && f.toLowerCase().startsWith(groupPrefix.toLowerCase());
    const rest = files.filter((f) => !/^origin/i.test(f)).sort(byName);

    return {
        main: mainFile && url(mainFile),
        originals: originalFiles.filter((f) => f !== mainFile).map(url),
        group: rest.filter(inGroup).map(url),
        others: rest.filter((f) => !inGroup(f)).map(url),
    };
}
