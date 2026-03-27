import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '【2026年最新】おりがらみ日本酒とは？にごり酒との違い、おすすめ銘柄まで徹底解説！ | nom × nom',
    description: 'おりがらみ日本酒の基本から、にごり酒との違い、種類、味わいの特徴、おすすめの飲み方や料理とのペアリング、人気銘柄まで詳しくご紹介。あなたの好みのおりがらみを見つけましょう。',
    openGraph: {
        title: '【2026年最新】おりがらみ日本酒とは？にごり酒との違い、おすすめ銘柄まで徹底解説！',
        description: 'おりがらみ日本酒の基本から、にごり酒との違い、味わいの特徴、美味しい飲み方まで、初心者にもわかりやすく徹底ガイド。',
        images: ['/images/origarami_sake_hero.png'],
    },
};

export default function OrigaramiGuideLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>;
}
