import { graphql } from 'gatsby';
import React from 'react';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import PostCard from '../components/PostCard';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  PostFeed,
  PostFeedRaise,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
} from '../styles/shared';
import { PageContext } from './post';
import Helmet from 'react-helmet';
import config from '../website-config';

interface TagTemplateProps {
  pageContext: {
    tag: string;
  };
  location: {
    pathname: string;
  };
  data: {
    allTagYaml: {
      edges: {
        node: {
          id: string;
          description: string;
          image?: {
            childImageSharp: {
              fluid: any;
            };
          };
        };
      }[];
    };
    allMarkdownRemark: {
      totalCount: number;
      edges: {
        node: PageContext;
      }[];
    };
  };
}

const Tags: React.SFC<TagTemplateProps> = props => {
  const tag = props.pageContext.tag;
  const { edges, totalCount } = props.data.allMarkdownRemark;
  const tagData = props.data.allTagYaml.edges.find(
    n => n.node.id.toLowerCase() === tag.toLowerCase(),
  );
  const shareUrl = config.siteUrl + props.location.pathname;

  return (
    <IndexLayout>
      <Helmet>
        <title>
          {tag} - {config.title}
        </title>
        <meta name="description" content={`${tag} - ${config.description}`} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${tag} - ${config.title}`} />
        <meta property="og:url" content={shareUrl} />
        <meta property="article:publisher" content={config.facebook} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${tag} - ${config.title}`} />
        <meta name="twitter:url" content={shareUrl} />
        <meta name="twitter:site" content={config.twitterHandle} />
      </Helmet>
      <Wrapper>
        <header
          className={`${SiteHeader} ${outer} ${tagData && tagData.node.image ? '' : 'no-cover'}`}
          style={{
            backgroundImage:
              tagData && tagData.node.image
                ? `url('${tagData.node.image.childImageSharp.fluid.src}')`
                : '',
          }}
        >
          <div className={`${inner}`}>
            <SiteNav isHome={false} />
            <SiteHeaderContent>
              <SiteTitle>{tag}</SiteTitle>
              <SiteDescription>
                {tagData && tagData.node.description ? (
                  tagData.node.description
                ) : (
                  <>
                    A collection of {totalCount > 1 && `${totalCount} posts`}
                    {totalCount === 1 && `1 post`}
                    {totalCount === 0 && `No posts`}
                  </>
                )}
              </SiteDescription>
            </SiteHeaderContent>
          </div>
        </header>
        <main id="site-main" className={`${SiteMain} ${outer}`}>
          <div className={`${inner}`}>
            <div className={`${PostFeed} ${PostFeedRaise}`}>
              {edges.map(({ node }) => (
                <PostCard key={node.fields.slug} post={node} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allTagYaml {
      edges {
        node {
          id
          description
          image {
            childImageSharp {
              fluid(maxWidth: 3720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
                fluid(maxWidth: 1240) {
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
