import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="bg-warm-white min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-6xl font-bold text-charcoal mb-4">404</h1>
                <h2 className="text-2xl font-bold text-charcoal mb-6">Page Not Found</h2>
                <p className="text-charcoal/70 mb-12">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-charcoal text-warm-white hover:bg-charcoal/90 transition-colors font-medium"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
