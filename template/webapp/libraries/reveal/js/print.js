/*
Printing and PDF exports
*/
var link = document.createElement( 'link' );
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = window.location.search.match( /print-pdf/gi ) ? 'libraries/reveal/css/print/pdf.css' : 'libraries/reveal/css/print/paper.css';
			document.getElementsByTagName( 'head' )[0].appendChild( link );