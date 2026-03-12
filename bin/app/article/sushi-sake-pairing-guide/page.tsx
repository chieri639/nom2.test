'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function SushiSakePairingGuide() {
    return (
        <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <div style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    borderRadius: 999,
                    background: '#f0f0f0',
                    color: '#555',
                    fontSize: 13,
                    fontWeight: 600,
                    marginBottom: 24,
                    letterSpacing: 1,
                    textTransform: 'uppercase'
                }}>
                    Sushi Pairing Masterclass
                </div>
                <h1 style={{
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#000',
                    margin: '0 0 24px 0'
                }}>
                    The Secret to Sushi & Sake Pairing: Akazu vs Shirozu
                </h1>
                <p style={{ fontSize: 18, color: '#666', lineHeight: 1.6, maxWidth: 600, margin: '0 auto' }}>
                    Most people focus on the fish, but the true master code of sushi pairing lies in the rice. Discover how red and white vinegar changes everything.
                </p>
            </div>

            <div style={{ fontSize: 18, lineHeight: 1.8, color: '#222' }}>
                <p style={{ marginBottom: 32 }}>
                    When thinking about sushi pairing, most diners naturally focus on the topping—the "neta" (fish). However, the true structural foundation of sushi flavor, and therefore the ultimate key to pairing with Japanese sake, is actually the "shari" (sushi rice).
                </p>
                <p style={{ marginBottom: 48 }}>
                    In the modern high-end sushi scene, chefs meticulously choose between traditional <strong>Akazu (Red Vinegar)</strong> and clean <strong>Shirozu (White Vinegar)</strong>. Each resonates with entirely different types of sake. In this guide, we break down the fundamental rules of sushi pairing starting from the vinegar itself.
                </p>

                {/* Section 1: Akazu */}
                <section style={{ marginBottom: 80 }}>
                    <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, paddingBottom: 16, borderBottom: '2px solid #000' }}>
                        1. Akazu (Red Vinegar): The Bridge of Umami
                    </h2>

                    <div style={{
                        borderRadius: 24,
                        overflow: 'hidden',
                        marginBottom: 32,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                    }}>
                        <Image
                            src="/images/akazu_infographic.png"
                            alt="Akazu Red Vinegar Infographic"
                            width={800}
                            height={800}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    <p style={{ marginBottom: 24 }}>
                        A hallmark of traditional Edomae (Tokyo-style) sushi, Akazu is made from sake lees (the byproduct of sake production) that have been aged for 3 to 5 years. Through a long Maillard reaction, the clear liquid transforms into a deep amber color.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        The taste is not merely sour; it possesses a rounded, mellow acidity and an overwhelming depth of <em>umami</em> derived from the sake lees. Because Akazu rice has such a strong personality, it pairs magnificently with fatty tuna (toro), intensely flavored silver-skinned fish, and aged toppings.
                    </p>

                    <div style={{ background: '#f8f4f0', padding: 32, borderRadius: 16, borderLeft: '4px solid #b35934' }}>
                        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, color: '#8a4123' }}>Pairing Logic for Akazu</h3>
                        <p style={{ marginBottom: 0 }}>
                            <strong>The Rule:</strong> Align with the depth of umami. <br />
                            <strong>Recommended Sake:</strong> Choose a robust, full-bodied sake. Look for <strong>Junmai</strong>, <strong>Kimoto</strong>, or <strong>Yamahai</strong> styles. The subtle aged aroma of the red vinegar synchronizes perfectly with the complex acidity and rich umami of these sakes, melting together beautifully on the palate.
                        </p>

                        <div style={{ marginTop: 24 }}>
                            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#111' }}>Recommended Sake for Akazu:</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                                {/* Daishichi Kimoto Junmai */}
                                <div style={{ background: '#fff', padding: 16, borderRadius: 12, border: '1px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="https://hb.afl.rakuten.co.jp/ichiba/3e7beada.014a49a8.3e7beadb.8db6fb82/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fono-sake%2F111701601%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjQwMHg0MDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/3e7beada.014a49a8.3e7beadb.8db6fb82/?me_id=1238111&item_id=10003964&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fono-sake%2Fcabinet%2F00958694%2F111701601.jpg%3F_ex%3D400x400&s=400x400&t=pict" border="0" style="margin:2px" alt="" title=""></a>` }} />
                                </div>
                                {/* Tamagawa */}
                                <div style={{ background: '#fff', padding: 16, borderRadius: 12, border: '1px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="https://hb.afl.rakuten.co.jp/ichiba/50175845.bb6ee033.50175846.4f8c0b33/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdon-online01%2F20230206-020yz%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjQwMHg0MDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/50175845.bb6ee033.50175846.4f8c0b33/?me_id=1284309&item_id=10018754&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fdon-online01%2Fcabinet%2F03174802%2F03280105%2Fdaisichi_720.jpg%3F_ex%3D400x400&s=400x400&t=pict" border="0" style="margin:2px" alt="" title=""></a>` }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Shirozu */}
                <section style={{ marginBottom: 80 }}>
                    <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, paddingBottom: 16, borderBottom: '2px solid #000' }}>
                        2. Shirozu (White Vinegar): The Art of The Clean Cut
                    </h2>

                    <div style={{
                        borderRadius: 24,
                        overflow: 'hidden',
                        marginBottom: 32,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                    }}>
                        <Image
                            src="/images/shirozu_infographic.png"
                            alt="Shirozu White Vinegar Infographic"
                            width={800}
                            height={800}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    <p style={{ marginBottom: 24 }}>
                        Conversely, Shirozu, commonly used in Kansai-style sushi and many modern establishments, is made directly from rice. Its key characteristics are transparency, lower amino acid content, and a sharp, clean acidity. The flavor profile is light and crisp.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Shirozu rice acts as a "pure white canvas" that elevates the natural flavors of the ingredients without interfering with their delicate colors or aromas. Its sharp acidity also serves as an excellent palate cleanser.
                    </p>

                    <div style={{ background: '#f0f5f8', padding: 32, borderRadius: 16, borderLeft: '4px solid #347cb3' }}>
                        <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0, color: '#23598a' }}>Pairing Logic for Shirozu</h3>
                        <p style={{ marginBottom: 0 }}>
                            <strong>The Rule:</strong> Align with the crisp, refreshing sensation. Avoid heavy, aged sakes that would crush the delicate agility of the white rice.<br />
                            <strong>Recommended Sake:</strong> Choose highly aromatic, fruity sakes with a clean finish, such as <strong>Ginjo</strong> or <strong>Daiginjo</strong>. Alternatively, a crisp, dry ("Tanrei Karakuchi") Honjozo sake runs parallel to the sharp acidity of the white vinegar, keeping the meal's tempo bright and lively.
                        </p>

                        <div style={{ marginTop: 24 }}>
                            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#111' }}>Recommended Sake for Shirozu:</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                                {/* Isojiman */}
                                <div style={{ background: '#fff', padding: 16, borderRadius: 12, border: '1px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="https://hb.afl.rakuten.co.jp/ichiba/3e8d5ce7.ece59876.3e8d5ce8.34c8adb5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjizake-watanabe%2F1012002%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjQwMHg0MDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/3e8d5ce7.ece59876.3e8d5ce8.34c8adb5/?me_id=1214778&item_id=10000300&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fjizake-watanabe%2Fcabinet%2F06300917%2F06300926%2Fimgrc0106170390.jpg%3F_ex%3D400x400&s=400x400&t=pict" border="0" style="margin:2px" alt="" title=""></a>` }} />
                                </div>
                                {/* Kaze no Mori */}
                                <div style={{ background: '#fff', padding: 16, borderRadius: 12, border: '1px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="https://hb.afl.rakuten.co.jp/ichiba/501775b5.94132c25.501775b6.9c036fa1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcraftbeer%2F101564%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjQwMHg0MDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/501775b5.94132c25.501775b6.9c036fa1/?me_id=1242393&item_id=10003180&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fcraftbeer%2Fcabinet%2F101564-1_251107.jpg%3F_ex%3D400x400&s=400x400&t=pict" border="0" style="margin:2px" alt="" title=""></a>` }} />
                                </div>
                                {/* Kuheiji */}
                                <div style={{ background: '#fff', padding: 16, borderRadius: 12, border: '1px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="https://hb.afl.rakuten.co.jp/ichiba/43d63bf0.6c97cdec.43d63bf1.9578733c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmaruishi%2F669254%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjQwMHg0MDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/43d63bf0.6c97cdec.43d63bf1.9578733c/?me_id=1215363&item_id=10000478&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fmaruishi%2Fcabinet%2Fimgrc0072241262.jpg%3F_ex%3D400x400&s=400x400&t=pict" border="0" style="margin:2px" alt="" title=""></a>` }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Summary Table */}
                <section>
                    <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, paddingBottom: 16, borderBottom: '2px solid #000' }}>
                        Comparison: Red vs White
                    </h2>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: 16,
                            minWidth: 600,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            borderRadius: 12,
                            overflow: 'hidden'
                        }}>
                            <thead>
                                <tr style={{ background: '#111', color: '#fff' }}>
                                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 600 }}>Feature</th>
                                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 600 }}>Akazu (Red Vinegar)</th>
                                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 600 }}>Shirozu (White Vinegar)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #eee', background: '#fff' }}>
                                    <td style={{ padding: '16px 20px', fontWeight: 600 }}>Raw Material</td>
                                    <td style={{ padding: '16px 20px', color: '#666' }}>Aged Sake Lees</td>
                                    <td style={{ padding: '16px 20px', color: '#666' }}>Rice</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee', background: '#fafafa' }}>
                                    <td style={{ padding: '16px 20px', fontWeight: 600 }}>Acidity</td>
                                    <td style={{ padding: '16px 20px', color: '#666' }}>Mellow, rounded, deep</td>
                                    <td style={{ padding: '16px 20px', color: '#666' }}>Sharp, crisp, clean</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee', background: '#fff' }}>
                                    <td style={{ padding: '16px 20px', fontWeight: 600 }}>Ideal Sushi</td>
                                    <td style={{ padding: '16px 20px', color: '#666' }}>Edomae, Fatty Tuna, Silver fish</td>
                                    <td style={{ padding: '16px 20px', color: '#666' }}>White fish, Squid, Delicate cuts</td>
                                </tr>
                                <tr style={{ background: '#fafafa' }}>
                                    <td style={{ padding: '16px 20px', fontWeight: 600 }}>Ideal Sake</td>
                                    <td style={{ padding: '16px 20px', fontWeight: 700, color: '#b35934' }}>Junmai, Kimoto, Yamahai</td>
                                    <td style={{ padding: '16px 20px', fontWeight: 700, color: '#347cb3' }}>Ginjo, Daiginjo, Dry Honjozo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Section 4: Featured Sake */}
                <section style={{ marginTop: 80, padding: 40, background: '#fff', borderRadius: 24, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
                    <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, color: '#111' }}>
                        Featured Sake Brewery
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div>
                            <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px 0', color: '#b35934' }}>
                                Daishichi Shuzo (大七酒造)
                            </h3>
                            <p style={{ margin: 0, color: '#666', fontSize: 16 }}>
                                Location: Nihonmatsu City, Fukushima Prefecture
                            </p>
                        </div>
                        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#333' }}>
                            Renowned for their mastery of the traditional <strong>Kimoto</strong> method, Daishichi produces robust, umami-rich sakes that are the perfect companions to Akazu (red vinegar) sushi. Their classic <em>Kimoto Junmai</em> is highly recommended for its deep, mature flavors that harmonize beautifully with fatty tuna and aged neta.
                        </p>
                        <div style={{ marginTop: 8 }}>
                            <a href="https://nom2.jp/brewery/daishichi" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', color: '#b35934', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid #b35934', paddingBottom: 2 }}>
                                Learn more about Daishichi Shuzo
                            </a>
                        </div>
                    </div>
                </section>

                {/* Navigation to Part 2 */}
                <div style={{ marginTop: 60, borderTop: '1px solid #eaeaea', paddingTop: 40, textAlign: 'center' }}>
                    <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: '#111' }}>Ready for more?</h3>
                    <Link href="/article/sushi-sake-pairing-guide-part-2" style={{ display: 'inline-block', padding: '16px 32px', background: '#111', color: '#fff', textDecoration: 'none', borderRadius: 30, fontSize: 18, fontWeight: 600, transition: 'background 0.2s', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}>
                        Read Part 2: The Science of Pairing →
                    </Link>
                </div>

            </div>
        </article>
    );
}
