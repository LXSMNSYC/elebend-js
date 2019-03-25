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
  var: Var,
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
  span,
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
  object,
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
describe('Elebend', () => {
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
  /**
   * Text Semantics
   */
  describe('a', () => {
    it('should create an HTMLAnchorElement', () => {
      assert(a() instanceof HTMLAnchorElement);
    });
  });
  describe('em', () => {
    it('should create an HTMLElement', () => {
      assert(em() instanceof HTMLElement);
    });
  });
  describe('strong', () => {
    it('should create an HTMLElement', () => {
      assert(strong() instanceof HTMLElement);
    });
  });
  describe('small', () => {
    it('should create an HTMLElement', () => {
      assert(small() instanceof HTMLElement);
    });
  });
  describe('s', () => {
    it('should create an HTMLElement', () => {
      assert(s() instanceof HTMLElement);
    });
  });
  describe('cite', () => {
    it('should create an HTMLElement', () => {
      assert(cite() instanceof HTMLElement);
    });
  });
  describe('q', () => {
    it('should create an HTMLQuoteElement', () => {
      assert(q() instanceof HTMLQuoteElement);
    });
  });
  describe('dfn', () => {
    it('should create an HTMLElement', () => {
      assert(dfn() instanceof HTMLElement);
    });
  });
  describe('abbr', () => {
    it('should create an HTMLElement', () => {
      assert(abbr() instanceof HTMLElement);
    });
  });
  describe('abbr', () => {
    it('should create an HTMLElement', () => {
      assert(abbr() instanceof HTMLElement);
    });
  });
  describe('data', () => {
    it('should create an HTMLDataElement', () => {
      assert(data() instanceof HTMLDataElement);
    });
  });
  describe('time', () => {
    it('should create an HTMLTimeElement', () => {
      assert(time() instanceof HTMLTimeElement);
    });
  });
  describe('code', () => {
    it('should create an HTMLElement', () => {
      assert(code() instanceof HTMLElement);
    });
  });
  describe('var', () => {
    it('should create an HTMLElement', () => {
      assert(Var() instanceof HTMLElement);
    });
  });
  describe('samp', () => {
    it('should create an HTMLElement', () => {
      assert(samp() instanceof HTMLElement);
    });
  });
  describe('kbd', () => {
    it('should create an HTMLElement', () => {
      assert(kbd() instanceof HTMLElement);
    });
  });
  describe('sub', () => {
    it('should create an HTMLElement', () => {
      assert(sub() instanceof HTMLElement);
    });
  });
  describe('sup', () => {
    it('should create an HTMLElement', () => {
      assert(sup() instanceof HTMLElement);
    });
  });
  describe('i', () => {
    it('should create an HTMLElement', () => {
      assert(i() instanceof HTMLElement);
    });
  });
  describe('b', () => {
    it('should create an HTMLElement', () => {
      assert(b() instanceof HTMLElement);
    });
  });
  describe('u', () => {
    it('should create an HTMLElement', () => {
      assert(u() instanceof HTMLElement);
    });
  });
  describe('mark', () => {
    it('should create an HTMLElement', () => {
      assert(mark() instanceof HTMLElement);
    });
  });
  describe('ruby', () => {
    it('should create an HTMLElement', () => {
      assert(ruby() instanceof HTMLElement);
    });
  });
  describe('rb', () => {
    it('should create an HTMLElement', () => {
      assert(rb() instanceof HTMLElement);
    });
  });
  describe('rt', () => {
    it('should create an HTMLElement', () => {
      assert(rt() instanceof HTMLElement);
    });
  });
  describe('rtc', () => {
    it('should create an HTMLElement', () => {
      assert(rtc() instanceof HTMLElement);
    });
  });
  describe('rp', () => {
    it('should create an HTMLElement', () => {
      assert(rp() instanceof HTMLElement);
    });
  });
  describe('bdi', () => {
    it('should create an HTMLElement', () => {
      assert(bdi() instanceof HTMLElement);
    });
  });
  describe('bdo', () => {
    it('should create an HTMLElement', () => {
      assert(bdo() instanceof HTMLElement);
    });
  });
  describe('span', () => {
    it('should create an HTMLSpanElement', () => {
      assert(span() instanceof HTMLSpanElement);
    });
  });
  describe('br', () => {
    it('should create an HTMLBRElement', () => {
      assert(br() instanceof HTMLBRElement);
    });
  });
  describe('wbr', () => {
    it('should create an HTMLElement', () => {
      assert(wbr() instanceof HTMLElement);
    });
  });
  /**
   * Edits
   */
  describe('ins', () => {
    it('should create an HTMLModElement', () => {
      assert(ins() instanceof HTMLModElement);
    });
  });
  describe('del', () => {
    it('should create an HTMLModElement', () => {
      assert(del() instanceof HTMLModElement);
    });
  });
  /**
   * Embedded content
   */
  describe('img', () => {
    it('should create an HTMLImageElement', () => {
      assert(img() instanceof HTMLImageElement);
    });
  });
  describe('iframe', () => {
    it('should create an HTMLIFrameElement', () => {
      assert(iframe() instanceof HTMLIFrameElement);
    });
  });
  describe('embed', () => {
    it('should create an HTMLEmbedElement', () => {
      assert(embed() instanceof HTMLEmbedElement);
    });
  });
  describe('object', () => {
    it('should create an HTMLObjectElement', () => {
      assert(object() instanceof HTMLObjectElement);
    });
  });
  describe('param', () => {
    it('should create an HTMLParamElement', () => {
      assert(param() instanceof HTMLParamElement);
    });
  });
  describe('video', () => {
    it('should create an HTMLVideoElement', () => {
      assert(video() instanceof HTMLVideoElement);
    });
  });
  describe('audio', () => {
    it('should create an HTMLAudioElement', () => {
      assert(audio() instanceof HTMLAudioElement);
    });
  });
  describe('source', () => {
    it('should create an HTMLSourceElement', () => {
      assert(source() instanceof HTMLSourceElement);
    });
  });
  describe('track', () => {
    it('should create an HTMLTrackElement', () => {
      assert(track() instanceof HTMLTrackElement);
    });
  });
  describe('map', () => {
    it('should create an HTMLMapElement', () => {
      assert(map() instanceof HTMLMapElement);
    });
  });
  describe('area', () => {
    it('should create an HTMLAreaElement', () => {
      assert(area() instanceof HTMLAreaElement);
    });
  });

  /**
   * Tabular data
   */
  describe('table', () => {
    it('should create an HTMLTableElement', () => {
      assert(table() instanceof HTMLTableElement);
    });
  });
  describe('caption', () => {
    it('should create an HTMLTableCaptionElement', () => {
      assert(caption() instanceof HTMLTableCaptionElement);
    });
  });
  describe('colgroup', () => {
    it('should create an HTMLTableColElement', () => {
      assert(colgroup() instanceof HTMLTableColElement);
    });
  });
  describe('col', () => {
    it('should create an HTMLTableColElement', () => {
      assert(col() instanceof HTMLTableColElement);
    });
  });
  describe('tbody', () => {
    it('should create an HTMLTableSectionElement', () => {
      assert(tbody() instanceof HTMLTableSectionElement);
    });
  });
  describe('thead', () => {
    it('should create an HTMLTableSectionElement', () => {
      assert(thead() instanceof HTMLTableSectionElement);
    });
  });
  describe('tfoot', () => {
    it('should create an HTMLTableSectionElement', () => {
      assert(tfoot() instanceof HTMLTableSectionElement);
    });
  });
  describe('td', () => {
    it('should create an HTMLTableCellElement', () => {
      assert(td() instanceof HTMLTableCellElement);
    });
  });
  describe('tr', () => {
    it('should create an HTMLTableRowElement', () => {
      assert(tr() instanceof HTMLTableRowElement);
    });
  });
  describe('th', () => {
    it('should create an HTMLTableCellElement', () => {
      assert(th() instanceof HTMLTableCellElement);
    });
  });

  /**
   * Forms
   */
  describe('form', () => {
    it('should create an HTMLFormElement', () => {
      assert(form() instanceof HTMLFormElement);
    });
  });
  describe('label', () => {
    it('should create an HTMLLabelElement', () => {
      assert(label() instanceof HTMLLabelElement);
    });
  });
  describe('input', () => {
    it('should create an HTMLInputElement', () => {
      assert(input() instanceof HTMLInputElement);
    });
  });
  describe('button', () => {
    it('should create an HTMLButtonElement', () => {
      assert(button() instanceof HTMLButtonElement);
    });
  });
  describe('select', () => {
    it('should create an HTMLSelectElement', () => {
      assert(select() instanceof HTMLSelectElement);
    });
  });
  describe('datalist', () => {
    it('should create an HTMLDataListElement', () => {
      assert(datalist() instanceof HTMLDataListElement);
    });
  });
  describe('optgroup', () => {
    it('should create an HTMLOptGroupElement', () => {
      assert(optgroup() instanceof HTMLOptGroupElement);
    });
  });
  describe('option', () => {
    it('should create an HTMLOptionElement', () => {
      assert(option() instanceof HTMLOptionElement);
    });
  });
  describe('textarea', () => {
    it('should create an HTMLTextAreaElement', () => {
      assert(textarea() instanceof HTMLTextAreaElement);
    });
  });
  describe('output', () => {
    it('should create an HTMLOutputElement', () => {
      assert(output() instanceof HTMLOutputElement);
    });
  });
  describe('progress', () => {
    it('should create an HTMLProgressElement', () => {
      assert(progress() instanceof HTMLProgressElement);
    });
  });
  describe('meter', () => {
    it('should create an HTMLMeterElement', () => {
      assert(meter() instanceof HTMLMeterElement);
    });
  });
  describe('fieldset', () => {
    it('should create an HTMLFieldSetElement', () => {
      assert(fieldset() instanceof HTMLFieldSetElement);
    });
  });
  describe('legend', () => {
    it('should create an HTMLLegendElement', () => {
      assert(legend() instanceof HTMLLegendElement);
    });
  });
  /**
   * Scripting
   */
  describe('script', () => {
    it('should create an HTMLScriptElement', () => {
      assert(script() instanceof HTMLScriptElement);
    });
  });
  describe('noscript', () => {
    it('should create an HTMLElement', () => {
      assert(noscript() instanceof HTMLElement);
    });
  });
  describe('template', () => {
    it('should create an HTMLTemplateElement', () => {
      assert(template() instanceof HTMLTemplateElement);
    });
  });
  describe('canvas', () => {
    it('should create an HTMLCanvasElement', () => {
      assert(canvas() instanceof HTMLCanvasElement);
    });
  });

  html({ lang: 'en' }, () => {
    head(() => {
      title('This is an example.');
    });
    body(() => {
      h1('Example header');
      p('Example content');
    });
  });
});
