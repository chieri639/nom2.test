import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '【2026年版】北海道の日本酒おすすめガイド！人気酒蔵と特徴を徹底解説 | nom × nom',
    description: '北海道旅行に行くなら知っておきたい日本酒の特徴と、絶対におすすめしたい「上川大雪」「男山」「国士無双」などの人気酒蔵をプロが徹底解説！北海道グルメとの絶品ペアリングも。',
    openGraph: {
        title: '【2026年最新】北海道の日本酒おすすめガイド！人気酒蔵と特徴を徹底解説',
        description: '北海道旅行やお土産探しに最適な、北海道の日本酒の特徴と人気酒蔵「上川大雪」「男山」「高砂酒造」をプロが徹底ガイドします。',
        images: ['/images/hokkaido_sake_hero.png'],
    },
};

export default function HokkaidoSakeGuideLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>;
}
