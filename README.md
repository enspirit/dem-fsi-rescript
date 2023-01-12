# Doc-e-mate, your document's best friend

This repository holds the file system interface library of the ReScript version
of Doc-e-mate, a tool that allows you to generate and print documents written in
Markdown, styled in CSS, with business data injected from JSON or YAML files.

```
> Text     + Data  + Style  ->  Beautiful Business Documents
> HTML     + Json  + CSS    ->  Beautiful Business Documents
> Markdown + YAML  + SASS   ->  Beautiful Maintainable Business Document
```

*This is a split of the https://github.com/enspirit/dem-rescript project,
in order to remove unwanted dependencies between the modules of the tool.*

Refer to https://github.com/enspirit/dem-core-rescript for a documentation of
the core of the tool.

This is a ReScript library. Its main interface is hold in 
https://github.com/enspirit/dem-fsi-rescript/blob/main/src/fsi.resi .

Use the `compile` function to generate an html string from markdown, css and
json sources in specific files.

Otherwise, skip lengthy parameters by following doc-e-mate conventions: current
folder having `index.md` (markdown text), `index.css` (style) and `index.json`
(data) files, as well as an `index.html.tpl` html final template.

Use the `print` function to generate your document and convert it into a
pdf document.

This function uses the WeasyPrint solution (see https://weasyprint.org/), so
make sure that it is correctly installed on your machine (the weasyprint command
must be available in a terminal).

By default, output files are named after the text source file. But you may
explicitly choose the name of the produced (html or pdf depending on the used
function) files by using the `output_filename_opt` parameter.

Also, edit your sources files and display the final result live by using
the `watch_mode` parameter.

Doc-e-mate will watch for modifications of any source file located in the
directory of each specified (or default) source file, as well as their
subdirectories. Now, let's edit your sources in your favorite editor on the left
hand side of your screen, and get a live display of the final pdf document on
the right hand side of your screen.

Eventually, generate multiple data instanciations of the same document by using
the `publipost` parameter and using an array of data instead of a single data
object, and instantiate the name of the produced document too with the same
mustache format as in the document.

### Mustache partials

Doc-e-mate supports mustache partials. Please take a look at Mustache partials
documentation first: https://mustache.github.io/mustache.5.html.

`TL;DR`: you may include text from some separated markdown file called
`white_hat.md` and located using the following syntax in your main text file:
`{{> white_hat}}`. In this case, `white_hat.md` is located in the same directory
 as your main text file.

Also do not hesitate to use several levels of inclusion: `white_hat.md` may
refer to another markdown file called `shield_of_light.md` located in a
subdirectory `powers` with the following: `{{> powers/shield_of_light}}`. Just
make sure to always use a path relative to the main text file.

### Build your data with javascript

Doc-e-mate supports data file written in CommonJS. They are loaded using the
NodeJS `require` directive. The only requirement is to export the data with the
following instruction: `module.exports = data;` at the end of the javascript
data file. You may use an asynchronized script which returns a javascript
promise, just do not forget to set the `async` parameter to `true` then.

## Hacking

Doc-e-mate is written in ReScript, with great help from the
following libraries:
* mustache.js, see https://mustache.github.io/
* markdown-it, see https://github.com/markdown-it/markdown-it and https://spec.commonmark.org/

### Getting started with the source code

Clone the repository, then run the following command to initialize your dev
environment:

```
npm install
```

### Building the tool

You can build the program with

```
npm run re:build
```

or in watch mode with

```
npm run re:start
```

### Running tests

You can run the tests in watch mode using:

```
npm run testw
```

 ## Publishing

 All the releases were published using `np` so far. Cf.
 https://github.com/sindresorhus/np
