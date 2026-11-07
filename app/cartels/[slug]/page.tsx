import { notFound } from 'next/navigation';
import { cartels } from '@/lib/cartels';
import { getCartelImages } from '@/lib/cartelImages';
import CartelContent from './CartelContent';

export function generateStaticParams() {
    return cartels.map((c) => ({ slug: c.slug }));
}

export default async function CartelPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const cartel = cartels.find((c) => c.slug === slug);
    if (!cartel) notFound();

    return (
        <div className="bg-warm-white min-h-[70vh]">
            <CartelContent cartel={cartel} images={getCartelImages(slug, cartel.group?.prefix)} />
        </div>
    );
}
