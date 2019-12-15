export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook: string;
  twitter: string;
  twitterHandle: string;
  github: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: 'Yamagata Developers Society',
  description: '山形でWeb開発に関わっているエンジニア向けの勉強会',
  coverImage: 'img/common/yds-social-bg.jpg',
  logo: 'img/common/yds-logo.png',
  siteUrl: 'https://yamagata-developers-society.github.io/blog/',
  facebook: 'https://www.facebook.com/pg/as.works.2015/events/',
  twitter: 'https://twitter.com/yamagataDevSoc/',
  twitterHandle: '@yamagataDevSoc',
  github: 'https://github.com/yamagata-developers-society/',
  showSubscribe: false,
  mailchimpAction: '',
  mailchimpName: '',
};

export default config;
