var Elebend = (function () {
  'use strict';

  /* eslint-disable no-restricted-syntax */
  /* eslint-disable no-loop-func */
  const Elebend = {};

  const element = (name, attributes, content, body) => {
    const el = document.createElement(name);

    for (const [k, v] of Object.entries(attributes)) {
      el.setAttribute(k, v);
    }

    if (content) {
      for (const c of body) {
        if (c instanceof HTMLElement || c instanceof Text) {
          el.appendChild(c);
        } else if (typeof c === 'string') {
          el.appendChild(document.createTextNode(c));
        }
      }
    }

    return el;
  };

  /**
   * To mess with the compressors
   */
  const T = true;
  const F = false;

  const ELEMENTS = {
    /**
     * Document metadata
     */
    head: T,
    title: T,
    base: F,
    link: F,
    meta: F,
    style: T,
    /**
     * Section
     */
    body: T,
    article: T,
    section: T,
    nav: T,
    aside: T,
    h1: T,
    h2: T,
    h3: T,
    h4: T,
    h5: T,
    h6: T,
    header: T,
    footer: T,
    address: T,
    /**
     * Grouping
     */
    p: T,
    hr: F,
    pre: T,
    blockquote: T,
    ol: T,
    ul: T,
    li: T,
    dl: T,
    dt: T,
    dd: T,
    figure: T,
    figcaption: T,
    div: T,
    main: T,
    /**
     * Text Semantics
     */
    a: T,
    em: T,
    strong: T,
    small: T,
    s: T,
    cite: T,
    q: T,
    dfn: T,
    abbr: T,
    data: T,
    time: T,
    code: T,
    var: T,
    samp: T,
    kbd: T,
    sub: T,
    sup: T,
    i: T,
    b: T,
    u: T,
    mark: T,
    ruby: T,
    rb: T,
    rt: T,
    rtc: T,
    rp: T,
    bdi: T,
    bdo: T,
    br: F,
    wbr: F,
    /**
     * Edits
     */
    ins: T,
    del: T,
    /**
     * Embedded content
     */
    img: F,
    iframe: T,
    embed: F,
    param: F,
    video: T,
    audio: T,
    source: F,
    track: F,
    map: T,
    area: F,
    /**
     * Tabular data
     */
    table: T,
    caption: T,
    colgroup: T,
    col: F,
    tbody: T,
    thead: T,
    tfoot: T,
    tr: T,
    td: T,
    th: T,
    /**
     * Forms
     */
    form: T,
    label: T,
    input: F,
    button: T,
    select: T,
    datalist: T,
    optgroup: T,
    option: T,
    textarea: T,
    keygen: F,
    output: T,
    progress: T,
    meter: T,
    fieldset: T,
    legend: T,
    /**
     * Scripting
     */
    script: T,
    noscript: T,
    template: T,
    canvas: T,
  };

  for (const [k, v] of Object.entries(ELEMENTS)) {
    if (v) {
      Elebend[k] = (attributes, body) => element(k, attributes, T, body);
    } else {
      Elebend[k] = attributes => element(k, attributes);
    }
  }

  Elebend.element = element;

  Object.freeze(Elebend);

  return Elebend;

}());
