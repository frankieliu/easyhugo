+++
categories = [""]
tags = [""]
title = "Asciidoctor"
date = "2020-09-09T17:12:42-07:00"
draft = false
+++

# asciidoctor syntax

AsciiDoc Syntax Quick Reference | Asciidoctor
https://asciidoctor.org/docs/asciidoc-syntax-quick-reference/

AsciiDoc Syntax Quick Reference | Asciidoctor
https://asciidoctor.org/docs/asciidoc-syntax-quick-reference/

Asciidoctor User Manual
https://asciidoctor.org/docs/user-manual/#user-toc

# hugo asciidoctor cheat
Hugo & Asciidoctor cheat sheet |
https://zipproth.de/cheat-sheets/hugo-asciidoctor/

# equation reference requires
:stem: latexmath
:eqnnums: AMS

```adoc
:stem: latexmath
:eqnums: AMS

[stem]
++++
\begin{equation}
\mu+\lambda
\label{toto}
\end{equation}
++++

Refer to stem:[\eqref{toto}].
```

asciidoctor/asciidoctor - Gitter
https://gitter.im/asciidoctor/asciidoctor?at=56fc1c6be4a8384a1bbd58e3

# asciidoctor -> hugo

There seems to be only one file: convert

how does hugo take output from asciidoctor - Google Search
https://www.google.com/search?q=how+does+hugo+take+output+from+asciidoctor&rlz=1C1CHBF_enUS811US811&oq=how+does+hugo+take+output+from+asciidoctor&aqs=chrome..69i57.10777j0j7&sourceid=chrome&ie=UTF-8

gohugoio/hugo: The world?s fastest framework for building websites.
https://github.com/gohugoio/hugo

# blog

Better Hugo/AsciiDoc HTML - ratfactor
http://ratfactor.com/hugo-adoc-html5s

Them's Good Broth! | Hugo and AsciiDoc
https://stiobhart.net/2020-04-18-hugo-asciidoctor/

Creating a Blog with Hugo and AsciiDoctor � rgielen.net
https://rgielen.net/posts/2019/creating-a-blog-with-hugo-and-asciidoctor/

Adventures of a software engineer/architect | Andreas' Blog
https://blog.anoff.io/

Hello World! This is the most epic subtitle ever. | My cool new Blog
https://lednerb.github.io/bilberry-hugo-theme/

# rogue

There is an error in rouge using old ** expansion, or handling of positional arguments.

Decided to not use rouge.  One alternative is just using the
rouge css or one could also use pygmentize, but need to have python 2

jirutka/asciidoctor-rouge: Rouge code highlighter support for Asciidoctor
https://github.com/jirutka/asciidoctor-rouge

Solved: Warning: Using the last argument as keyword parameters is deprecated
https://piechowski.io/post/last-arg-keyword-deprecated-ruby-2-7/

How to fix Ruby 2.7 warning: Using the last argument as keyword parameters is deprecated ? kinopyo ? Bloggie
https://bloggie.io/@kinopyo/how-to-fix-ruby-2-7-warning-using-the-last-argument-as-keyword-parameters-is-deprecated

# The best site to preview style for asciidoctor 

AsciiDoc Writer?s Guide
http://themes.asciidoctor.org/preview/#converting-the-document-to-pdf

AsciiDoc Writer?s Guide
http://themes.asciidoctor.org/preview/

Asciidoctor :: Discussion - How to assign a specific font to a word or line of text?
https://discuss.asciidoctor.org/How-to-assign-a-specific-font-to-a-word-or-line-of-text-td5986.html

Asciidoctor :: Discussion - Can I get asciidoctor's default styling stylesheet?
https://discuss.asciidoctor.org/Can-I-get-asciidoctor-s-default-styling-stylesheet-td940.html

Produce Custom Themes Using the Asciidoctor Stylesheet Factory | Asciidoctor
https://asciidoctor.org/docs/produce-custom-themes-using-asciidoctor-stylesheet-factory/

Produce Custom Themes Using the Asciidoctor Stylesheet Factory | Asciidoctor
https://asciidoctor.org/docs/produce-custom-themes-using-asciidoctor-stylesheet-factory/

asciidoctor/asciidoctor-stylesheet-factory: A factory for producting the default stylesheet for the HTML converter in Asciidoctor. Assembled using Compass, Sass and Foundation.
https://github.com/asciidoctor/asciidoctor-stylesheet-factory

bundler | RubyGems.org | your community gem host
https://rubygems.org/gems/bundler

hugo how to get asciidoctor styling - Google Search
https://www.google.com/search?q=hugo+how+to+get+asciidoctor+styling&rlz=1C1CHBF_enUS811US811&oq=hugo+how+to+get+asciidoctor+styling&aqs=chrome..69i57.17463j0j7&sourceid=chrome&ie=UTF-8

bric3.github.io/_asciidoctor.scss at 48a572d2c7778219984e2678664cb435788a2915 � bric3/bric3.github.io
https://github.com/bric3/bric3.github.io/blob/48a572d2c7778219984e2678664cb435788a2915/assets/scss/hyde-hyde/_asciidoctor.scss

# toc placement in ananke and asciidoctor

toc positioning wrt to content in default css � Issue #3751 � asciidoctor/asciidoctor
https://github.com/asciidoctor/asciidoctor/issues/3751

toc placement and style � Issue #340 � theNewDynamic/gohugo-theme-ananke
https://github.com/theNewDynamic/gohugo-theme-ananke/issues/340

toc placement and style � Issue #340 � theNewDynamic/gohugo-theme-ananke
https://github.com/theNewDynamic/gohugo-theme-ananke/issues/340

Asciidoctor :: Discussion - asciidoctor html table of contents in sidebar with volnitsky ?
https://discuss.asciidoctor.org/asciidoctor-html-table-of-contents-in-sidebar-with-volnitsky-td5220.html

# convert documents
How do I convert a document? | Asciidoctor
https://asciidoctor.org/docs/convert-documents/

# diagram

Asciidoctor Diagram | Asciidoctor
https://asciidoctor.org/docs/asciidoctor-diagram/

Asciidoctor Diagram | Asciidoctor
https://asciidoctor.org/docs/asciidoctor-diagram/

Asciidoctor Diagram | Asciidoctor
https://asciidoctor.org/docs/asciidoctor-diagram/#:~:text=Asciidoctor%20Diagram%20is%20a%20RubyGem,gem%20install%20in%20the%20CLI.&text=by%20first%20adding%20the%20following%20entry%20to%20your%20project's%20Gemfile.&text=Then%20execute%20bundle%20in%20the%20CLI.

This contains more examples

Plain-text diagrams take shape in Asciidoctor! | Asciidoctor
https://asciidoctor.org/news/2014/02/18/plain-text-diagrams-in-asciidoctor/

File: README ? Documentation for asciidoctor-diagram (1.4.0)
https://www.rubydoc.info/gems/asciidoctor-diagram/1.4.0

asciidoctor/asciidoctor-diagram: Asciidoctor diagram extension, with support for AsciiToSVG, BlockDiag (BlockDiag, SeqDiag, ActDiag, NwDiag), Ditaa, Erd, GraphViz, Mermaid, Msc, PlantUML, Shaape, SvgBob, Syntrax, UMLet, Vega, Vega-Lite and WaveDrom.
https://github.com/asciidoctor/asciidoctor-diagram

https://raw.githubusercontent.com/asciidoctor/asciidoctor-diagram/master/README.adoc
https://raw.githubusercontent.com/asciidoctor/asciidoctor-diagram/master/README.adoc

Plain-text diagrams take shape in Asciidoctor! | Asciidoctor
https://asciidoctor.org/news/2014/02/18/plain-text-diagrams-in-asciidoctor/

## a2s

asciitosvg/asciitosvg: Create beautiful SVG renderings of ASCII diagrams.
https://github.com/asciitosvg/asciitosvg

## block_macro

name-of-diagram::filename{target="output-name-wo-extension",format=svg,alt="alternatename",width=,height=}

[plantuml,diagram-output-name,svg]

diagram block_macro asciidoctor format alt - Google Search
https://www.google.com/search?rlz=1C1CHBF_enUS811US811&sxsrf=ALeKk02P5QuFWFsyrr7zdlUmSzNw-0ArDg%3A1599673672419&ei=SBVZX9mTGdHa-gTw2qzYDg&q=diagram+block_macro+asciidoctor+format+alt&oq=diagram+block_macro+asciidoctor+format+alt&gs_lcp=CgZwc3ktYWIQAzoECAAQR1CKmgFYwqQBYK-oAWgAcAF4AIABmAGIAfEGkgEDNC40mAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwjZ14Do0NzrAhVRrZ4KHXAtC-sQ4dUDCA0&uact=5

## bpmn

You can just run this example on the browser:
use python -m http.server

You can drag a bpmn file to edit in the moduler
Make modifications
And save it again to a bpmn file

This is great!

bpmn-js-examples/modeler at master � bpmn-io/bpmn-js-examples
https://github.com/bpmn-io/bpmn-js-examples/tree/master/modeler

BPMN editor | demo.bpmn.io
https://demo.bpmn.io/s/start

How to import bpmn file from a directory in the page html? � Issue #86 � bpmn-io/bpmn-js-examples
https://github.com/bpmn-io/bpmn-js-examples/issues/86

diagramUrl dont load from local url � Issue #941 � bpmn-io/bpmn-js
https://github.com/bpmn-io/bpmn-js/issues/941

gtudan/bpmn-js-cmd: A command line tool for rendering BPMN-Diagrams with https://bpmn.io/toolkit/bpmn-js/
https://github.com/gtudan/bpmn-js-cmd

gtudan/bpmn-js-cmd: A command line tool for rendering BPMN-Diagrams with https://bpmn.io/toolkit/bpmn-js/
https://github.com/gtudan/bpmn-js-cmd

Web-based tooling for BPMN, DMN and CMMN | bpmn.io
https://bpmn.io/

BPMN editor | demo.bpmn.io
https://demo.bpmn.io/s/start

BPMN editor | demo.bpmn.io
https://demo.bpmn.io/s/start

bpmn-js-examples/bundling at master � bpmn-io/bpmn-js-examples
https://github.com/bpmn-io/bpmn-js-examples/tree/master/bundling

## ditaa

ditaa output as svg - Google Search
https://www.google.com/search?q=ditaa+output+as+svg&rlz=1C1CHBF_enUS811US811&oq=ditaa+output+as+svg&aqs=chrome..69i57.5503j0j7&sourceid=chrome&ie=UTF-8


## erd
BurntSushi/erd: Translates a plain text description of a relational database schema to a graphical entity-relationship diagram.
https://github.com/BurntSushi/erd

## meme

ddrscott/convert_meme
https://github.com/ddrscott/convert_meme

Using Image Magick convert tool, to make a meme. | Weasy Tech- Look What I can do!
http://www.weasy.net/2015/04/using-image-magick-convert-to-make-meme.html

Add a meme generator extension � Issue #93 � asciidoctor/asciidoctor-diagram
https://github.com/asciidoctor/asciidoctor-diagram/issues/93

## mermaid
Mermaid Export - Visual Studio Marketplace
https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.mermaid-export

## nomnoml
nomnoml
http://nomnoml.com/

skanaar/nomnoml: The sassy UML diagram renderer
https://github.com/skanaar/nomnoml

## plantuml
call it from your script using command line
https://plantuml.com/command-line


## shaape
christiangoltz/shaape: Shaape is an ascii art to image converter designed to be used with asciidoc.
https://github.com/christiangoltz/shaape

## state machine cat
sverweij/state-machine-cat: write beautiful state charts
https://github.com/sverweij/state-machine-cat

## svgbob (rust)
What is the best way to use this on a system with node install but not rust � Issue #35 � ivanceras/svgbob
https://github.com/ivanceras/svgbob/issues/35

ivanceras/svgbob: Convert your ascii diagram scribbles into happy little SVG
https://github.com/ivanceras/svgbob

## symbolator
kevinpt/symbolator: HDL symbol generator
https://github.com/kevinpt/symbolator

## syntrax
Syntrax ? Syntrax 1.0 documentation
https://kevinpt.github.io/syntrax/

## umlet
UMLet - Free UML Tools for fast UML diagrams
https://www.umlet.com/

UMLetino - Free Online UML Tool for Fast UML Diagrams
http://www.umletino.com/

UMLetino - Free Online UML Tool for Fast UML Diagrams
http://www.umletino.com/umletino.html

## vega

https://vega.github.io/vega/data/flare.json
https://vega.github.io/vega/data/flare.json

## wavedrom
wavedrom/cli: CLI for WaveDrom
https://github.com/wavedrom/cli

PhantomJS - Scriptable Headless Browser
https://phantomjs.org/

Wavedrom support � Issue #89 � asciidoctor/asciidoctor-diagram
https://github.com/asciidoctor/asciidoctor-diagram/issues/89

wavedrom-cli - npm
https://www.npmjs.com/package/wavedrom-cli


Asciidoctor Diagram | Asciidoctor
https://asciidoctor.org/docs/asciidoctor-diagram/

mermaidjs/mermaid.cli: Development has been moved to https://github.com/mermaid-js/mermaid-cli
https://github.com/mermaidjs/mermaid.cli

christiangoltz/shaape: Shaape is an ascii art to image converter designed to be used with asciidoc.
https://github.com/christiangoltz/shaape

frankieliu/svgbob: Convert your ascii diagram scribbles into happy little SVG
https://github.com/frankieliu/svgbob

Syntrax ? Syntrax 1.0 documentation
https://kevinpt.github.io/syntrax/

UMLet.com - Screenshots
https://www.umlet.com/screenshots.htm

A Visualization Grammar | Vega
https://vega.github.io/vega/

How Vega Works / Vega / Observable
https://observablehq.com/@vega/how-vega-works

Streaming Data | Vega-Lite
https://vega.github.io/vega-lite/tutorials/streaming.html

WaveDrom - Digital timing diagram everywhere
https://wavedrom.com/

Chart (e.g. Vega, vegalite) support in preview � Issue #242 � asciidoctor/asciidoctor-vscode
https://github.com/asciidoctor/asciidoctor-vscode/issues/242

Kroki!
https://kroki.io/

Kroki!
https://kroki.io/#install

Install Kroki :: Kroki Documentation
https://docs.kroki.io/kroki/setup/install/

AsciiDoc - Visual Studio Marketplace
https://marketplace.visualstudio.com/items?itemName=asciidoctor.asciidoctor-vscode

Mogztter/asciidoctor-kroki: Asciidoctor.js extension to convert diagrams to images using Kroki!
https://github.com/Mogztter/asciidoctor-kroki

asciidoctor/asciidoctor.js: A JavaScript port of Asciidoctor, a modern implementation of AsciiDoc
https://github.com/asciidoctor/asciidoctor.js

Using kroki.io to support additional diagram types. � Issue #287 � asciidoctor/asciidoctor-intellij-plugin
https://github.com/asciidoctor/asciidoctor-intellij-plugin/issues/287

asciidoctor kroki plugin - Google Search
https://www.google.com/search?q=asciidoctor+kroki+plugin&rlz=1C1CHBF_enUS811US811&oq=asciidoctor+kroki+plugin&aqs=chrome..69i57j69i60.6093j0j7&sourceid=chrome&ie=UTF-8

Asciidoctor.js Live Preview - Chrome Web Store
https://chrome.google.com/webstore/detail/asciidoctorjs-live-previe/iaalpfgpbocpdfblpnhhgllgbdbchmia?hl=en

List of Asciidoctor Extensions | Asciidoctor
https://asciidoctor.org/docs/extensions/

Editing AsciiDoc with Live Preview | Asciidoctor
https://asciidoctor.org/docs/editing-asciidoc-with-live-preview/

Asciidoctor :: Discussion - Can asciidoctor-diagram be used with asciidoctor-pdf.js?
https://discuss.asciidoctor.org/Can-asciidoctor-diagram-be-used-with-asciidoctor-pdf-js-td7571.html

Kroki Plugin - Gridsome Asciidoc starter
https://gridsome-starter-asciidoc.netlify.app/kroki-plugin/

