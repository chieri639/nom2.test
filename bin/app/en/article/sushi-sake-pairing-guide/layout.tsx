import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sushi & Sake Pairing Guide: Akazu vs Shirozu | nom × nom',
    description: 'Discover the ultimate secret to sushi and sake pairing. Learn how Akazu (red vinegar) and Shirozu (white vinegar) sushi rice dictates your ideal Japanese sake choice.',
    openGraph: {
        title: 'Sushi & Sake Pairing Guide: The Secret is in the Vinegar',
        description: 'Master sushi pairing in Japan. Learn why the sushi rice vinegar (Akazu vs Shirozu) is the key to choosing the perfect sake.',
        type: 'article',
    }
};

export default function ArticleLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div style={{ background: '#fafafa', color: '#111', minHeight: '100vh', fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
            <header style={{
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid #eaeaea',
                position: 'sticky',
                top: 0,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(8px)',
                zIndex: 50,
            }}>
                <a href="https://nom2.jp/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://storage.googleapis.com/studio-design-asset-files/projects/YPqrD0nkW5/s-782x198_v-fs_webp_889affa7-11ce-4094-9e79-217640c394e8_small.webp" alt="nom × nom" style={{ height: 24, width: 'auto' }} />
                </a>
            </header>
            <main>
                {children}
            </main>
            <footer style={{ background: '#fff', borderTop: '1px solid #eaeaea', padding: '60px 20px', textAlign: 'center', color: '#666', marginTop: 80 }}>
                <div style={{ marginBottom: 24 }}>
                    <a href="https://nom2.jp/" style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <img src="https://storage.googleapis.com/studio-design-asset-files/projects/YPqrD0nkW5/s-782x198_v-fs_webp_889affa7-11ce-4094-9e79-217640c394e8_small.webp" alt="nom × nom" style={{ height: 24, width: 'auto' }} />
                    </a>
                </div>
                <p style={{ margin: 0, fontSize: 13 }}>&copy; 2026 nom2.jp</p>
            </footer>
        </div>
    );
}
