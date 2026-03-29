import React from 'react';
import Link from 'next/link';

export default function HokkaidoSakeGuide() {
    return (
        <article style={{ fontFamily: '"Noto Serif JP", "Mincho", serif', lineHeight: 1.8, color: '#2c2c2c', backgroundColor: '#faf9f5' }}>
            
            {/* Hero Section */}
            <header style={{ position: 'relative', height: '40vh', minHeight: 260, maxHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src="/images/hokkaido_sake_hero.png" 
                        alt="北海道の美しい雪景色と日本酒" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)' }} />
                </div>
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', padding: '0 24px', maxWidth: 800 }}>
                    <p style={{ fontFamily: '"Noto Sans JP", sans-serif', fontWeight: 700, letterSpacing: 2, fontSize: 13, textTransform: 'uppercase', marginBottom: 16, color: '#e6c27a' }}>LOCAL SAKE GUIDE: HOKKAIDO</p>
                    <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 24, lineHeight: 1.4, textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                        【2026年最新】北海道の日本酒マップ！<br />絶対飲むべき人気3酒蔵と特徴を徹底解説
                    </h1>
                </div>
            </header>

            <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
                <section style={{ marginBottom: 60 }}>
                    <p style={{ fontSize: 18, marginBottom: 24 }}>
                        47都道府県の銘酒と酒蔵を巡る「ローカル銘酒ガイド」。第1弾の舞台は、広大な自然と圧倒的な食の宝庫である<strong>「北海道」</strong>です。
                    </p>
                    <p style={{ fontSize: 18, marginBottom: 24 }}>
                        かつて北海道の日本酒といえば、「寒い地域でお燗にして体を温めるための、昔ながらの淡麗辛口」というイメージが強かったかもしれません。<br />
                        しかし近年、北海道独自の酒造好適米（酒米）の品質向上や、若き醸造家たちの台頭により、北海道は<strong>全国随一の高品質なプレミアム日本酒の産地</strong>へと劇的な進化を遂げました。
                    </p>
                    <p style={{ fontSize: 18 }}>
                        本記事では、北海道旅行や出張の際に絶対に飲んでいただきたいおすすめ銘柄と、知られざる人気酒蔵の魅力、そして北海道グルメとのペアリングを詳しくご紹介します。
                    </p>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '60px 0' }} />

                {/* Characteristics */}
                <section style={{ marginBottom: 60 }}>
                    <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, color: '#1a1a1a', borderLeft: '4px solid #bfa758', paddingLeft: 16 }}>
                        1. 驚くべき進化！北海道の日本酒を美味しくしている3つの秘密
                    </h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: 32 }}>
                        
                        {/* Secret 1 */}
                        <div style={{ display: 'flex', flexDirection: 'column', padding: 24, background: '#fff', borderRadius: 12, border: '1px solid #e9ecef', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: '#0984e3', borderBottom: '2px solid #cee5f5', paddingBottom: 12 }}>
                                ① 緻密な酒造りを可能にする「冷涼な気候」
                            </h3>
                            <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 0 }}>
                                日本酒のもろみ（発酵液）は非常に温度変化に敏感で、少しでも温度が上がると雑味（不要なエグみ）が出やすくなります。北海道の厳しい冬の寒さは蔵全体を天然の冷蔵庫にし、もろみを低温で長期間、ゆっくりと発酵させること（長期低温発酵）を可能にします。これにより、リンゴやメロンのような華やかな香りと、透明感のあるクリアな味わいが生まれます。
                            </p>
                        </div>

                        {/* Secret 2 */}
                        <div style={{ display: 'flex', flexDirection: 'column', padding: 24, background: '#fff', borderRadius: 12, border: '1px solid #e9ecef', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: '#27ae60', borderBottom: '2px solid #d1efdb', paddingBottom: 12 }}>
                                ② 独自の「北海道産酒米」の圧倒的な台頭
                            </h3>
                            <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 0 }}>
                                大前提として気候変動（温暖化）によって北海道でお米が育ちやすくなったことに加え、農業試験場の努力により、現在では「吟風（ぎんぷう）」「彗星（すいせい）」「きたしずく」という北海道独自の酒造好適米が誕生しました。<br />
                                ふくよかな旨みが出るもの、スッキリと淡麗に仕上がるものなどそれぞれに個性があり、「全て北海道産原料」で勝負する蔵が急増しています。
                            </p>
                        </div>

                        {/* Secret 3 */}
                        <div style={{ display: 'flex', flexDirection: 'column', padding: 24, background: '#fff', borderRadius: 12, border: '1px solid #e9ecef', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: '#00cec9', borderBottom: '2px solid #c2f0ef', paddingBottom: 12 }}>
                                ③ 大自然が磨き上げる「清らかな水資源」
                            </h3>
                            <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 0 }}>
                                日本酒の成分の80%は水です。北海道には大雪山系や羊蹄山（ようていざん）など名峰が多く、長い年月をかけて蓄えられた伏流水や雪解け水が豊富に湧き出ています。多くはミネラル分の少ない良質な「軟水」であり、これが口当たりの柔らかい、スッと喉を通るまろやかな酒質を生み出しています。
                            </p>
                        </div>

                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px dotted #ccc', margin: '40px 0' }} />

                {/* Recommended Breweries */}
                <section style={{ marginBottom: 60 }}>
                    <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, color: '#1a1a1a', borderLeft: '4px solid #bfa758', paddingLeft: 16 }}>
                        2. 北海道で絶対飲むべき！おすすめ酒蔵と必飲銘柄ベスト3
                    </h2>
                    <p style={{ fontSize: 17, marginBottom: 40 }}>
                        ここでは、北海道旅行や贈り物として大絶賛される、北海道を代表する3つの酒蔵とその銘柄を厳選してご紹介します。
                    </p>

                    {/* Brewery 1: Kamikawa Taisetsu */}
                    <div style={{ padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 8px 30px rgba(0,0,0,0.06)', marginBottom: 48, borderTop: '4px solid #bfa758' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16, gap: 12 }}>
                            <span style={{ fontSize: 28 }}>🥇</span>
                            <h3 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>上川大雪酒造（緑丘蔵）</h3>
                        </div>
                        <p style={{ fontSize: 14, color: '#666', marginBottom: 16, fontWeight: 700 }}>📍 所在地：上川郡上川町（大雪山麓） / 創業：2017年</p>
                        
                        <p style={{ fontSize: 16, color: '#333', marginBottom: 24, lineHeight: 1.7 }}>
                            北海道上川町に「地方創生蔵」として新しく誕生し、彗星のごとく現れて瞬く間に北海道屈指とも言える超人気ブランドへと上り詰めた大注目蔵。<br />
                            タンクを使わず、全て手造りの少量仕込み。大雪山系の湧水を使用したお酒は「飲まさる酒（ついつい飲んでしまう美味しい酒）」をコンセプトにしており、フルーティーな香りと、驚くほどスッキリとしたキレの良さが同居する、現代の和食に最も合う最先端の日本酒です。
                        </p>

                        <div style={{ background: '#f8f9fa', padding: 24, borderRadius: 8, border: '1px solid #e9ecef', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontSize: 14, fontWeight: 700, color: '#c0392b', marginBottom: 12 }}>🍶 上川大雪 特別純米 彗星</div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <a href="https://hb.afl.rakuten.co.jp/ichiba/3f5da7cf.fd711cd7.3f5da7d0.05e18aec/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsakeshop-ito%2F10000000%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style={{ wordWrap: 'break-word', display: 'inline-block' }}>
                                <img src="https://hbb.afl.rakuten.co.jp/hgb/3f5da7cf.fd711cd7.3f5da7d0.05e18aec/?me_id=1409276&item_id=10000000&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fsakeshop-ito%2Fcabinet%2F09105404%2F09105417%2Fkamikawataisestu5000.jpg%3F_ex%3D300x300&s=300x300&t=pict" style={{ margin: '2px', border: '0' }} alt="" title="" />
                            </a>
                        </div>
                    </div>

                    {/* Brewery 2: Otokoyama */}
                    <div style={{ padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 8px 30px rgba(0,0,0,0.06)', marginBottom: 48, borderTop: '4px solid #34495e' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16, gap: 12 }}>
                            <span style={{ fontSize: 28 }}>🥈</span>
                            <h3 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>男山（おとこやま）株式会社</h3>
                        </div>
                        <p style={{ fontSize: 14, color: '#666', marginBottom: 16, fontWeight: 700 }}>📍 所在地：旭川市 / 創業：1899年（北海道での酒造り）</p>
                        
                        <p style={{ fontSize: 16, color: '#333', marginBottom: 24, lineHeight: 1.7 }}>
                            江戸幕府の御免酒として古文書にも名を連ねる歴史的銘柄の正統後継者であり、世界最大のコンクールで長年金賞を受賞し続けるなど、「世界のOTOKOYAMA」として絶大な知名度を誇ります。<br />
                            特徴は、雪の中を流れるような透明感のある「淡麗辛口」。しかし単なる辛口ではなく、お米のふくらみと旨味をしっかりと感じさせながら、サッと切れる後味は、塩の効いた焼き魚やカニ料理と無敵の相性を誇ります。
                        </p>

                        <div style={{ background: '#f8f9fa', padding: 24, borderRadius: 8, border: '1px solid #e9ecef', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontSize: 14, fontWeight: 700, color: '#c0392b', marginBottom: 12 }}>🍶 男山 純米大吟醸</div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <a href="https://hb.afl.rakuten.co.jp/ichiba/4988f6f1.af0914da.4988f6f2.a8bd2565/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fotokoyama%2F501%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style={{ wordWrap: 'break-word', display: 'inline-block' }}>
                                <img src="https://hbb.afl.rakuten.co.jp/hgb/4988f6f1.af0914da.4988f6f2.a8bd2565/?me_id=1409605&item_id=10000000&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fotokoyama%2Fcabinet%2Fcompass1672620712.jpg%3F_ex%3D300x300&s=300x300&t=pict" style={{ margin: '2px', border: '0' }} alt="" title="" />
                            </a>
                        </div>
                    </div>

                    {/* Brewery 3: Takasago Shuzo */}
                    <div style={{ padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 8px 30px rgba(0,0,0,0.06)', marginBottom: 48, borderTop: '4px solid #2980b9' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16, gap: 12 }}>
                            <span style={{ fontSize: 28 }}>🥉</span>
                            <h3 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>高砂（たかさご）酒造</h3>
                        </div>
                        <p style={{ fontSize: 14, color: '#666', marginBottom: 16, fontWeight: 700 }}>📍 所在地：旭川市 / 創業：1899年</p>
                        
                        <p style={{ fontSize: 16, color: '#333', marginBottom: 24, lineHeight: 1.7 }}>
                            「国士無双（こくしむそう）」という非常に有名で力強いブランドを擁する、旭川を代表する老舗蔵。<br />
                            「氷室（ひむろ）」を使った雪中貯蔵など、極寒の地ならではの独創的な醸造・熟成技術を持っています。国士無双は、大自然の荒々しさをも思わせるような超淡麗でキリッとした鋭い辛口が特徴。刺身の脂をスッと洗い流し、毎日の晩酌で飲み飽きない本格派の食中酒です。
                        </p>

                        <div style={{ background: '#f8f9fa', padding: 24, borderRadius: 8, border: '1px solid #e9ecef', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontSize: 14, fontWeight: 700, color: '#c0392b', marginBottom: 12 }}>🍶 国士無双 純米</div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <a href="https://hb.afl.rakuten.co.jp/ichiba/4988e7d7.cc2e622b.4988e7d8.b2eb00b7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnaniwa%2F4902046422201-1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjMwMHgzMDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style={{ wordWrap: 'break-word', display: 'inline-block' }}>
                                <img src="https://hbb.afl.rakuten.co.jp/hgb/4988e7d7.cc2e622b.4988e7d8.b2eb00b7/?me_id=1214068&item_id=10014022&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fnaniwa%2Fcabinet%2Ft103%2F4902046422201-1.jpg%3F_ex%3D300x300&s=300x300&t=pict" style={{ margin: '2px', border: '0' }} alt="" title="" />
                            </a>
                        </div>
                    </div>

                </section>

                <hr style={{ border: 'none', borderTop: '1px dotted #ccc', margin: '40px 0' }} />

                {/* Pairing */}
                <section style={{ marginBottom: 60 }}>
                    <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, color: '#1a1a1a', borderLeft: '4px solid #bfa758', paddingLeft: 16 }}>
                        3. 北海道ならではの絶品ペアリング
                    </h2>
                    <p style={{ fontSize: 17, marginBottom: 24, lineHeight: 1.8 }}>
                        「その土地の酒は、その土地の料理と合わせる」というテロワールの原則に従えば、北海道の日本酒は北海道グルメと合わせるのが宇宙一美味しくなる法則があります。
                    </p>
                    <ul style={{ fontSize: 17, marginBottom: 24, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <li><strong>新鮮なカニやウニ、ホタテの刺身：</strong> 男山や国士無双といった「淡麗辛口」の酒をキリッと冷やして。甘い海鮮の余韻を消さず、生臭さだけを綺麗に洗い流してくれます。</li>
                        <li><strong>ジンギスカンや鮭のちゃんちゃん焼き：</strong> タレや味噌の強い味付けには、上川大雪のようなお米の旨味と少しの酸味がしっかりとしたお酒を合わせると、旨味が倍増します。</li>
                        <li><strong>チーズ（乳製品）：</strong> 北海道産のカマンベールやハードチーズには、少しフルーティーな道産酒をワイングラスで。発酵食品同士の奇跡の同調を楽しめます。</li>
                    </ul>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '60px 0' }} />

                <section>
                    <div style={{ background: '#f8f9fa', padding: 32, borderRadius: 12, textAlign: 'center' }}>
                        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#2c3e50' }}>まとめ：北の大地の恵みを日本酒で味わう</h2>
                        <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 0 }}>
                            かつての辛口一辺倒から、現在では全国にファンを持つ驚くべき高級銘醸地へと進化を遂げた北海道。<br />
                            美しい雪景色と豊かな海・山の幸に生かされた北の日本酒を、ぜひご自宅やご旅行先で心ゆくまで堪能してください。
                        </p>
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
