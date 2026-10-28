'use client';

import { useLanguage } from '@/app/LanguageContext';
import { cyanotypeTexts } from '@/lib/cyanotypeTexts';
import { useT } from '@/lib/useT';

export function useCyanotypeTexts() {
    const t = useT();
    const { language } = useLanguage();

    // For French, use the original cyanotypeTexts (preserved exactly)
    // For English, use translations from translations.ts

    return {
        presentation: {
            title: language === 'fr' ? cyanotypeTexts.presentation.title : t('cyanotypesEditorial.presentationTitle'),
            subtitle: language === 'fr' ? cyanotypeTexts.presentation.subtitle : t('cyanotypesEditorial.presentationSubtitle'),
        },
        process: {
            title: language === 'fr' ? cyanotypeTexts.process.title : t('cyanotypesEditorial.processTitle'),
            intro: language === 'fr' ? cyanotypeTexts.process.intro : t('cyanotypesEditorial.processIntro'),
            steps: language === 'fr' ? cyanotypeTexts.process.steps : [
                {
                    title: t('cyanotypesEditorial.step1Title'),
                    description: t('cyanotypesEditorial.step1Desc'),
                },
                {
                    title: t('cyanotypesEditorial.step2Title'),
                    description: t('cyanotypesEditorial.step2Desc'),
                },
                {
                    title: t('cyanotypesEditorial.step3Title'),
                    description: t('cyanotypesEditorial.step3Desc'),
                },
                {
                    title: t('cyanotypesEditorial.step4Title'),
                    description: t('cyanotypesEditorial.step4Desc'),
                },
            ],
        },
        characteristics: {
            title: language === 'fr' ? cyanotypeTexts.characteristics.title : t('cyanotypesEditorial.characteristicsTitle'),
            items: language === 'fr' ? cyanotypeTexts.characteristics.items : [
                t('cyanotypesEditorial.char1'),
                t('cyanotypesEditorial.char2'),
                t('cyanotypesEditorial.char3'),
                t('cyanotypesEditorial.char4'),
                t('cyanotypesEditorial.char5'),
            ],
        },
        whyCyanotype: {
            title: language === 'fr' ? cyanotypeTexts.whyCyanotype.title : t('cyanotypesEditorial.whyTitle'),
            text: language === 'fr' ? cyanotypeTexts.whyCyanotype.text : t('cyanotypesEditorial.whyText'),
        },
        scalePerception: {
            title: language === 'fr' ? cyanotypeTexts.scalePerception.title : t('cyanotypesEditorial.scaleTitle'),
            text: language === 'fr' ? cyanotypeTexts.scalePerception.text : t('cyanotypesEditorial.scaleText'),
        },
        credits: {
            author: language === 'fr' ? cyanotypeTexts.credits.author : t('cyanotypesEditorial.creditsAuthor'),
            photography: language === 'fr' ? cyanotypeTexts.credits.photography : t('cyanotypesEditorial.creditsPhotography'),
            collaboration: language === 'fr' ? cyanotypeTexts.credits.collaboration : t('cyanotypesEditorial.creditsCollaboration'),
        },
        galleryTitle: language === 'fr' ? 'La Série' : t('cyanotypesEditorial.galleryTitle'),
    };
}
