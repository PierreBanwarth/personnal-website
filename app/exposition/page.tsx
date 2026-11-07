import { cartels } from '@/lib/cartels';
import { getCartelImages } from '@/lib/cartelImages';
import { getExpositionImages } from '@/lib/expositionImages';
import { cyanotypeWorks } from '@/lib/data';
import ExpositionContent from '@/components/ExpositionContent';

export default function ExpositionPage() {
    const photos = getExpositionImages();
    // Tant que le dossier public/images/exposition est vide, on montre la photo des cadres.
    const gallery = photos.length > 0 ? photos : [cyanotypeWorks[0].image!];

    const cards = cartels.map((c) => {
        const images = getCartelImages(c.slug, c.group?.prefix);
        return {
            slug: c.slug,
            title: { fr: c.title, en: c.en.title },
            thumb: images.main ?? images.originals[0] ?? images.others[0],
        };
    });

    return (
        <div className="bg-warm-white min-h-screen">
            <ExpositionContent gallery={gallery} cards={cards} />
        </div>
    );
}
