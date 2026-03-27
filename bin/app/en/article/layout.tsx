import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Discover Sake & Tokyo - English Guides | nom × nom',
    description: 'Curated English guides for enthusiasts. From the fundamentals of Edomae sushi pairing to Tokyo\'s best hidden Izakayas.',
    openGraph: {
        title: 'Discover Sake & Tokyo - English Guides | nom × nom',
        description: 'Curated English guides for enthusiasts. From the fundamentals of Edomae sushi pairing to Tokyo\'s best hidden Izakayas.',
        url: 'https://ai.nom2.jp/en/article',
        siteName: 'nom × nom',
        images: ['/images/izakaya_uoyakio.png'],
        type: 'website',
    },
};

export default function EnglishArticleLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>;
}
