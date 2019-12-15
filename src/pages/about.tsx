import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from 'react-emotion';
import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import config from '../website-config';

const PageTemplate = css`
  .site-main {
    background #fff;
    padding-bottom: 4vw;
  }
  .responsive-iframe {
    padding-bottom: 56.1667%;
    position: relative;
    height: 0px;
    overflow: hidden;
    margin-bottom: 3.2rem;
    background-color: #efefef;
  }
  .responsive-iframe iframe {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;

const About: React.SFC = () => (
  <IndexLayout>
    <Helmet>
      <title>About - {config.title}</title>
      <meta name="description" content={`About - ${config.description}`} />
    </Helmet>
    <Wrapper className={`${PageTemplate}`}>
      <header className={`${SiteHeader} ${outer}`}>
        <div className={`${inner}`}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
        <article className={`${PostFull} post page ${NoImage}`}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <div className="responsive-iframe">
                <iframe
                  className="loading-element shimmer-animation"
                  src="https://player.vimeo.com/video/303992016"
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
              <p>
                <small>
                  Source: video by <a href="http://handagiken.com/">Handa Giken Works</a>
                </small>
              </p>
              <p>
                <i>English follows Japanese</i>
              </p>
              <p>【 好きなこと、学びたいこと、どんどんやろう！】</p>
              <p>
                Yamagata Developers Society
                は、山形でWeb開発に関わっているエンジニア向けのグループです。
                dプログラマー、SE、デザイナー、勉強中の人等が集い、互いのスキルアップや仕事での連携を目指す、オープンなMeet
                up を開催します。
              </p>
              <p>
                持物は【学びたい言語・スキル】と【エンジニア魂】。そして、飲物！持参！
                (珈琲・紅茶・冷たいお茶・少しのビールのご用意ございます)
              </p>
              <p>
                おいしいものを食べたり飲んだりしながら、一緒に山形のWeb開発を一緒に盛り上げましょう！
              </p>
              <hr />
              <p>
                Yamagata Developer Society is a community for professionals and students alike. We
                hold monthly developer meetups at{' '}
                <a href="https://www.coworking-too.com/">coworking space too</a> in downtown
                Yamagata.
              </p>
              <blockquote>
                <p>
                  If you'd like to join one of our montly meetups, head over to coworking space's{' '}
                  <a href="https://www.facebook.com/pg/as.works.2015/events/">Events Page</a> and
                  learn about our upcomming events!
                </p>
              </blockquote>
              <p>
                If you're a developer: check us out{' '}
                <a href="https://github.com/yamagata-developers-society">on Github</a>. New projects
                welcome!
              </p>
              <p>
                If you are looking for some other way to connect with us, please find us on{' '}
                <a href="https://twitter.com/yamagataDevSoc">Twitter</a>.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
