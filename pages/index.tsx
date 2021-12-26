import Link from 'next/link'
import {getDatabaseConnection} from "../lib/getDatabaseConnection";
import {GetServerSideProps} from "next";
import {Post} from "../src/entity/Post";
// @ts-ignore
import cover from 'assets/images/cover1.jpg'
// @ts-ignore
import avatar from 'assets/images/avatar.jpg'
import {useCallback, useEffect} from "react";
import Typed from 'typed.js';
import Image from 'next/image';

console.log(cover);
type Props = {
    posts: Post[],
    sideArr: string[]
}

export default function Home(props: Props) {
    const {posts, sideArr} = props;
    console.log(posts);
    console.log(sideArr);

    useEffect(() => {
        try {
            var typed = new Typed("#subtitle", {
                strings: ['面朝大海，春暖花开', '愿你一生努力，一生被爱', '想要的都拥有，得不到的都释怀'],
                startDelay: 0,
                typeSpeed: 200,
                loop: true,
                backSpeed: 100,
                showCursor: true
            });
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div>
            <main className="content on">

                <section className="cover">

                    <div className="cover-frame">
                        <div className="bg-box">
                            <Image src={cover} width={30} height={30} layout={"fill"} alt="image frame"/>
                        </div>
                        <div className="cover-inner text-center text-white">
                            <h1><Link href="/"><a>岛</a></Link></h1>
                            <div id="subtitle-box">
                                <span id="subtitle">想要的都拥有，得不到的</span>
                                {/*<span className="typed-cursor">|</span>*/}
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="cover-learn-more">
                        <Link href="">
                            <a>
                                <i className="ri-arrow-down-line"></i>
                            </a>
                        </Link>
                        {/*<a href="javascript:void(0)" className="anchor"><i className="ri-arrow-down-line"></i></a>*/}
                    </div>
                </section>

                {/*Subtitle */}


                <div id="main">
                    <section className="outer">
                        <div className="notice">
                            <i className="ri-heart-fill"></i>
                            <div className="notice-content" id="broad">居安思危，思则有备，有备无患。</div>
                        </div>


                        <article className="articles">
                            {posts.map(post => (
                                <article id="post-Ayer中文说明" className="article article-type-post"
                                         itemProp="blogPost" data-scroll-reveal="" key={post.id}>
                                    <div className="article-inner">

                                        <header className="article-header">

                                            <h2 itemProp="name">
                                                <Link href={`/posts/${post.id}`} key={post.id}>
                                                    <a>{post.title}</a>
                                                </Link>
                                            </h2>
                                        </header>

                                        <div className="article-meta">
                                            <a href="/2019/ayer/" className="article-date">
                                                <time dateTime="2019-12-03T05:26:02.000Z"
                                                      itemProp="datePublished">2019-12-03
                                                </time>
                                            </a>
                                            <div className="article-category">
                                                <Link href="/categories/%E6%8A%80%E6%9C%AF/">
                                                    <a className="article-category-link">技术</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="article-entry" itemProp="articleBody">

                                            <h1 id="介绍"><a href="#介绍" className="headerlink" title="介绍"></a>介绍</h1>
                                            <blockquote>
                                                <p>
                                                    {/*    <Link href="https://github.com/Shen-Yu/hexo-theme-ayer">*/}
                                                    {/*    <a target="_blank" rel="noopener"*/}
                                                    {/*    >Ayer</a>*/}
                                                    {/*</Link>*/}
                                                    老王的第一篇博客
                                                </p>
                                            </blockquote>
                                            {/*<p>*/}
                                            {/*    <Link href="https://github.com/Shen-Yu/hexo-theme-ayer">*/}
                                            {/*        <a target="_blank" rel="noopener"*/}
                                            {/*        >Ayer</a>*/}
                                            {/*    </Link>在马来语中是“水”的意思，在西班牙语中是“昨天”的意思。*/}
                                            {/*</p>*/}
                                            <p>
                                                <div className="img">
                                                <Image src={"https://s4.ax1x.com/2021/12/26/T0Cpa8.jpg"}
                                                       width="100%" height="100%" layout="fill"
                                                       objectFit="cover" alt="hexo-theme-ayer"/>
                                                </div>
                                                <span className="caption">girl</span>
                                            </p>

                                            {/*<p><a href="https://shen-yu.gitee.io/">效果预览</a></p>*/}
                                            {/*<p><a href="https://shen-yu.gitee.io/2019/ayer/">中文说明</a></p>*/}
                                            <Link href={`posts/${[post.id]}`}><a
                                                className="article-more-link">阅读更多...</a></Link>
                                        </div>

                                        <footer className="article-footer">

                                            <ul className="article-tag-list" itemProp="keywords">
                                                <li className="article-tag-list-item"><a
                                                    className="article-tag-list-link"
                                                    href="/tags/%E6%8A%80%E6%9C%AF/"
                                                    rel="tag">技术</a></li>
                                            </ul>

                                        </footer>
                                    </div>
                                </article>

                            ))}

                        </article>


                        <nav className="page-nav">
                            <span className="page-number current">1</span>
                            <a className="page-number" href="/page/2/">2</a>
                            <a className="extend next" rel="next" href="/page/2/">下一页</a>
                        </nav>

                    </section>
                </div>

                <footer className="footer">
                    <div className="outer">
                        <ul>
                            <li>
                                鲁ICP备2021046424号
                            </li>
                            <li>
                                <i className="ri-heart-fill heart_icon"></i> Sun Rising
                            </li>
                        </ul>
                        <ul>
                            <li>


                                {/*        <span>*/}
                                {/*  <span><i className="ri-user-3-fill"></i>访问人数:<span id="busuanzi_value_site_uv">84936</span></span>*/}
                                {/*  <span className="division">|</span>*/}
                                {/*  <span><i className="ri-eye-fill"></i>浏览次数:<span id="busuanzi_value_page_pv">254072</span></span>*/}
                                {/*</span>*/}

                            </li>
                        </ul>

                        {/*<ul>*/}
                        {/*    <li>*/}

                        {/*        <script type="text/javascript"*/}
                        {/*                src="https://s9.cnzz.com/z_stat.php?id=1278069914&amp;web_id=1278069914"></script>*/}
                        {/*        <script src="https://c.cnzz.com/core.php?web_id=1278069914&amp;t=z" charSet="utf-8"*/}
                        {/*                type="text/javascript"></script>*/}
                        {/*        <a href="https://www.cnzz.com/stat/website.php?web_id=1278069914" target="_blank"*/}
                        {/*           title="站长统计">站长统计</a>*/}

                        {/*    </li>*/}
                        {/*</ul>*/}
                    </div>
                </footer>
            </main>

            <aside className="sidebar on">
                <button className="navbar-toggle"></button>
                <nav className="navbar">

                    <div className="logo">
                        <Link href="/">
                            <a className="img"><Image src={avatar} layout={'fill'} objectFit="cover" alt=""/></a>
                        </Link>
                    </div>

                    <ul className="nav nav-main">
                        {
                            sideArr.map(item => (
                                <li className="nav-item" key={item}>
                                    <Link href="/"><a className="nav-item-link">{item}</a></Link>
                                </li>))
                        }
                    </ul>
                </nav>
                <nav className="navbar navbar-bottom">
                    <ul className="nav">
                        <li className="nav-item">

                            <a className="nav-item-link nav-item-search" title="搜索">
                                <i className="ri-search-line"></i>
                            </a>


                            <a className="nav-item-link" target="_blank" href="/atom.xml" title="RSS Feed">
                                <i className="ri-rss-line"></i>
                            </a>

                        </li>
                    </ul>
                </nav>
                <div className="search-form-wrap">
                    <div className="local-search local-search-plugin">
                        <input type="search" id="local-search-input" className="local-search-input"
                               placeholder="Search..."/>
                        <div id="local-search-result" className="local-search-result"></div>
                    </div>
                </div>
            </aside>

            <style jsx>{`
              //    content
              .notice {
                padding: 20px;
                border: 1px dashed #e6e6e6;
                color: #969696;
                position: relative;
                display: inline-block;
                width: 100%;
                background: #fbfbfb50;
                border-radius: 10px;
              }

              .notice i {
                float: left;
                color: #999;
                font-size: 16px;
                padding-right: 10px;
                vertical-align: middle;
                margin-top: -2px;
              }

              .notice-content {
                display: initial;
                vertical-align: middle;
              }

              //  side
              .logo img {
                border-radius: 50%;
              }

              @media (max-width: 768px) {
                .sidebar.on {
                  left: -8rem;
                }
              }

              .ri-arrow-down-line:before {
                content: "\ea3f";
              }

              .notice {
                margin-top: 50px;
              }
            `}</style>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    var connection = await getDatabaseConnection();
    const posts = await connection.manager.find(Post);
    const sideArr = ['主页', '分类', '标签']

    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts)),
            sideArr
        }
    }
}