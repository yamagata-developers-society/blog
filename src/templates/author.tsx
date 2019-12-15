import { graphql } from 'gatsby';
import React from 'react';
import styled, { css } from 'react-emotion';
import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import PostCard from '../components/PostCard';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  AuthorProfileImage,
  inner,
  outer,
  PostFeed,
  PostFeedRaise,
  SiteHeader,
  SiteHeaderContent,
  SiteTitle,
  SiteMain,
  SocialLink,
} from '../styles/shared';
import { PageContext } from './post';
import Facebook from '../components/icons/facebook';
import Helmet from 'react-helmet';
import config from '../website-config';
import Website from '../components/icons/website';
import Twitter from '../components/icons/twitter';

const HiddenMobile = css`
  @media (max-width: 500px) {
    display: none;
  }
`;

const AuthorMeta = styled.div`
  z-index: 10;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;
  font-family: Georgia, serif;
  font-style: italic;
`;

const AuthorBio = styled.h2`
  z-index: 10;
  flex-shrink: 0;
  margin: 5px 0 10px 0;
  max-width: 600px;
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 300;
  letter-spacing: 0.5px;
  opacity: 0.8;
`;

const Bull = styled.span`
  display: inline-block;
  margin: 0 12px;
  opacity: 0.5;
`;

const AuthorProfileBioImage = css`
  z-index: 10;
  flex-shrink: 0;
  margin: 0 0 20px 0;
  width: 100px;
  height: 100px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 6px;
`;

interface AuthorTemplateProps {
  pathContext: {
    slug: string;
  };
  pageContext: {
    author: string;
  };
  data: {
    logo: {
      childImageSharp: {
        fluid: any;
      };
    };
    allMarkdownRemark: {
      edges: {
        node: PageContext;
      }[];
    };
    authorYaml: {
      id: string;
      website?: string;
      twitter?: string;
      facebook?: string;
      location?: string;
      profile_image?: {
        childImageSharp: {
          fluid: any;
        };
      };
      bio?: string;
      avatar: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
  };
}

const Author: React.SFC<AuthorTemplateProps> = props => {
  const author = props.data.authorYaml;
  const { edges } = props.data.allMarkdownRemark;

  const authorPostCount = edges.reduce((totalCount, edge) => {
    const { author: postAuthor } = edge.node.frontmatter;

    if (postAuthor && postAuthor.id == author.id) {
      totalCount++;
    }

    return totalCount;
  }, 0);

  return (
    <IndexLayout>
      <Helmet>
        <title>
          {author.id} - {config.title}
        </title>
        <meta name="description" content={`${author.id} - ${config.description}`} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${author.id} - ${config.title}`} />
        <meta property="og:url" content={config.siteUrl + props.pathContext.slug} />
        <meta property="article:publisher" content="https://www.facebook.com/ghost" />
        <meta property="article:author" content="https://www.facebook.com/ghost" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${author.id} - ${config.title}`} />
        <meta name="twitter:url" content={config.siteUrl + props.pathContext.slug} />
        <meta name="twitter:site" content={config.twitterHandle} />
        <meta name="twitter:creator" content={config.twitterHandle} />
      </Helmet>
      <Wrapper>
        <header
          className={`${SiteHeader} ${outer} no-cover`}
          style={{
            backgroundImage: author.profile_image
              ? `url(${author.profile_image.childImageSharp.fluid.src})`
              : '',
          }}
        >
          <div className={`${inner}`}>
            <SiteNav isHome={false} />
            <SiteHeaderContent>
              <img
                className={`${AuthorProfileBioImage} ${AuthorProfileImage}`}
                src={props.data.authorYaml.avatar.childImageSharp.fluid.src}
                alt={author.id}
              />
              <SiteTitle>{author.id}</SiteTitle>
              {author.bio && <AuthorBio>{author.bio}</AuthorBio>}
              <AuthorMeta>
                {author.location && (
                  <div className={`${HiddenMobile}`}>
                    {author.location} <Bull>&bull;</Bull>
                  </div>
                )}
                <div className={`${HiddenMobile}`}>
                  {authorPostCount > 1 && `${authorPostCount} posts`}
                  {authorPostCount === 1 && `1 post`}
                  {authorPostCount === 0 && `No posts`} <Bull>•</Bull>
                </div>
                {author.website && (
                  <div>
                    <a
                      className={`${SocialLink} social-link-wb`}
                      href={author.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Website />
                    </a>
                  </div>
                )}
                {author.twitter && (
                  <a
                    className={`${SocialLink} social-link-tw`}
                    href={`https://twitter.com/${author.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                  </a>
                )}
                {author.facebook && (
                  <a
                    className={`${SocialLink} social-link-fb`}
                    href={`https://www.facebook.com/${author.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                )}
                {/* TODO: RSS for author */}
                {/* <a
                  className={`${SocialLink} social-link-rss`}
                  href="https://feedly.com/i/subscription/feed/https://demo.ghost.io/author/ghost/rss/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ height: '1.9rem' }}
                  >
                    <circle cx="6.18" cy="17.82" r="2.18" />
                    <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
                  </svg>
                </a> */}
              </AuthorMeta>
            </SiteHeaderContent>
          </div>
        </header>
        <main id="site-main" className={`${SiteMain} ${outer}`}>
          <div className={`${inner}`}>
            <div className={`${PostFeed} ${PostFeedRaise}`}>
              {edges.map(({ node }) => {
                if (node.frontmatter.author && node.frontmatter.author.id === author.id) {
                  return <PostCard key={node.fields.slug} post={node} />;
                }
                return null;
              })}
            </div>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default Author;

export const pageQuery = graphql`
  query($author: String) {
    authorYaml(id: { eq: $author }) {
      id
      website
      twitter
      bio
      facebook
      location
      profile_image {
        childImageSharp {
          fluid(maxWidth: 3720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true } } }
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(quality: 100) {
                      src
                    }
                  }
                }
              }
            }
          }
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
