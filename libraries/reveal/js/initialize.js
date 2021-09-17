/*
// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
*/
Reveal.initialize({
	dependencies: [
		{ src: 'libraries/reveal/plugin/markdown/marked.js' },
		{ src: 'libraries/reveal/plugin/markdown/markdown.js' },
		{ src: 'libraries/reveal/plugin/notes/notes.js', async: true },
		{ src: 'libraries/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
	]
});
Reveal.initialize({
    width: '100%',
    height: '100%'

});