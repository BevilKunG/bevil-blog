import styled from 'styled-components'

const PostContent = styled.div`
  & {
    /* Variables */
    /* ---------------------------------------------------------- */
    :root {
      /* Colours */
      --color-primary: #3eb0ef;
      --color-base: #15171a;
      --color-secondary: #5b7a81;
      --color-border: #c7d5d8;
      --color-bg: #f5f5f5;

      /* Fonts */
      --font-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      --font-serif: Georgia, Times, serif;
      --font-mono: Menlo, Courier, monospace;
      --font-light: 100;
      --font-normal: 400;
      --font-bold: 700;
      --font-heavy: 800;

      /* Sizes */
      --height: 4rem;
      --margin: 2rem;
      --radius: 0.6rem;
    }

    /* Reset */
    /* ---------------------------------------------------------- */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      font-size: 100%;
      vertical-align: baseline;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      border-spacing: 0;
      border-collapse: collapse;
    }
    img {
      max-width: 100%;
    }
    html {
      box-sizing: border-box;
      font-family: sans-serif;

      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    a {
      background-color: transparent;
    }
    a:active,
    a:hover {
      outline: 0;
    }
    b,
    strong {
      font-weight: bold;
    }
    i,
    em,
    dfn {
      font-style: italic;
    }
    h1 {
      margin: 0.67em 0;
      font-size: 2em;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }
    sup {
      top: -0.5em;
    }
    sub {
      bottom: -0.25em;
    }
    img {
      border: 0;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    mark {
      background-color: #fdffb6;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      margin: 0;
      color: inherit;
      font: inherit;
    }
    button {
      overflow: visible;
      border: none;
    }
    button,
    select {
      text-transform: none;
    }
    button,
    html input[type='button'],
    input[type='reset'],
    input[type='submit'] {
      cursor: pointer;

      -webkit-appearance: button;
    }
    button[disabled],
    html input[disabled] {
      cursor: default;
    }
    button::-moz-focus-inner,
    input::-moz-focus-inner {
      padding: 0;
      border: 0;
    }
    input {
      line-height: normal;
    }
    input:focus {
      outline: none;
    }
    input[type='checkbox'],
    input[type='radio'] {
      box-sizing: border-box;
      padding: 0;
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      height: auto;
    }
    input[type='search'] {
      box-sizing: content-box;

      -webkit-appearance: textfield;
    }
    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    legend {
      padding: 0;
      border: 0;
    }
    textarea {
      overflow: auto;
    }
    table {
      border-spacing: 0;
      border-collapse: collapse;
    }
    td,
    th {
      padding: 0;
    }

    /* Defaults */
    /* ---------------------------------------------------------- */
    html {
      overflow-x: hidden;
      overflow-y: scroll;
      font-size: 62.5%;
      background: var(--color-base);

      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body {
      overflow-x: hidden;
      color: #3c484e;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 1.5rem;
      line-height: 1.6em;
      font-weight: 400;
      font-style: normal;
      letter-spacing: 0;
      text-rendering: optimizeLegibility;
      background: #fff;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -moz-font-feature-settings: 'liga' on;
    }

    ::selection {
      text-shadow: none;
      background: #cbeafb;
    }

    hr {
      position: relative;
      display: block;
      width: 100%;
      margin: 1.8em 0 2.4em;
      padding: 0;
      height: 1px;
      border: 0;
      border-top: 1px solid #e3e9ed;
    }

    audio,
    canvas,
    iframe,
    img,
    svg,
    video {
      vertical-align: middle;
    }

    fieldset {
      margin: 0;
      padding: 0;
      border: 0;
    }

    textarea {
      resize: vertical;
    }

    p,
    ul,
    ol,
    dl,
    blockquote {
      margin: 0 0 1.5em 0;
    }

    ol,
    ul {
      padding-left: 1.3em;
      padding-right: 1.5em;
    }

    ol ol,
    ul ul,
    ul ol,
    ol ul {
      margin: 0.5em 0 1em;
    }

    ul {
      list-style: disc;
    }

    ol {
      list-style: decimal;
    }

    ul,
    ol {
      max-width: 100%;
    }

    li {
      margin: 0.5em 0;
      padding-left: 0.3em;
      line-height: 1.6em;
    }

    dt {
      float: left;
      margin: 0 20px 0 0;
      width: 120px;
      font-weight: 500;
      text-align: right;
    }

    dd {
      margin: 0 0 5px 0;
      text-align: left;
    }

    blockquote {
      margin: 0.3em 0 1.8em;
      padding: 0 1.6em 0 1.6em;
      border-left: #cbeafb 0.5em solid;
    }

    blockquote p {
      margin: 0.8em 0;
      font-size: 1.2em;
      font-weight: 300;
    }

    blockquote small {
      display: inline-block;
      margin: 0.8em 0 0.8em 1.5em;
      font-size: 0.9em;
      opacity: 0.8;
    }
    /* Quotation marks */
    blockquote small:before {
      content: '\\2014 \\00A0';
    }

    blockquote cite {
      font-weight: bold;
    }
    blockquote cite a {
      font-weight: normal;
    }

    a {
      color: #26a8ed;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
      color: var(--color-base);
      line-height: 1.15;
      font-weight: 700;
      text-rendering: optimizeLegibility;
    }

    h1 {
      margin: 0 0 0.5em 0;
      font-size: 4rem;
      font-weight: 700;
    }
    @media (max-width: 500px) {
      h1 {
        font-size: 2rem;
      }
    }

    h2 {
      margin: 1.5em 0 0.5em 0;
      font-size: 2rem;
    }
    @media (max-width: 500px) {
      h2 {
        font-size: 1.8rem;
      }
    }

    h3 {
      margin: 1.5em 0 0.5em 0;
      font-size: 1.8rem;
      font-weight: 500;
    }
    @media (max-width: 500px) {
      h3 {
        font-size: 1.7rem;
      }
    }

    h4 {
      margin: 1.5em 0 0.5em 0;
      font-size: 1.6rem;
      font-weight: 500;
    }

    h5 {
      margin: 1.5em 0 0.5em 0;
      font-size: 1.4rem;
      font-weight: 500;
    }

    h6 {
      margin: 1.5em 0 0.5em 0;
      font-size: 1.4rem;
      font-weight: 500;
    }

    /* Layout */
    /* ---------------------------------------------------------- */
    .content-body {
      display: flex;
      flex-direction: column;
      font-family: var(--font-serif);
    }

    .content-body h1,
    .content-body h2,
    .content-body h3,
    .content-body h4,
    .content-body h5,
    .content-body h6 {
      font-family: var(--font-sans-serif);
    }

    .content-body h1 {
      margin: 1em 0 0.5em 0;
      font-size: 3.4rem;
      font-weight: 700;
    }
    @media (max-width: 500px) {
      .content-body h1 {
        font-size: 2.8rem;
      }
    }

    .content-body h2 {
      margin: 0.8em 0 0.4em 0;
      font-size: 3.2rem;
      font-weight: 700;
    }
    @media (max-width: 500px) {
      .content-body h2 {
        font-size: 2.6rem;
      }
    }

    .content-body h3 {
      margin: 0.5em 0 0.2em 0;
      font-size: 2.8rem;
      font-weight: 700;
    }
    @media (max-width: 500px) {
      .content-body h3 {
        font-size: 2.2rem;
      }
    }

    .content-body h4 {
      margin: 0.5em 0 0.2em 0;
      font-size: 2.4rem;
      font-weight: 700;
    }
    @media (max-width: 500px) {
      .content-body h4 {
        font-size: 2.2rem;
      }
    }

    .content-body h5 {
      display: block;
      margin: 0.5em 0;
      padding: 1em 0 1.5em;
      border: 0;
      font-family: Georgia, serif;
      color: var(--color-primary);
      font-style: italic;
      font-size: 3.2rem;
      line-height: 1.35em;
      text-align: center;
    }

    .content-body h6 {
      margin: 0.5em 0 0.2em 0;
      font-size: 2rem;
      font-weight: 700;
    }

    .content-body figure {
      margin: 0.4em 0 1.6em;
      font-size: 2.8rem;
      font-weight: 700;
    }

    .content-body pre {
      margin: 0.4em 0 1.8em;
      font-size: 1.6rem;
      line-height: 1.4em;
      white-space: pre-wrap;
      padding: 20px;
      background: var(--color-base);
      color: #fff;
      border-radius: 12px;
    }

    /* Koenig Styles */
    /* ---------------------------------------------------------- */
    .kg-bookmark-card {
      width: 100%;
      margin-top: 0;
    }

    .kg-bookmark-container {
      display: flex;
      min-height: 148px;
      color: var(--color-base);
      font-family: var(--font-sans-serif);
      text-decoration: none;
      border-radius: 3px;
      box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15),
        0 0 1px rgba(0, 0, 0, 0.09);
    }

    .kg-bookmark-container:hover {
      color: var(--color-base);
      text-decoration: none;
      box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15),
        0 0 1px rgba(0, 0, 0, 0.09);
    }

    .kg-bookmark-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 20px;
    }

    .kg-bookmark-title {
      color: color(var(--color-secondary) l(-30%));
      font-size: 1.6rem;
      line-height: 1.5em;
      font-weight: 600;
      transition: color 0.2s ease-in-out;
    }

    .kg-bookmark-container:hover .kg-bookmark-title {
      color: var(--color-primary);
    }

    .kg-bookmark-description {
      display: -webkit-box;
      overflow-y: hidden;
      margin-top: 12px;
      max-height: 48px;
      color: color(var(--color-secondary) l(-10%));
      font-size: 1.5rem;
      line-height: 1.5em;
      font-weight: 400;

      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .kg-bookmark-thumbnail {
      position: relative;
      min-width: 33%;
      max-height: 100%;
    }

    .kg-bookmark-thumbnail img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0 3px 3px 0;

      object-fit: cover;
    }

    .kg-bookmark-metadata {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 14px;
      color: color(var(--color-secondary) l(-10%));
      font-size: 1.5rem;
      font-weight: 400;
    }

    .kg-bookmark-icon {
      margin-right: 8px;
      width: 22px;
      height: 22px;
    }

    .kg-bookmark-author {
      line-height: 1.5em;
    }

    .kg-bookmark-author:after {
      content: '•';
      margin: 0 6px;
    }

    .kg-bookmark-publisher {
      overflow: hidden;
      max-width: 240px;
      line-height: 1.5em;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Gallery Styles */
    /* ---------------------------------------------------------- */
    .kg-gallery-container {
      display: flex;
      flex-direction: column;
      max-width: 1040px;
      width: 100%;
    }

    .kg-gallery-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .kg-gallery-image img {
      display: block;
      margin: 0;
      width: 100%;
      height: 100%;
    }

    .kg-gallery-row:not(:first-of-type) {
      margin: 0.75em 0 0 0;
    }

    .kg-gallery-image:not(:first-of-type) {
      margin: 0 0 0 0.75em;
    }

    .kg-gallery-card + .kg-image-card.kg-width-wide,
    .kg-gallery-card + .kg-gallery-card,
    .kg-image-card.kg-width-wide + .kg-gallery-card,
    .kg-image-card.kg-width-wide + .kg-image-card.kg-width-wide {
      margin: -2.25em 0 3em;
    }
  }
`

export default PostContent
