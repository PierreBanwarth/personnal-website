'use client';

import { Fragment } from 'react';
import { useLanguage } from '@/app/LanguageContext';
import { cyanotypeWorks, photoWorks } from '@/lib/data';
import { article, articleHeader, stepLabel } from '@/lib/cyanotypeArticle';
import type { Language } from '@/lib/translations';

interface Props {
    onOpenImage: (index: number) => void;
}

function Figure({ index, language, onOpen }: { index: number; language: Language; onOpen: (i: number) => void }) {
    return (
        <button
            type="button"
            onClick={() => onOpen(index)}
            className="block w-full bg-charcoal/5 overflow-hidden cursor-zoom-in group"
            aria-label={`${language === 'fr' ? "Ouvrir l'image agrandie" : 'Open enlarged image'} ${index + 1}`}
        >
            <img
                src={cyanotypeWorks[index].image}
                alt=""
                className="w-full h-auto object-contain group-hover:opacity-95 transition-opacity"
            />
        </button>
    );
}

export default function CyanotypeArticle({ onOpenImage }: Props) {
    const { language } = useLanguage();

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="pt-16 md:pt-24 pb-12 md:pb-16 space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-tight">
                    {articleHeader.title[language]}
                </h1>
                <p className="text-xl md:text-2xl text-charcoal/75 font-light max-w-3xl">
                    {articleHeader.subtitle[language]}
                </p>
                <p className="text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
                    {articleHeader.byline[language]}
                </p>
            </header>

            {article.map((block, i) => {
                switch (block.type) {
                    case 'h2':
                        return (
                            <h2 key={i} className="text-3xl font-bold text-charcoal tracking-tight mt-20 mb-8 max-w-3xl">
                                {block.text[language]}
                            </h2>
                        );
                    case 'h3':
                        return (
                            <h3 key={i} className="text-xl font-bold text-charcoal mt-10 mb-3 max-w-2xl">
                                {block.text[language]}
                            </h3>
                        );
                    case 'p':
                        return (
                            <p key={i} className="text-lg leading-relaxed text-charcoal/75 font-light max-w-2xl mb-6">
                                {block.text[language]}
                            </p>
                        );
                    case 'bullets':
                        return (
                            <ul key={i} className="space-y-3 max-w-2xl mb-6">
                                {block.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <span className="text-cyanotype font-bold flex-shrink-0 mt-0.5">&minus;</span>
                                        <span className="text-lg leading-relaxed text-charcoal/75 font-light">
                                            {item[language]}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        );
                    case 'flow':
                        return (
                            <ol key={i} className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-3 mb-10">
                                {block.steps.map((step, j) => (
                                    <Fragment key={j}>
                                        <li className="flex-1 border border-charcoal/20 px-4 py-3 text-sm text-charcoal text-center flex items-center justify-center">
                                            {step[language]}
                                        </li>
                                        {j < block.steps.length - 1 && (
                                            <span aria-hidden className="text-cyanotype text-center self-center rotate-90 md:rotate-0">
                                                &rarr;
                                            </span>
                                        )}
                                    </Fragment>
                                ))}
                            </ol>
                        );
                    case 'step':
                        return (
                            <div key={i} className="flex items-baseline gap-4 mt-12 mb-3 max-w-2xl">
                                <span className="text-xs uppercase tracking-widest text-cyanotype font-bold flex-shrink-0">
                                    {stepLabel[language]} {block.n}
                                </span>
                                <h3 className="text-xl font-bold text-charcoal">{block.title[language]}</h3>
                            </div>
                        );
                    case 'image':
                        return (
                            <div key={i} className="my-12">
                                <Figure index={block.index} language={language} onOpen={onOpenImage} />
                            </div>
                        );
                    case 'photo':
                        return (
                            <div key={i} className="my-10 max-w-md">
                                <img
                                    src={photoWorks[block.index].image}
                                    alt=""
                                    className="w-full h-auto"
                                    style={{ imageRendering: 'pixelated' }}
                                />
                            </div>
                        );
                }
            })}
        </div>
    );
}
