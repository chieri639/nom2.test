import React from 'react';
import Link from 'next/link';

export default function OrigaramiSakeGuide() {
    return (
        <article style={{ fontFamily: '"Noto Serif JP", "Mincho", serif', lineHeight: 1.8, color: '#2c2c2c', backgroundColor: '#faf9f5' }}>
            
            {/* Hero Section */}
            <header style={{ position: 'relative', height: '40vh', minHeight: 260, maxHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src="/images/origarami_sake_hero_2.png" 
                        alt="おりがらみ日本酒のグラス" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)' }} />
                </div>
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', padding: '0 24px', maxWidth: 800 }}>
                    <p style={{ fontFamily: '"Noto Sans JP", sans-serif', fontWeight: 700, letterSpacing: 2, fontSize: 13, textTransform: 'uppercase', marginBottom: 16, color: '#e6c27a' }}>ORIGARAMI SAKE GUIDE</p>
                    <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 24, lineHeight: 1.4, textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                        【2026年最新】おりがらみ日本酒とは？<br />にごり酒との違い、おすすめ銘柄まで徹底解説！
                    </h1>
                </div>
            </header>

            <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
                <section style={{ marginBottom: 60 }}>
                    <p style={{ fontSize: 18, marginBottom: 24 }}>
                        日本酒のラベルを見ていると、時折「おりがらみ」あるいは「かすみ酒」といった言葉を目にすることがあります。ボトルの底に白いモヤモヤとしたものが沈殿しており、「これはにごり酒と同じ？」「振ってから飲むの？」と疑問に思う方も多いのではないでしょうか。
                    </p>
                    <p style={{ fontSize: 18, marginBottom: 24 }}>
                        実は「おりがらみ」は、コアな日本酒ファンから絶大な人気を集める非常に魅力的なジャンルです。<br />
                        本記事では、おりがらみ独自の「濃厚な旨味」と「フレッシュでジューシーな味わい」の秘密から、にごり酒との明確な違い、そして最大限楽しむための美味しい飲み方までを日本酒のプロが徹底解説します。
                    </p>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '60px 0' }} />

                {/* What is Origarami */}
                <section style={{ marginBottom: 60 }}>
                    <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, color: '#1a1a1a', borderLeft: '4px solid #bfa758', paddingLeft: 16 }}>
                        1. 「おりがらみ」とは？ その魅力と特徴を深掘り
                    </h2>
                    
                    <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#2c3e50', marginTop: 40 }}>
                        「おり（澱）」の正体とは？
                    </h3>
                    <p style={{ fontSize: 17, marginBottom: 24 }}>
                        日本酒の発酵が終わった液体（もろみ）を搾って酒と酒粕に分ける際、どうしても細かいお米の粒子や酵母菌などの固形物が液体に混ざり込んでしまいます。この白く濁った固形物のことを<strong>「おり（澱・滓）」</strong>と呼びます。
                    </p>
                    <p style={{ fontSize: 17, marginBottom: 24 }}>
                        通常の澄んだ（透明な）日本酒は、この「おり」をタンクの底に沈殿させて上澄みだけをすくい取ったり、さらに細かいフィルターで濾過（ろか）したりして造られます。<br />
                        しかし、あえてこの「おり」を取り除かず、お酒の中に適度に残したまま（絡ませたまま）瓶詰めしたものが<strong>「おりがらみ」</strong>です。
                    </p>

                    <div style={{ background: '#fff', padding: 24, borderRadius: 12, border: '1px solid #e9ecef', marginBottom: 32 }}>
                        <h4 style={{ fontSize: 16, fontWeight: 700, color: '#bfa758', marginBottom: 8 }}>📝 表記の違い：「滓がらみ」「澱がらみ」「かすみ酒」</h4>
                        <p style={{ fontSize: 15, margin: 0 }}>
                            酒蔵によって漢字で「滓がらみ」「澱がらみ」と書くこともありますが、意味は同じです。また、春先に出回る非常に薄くおりを絡ませたお酒は、春の霞（かすみ）に見立てて<strong>「かすみ酒」</strong>という美しい名前で呼ばれることもあります。
                        </p>
                    </div>

                    <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#2c3e50', marginTop: 40 }}>
                        おりがらみの味わいの特徴
                    </h3>
                    <ul style={{ fontSize: 17, marginBottom: 24, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <li><strong>圧倒的なお米の旨味と甘味：</strong>「おり」にはお米のデンプンや酵母由来の旨味成分がたっぷりと含まれているため、通常のクリアな日本酒よりも味わいが太く、濃厚で複雑な旨味を感じられます。</li>
                        <li><strong>フレッシュな微炭酸（ピチピチ感）：</strong>おりがらみの多くは、火入れ（加熱殺菌）をしていない「生酒」として出荷されます。「おり」の中に生きた酵母が残っていることがあり、瓶の中で発酵が微弱に続くため、開栓すると「シュワッ」とした微発泡感（ガス感）を楽しめる銘柄が非常に多いのも特徴です。乳酸菌飲料（大人のカルピス）のように表現されることもあります。</li>
                    </ul>
                </section>

                <hr style={{ border: 'none', borderTop: '1px dotted #ccc', margin: '40px 0' }} />

                {/* Nigori vs Origarami */}
                <section style={{ marginBottom: 60 }}>
                    <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, color: '#1a1a1a', borderLeft: '4px solid #bfa758', paddingLeft: 16 }}>
                        2. 「にごり酒」「うすにごり」との明確な違い
                    </h2>
                    <p style={{ fontSize: 17, marginBottom: 24 }}>
                        白く濁っている日本酒といえば「にごり酒」を思い浮かべる方が多いと思いますが、実は製法や濁りの度合いに明確な違いがあります。
                    </p>

                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32, fontSize: 15, background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <thead>
                            <tr style={{ background: '#1a1a1d', color: '#fff' }}>
                                <th style={{ padding: '16px', borderBottom: '1px solid #ddd', textAlign: 'left', width: '30%' }}>種類</th>
                                <th style={{ padding: '16px', borderBottom: '1px solid #ddd', textAlign: 'left', width: '70%' }}>特徴と製法の違い</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', fontWeight: 700 }}>にごり酒</td>
                                <td style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', lineHeight: 1.6 }}>
                                    もろみを搾る際、意図的に<strong>非常に目の粗い布（ザルなど）</strong>を使って濾します。お米の粒感（どろどろ感）がしっかりと残り、真っ白で非常に濃厚・甘口な味わいになることが多いのが特徴です。
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', fontWeight: 700, color: '#bfa758' }}>おりがらみ</td>
                                <td style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', lineHeight: 1.6 }}>
                                    通常の細かい布で搾った後、タンクの底に沈んだ細かい「おり」を、通常の澄んだ日本酒に後から適量混ぜ合わせる、あるいは濾過をせずにそのまま瓶詰めしたものです。にごり酒に比べてサラッとしており、透明な部分と白い部分がグラデーションのようになります。
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', fontWeight: 700 }}>うすにごり</td>
                                <td style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', lineHeight: 1.6 }}>
                                    「おりがらみ」とほぼ同義として使われますが、おりがらみの中でも<strong>「おり」の量がさらに少なく、ほんのりと白く濁っている程度（霞のように見える程度）</strong>のものを指すことが多いです。スッキリ感が強いのが特徴です。
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <hr style={{ border: 'none', borderTop: '1px dotted #ccc', margin: '40px 0' }} />

                {/* How to drink */}
                <section style={{ marginBottom: 60 }}>
                    <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, color: '#1a1a1a', borderLeft: '4px solid #bfa758', paddingLeft: 16 }}>
                        3. おりがらみ日本酒の最高に美味しい「飲み方」
                    </h2>
                    
                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: '#2c3e50' }}>美味しい開け方・混ぜ方（※要注意）</h3>
                    <p style={{ fontSize: 17, marginBottom: 24, lineHeight: 1.8 }}>
                        おりがらみは、そのまま置いていると底に白い「おり」が沈殿しています。全体を均一にしてから飲むのが一般的ですが、<strong>決してジュースのように激しくシェイクしてはいけません。</strong><br />
                        特に火入れをしていない「生酒」のおりがらみは、瓶の中に炭酸ガスが閉じ込められているため、激しく振ると開けた瞬間に中身が噴き出してしまいます。
                    </p>
                    <div style={{ background: '#f8f9fa', padding: 24, borderRadius: 8, marginBottom: 32, borderLeft: '4px solid #bfa758' }}>
                        <ol style={{ margin: 0, paddingLeft: 20, fontSize: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <li>まずは冷蔵庫で<strong>キリッと冷やす（5℃〜10℃）</strong>。</li>
                            <li>振らずにそのまま開け、まずは「上澄みの澄んだ部分」だけをグラスに注いで、洗練された味を一口楽しむ。</li>
                            <li>フタをしっかり閉め、<strong>瓶をゆっくりと天地（上下）に1〜2回ひっくり返す。</strong></li>
                            <li>「おり」が全体にフワッと舞い、白濁してから再びグラスに注ぎ、濃厚な旨味を楽しむ。</li>
                        </ol>
                    </div>

                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: '#2c3e50' }}>最強の料理ペアリング</h3>
                    <p style={{ fontSize: 17, marginBottom: 32, lineHeight: 1.8 }}>
                        おりがらみは旨味と酸味がしっかりしており、クリーミーさも兼ね備えているため、淡白な刺身よりも、<strong>味が濃い料理、動物性の脂、そしてスパイシーな料理</strong>と信じられないほどよく合います。<br />
                        <br />
                        おすすめは、唐揚げや天ぷらなどの<strong>「揚げ物（ウォッシュ効果でサッパリ）」</strong>、麻婆豆腐やカレーといった<strong>「スパイシーな中華・エスニック料理（酸味と甘味がスパイスを包み込む）」</strong>、そしてカルボナーラやチーズといった<strong>「乳製品メインの洋食（おりのクリーミーさと同調）」</strong>です。ワイングラスで飲むと、華やかな香りが広がりさらに美味しくなります。
                    </p>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '40px 0' }} />

                {/* Recommendations */}
                <section style={{ marginBottom: 60 }}>
                    <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, color: '#1a1a1a', borderLeft: '4px solid #bfa758', paddingLeft: 16 }}>
                        4. プロ厳選！おすすめの「おりがらみ」日本酒3選
                    </h2>
                    <p style={{ fontSize: 17, marginBottom: 32 }}>
                        まだおりがらみを飲んだことがない初心者に絶対におすすめしたい、フレッシュでジューシーな銘酒を3つ厳選しました。
                    </p>

                    {/* Rec 1 */}
                    <div style={{ padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 6px 24px rgba(0,0,0,0.06)', marginBottom: 32 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#bfa758', marginBottom: 8 }}>🏅 最先端の微発泡おりがらみと言えばこれ</div>
                        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>風の森（かぜのもり）ALPHA 1 次世代への指標</h3>
                        <p style={{ fontSize: 16, color: '#444', marginBottom: 24, lineHeight: 1.7 }}>
                            奈良県・油長酒造が造る、超人気銘柄「風の森」の入門編。無濾過・無加水・生酒を貫く風の森は、瓶を開けた瞬間に「ポンッ！」と鳴るほどのフレッシュな微炭酸が特徴。マスカットや洋梨を思わせる華やかな香りと、おり由来の優しいお米の甘さが口いっぱいに広がり、日本酒の概念が覆る一本です。アルコール度数も低め（14度）で飲みやすいです。
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <a href="https://search.rakuten.co.jp/search/mall/%E9%A2%A8%E3%81%AE%E6%A3%AE+alpha1/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#bf0000', color: '#fff', padding: '14px 40px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 16, transition: 'opacity 0.2s', boxShadow: '0 4px 12px rgba(191,0,0,0.3)' }}>
                                楽天市場で検索する
                            </a>
                        </div>
                    </div>

                    {/* Rec 2 */}
                    <div style={{ padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 6px 24px rgba(0,0,0,0.06)', marginBottom: 32 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#bfa758', marginBottom: 8 }}>🏅 冬季限定、大人のカルピス</div>
                        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>仙禽（せんきん） 雪だるま しぼりたて活性にごり酒</h3>
                        <p style={{ fontSize: 16, color: '#444', marginBottom: 24, lineHeight: 1.7 }}>
                            栃木県・せんきんが毎年冬に数量限定でリリースする超絶人気の活性おりがらみ・にごり酒。ボトルの雪だるまのイラストが可愛らしいですが、中身は本格派。「大人のカルピス」と称される爽やかな甘みと、仙禽ならではのキュンとするような酸味が完璧なバランスで調和しています。チーズタッカルビやサムギョプサルなど辛い韓国料理と合わせると最高です。
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <a href="https://search.rakuten.co.jp/search/mall/%E4%BB%99%E7%A6%BD+%E9%9B%AA%E3%81%A0%E3%82%8B%E3%81%BE/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#bf0000', color: '#fff', padding: '14px 40px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 16, transition: 'opacity 0.2s', boxShadow: '0 4px 12px rgba(191,0,0,0.3)' }}>
                                楽天市場で検索する
                            </a>
                        </div>
                    </div>

                    {/* Rec 3 */}
                    <div style={{ padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 6px 24px rgba(0,0,0,0.06)', marginBottom: 32 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#bfa758', marginBottom: 8 }}>🏅 シルキーでフルーティーな新定番</div>
                        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>赤武（あかぶ）AKABU SNOW</h3>
                        <p style={{ fontSize: 16, color: '#444', marginBottom: 24, lineHeight: 1.7 }}>
                            岩手県・赤武酒造の若き杜氏が醸す、近年爆発的な人気を誇るブランド。SNOWは冬季限定のおりがらみで、粉雪のようにきめ細やかな「おり」が絹のように滑らかな口当たりを生み出しています。リンゴのようなフルーティーな香りと、重すぎずサッパリと切れる後味が秀逸。食前酒としてグラスで乾杯するのに最適な、極上のモダン日本酒です。
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <a href="https://search.rakuten.co.jp/search/mall/%E8%B5%A4%E6%AD%A6+SNOW/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#bf0000', color: '#fff', padding: '14px 40px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 16, transition: 'opacity 0.2s', boxShadow: '0 4px 12px rgba(191,0,0,0.3)' }}>
                                楽天市場で検索する
                            </a>
                        </div>
                    </div>
                </section>

                {/* Back to index link */}
                <div style={{ textAlign: 'center', marginTop: 80 }}>
                    <Link href="/article" style={{ display: 'inline-block', backgroundColor: '#1a1a1d', color: '#fff', padding: '16px 48px', borderRadius: 30, textDecoration: 'none', fontWeight: 700, fontSize: 15, transition: 'background-color 0.2s' }}>
                        日本酒記事一覧へ戻る
                    </Link>
                </div>
            </div>
        </article>
    );
}
