'use client';

import Link from 'next/link';
import { useT } from '@/lib/useT';

interface Credit {
  name: string;
  role: string;
  url: string;
}

export default function ApparatusPage() {
    const t = useT();

    return (
        <div className="bg-warm-white min-h-screen">
            {/* Header */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">{t('equipment.title')}</h1>
                    <p className="text-xl text-charcoal/70 mb-6">{t('equipment.subtitle')}</p>
                    <p className="text-lg text-charcoal/80 leading-relaxed">
                        {t('equipment.description')}
                    </p>
                </div>
            </section>

            {/* Configuration Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
                <h2 className="text-3xl font-bold text-charcoal mb-12">{t('equipment.configurationTitle')}</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Sensor */}
                    <div className="bg-charcoal/5 p-8 rounded">
                        <h3 className="text-xl font-bold text-charcoal mb-3">{t('equipment.sensor')}</h3>
                        <p className="text-charcoal/80">{t('equipment.sensorDesc')}</p>
                    </div>

                    {/* Cartridge */}
                    <div className="bg-charcoal/5 p-8 rounded">
                        <h3 className="text-xl font-bold text-charcoal mb-3">{t('equipment.cartridge')}</h3>
                        <p className="text-charcoal/80">{t('equipment.cartridgeDesc')}</p>
                    </div>

                    {/* Software */}
                    <div className="bg-charcoal/5 p-8 rounded">
                        <h3 className="text-xl font-bold text-charcoal mb-3">{t('equipment.software')}</h3>
                        <p className="text-charcoal/80">{t('equipment.softwareDesc')}</p>
                    </div>

                    {/* Housing */}
                    <div className="bg-charcoal/5 p-8 rounded">
                        <h3 className="text-xl font-bold text-charcoal mb-3">{t('equipment.housing')}</h3>
                        <p className="text-charcoal/80">{t('equipment.housingDesc')}</p>
                    </div>

                    {/* Optics */}
                    <div className="bg-charcoal/5 p-8 rounded">
                        <h3 className="text-xl font-bold text-charcoal mb-3">{t('equipment.optics')}</h3>
                        <p className="text-charcoal/80">{t('equipment.opticsDesc')}</p>
                    </div>

                    {/* Transfer Ecosystem */}
                    <div className="bg-charcoal/5 p-8 rounded">
                        <h3 className="text-xl font-bold text-charcoal mb-3">{t('equipment.transferTitle')}</h3>
                        <p className="text-charcoal/80">{t('equipment.transferDesc')}</p>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="bg-charcoal/5 py-16 md:py-24 border-y border-charcoal/10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-charcoal mb-6">{t('equipment.capabilitiesTitle')}</h2>
                    <p className="text-lg text-charcoal/80 leading-relaxed">
                        {t('equipment.capabilitiesText')}
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <h2 className="text-3xl font-bold text-charcoal mb-6">{t('equipment.philosophyTitle')}</h2>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                    {t('equipment.philosophyText')}
                </p>
            </section>

            {/* Credits Section */}
            <section className="bg-warm-white border-t border-charcoal/10 py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-charcoal mb-12">{t('equipment.creditsTitle')}</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Note: We need to handle the credits array manually since it's an array in translations */}
                        <div className="border-l-2 border-charcoal/20 pl-6">
                            <h3 className="font-bold text-charcoal mb-2">Photo!</h3>
                            <p className="text-sm text-charcoal/70 mb-3">Homebrew software</p>
                            <a 
                                href="https://github.com/untoxa/gb-photo" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-charcoal hover:text-charcoal/60 underline text-sm"
                            >
                                github.com/untoxa/gb-photo →
                            </a>
                        </div>

                        <div className="border-l-2 border-charcoal/20 pl-6">
                            <h3 className="font-bold text-charcoal mb-2">GB Mini Flashable Camera</h3>
                            <p className="text-sm text-charcoal/70 mb-3">Design and documentation</p>
                            <a 
                                href="https://github.com/Raphael-Boichot/Game_Boy_Mini_Flashable_Camera" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-charcoal hover:text-charcoal/60 underline text-sm"
                            >
                                github.com/Raphael-Boichot/Game_Boy_Mini_Flashable_Camera →
                            </a>
                        </div>

                        <div className="border-l-2 border-charcoal/20 pl-6">
                            <h3 className="font-bold text-charcoal mb-2">Camera + Mini Shell</h3>
                            <p className="text-sm text-charcoal/70 mb-3">3D printed housing</p>
                            <a 
                                href="https://ko-fi.com/s/a4d7bd649a" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-charcoal hover:text-charcoal/60 underline text-sm"
                            >
                                ko-fi.com → Camera + Mini Shell
                            </a>
                        </div>

                        <div className="border-l-2 border-charcoal/20 pl-6">
                            <h3 className="font-bold text-charcoal mb-2">TinyGB Printer</h3>
                            <p className="text-sm text-charcoal/70 mb-3">Print ecosystem</p>
                            <a 
                                href="https://github.com/Raphael-Boichot/The-TinyGB-Printer" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-charcoal hover:text-charcoal/60 underline text-sm"
                            >
                                github.com/Raphael-Boichot/The-TinyGB-Printer →
                            </a>
                        </div>

                        <div className="border-l-2 border-charcoal/20 pl-6">
                            <h3 className="font-bold text-charcoal mb-2">Pico GB Printer</h3>
                            <p className="text-sm text-charcoal/70 mb-3">Print ecosystem</p>
                            <a 
                                href="https://github.com/untoxa/pico-gb-printer" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-charcoal hover:text-charcoal/60 underline text-sm"
                            >
                                github.com/untoxa/pico-gb-printer →
                            </a>
                        </div>

                        <div className="border-l-2 border-charcoal/20 pl-6">
                            <h3 className="font-bold text-charcoal mb-2">GBxCart</h3>
                            <p className="text-sm text-charcoal/70 mb-3">Recommended flashing tool</p>
                            <a 
                                href="https://www.gbxcart.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-charcoal hover:text-charcoal/60 underline text-sm"
                            >
                                gbxcart.com →
                            </a>
                        </div>
                    </div>

                    <p className="text-sm text-charcoal/60 mt-12 pt-8 border-t border-charcoal/10">
                        {t('equipment.creditsNote')}
                    </p>
                </div>
            </section>

            {/* Back to Work Section */}
            <section className="bg-charcoal text-warm-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">{t('equipment.backToWorkTitle')}</h2>
                    <p className="text-warm-white/80 mb-8">
                        {t('equipment.backToWorkText')}
                    </p>
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
