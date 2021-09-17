/*
// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
*/
Reveal.initialize({
	dependencies: [
		{ src: 'packages/reveal/plugin/markdown/marked.js' },
		{ src: 'packages/reveal/plugin/markdown/markdown.js' },
		{ src: 'packages/reveal/plugin/notes/notes.js', async: true },
		{ src: 'packages/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
	]
});
Reveal.initialize({
    width: '100%',
    height: '100%'

});