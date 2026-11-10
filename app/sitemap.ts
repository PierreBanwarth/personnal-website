import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://pierrebanwarth.com";

const pages = [
    "/",
    "/about",
    "/apparatus",
    "/cartels",
    "/contact",
    "/cyanotypes",
    "/exposition",
    "/live-images",

    // Cartels individuels
    "/cartels/camille-a-la-plage",
    "/cartels/fest-noz",
    "/cartels/grimace",
    "/cartels/grimaces",
    "/cartels/jolivet",
    "/cartels/julien-padovani",
    "/cartels/kilian-flatot",
    "/cartels/liam-roudil",
    "/cartels/manege",
    "/cartels/maxime-barbeau",
    "/cartels/session-girls",
];

export default function sitemap(): MetadataRoute.Sitemap {
    return pages.map((page) => ({
        url: `${baseUrl}${page === "/" ? "" : page}`,
    }));
}
