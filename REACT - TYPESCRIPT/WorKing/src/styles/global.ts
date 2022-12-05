import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: 'Roboto Mono', monospace;
	vertical-align: baseline;

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
    background-color: transparent;
    font-family: 'Inter', sans-serif;
}

*{
  scrollbar-width: thin;
  scrollbar-color: #0D1A08 #FFA800;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 8px;
  width: 8px;
}
*::-webkit-scrollbar-track {
  border-radius: 6px;
  background-color: #FFA800;
}

*::-webkit-scrollbar-track:hover {
  background-color: #FFA800;
}

*::-webkit-scrollbar-track:active {
  background-color: #FFA800;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #0D1A08;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #010201;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #070C05;
}

.btMenuOpen{
  font-size: 50px;
  background-color: transparent;
  display: flex;
  align-items: center;
}

`;

