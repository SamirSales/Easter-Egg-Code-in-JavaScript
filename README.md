# Monsieur Roger (Version with Bubbles)

A simple jQuery implementation of konami code with a floating bubbles effect as example. A tribute to friends: Monsieur Roger and Paolo O.

var _codigo = "38384040373937396665";

This is the konami code (&#8593; &#8593; &#8595; &#8595; &#8592; &#8594; &#8592; &#8594; B A), if you want to use another code, just put an ASCII chain over there.
The others params are on the beginning of the file rogers.js.

On the line 45, there is a bonus, something I've found somewhere on a code: after code is fully inserted, buffer isn't cleaned, only the last letter, so, after the code, just press the last letter(A) multiple times for a cascade effect. If you don't want that, change codigo_buffer = _codigo.substring(0,_codigo.length-2); to codigo_buffer = "";

