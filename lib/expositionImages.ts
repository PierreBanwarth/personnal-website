import fs from 'node:fs';
import path from 'node:path';
import { assetPath } from './assetPath';

const IMAGE_EXT = /\.(png|jpe?g|webp|gif)$/i;

// Photos des cyanotypes de l'expo, lues au build dans public/images/exposition.
export function getExpositionImages(): string[] {
    const dir = path.join(process.cwd(), 'public', 'images', 'exposition');
    if (!fs.existsSync(dir)) return [];
    return fs
        .readdirSync(dir)
        .filter((f) => IMAGE_EXT.test(f))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((f) => assetPath(`/images/exposition/${encodeURIComponent(f)}`));
}
