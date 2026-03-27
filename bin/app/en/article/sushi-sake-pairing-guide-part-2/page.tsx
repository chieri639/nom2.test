'use client';

import React from 'react';
import Link from 'next/link';

export default function SushiSakePairingGuidePart2() {
    return (
        <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}>

            {/* Header Section */}
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <span style={{ display: 'inline-block', padding: '6px 16px', background: '#ececec', color: '#333', borderRadius: 20, fontSize: 14, fontWeight: 600, marginBottom: 24, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Pairing Guide Part 2: Science & Terroir
                </span>
                <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.2, color: '#111', margin: '0 0 24px 0', letterSpacing: '-0.03em' }}>
                    Why Sake Makes Sushi Even More Delicious:<br />
                    <span style={{ color: '#b35934' }}>The Science of the Perfect Marriage</span>
                </h1>
                <p style={{ fontSize: 18, color: '#555', lineHeight: 1.6, maxWidth: 600, margin: '0 auto' }}>
                    The exceptional compatibility between Japanese sake and sushi isn't simply because they share "rice" as an ingredient. It is built upon the profound <strong>scientific miracles</strong> happening on your palate and the geographical story of <strong>terroir (water cycles)</strong>.
                </p>
            </div>

            {/* Content Body */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>

                {/* Section 1: Chemical Reactions */}
                <section>
                    <h2 style={{ fontSize: 32, fontWeight: 800, borderBottom: '2px solid #b35934', paddingBottom: 16, marginBottom: 32, color: '#111' }}>
                        Chapter 2: The Two Miracles of Chemical Reactions
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                        <div style={{ background: '#fff', padding: 40, borderRadius: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 12, background: '#f8f4f0', color: '#b35934', fontSize: 24, fontWeight: 800, marginBottom: 24 }}>1</div>
                            <h3 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 16px 0', color: '#111' }}>Instantly Cutting Through Fat: The Wash Effect</h3>
                            <p style={{ margin: '0 0 16px 0', fontSize: 17, lineHeight: 1.8, color: '#444' }}>
                                <strong>Scientific Basis:</strong> The alcohol (ethanol) in sake acts as an organic solvent, possessing the unique property of dissolving lipids (fats).
                            </p>
                            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: '#444' }}>
                                <strong>The Effect:</strong> When transitioning between fatty toppings (like Tuna belly or Yellowtail), sake washes away the lingering fat from your mouth, perfectly resetting your palate. In the world of sake, this crisp, palate-cleansing finish is highly prized and referred to as <strong>"Kire" (切れ味 - sharpness)</strong>.
                            </p>
                            <div style={{ marginTop: 24, padding: 16, background: '#fafafa', borderRadius: 16, border: '1px solid #eee' }}>
                                <h4 style={{ margin: '0 0 16px 0', fontSize: 15, color: '#333' }}>Example of Wash Effect Sake: Otokoyama "Tsumamitsutsu"</h4>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="https://hb.afl.rakuten.co.jp/ichiba/3fd47121.eb692916.3fd47123.3820da63/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fwatashoweb%2F0006-76891%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/3fd47121.eb692916.3fd47123.3820da63/?me_id=1378316&item_id=10009356&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fwatashoweb%2Fcabinet%2Fshohin%2F07214987%2F76891-02.jpg%3F_ex%3D300x300&s=300x300&t=pict" border="0" style="margin:2px" alt="" title=""></a>` }} />
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#fff', padding: 40, borderRadius: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 12, background: '#f8f4f0', color: '#b35934', fontSize: 24, fontWeight: 800, marginBottom: 24 }}>2</div>
                            <h3 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 16px 0', color: '#111' }}>An Explosion of Flavor: The Synergy of Umami</h3>
                            <p style={{ margin: '0 0 16px 0', fontSize: 17, lineHeight: 1.8, color: '#444' }}>
                                <strong>Scientific Basis:</strong> Fish inherently contains "Inosinic acid." Both the sushi rice (shari) and sake contain high concentrations of "Glutamic acid." When these two distinct umami components combine in your mouth, the intensity of the umami flavor multiplies exponentially.
                            </p>
                            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: '#444' }}>
                                <strong>Preventing Fishiness:</strong> Unlike white wine, which often contains iron and sulfites that can react with fish fat to create an unpleasant "fishy" odor, sake is meticulously stripped of iron during its brewing process. This makes sake the superior choice for raw seafood.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Terroir */}
                <section>
                    <h2 style={{ fontSize: 32, fontWeight: 800, borderBottom: '2px solid #347cb3', paddingBottom: 16, marginBottom: 32, color: '#111' }}>
                        Chapter 3: The Story of the "Same Water" - Terroir
                    </h2>
                    <p style={{ fontSize: 18, lineHeight: 1.8, color: '#444', marginBottom: 40 }}>
                        In the world of sake, terroir is synonymous with the <strong>"circulation of water."</strong> The ultimate pairing occurs when the water used to brew the sake originates from the exact same water system that nurtured the seafood off the nearby coast.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
                        <div style={{ background: '#f0f5f8', padding: 32, borderRadius: 24, borderLeft: '4px solid #347cb3' }}>
                            <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 16px 0', color: '#23598a' }}>Toyama Prefecture</h3>
                            <p style={{ margin: '0 0 12px 0', fontSize: 16, lineHeight: 1.6, color: '#333' }}>
                                <strong>The Journey:</strong> Snowmelt from the 3,000-meter-high Tateyama mountain range travels underground to irrigate rice paddies before finally flowing into Toyama Bay, over 1,000 meters deep.
                            </p>
                            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#333' }}>
                                <strong>The Pairing:</strong> Sakes from Toyama (like the elegant <em>Masuizumi</em>) are characterized by their clear, fine-grained texture with a solid core. This harmonizes completely with the sweet, dense flesh of local <strong>Shiroebi (white shrimp)</strong> and <strong>Kanburi (winter yellowtail)</strong> raised in the very same water cycle.
                            </p>
                            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', background: '#fff', padding: 16, borderRadius: 16, border: '1px solid #e1ebf2' }}>
                                <div dangerouslySetInnerHTML={{ __html: `<a href="https://hb.afl.rakuten.co.jp/ichiba/3e8d5ce7.ece59876.3e8d5ce8.34c8adb5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjizake-watanabe%2F10010590%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/3e8d5ce7.ece59876.3e8d5ce8.34c8adb5/?me_id=1214778&item_id=10010590&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fjizake-watanabe%2Fcabinet%2F06300917%2F07321507%2Fimgrc0106068865.jpg%3F_ex%3D300x300&s=300x300&t=pict" border="0" style="margin:2px" alt="" title=""></a>` }} />
                            </div>
                        </div>

                        <div style={{ background: '#f0f5f8', padding: 32, borderRadius: 24, borderLeft: '4px solid #347cb3' }}>
                            <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 16px 0', color: '#23598a' }}>Hokkaido Prefecture</h3>
                            <p style={{ margin: '0 0 12px 0', fontSize: 16, lineHeight: 1.6, color: '#333' }}>
                                <strong>The Environment:</strong> Frigid seas yield seafood incredibly rich in fat (Sea Urchin, Salmon Roe, Scallops, Salmon). The cold climate also enables long, low-temperature fermentation for sake.
                            </p>
                            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#333' }}>
                                <strong>The Inevitability:</strong> Hokkaido sakes (like <em>Otokoyama</em>) are notoriously crisp, dry, and clean (<strong>"Tanrei Karakuchi"</strong>). This crispness is an absolute necessity, acting as a powerful wash effect against the heavy fat of northern seafood. It's a natural, inevitable symbiosis.
                            </p>
                            <div style={{ marginTop: 24, background: '#fff', padding: 16, borderRadius: 16, border: '1px solid #e1ebf2' }}>
                                <h4 style={{ margin: '0 0 16px 0', fontSize: 15, color: '#23598a', textAlign: 'center' }}>Examples of Hokkaido "Tanrei Karakuchi"</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, justifyItems: 'center' }}>
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="https://hb.afl.rakuten.co.jp/ichiba/4505c97a.4a2fc121.4505c97b.a33e306f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhokkaidouselectshop%2Fdaiginjo-kokusimusou%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/4505c97a.4a2fc121.4505c97b.a33e306f/?me_id=1422749&item_id=10000062&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fhokkaidouselectshop%2Fcabinet%2Ftanpin%2Fimgrc0092282936.jpg%3F_ex%3D300x300&s=300x300&t=pict" border="0" style="margin:2px" alt="" title=""></a>` }} />
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="https://hb.afl.rakuten.co.jp/ichiba/4505c97a.4a2fc121.4505c97b.a33e306f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhokkaidouselectshop%2Fkamikawa-gift2s_1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/4505c97a.4a2fc121.4505c97b.a33e306f/?me_id=1422749&item_id=10000021&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fhokkaidouselectshop%2Fcabinet%2Ftanpin%2Fimgrc0090023120.jpg%3F_ex%3D300x300&s=300x300&t=pict" border="0" style="margin:2px" alt="" title=""></a>` }} />
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="https://hb.afl.rakuten.co.jp/ichiba/4505c97a.4a2fc121.4505c97b.a33e306f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhokkaidouselectshop%2Fdaiginjo-kokusimusou%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInprb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/4505c97a.4a2fc121.4505c97b.a33e306f/?me_id=1422749&item_id=10000062&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fhokkaidouselectshop%2Fcabinet%2Ftanpin%2Fimgrc0092282936.jpg%3F_ex%3D300x300&s=300x300&t=pict" border="0" style="margin:2px" alt="" title=""></a>` }} />
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="https://hb.afl.rakuten.co.jp/ichiba/4505c97a.4a2fc121.4505c97b.a33e306f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhokkaidouselectshop%2Fkamikawa-gift2s_1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInprb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/4505c97a.4a2fc121.4505c97b.a33e306f/?me_id=1422749&item_id=10000021&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fhokkaidouselectshop%2Fcabinet%2Ftanpin%2Fimgrc0090023120.jpg%3F_ex%3D300x300&s=300x300&t=pict" border="0" style="margin:2px" alt="" title=""></a>` }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion & Navigation */}
                <div style={{ marginTop: 60, borderTop: '1px solid #eaeaea', paddingTop: 40, textAlign: 'center' }}>
                    <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#111' }}>
                        Knowledge is Flavor
                    </h3>
                    <p style={{ fontSize: 18, color: '#666', lineHeight: 1.6, marginBottom: 32 }}>
                        "Wash effect" cuts through fat. "Umami synergy" creates explosions of flavor. And the subtle differences in "terroir"—like hard minerality vs soft purity—dictate the perfect marriage on your palate. Ready for the final step?
                    </p>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link href="/en/article/sushi-sake-pairing-guide" style={{ padding: '16px 32px', border: '1px solid #111', color: '#111', textDecoration: 'none', borderRadius: 30, fontSize: 16, fontWeight: 600, transition: 'all 0.2s' }}>
                            ← Back to Part 1: Vinegar Base
                        </Link>
                        <Link href="/en/article/sushi-sake-pairing-guide-part-3" style={{ padding: '16px 32px', background: '#111', color: '#fff', textDecoration: 'none', borderRadius: 30, fontSize: 16, fontWeight: 600, transition: 'all 0.2s', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}>
                            Part 3: Practical Edition →
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
}
