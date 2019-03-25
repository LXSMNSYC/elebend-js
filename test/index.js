import assert from 'assert';
import Elebend from '../src';

require('jsdom-global')();

const {
  html,
  /**
   * Document metadata
   */
  head,
  title,
  base,
  link,
  meta,
  style,
  /**
   * Section
   */
  body,
  article,
  section,
  nav,
  aside,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  footer,
  address,
  /**
   * Grouping
   */
  p,
  hr,
  pre,
  blockquote,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  figure,
  figcaption,
  div,
  main,
  /**
   * Text Semantics
   */
  a,
  em,
  strong,
  small,
  s,
  cite,
  q,
  dfn,
  abbr,
  data,
  time,
  code,
  // var,
  samp,
  kbd,
  sub,
  sup,
  i,
  b,
  u,
  mark,
  ruby,
  rb,
  rt,
  rtc,
  rp,
  bdi,
  bdo,
  br,
  wbr,
  /**
   * Edits
   */
  ins,
  del,
  /**
   * Embedded content
   */
  img,
  iframe,
  embed,
  param,
  video,
  audio,
  source,
  track,
  map,
  area,
  /**
   * Tabular data
   */
  table,
  caption,
  colgroup,
  col,
  tbody,
  thead,
  tfoot,
  tr,
  td,
  th,
  /**
   * Forms
   */
  form,
  label,
  input,
  button,
  select,
  datalist,
  optgroup,
  option,
  textarea,
  keygen,
  output,
  progress,
  meter,
  fieldset,
  legend,
  /**
   * Scripting
   */
  script,
  noscript,
  template,
  canvas,
} = Elebend;

/* eslint-disable no-undef */
describe('Eleband', () => {
  /**
   *
   */
  describe('html', () => {
    it('should create an HTMLHtmlElement', () => {
      assert(html() instanceof HTMLHtmlElement);
    });
  });
  /**
   *  Document MetaData
   */
  describe('head', () => {
    it('should create an HTMLHeadElement', () => {
      assert(head() instanceof HTMLHeadElement);
    });
  });
  describe('title', () => {
    it('should create an HTMLTitleElement', () => {
      assert(title() instanceof HTMLTitleElement);
    });
  });
  describe('base', () => {
    it('should create an HTMLTitleElement', () => {
      assert(base() instanceof HTMLBaseElement);
    });
  });
  describe('link', () => {
    it('should create an HTMLLinkElement', () => {
      assert(link() instanceof HTMLLinkElement);
    });
  });
  describe('meta', () => {
    it('should create an HTMLMetaElement', () => {
      assert(meta() instanceof HTMLMetaElement);
    });
  });
  describe('style', () => {
    it('should create an HTMLStyleElement', () => {
      assert(style() instanceof HTMLStyleElement);
    });
  });
  /**
   * Section
   */
  describe('body', () => {
    it('should create an HTMLBodyElement', () => {
      assert(body() instanceof HTMLBodyElement);
    });
  });
  describe('article', () => {
    it('should create an HTMLElement', () => {
      assert(article() instanceof HTMLElement);
    });
  });
  describe('section', () => {
    it('should create an HTMLElement', () => {
      assert(section() instanceof HTMLElement);
    });
  });
  describe('nav', () => {
    it('should create an HTMLElement', () => {
      assert(nav() instanceof HTMLElement);
    });
  });
  describe('aside', () => {
    it('should create an HTMLElement', () => {
      assert(aside() instanceof HTMLElement);
    });
  });
  describe('h1', () => {
    it('should create an HTMLHeadingElement', () => {
      assert(h1() instanceof HTMLHeadingElement);
    });
  });
  describe('h2', () => {
    it('should create an HTMLHeadingElement', () => {
      assert(h2() instanceof HTMLHeadingElement);
    });
  });
  describe('h3', () => {
    it('should create an HTMLHeadingElement', () => {
      assert(h3() instanceof HTMLHeadingElement);
    });
  });
  describe('h4', () => {
    it('should create an HTMLHeadingElement', () => {
      assert(h4() instanceof HTMLHeadingElement);
    });
  });
  describe('h5', () => {
    it('should create an HTMLHeadingElement', () => {
      assert(h5() instanceof HTMLHeadingElement);
    });
  });
  describe('h6', () => {
    it('should create an HTMLHeadingElement', () => {
      assert(h6() instanceof HTMLHeadingElement);
    });
  });
  describe('header', () => {
    it('should create an HTMLElement', () => {
      assert(header() instanceof HTMLElement);
    });
  });
  describe('footer', () => {
    it('should create an HTMLElement', () => {
      assert(footer() instanceof HTMLElement);
    });
  });
  describe('address', () => {
    it('should create an HTMLElement', () => {
      assert(address() instanceof HTMLElement);
    });
  });
  /**
   * Grouping
   */
  describe('p', () => {
    it('should create an HTMLParagraphElement', () => {
      assert(p() instanceof HTMLParagraphElement);
    });
  });
  describe('hr', () => {
    it('should create an HTMLHRElement', () => {
      assert(hr() instanceof HTMLHRElement);
    });
  });
  describe('pre', () => {
    it('should create an HTMLPreElement', () => {
      assert(pre() instanceof HTMLPreElement);
    });
  });
  describe('blockquote', () => {
    it('should create an HTMLQuoteElement', () => {
      assert(blockquote() instanceof HTMLQuoteElement);
    });
  });
  describe('ol', () => {
    it('should create an HTMLOListElement', () => {
      assert(ol() instanceof HTMLOListElement);
    });
  });
  describe('ul', () => {
    it('should create an HTMLUListElement', () => {
      assert(ul() instanceof HTMLUListElement);
    });
  });
  describe('li', () => {
    it('should create an HTMLLIElement', () => {
      assert(li() instanceof HTMLLIElement);
    });
  });
  describe('dl', () => {
    it('should create an HTMLDListElement', () => {
      assert(dl() instanceof HTMLDListElement);
    });
  });
  describe('dt', () => {
    it('should create an HTMLElement', () => {
      assert(dt() instanceof HTMLElement);
    });
  });
  describe('dd', () => {
    it('should create an HTMLElement', () => {
      assert(dd() instanceof HTMLElement);
    });
  });
  describe('figure', () => {
    it('should create an HTMLElement', () => {
      assert(figure() instanceof HTMLElement);
    });
  });
  describe('figcaption', () => {
    it('should create an HTMLElement', () => {
      assert(figcaption() instanceof HTMLElement);
    });
  });
  describe('div', () => {
    it('should create an HTMLDivElement', () => {
      assert(div() instanceof HTMLDivElement);
    });
  });
  describe('main', () => {
    it('should create an HTMLElement', () => {
      assert(main() instanceof HTMLElement);
    });
  });
});
