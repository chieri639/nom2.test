'use client';

import React from 'react';
import Link from 'next/link';

export default function SushiSakePairingGuidePart3() {
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
                    The Golden Rules of Neta & Temperature
                </h1>
                <p style={{ fontSize: 18, color: '#666', lineHeight: 1.6, maxWidth: 640, margin: '0 auto' }}>
                    Now that you understand the foundation of rice and the science of terroir, it's time for the practical application. Discover the ultimate pairing rules used by professional gourmets for specific toppings (Neta) and serving temperatures.
                </p>
            </div>

            <div style={{ fontSize: 18, lineHeight: 1.8, color: '#333' }}>
                <p style={{ marginBottom: 48 }}>
                    In <strong>Part 2</strong>, we explored how chemical reactions and regional characteristics (terroir) form the basis of sushi and sake pairing. To dramatically elevate your sushi experience, however, you need specific knowledge regarding <strong>"Neta" (toppings)</strong> and <strong>"Temperature"</strong>. In this final installment, we reveal the golden rules of pairing.
                </p>

                {/* Chapter 4: The Golden Rules by Neta */}
                <section style={{ marginBottom: 80 }}>
                    <div style={{ textAlign: 'center', marginBottom: 40 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Chapter 4</span>
                        <h2 style={{ fontSize: 32, fontWeight: 800, margin: '8px 0 0 0', color: '#111' }}>
                            The Golden Rules by Neta:<br/>Sharpening Your Sense of "Kire" and "Umami"
                        </h2>
                    </div>

                    <p style={{ marginBottom: 40 }}>
                        Here, we break down the optimal style of Japanese sake for specific categories of sushi toppings and explain the logic behind the pairings.
                    </p>

                    {/* 4.1 White Fish */}
                    <div style={{ marginBottom: 64 }}>
                        <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#111', paddingBottom: 12, borderBottom: '2px solid #eaeaea' }}>
                            4.1 White Fish (Flounder, Sea Bream): <br/>"Transparency" to Draw Out Delicate Sweetness
                        </h3>
                        <p style={{ marginBottom: 16 }}>
                            The charm of white fish lies in its delicate sweetness and texture hidden within its mild flavor profile.
                        </p>
                        <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: 12, marginBottom: 24 }}>
                            <ul style={{ margin: 0, paddingLeft: 20, listStyleType: 'square' }}>
                                <li style={{ marginBottom: 8 }}><strong>The Challenge:</strong> Sake with an overpowering aroma or flavor will completely mask the delicate nuances of white fish.</li>
                                <li style={{ marginBottom: 8 }}><strong>Recommended Pairing:</strong> Junmai Ginjo or Daiginjo (Fruity and light-bodied types).</li>
                                <li><strong>The Logic:</strong> The gorgeous aromas reminiscent of apples or melons found in Ginjo sake enhance the subtle sweetness of the white fish. It also pairs exceptionally well with white vinegar (Shirozu) shari. The ideal serving temperature is around 10-15°C (known as "Hana-bie" or flower-chilling), which tightens the texture of the fish while preserving the sake's aroma.</li>
                            </ul>
                        </div>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div dangerouslySetInnerHTML={{ __html: '<a href="https://hb.afl.rakuten.co.jp/ichiba/442d4b03.944638b8.442d4b04.e524ae44/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fabesaketen%2Fhakurakusei3%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjQwMHg0MDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/442d4b03.944638b8.442d4b04.e524ae44/?me_id=1235542&item_id=10000305&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fabesaketen%2Fcabinet%2Fsake%2Fniizawajhouzouten%2Fr_hkrk_jmdgj72a3.jpg%3F_ex%3D400x400&s=400x400&t=pict" border="0" style="margin:2px" alt="" title=""></a>' }} />
                                <p style={{ fontSize: 13, color: '#666', marginTop: 12, textAlign: 'center' }}>Example: Hakurakusei</p>
                            </div>
                        </div>
                    </div>

                    {/* 4.2 Red Meat */}
                    <div style={{ marginBottom: 64 }}>
                        <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#b33939', paddingBottom: 12, borderBottom: '2px solid #eaeaea' }}>
                            4.2 Red Meat (Tuna): <br/>"Rice Umami" to Embrace Iron and Acidity
                        </h3>
                        <p style={{ marginBottom: 16 }}>
                            Lean tuna (Akami) is characterized by its distinct acidity and the iron content derived from myoglobin.
                        </p>
                        <div style={{ background: '#fdf7f7', padding: '24px', borderRadius: 12, marginBottom: 24 }}>
                            <ul style={{ margin: 0, paddingLeft: 20, listStyleType: 'square' }}>
                                <li style={{ marginBottom: 8 }}><strong>The Challenge:</strong> You need a sake strong enough to catch the iron and acidity and elevate them into a balanced umami.</li>
                                <li style={{ marginBottom: 8 }}><strong>Recommended Pairing:</strong> Junmai (Full-bodied with solid acidity).</li>
                                <li><strong>The Logic:</strong> You want to align the inherent acidity of the tuna with the succinic or lactic acid present in the sake. A rich Junmai sake is particularly excellent with red vinegar (Akazu) shari. The savory umami of the rice in the sake embraces the metallic notes of the tuna and masterfully converts them into deep, satisfying flavors.</li>
                            </ul>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div dangerouslySetInnerHTML={{ __html: '<a href="https://hb.afl.rakuten.co.jp/ichiba/442b82b1.4c2642a9.442b82b2.bfb5a5d1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyanagiya-sake%2F10000260%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/442b82b1.4c2642a9.442b82b2.bfb5a5d1/?me_id=1304184&item_id=10000283&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fyanagiya-sake%2Fcabinet%2F03892949%2F04190788%2Fimgrc0092299514.jpg%3F_ex%3D300x300&s=300x300&t=pict" border="0" style="margin:2px" alt="" title=""></a>' }} />
                            </div>
                            <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div dangerouslySetInnerHTML={{ __html: '<a href="https://hb.afl.rakuten.co.jp/ichiba/3ec079b6.c780a2fd.3ec079b7.877184a7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fumeshu%2F1206-01-1800%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjQwMHg0MDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/3ec079b6.c780a2fd.3ec079b7.877184a7/?me_id=1211534&item_id=10004825&pc=https%3A%2F%2Fimage.rakuten.co.jp%2Fumeshu%2Fcabinet%2Ft_rpg%2F1206%2F1206-01-1800.jpg%3F_ex%3D400x400&s=400x400&t=pict" border="0" style="margin:2px" alt="" title=""></a>' }} />
                            </div>
                        </div>
                    </div>

                    {/* 4.3 Silver Fish */}
                    <div style={{ marginBottom: 64 }}>
                        <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#273c75', paddingBottom: 12, borderBottom: '2px solid #eaeaea' }}>
                            4.3 Silver-skinned Fish (Kohada, Mackerel): <br/>"Lactic Acid Harmony" to Match Vinegar Curing
                        </h3>
                        <p style={{ marginBottom: 16 }}>
                            Silver-skinned fish (Hikarimono) are traditionally cured with salt and vinegar, giving the topping itself a strong acidity and a distinctive aroma.
                        </p>
                        <div style={{ background: '#f5f6fa', padding: '24px', borderRadius: 12, marginBottom: 24 }}>
                            <ul style={{ margin: 0, paddingLeft: 20, listStyleType: 'square' }}>
                                <li style={{ marginBottom: 8 }}><strong>The Challenge:</strong> A robust backbone is required to withstand the curing acidity, alongside the power to accept the unique fats of blue-backed fish.</li>
                                <li style={{ marginBottom: 8 }}><strong>Recommended Pairing:</strong> Kimoto or Yamahai style sake.</li>
                                <li><strong>The Logic:</strong> Sake brewed using the traditional Kimoto or Yamahai methods develop a yogurt-like lactic acidity and a creamy richness thanks to lactic acid bacteria. This "lactic acid" synchronizes perfectly with the "acetic acid" used in the fish curing, rounding off sharp edges mutually and creating a remarkably mellow flavor profile.</li>
                            </ul>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div dangerouslySetInnerHTML={{ __html: '<a href="https://hb.afl.rakuten.co.jp/ichiba/3faf85b6.90ada21d.3faf85b7.510ab719/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkikkys-33%2Fs095%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/3faf85b6.90ada21d.3faf85b7.510ab719/?me_id=1322560&item_id=10000281&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fkikkys-33%2Fcabinet%2Fitem-a%2Fs095.jpg%3F_ex%3D300x300&s=300x300&t=pict" border="0" style="margin:2px" alt="" title=""></a>' }} />
                            </div>
                            <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div dangerouslySetInnerHTML={{ __html: '<a href="https://hb.afl.rakuten.co.jp/ichiba/4657cff5.edd65504.4657cff6.78337c5b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftlsinfo%2F802769%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjQwMHg0MDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/4657cff5.edd65504.4657cff6.78337c5b/?me_id=1235729&item_id=10002732&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Ftlsinfo%2Fcabinet%2F802769.gif%3F_ex%3D400x400&s=400x400&t=pict" border="0" style="margin:2px" alt="" title=""></a>' }} />
                            </div>
                        </div>
                    </div>

                    {/* 4.4 Fish Roe */}
                    <div style={{ marginBottom: 40 }}>
                        <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#d35400', paddingBottom: 12, borderBottom: '2px solid #eaeaea' }}>
                            4.4 Fish Roe (Ikura): <br/>A "Sharp Reset" for Intense Richness
                        </h3>
                        <p style={{ marginBottom: 16 }}>
                            Ikura (salmon roe) is celebrated for its popping texture and the intensely rich, egg-yolk-like liquid that bursts forth.
                        </p>
                        <div style={{ background: '#fdf8f4', padding: '24px', borderRadius: 12, marginBottom: 24 }}>
                            <ul style={{ margin: 0, paddingLeft: 20, listStyleType: 'square' }}>
                                <li style={{ marginBottom: 8 }}><strong>The Challenge:</strong> Suppressing any potential fishy odors while gracefully accepting the intensely concentrated umami.</li>
                                <li style={{ marginBottom: 8 }}><strong>Recommended Pairing:</strong> Dry Junmai (Karakuchi) or sake specially crafted for salmon pairings.</li>
                                <li><strong>The Logic:</strong> If handled incorrectly, the intense umami of Ikura can easily turn into fishiness on the palate. To prevent this, alcohol "Kire" (a sharp, crisp finish) is absolutely essential. Dry sake—especially those from Hokkaido designed for local seafood—washes away the fatty oils while leaving only the residual, pleasing umami in your mouth.</li>
                            </ul>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div dangerouslySetInnerHTML={{ __html: '<a href="https://hb.afl.rakuten.co.jp/ichiba/3e7beada.014a49a8.3e7beadb.8db6fb82/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fono-sake%2Fhuku-tyoukara720%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/3e7beada.014a49a8.3e7beadb.8db6fb82/?me_id=1238111&item_id=10000410&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fono-sake%2Fcabinet%2F00958694%2Fraihuku-tyokara72.jpg%3F_ex%3D300x300&s=300x300&t=pict" border="0" style="margin:2px" alt="" title=""></a>' }} />
                            </div>
                            <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div dangerouslySetInnerHTML={{ __html: '<a href="https://hb.afl.rakuten.co.jp/ichiba/4b0519f9.ebac3bbd.4b0519fa.04064ea9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmanroku%2F0101ttn-honryu-b%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hgb/4b0519f9.ebac3bbd.4b0519fa.04064ea9/?me_id=1279081&item_id=10001018&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fmanroku%2Fcabinet%2Fimg001%2F0101ttn-honryu-b_1.jpg%3F_ex%3D300x300&s=300x300&t=pict" border="0" style="margin:2px" alt="" title=""></a>' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 5: Magic of Temperature */}
                <section style={{ marginBottom: 80 }}>
                    <div style={{ textAlign: 'center', marginBottom: 40 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Chapter 5</span>
                        <h2 style={{ fontSize: 32, fontWeight: 800, margin: '8px 0 0 0', color: '#111' }}>
                            The Magic of Temperature:<br/>Maximizing Flavor via "Body Temperature Sync"
                        </h2>
                    </div>

                    <p style={{ marginBottom: 32 }}>
                        In the realm of sushi pairing, "temperature" is a factor just as crucial—if not more so—than flavor or aroma. Professional sushi chefs obsess over maintaining their shari at exactly human body temperature (around 36-37°C / 97-99°F). This is the absolute perfect temperature for the rice to melt effortlessly in the mouth and for sweetness to be most keenly perceived.
                    </p>

                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: '#111' }}>5.1 The Trap of Cold Sake and the Magic of Kanzake</h3>
                    <p style={{ marginBottom: 24, paddingLeft: 16, borderLeft: '4px solid #111' }}>
                        Cold sake (5-10°C) runs the risk of rapidly dropping the temperature inside your mouth, which hardens the starches in the sushi rice and coagulates the fats of the fish. Pairing heavily marbled Otoro (fatty tuna) or warm simmered Anago (sea eel) with freezing cold sake can cause the fats to solidify on your palate, creating an unpleasant texture.
                    </p>

                    <p style={{ marginBottom: 24, fontSize: 20, fontWeight: 600, color: '#b33939' }}>
                        This is where you must experience the magic of "Kanzake" (Warm Sake).
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ background: '#fff', padding: 24, borderRadius: 12, border: '1px solid #eaeaea', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                            <h4 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px 0', color: '#111' }}>Hinata-kan & Hitohada-kan (Approx. 30°C - 35°C)</h4>
                            <p style={{ margin: 0, color: '#555' }}>Because it mirrors the exact temperature of the sushi rice, the sake and shari unite the second they enter your mouth. The border between food and drink vanishes, creating a supreme texture that feels suspended between solid and liquid.</p>
                        </div>
                        <div style={{ background: '#fff', padding: 24, borderRadius: 12, border: '1px solid #eaeaea', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                            <h4 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px 0', color: '#d35400' }}>Nuru-kan (Approx. 40°C)</h4>
                            <p style={{ margin: 0, color: '#555' }}>This temperature exceeds the melting point of fish fat. The heat of the sake literally melts the fats of Otoro or Yellowtail (Buri) inside your mouth. This phenomenon, often called "intra-oral cooking," instantly maximizes the sweet, savory profile of the fat.</p>
                        </div>
                        <div style={{ background: '#fff', padding: 24, borderRadius: 12, border: '1px solid #eaeaea', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                            <h4 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px 0', color: '#b33939' }}>Atsu-kan (50°C and above)</h4>
                            <p style={{ margin: 0, color: '#555' }}>Ideal for cooked toppings with thick, intense sauces, like Anago or Eel. The rich sauce and the intensely hot sake together produce an exceptionally powerful and satisfying impact.</p>
                        </div>
                    </div>
                </section>

                {/* Conclusion / Summary */}
                <section style={{ padding: 40, background: '#111', color: '#fff', borderRadius: 24, textAlign: 'center' }}>
                    <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 24 }}>
                        The Trilogy Complete:<br/>A Logical Ecosystem of "Mariage"
                    </h2>
                    <p style={{ fontSize: 18, lineHeight: 1.8, opacity: 0.9, marginBottom: 32 }}>
                        Across this three-part series, we have decoded the harmony between sushi and Japanese sake—not as subjective preference, but as a biochemical and regional logic backed by their shared DNA: rice, water, and microorganisms.
                    </p>
                    
                    <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.05)', padding: 24, borderRadius: 12 }}>
                        <ul style={{ margin: 0, paddingLeft: 20, listStyleType: 'decimal', gap: 16, display: 'flex', flexDirection: 'column', color: '#eee' }}>
                            <li><strong>Part 1: The Foundation of Vinegar.</strong> Assess whether the shari uses Akazu (red) or Shirozu (white). Match robust umami sake with red, and crisp, clean sake with white.</li>
                            <li><strong>Part 2: The Two Scientific Miracles.</strong> Understand the "Wash Effect" (alcohol cleansing fat) and "Umami Synergy" (Inosinic acid + Glutamic acid) that exponentially amplify flavor.</li>
                            <li><strong>Part 3: The Practical Magic.</strong> Intentionally control the experience using temperature—such as using Nuru-kan to melt fish fat—or matching sharp dryness to intense roe.</li>
                        </ul>
                    </div>

                    <p style={{ marginTop: 32, fontSize: 18, fontWeight: 600, fontStyle: 'italic', opacity: 0.9 }}>
                        Armed with this knowledge, we invite you to enjoy your next session at the sushi counter with deeper, intellectual delight.
                    </p>
                </section>

                {/* Navigation Back */}
                <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#666' }}>Review Previous Chapters</h3>
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link href="/en/article/sushi-sake-pairing-guide" style={{ padding: '12px 24px', border: '1px solid #111', color: '#111', textDecoration: 'none', borderRadius: 30, fontSize: 15, fontWeight: 600, transition: 'all 0.2s' }}>
                            ← Part 1: Akazu vs Shirozu
                        </Link>
                        <Link href="/en/article/sushi-sake-pairing-guide-part-2" style={{ padding: '12px 24px', border: '1px solid #111', color: '#111', textDecoration: 'none', borderRadius: 30, fontSize: 15, fontWeight: 600, transition: 'all 0.2s' }}>
                            ← Part 2: Synergy & Terroir
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
}
