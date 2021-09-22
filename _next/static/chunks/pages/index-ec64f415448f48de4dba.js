(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8277:function(e,l,i){"use strict";i.r(l),i.d(l,{default:function(){return L}});var t=i(5893),s=i(7294),n=i(9008),r=i(7361),d=i(6224),h=i.n(d),c=i(5098),_=i.n(c),a=function(e){var l=e.title,i=e.children,d=(0,s.useContext)(r.ThemeContext).articleStyle;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:l}),(0,t.jsx)("link",{rel:"icon",href:"/".concat("emergence","/favicon.ico")})]}),(0,t.jsx)("div",{className:d===r.Style.LaTeX?_()["markdown-body"]:h()["markdown-body"],children:i})]})},o=i(9904),x=i.n(o),p=function(){var e=(0,s.useContext)(r.ThemeContext),l=e.colorMode,i=e.setColorMode,n=e.setArticleStyle;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:x().navbar,children:[(0,t.jsx)("button",{onClick:function(){return n(r.Style.LaTeX)},children:"LaTeX"}),(0,t.jsx)("button",{onClick:function(){return n(r.Style.GitHub)},children:"GitHub"}),(0,t.jsx)("input",{type:"checkbox",checked:"dark"===l,onChange:function(){return i("dark"===l?"light":"dark")}})]}),(0,t.jsx)("div",{style:{minHeight:"50px"}})]})},u=i(7757),j=i.n(u),b=i(5861),m=i(6378),g=i(1872),f=i(6893),T=i(766),k=i.n(T),y=new m.v,v=function(e){var l=e.code,i=e.language,n=(0,s.useState)(""),r=n[0],d=n[1],h=(0,s.useState)(!1),c=h[0],_=h[1],a=(0,s.useState)(!1),o=a[0],x=a[1],p=(0,s.useState)((0,t.jsx)(f.j4u,{})),u=p[0],m=p[1];return(0,s.useEffect)((function(){(0,b.Z)(j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.request("POST /markdown",{text:"```"+i+"\n"+l});case 2:t=e.sent,d(t.data);case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,s.useEffect)((function(){o&&(m((0,t.jsx)(g.sez,{})),setTimeout((function(){m((0,t.jsx)(f.j4u,{})),x(!1)}),2e3))}),[o]),(0,t.jsxs)("div",{onMouseEnter:function(){return _(!0)},onMouseLeave:function(){return _(!1)},onFocus:function(){return _(!0)},onBlur:function(){return _(!1)},className:k()["code-block-container"],children:[(0,t.jsx)("button",{title:"Copy to clipboard",className:c?k()["button-visible"]:k()["button-hidden"],onClick:function(){navigator.clipboard.writeText(l),x(!0)},children:u}),(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})},I=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("section",{id:"text",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h1",{children:"Text"})}),(0,t.jsxs)("article",{id:"text__headings",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h2",{children:"Headings"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Heading 1"}),(0,t.jsx)("h2",{children:"Heading 2"}),(0,t.jsx)("h3",{children:"Heading 3"}),(0,t.jsx)("h4",{children:"Heading 4"}),(0,t.jsx)("h5",{children:"Heading 5"}),(0,t.jsx)("h6",{children:"Heading 6"})]}),(0,t.jsx)(v,{code:'import { Octokit } from "@octokit/core";\nimport React, { useEffect, useState } from "react";\n\nconst person = { name: "Ainsley", age: 23, food: "pizza" };\nimport { Article } from "../components/article";\nimport { Navbar } from "../components/Navbar/navbar";\nimport TestHTML from "../components/test-html";\n\nconst Home: NextPage = () => {\n  return (\n    <>\n      <Navbar />\n      <Article title="Emergence">\n        <TestHTML />\n      </Article>\n    </>\n  );\n};\n\nexport default Home;',language:"javascript"}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]}),(0,t.jsxs)("article",{id:"text__paragraphs",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h2",{children:"Paragraphs"})}),(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:"A paragraph (from the Greek paragraphos, \u201cto write beside\u201d or \u201cwritten beside\u201d) is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose."})}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]}),(0,t.jsxs)("article",{id:"text__blockquotes",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h2",{children:"Blockquotes"})}),(0,t.jsx)("div",{children:(0,t.jsxs)("blockquote",{children:[(0,t.jsx)("p",{children:"A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text."}),(0,t.jsx)("p",{children:"It is typically distinguished visually using indentation and a different typeface or smaller size quotation. It may or may not include a citation, usually placed at the bottom."}),(0,t.jsx)("cite",{children:(0,t.jsx)("a",{href:"#!",children:"Said no one, ever."})})]})}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]}),(0,t.jsxs)("article",{id:"text__lists",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h2",{children:"Lists"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Definition list"}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{children:"Definition List Title"}),(0,t.jsx)("dd",{children:"This is a definition list division."})]}),(0,t.jsx)("h3",{children:"Ordered List"}),(0,t.jsxs)("ol",{type:"1",children:[(0,t.jsx)("li",{children:"List Item 1"}),(0,t.jsxs)("li",{children:["List Item 2",(0,t.jsxs)("ol",{type:"A",children:[(0,t.jsx)("li",{children:"List Item 1"}),(0,t.jsxs)("li",{children:["List Item 2",(0,t.jsxs)("ol",{type:"a",children:[(0,t.jsx)("li",{children:"List Item 1"}),(0,t.jsxs)("li",{children:["List Item 2",(0,t.jsxs)("ol",{type:"I",children:[(0,t.jsx)("li",{children:"List Item 1"}),(0,t.jsxs)("li",{children:["List Item 2",(0,t.jsxs)("ol",{type:"i",children:[(0,t.jsx)("li",{children:"List Item 1"}),(0,t.jsx)("li",{children:"List Item 2"}),(0,t.jsx)("li",{children:"List Item 3"})]})]}),(0,t.jsx)("li",{children:"List Item 3"})]})]}),(0,t.jsx)("li",{children:"List Item 3"})]})]}),(0,t.jsx)("li",{children:"List Item 3"})]})]}),(0,t.jsx)("li",{children:"List Item 3"})]}),(0,t.jsx)("h3",{children:"Unordered List"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"List Item 1"}),(0,t.jsxs)("li",{children:["List Item 2",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"List Item 1"}),(0,t.jsxs)("li",{children:["List Item 2",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"List Item 1"}),(0,t.jsxs)("li",{children:["List Item 2",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"List Item 1"}),(0,t.jsxs)("li",{children:["List Item 2",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"List Item 1"}),(0,t.jsx)("li",{children:"List Item 2"}),(0,t.jsx)("li",{children:"List Item 3"})]})]}),(0,t.jsx)("li",{children:"List Item 3"})]})]}),(0,t.jsx)("li",{children:"List Item 3"})]})]}),(0,t.jsx)("li",{children:"List Item 3"})]})]}),(0,t.jsx)("li",{children:"List Item 3"})]})]}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]}),(0,t.jsxs)("article",{id:"text__blockquotes",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h1",{children:"Blockquotes"})}),(0,t.jsx)("div",{children:(0,t.jsxs)("blockquote",{children:[(0,t.jsx)("p",{children:"A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text."}),(0,t.jsx)("p",{children:"It is typically distinguished visually using indentation and a different typeface or smaller size quotation. It may or may not include a citation, usually placed at the bottom."}),(0,t.jsx)("cite",{children:(0,t.jsx)("a",{href:"#!",children:"Said no one, ever."})})]})}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]}),(0,t.jsxs)("article",{id:"text__details",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h1",{children:"Details / Summary"})}),(0,t.jsxs)("details",{children:[(0,t.jsx)("summary",{children:"Expand for details"}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, odio! Odio natus ullam ad quaerat, eaque necessitatibus, aliquid distinctio similique voluptatibus dicta consequuntur animi. Quaerat facilis quidem unde eos! Ipsa."})]}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]}),(0,t.jsxs)("article",{id:"text__address",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h1",{children:"Address"})}),(0,t.jsxs)("address",{children:["Written by ",(0,t.jsx)("a",{href:"mailto:webmaster@example.com",children:"Jon Doe"}),".",(0,t.jsx)("br",{}),"Visit us at:",(0,t.jsx)("br",{}),"Example.com",(0,t.jsx)("br",{}),"Box 564, Disneyland",(0,t.jsx)("br",{}),"USA"]}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]}),(0,t.jsxs)("article",{id:"text__hr",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h2",{children:"Horizontal rules"})}),(0,t.jsx)("div",{children:(0,t.jsx)("hr",{})}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]}),(0,t.jsxs)("article",{id:"text__tables",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h2",{children:"Tabular data"})}),(0,t.jsx)("div",{className:_()["scroll-wrapper"],children:(0,t.jsxs)("table",{children:[(0,t.jsx)("caption",{children:"Table Caption"}),(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Table Heading 1"}),(0,t.jsx)("th",{children:"Table Heading 2"}),(0,t.jsx)("th",{children:"Table Heading 3"}),(0,t.jsx)("th",{children:"Table Heading 4"}),(0,t.jsx)("th",{children:"Table Heading 5"})]})}),(0,t.jsx)("tfoot",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Table Footer 1"}),(0,t.jsx)("th",{children:"Table Footer 2"}),(0,t.jsx)("th",{children:"Table Footer 3"}),(0,t.jsx)("th",{children:"Table Footer 4"}),(0,t.jsx)("th",{children:"Table Footer 5"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Table Cell 1"}),(0,t.jsx)("td",{children:"Table Cell 2"}),(0,t.jsx)("td",{children:"Table Cell 3"}),(0,t.jsx)("td",{children:"Table Cell 4"}),(0,t.jsx)("td",{children:"Table Cell 5"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Table Cell 1"}),(0,t.jsx)("td",{children:"Table Cell 2"}),(0,t.jsx)("td",{children:"Table Cell 3"}),(0,t.jsx)("td",{children:"Table Cell 4"}),(0,t.jsx)("td",{children:"Table Cell 5"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Table Cell 1"}),(0,t.jsx)("td",{children:"Table Cell 2"}),(0,t.jsx)("td",{children:"Table Cell 3"}),(0,t.jsx)("td",{children:"Table Cell 4"}),(0,t.jsx)("td",{children:"Table Cell 5"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Table Cell 1"}),(0,t.jsx)("td",{children:"Table Cell 2"}),(0,t.jsx)("td",{children:"Table Cell 3"}),(0,t.jsx)("td",{children:"Table Cell 4"}),(0,t.jsx)("td",{children:"Table Cell 5"})]})]})]})}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]}),(0,t.jsxs)("article",{id:"text__code",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h2",{children:"Code"})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Keyboard input:"})," ",(0,t.jsx)("kbd",{children:"Cmd"})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Inline code:"})," ",(0,t.jsx)("code",{children:"<div>code</div>"})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Sample output:"})," ",(0,t.jsx)("samp",{children:"This is sample output from a computer program."})]})]}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]}),(0,t.jsxs)("article",{id:"text__inline",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h2",{children:"Inline elements"})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("a",{href:"#!",children:"This is a text link"}),"."]}),(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Strong is used to indicate strong importance."})}),(0,t.jsx)("p",{children:(0,t.jsx)("em",{children:"This text has added emphasis."})}),(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("b",{children:"b element"})," is stylistically different text from normal text, without any special importance."]}),(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("i",{children:"i element"})," is text that is offset from the normal text."]}),(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("u",{children:"u element"})," is text with an unarticulated, though explicitly rendered, non-textual annotation."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("del",{children:"This text is deleted"})," and"," ",(0,t.jsx)("ins",{children:"This text is inserted"}),"."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("s",{children:"This text has a strikethrough"}),"."]}),(0,t.jsxs)("p",{children:["Superscript",(0,t.jsx)("sup",{children:"\xae"}),"."]}),(0,t.jsxs)("p",{children:["Subscript for things like H",(0,t.jsx)("sub",{children:"2"}),"O."]}),(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"This small text is small for fine print, etc."})}),(0,t.jsxs)("p",{children:["Abbreviation: ",(0,t.jsx)("abbr",{title:"HyperText Markup Language",children:"HTML"})]}),(0,t.jsx)("p",{children:(0,t.jsx)("q",{cite:"https://developer.mozilla.org/en-US/docs/HTML/Element/q",children:"This text is a short inline quotation."})}),(0,t.jsx)("p",{children:(0,t.jsx)("cite",{children:"This is a citation."})}),(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("dfn",{children:"dfn element"})," indicates a definition."]}),(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("mark",{children:"mark element"})," indicates a highlight."]}),(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("var",{children:"variable element"}),", such as ",(0,t.jsx)("var",{children:"x"})," ="," ",(0,t.jsx)("var",{children:"y"}),"."]}),(0,t.jsxs)("p",{children:["The time element:"," ",(0,t.jsx)("time",{dateTime:"2013-04-06T12:32+00:00",children:"2 weeks ago"})]})]}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]}),(0,t.jsxs)("article",{id:"text__comments",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h2",{children:"HTML Comments"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"There is comment here:"}),(0,t.jsx)("p",{children:"There is a comment spanning multiple tags and lines below here."})]}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"#top",children:"[Top]"})})})]})]})})},L=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p,{}),(0,t.jsx)(a,{title:"Emergence",children:(0,t.jsx)(I,{})})]})}},5301:function(e,l,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8277)}])},766:function(e){e.exports={"code-block-container":"code-block_code-block-container__2Zz-Y","button-hidden":"code-block_button-hidden__23W-U","button-visible":"code-block_button-visible__3zDUe"}},9904:function(e){e.exports={navbar:"navbar_navbar__RVszD"}},6224:function(e){e.exports={"markdown-body":"github_markdown-body__1FF9R",octicon:"github_octicon__3pv4p",anchor:"github_anchor__3lJ-v","octicon-link":"github_octicon-link__27fbw",comment:"github_comment__2qAKu","blob-num":"github_blob-num__33k_H","tab-size":"github_tab-size__Irsps","commit-tease-sha":"github_commit-tease-sha__365xK","blob-wrapper":"github_blob-wrapper__2MLfs","blob-wrapper-embedded":"github_blob-wrapper-embedded__3V45Y","blob-code":"github_blob-code__1-OUB","blob-code-inner":"github_blob-code-inner__YAHUh","pl-token":"github_pl-token__c9DzW",active:"github_active__1zbJ8","task-list-item":"github_task-list-item__2_SxK","task-list-item-checkbox":"github_task-list-item-checkbox__3VuFZ",rule:"github_rule__3ZJTb",border:"github_border__39yiO","border-0":"github_border-0__3wIhi","border-bottom":"github_border-bottom__1bXDJ","rounded-1":"github_rounded-1__1C6nc","color-text-tertiary":"github_color-text-tertiary__1eHh0","color-bg-primary":"github_color-bg-primary__3e7Yx","color-bg-secondary":"github_color-bg-secondary__1f0w2","mb-0":"github_mb-0__3Imu5","my-2":"github_my-2__1yHaC","pl-0":"github_pl-0__3JxIi","py-0":"github_py-0__2wQLv","pl-1":"github_pl-1__34JuB","pl-2":"github_pl-2__25QCb","py-2":"github_py-2__lOhov","pl-3":"github_pl-3__32IWl","px-3":"github_px-3__aii6z","pl-4":"github_pl-4__n4T7Z","pl-5":"github_pl-5__37p4-","pl-6":"github_pl-6__2m0fc","pl-7":"github_pl-7__ChTmT","pl-8":"github_pl-8__3Re3O","pl-9":"github_pl-9__kccuI","pl-10":"github_pl-10__1a_3w","pl-11":"github_pl-11__GflRQ","pl-12":"github_pl-12__2ICIx","pl-sm-0":"github_pl-sm-0__1wn37","pl-sm-1":"github_pl-sm-1__oiy73","pl-sm-2":"github_pl-sm-2__3EWX7","pl-sm-3":"github_pl-sm-3__uRVc8","pl-sm-4":"github_pl-sm-4___Klbr","pl-sm-5":"github_pl-sm-5__yZ3Ug","pl-sm-6":"github_pl-sm-6__1HqJx","pl-sm-7":"github_pl-sm-7__3VoK1","pl-sm-8":"github_pl-sm-8__1xVZW","pl-sm-9":"github_pl-sm-9__3_A_m","pl-sm-10":"github_pl-sm-10__2DrVs","pl-sm-11":"github_pl-sm-11__3UYg6","pl-sm-12":"github_pl-sm-12__31Emm","pl-md-0":"github_pl-md-0__1LSsW","pl-md-1":"github_pl-md-1__3dg1-","pl-md-2":"github_pl-md-2__DGY6Z","pl-md-3":"github_pl-md-3__1PUUE","pl-md-4":"github_pl-md-4__XqfN4","pl-md-5":"github_pl-md-5__1DjAA","pl-md-6":"github_pl-md-6__2i04j","pl-md-7":"github_pl-md-7__158hn","pl-md-8":"github_pl-md-8__2R606","pl-md-9":"github_pl-md-9__1nXoz","pl-md-10":"github_pl-md-10__2cItE","pl-md-11":"github_pl-md-11__2qI8j","pl-md-12":"github_pl-md-12__3jrZw","pl-lg-0":"github_pl-lg-0__210eV","pl-lg-1":"github_pl-lg-1__2YX2c","pl-lg-2":"github_pl-lg-2__2Qdd-","pl-lg-3":"github_pl-lg-3__14gaA","pl-lg-4":"github_pl-lg-4__SIUIS","pl-lg-5":"github_pl-lg-5__3psCL","pl-lg-6":"github_pl-lg-6__2_btk","pl-lg-7":"github_pl-lg-7__1NT3R","pl-lg-8":"github_pl-lg-8__1AxTv","pl-lg-9":"github_pl-lg-9__2KgLc","pl-lg-10":"github_pl-lg-10__1-Ce9","pl-lg-11":"github_pl-lg-11__2jFki","pl-lg-12":"github_pl-lg-12__GmK8b","pl-xl-0":"github_pl-xl-0__c00If","pl-xl-1":"github_pl-xl-1__3-THR","pl-xl-2":"github_pl-xl-2__3VX9g","pl-xl-3":"github_pl-xl-3__1Yfhf","pl-xl-4":"github_pl-xl-4__23ZpA","pl-xl-5":"github_pl-xl-5__3BuLy","pl-xl-6":"github_pl-xl-6__3M8eD","pl-xl-7":"github_pl-xl-7__1FKL8","pl-xl-8":"github_pl-xl-8__303ZZ","pl-xl-9":"github_pl-xl-9__2tgFC","pl-xl-10":"github_pl-xl-10__2rowt","pl-xl-11":"github_pl-xl-11__2k9Gu","pl-xl-12":"github_pl-xl-12__28YrZ",f6:"github_f6__xSJfg","lh-condensed":"github_lh-condensed__8vc1Z","text-bold":"github_text-bold__vjZwY",highlight:"github_highlight__a9No7"}},5098:function(e){e.exports={"markdown-body":"latex_markdown-body__10qmI","scroll-wrapper":"latex_scroll-wrapper__31RYl",theorem:"latex_theorem__1kvTi",lemma:"latex_lemma__2gj_I",proof:"latex_proof__2EW-O",definition:"latex_definition__1WSbr",author:"latex_author__3j0uk",sidenote:"latex_sidenote__37mf-",left:"latex_left__2JGp-","sidenote-number":"latex_sidenote-number__1zmNu","sidenote-toggle":"latex_sidenote-toggle__8bNoX",footnotes:"latex_footnotes__1UTje",abstract:"latex_abstract__10HHL",latex:"latex_latex__koxeE","pl-c":"latex_pl-c__1ARh7","pl-c1":"latex_pl-c1__2sipA","pl-s":"latex_pl-s__1qb6C","pl-v":"latex_pl-v__2nfbW","pl-e":"latex_pl-e__1S7Pr","pl-en":"latex_pl-en__1WVFH","pl-s1":"latex_pl-s1__2at8Q","pl-smi":"latex_pl-smi__1Qh7o","pl-ent":"latex_pl-ent__3RDMz","pl-k":"latex_pl-k__3BApc","pl-pds":"latex_pl-pds__2mPE0","pl-pse":"latex_pl-pse__2PJjy","pl-sr":"latex_pl-sr__3XEcn","pl-sra":"latex_pl-sra__k4w9J","pl-sre":"latex_pl-sre__3w9YJ","pl-smw":"latex_pl-smw__ZDF0t","pl-bu":"latex_pl-bu__3qrUg","pl-ii":"latex_pl-ii__2p2cC","pl-c2":"latex_pl-c2__2bNiH","pl-cce":"latex_pl-cce__-R2MW","pl-ml":"latex_pl-ml__2kQnG","pl-mh":"latex_pl-mh__1-Dm9","pl-ms":"latex_pl-ms__2SCO1","pl-mi":"latex_pl-mi__1SCzk","pl-mb":"latex_pl-mb__2OxFy","pl-md":"latex_pl-md__kDqbm","pl-mi1":"latex_pl-mi1__1H9x4","pl-mc":"latex_pl-mc__1XMAs","pl-mi2":"latex_pl-mi2__3aX3T","pl-mdr":"latex_pl-mdr__1ksBM","pl-ba":"latex_pl-ba__2JFZ7","pl-sg":"latex_pl-sg__mr4WG","pl-corl":"latex_pl-corl__ERynQ"}}},function(e){e.O(0,[994,375,774,888,179],(function(){return l=5301,e(e.s=l);var l}));var l=e.O();_N_E=l}]);