/*
Printing and PDF exports
*/
var link = document.createElement( 'link' );
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = window.location.search.match( /print-pdf/gi ) ? 'packages/reveal/css/print/pdf.css' : 'packages/reveal/css/print/paper.css';
			document.getElementsByTagName( 'head' )[0].appendChild( link );