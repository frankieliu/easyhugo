+++
categories = [""]
tags = [""]
title = "Helpful Resources"
date = "2020-08-17T19:39:41-07:00"
draft = false
+++

* ox-hugo
https://raw.githubusercontent.com/kaushalmodi/ox-hugo/master/test/site/content-org/all-posts.org

* image-size
~#+attr_ORG: :width 1200~
~[[file:/path/to/an/image.png]]~

https://llazarek.com/2018/10/images-in-org-mode.html

* sample svg
https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/
https://www.w3schools.com/graphics/svg_examples.asp

* css
ananke:

This is just a [params]
custom_css = ["file.css", "file2.css"]

https://discourse.gohugo.io/t/where-do-we-tell-hugo-about-our-css/619
This is also in ananke's readme

* how org mode is parsed
https://github.com/niklasfasching/go-org/tree/master/org

* emacs easy hugo
https://github.com/masasam/emacs-easy-hugo/blob/master/easy-hugo.el
Author: Masashi Miyaura

* using org mode in hugo
https://willschenk.com/articles/2019/using_org_mode_in_hugo/
has about short-codes for images

* mathjax
https://discourse.gohugo.io/t/use-goldmark-mathjax-extension/25721/3

this seems outdated.  I chose to just add the header to layout/_default/baseof.html

* setting markdown parser for hugo
https://gohugo.io/getting-started/configuration-markup/

* setting this up for hugo is not trivial
https://github.com/litao91/goldmark-mathjax

* pretty old site
https://bwaycer.github.io/hugo_tutorial.hugo/tutorials/mathjax/

* setting up org mode for hugo
https://github.com/masasam/emacs-easy-hugo

add the following:
archetypes/default.org
+++
categories = [""]
tags = [""]
title = "{{ replace .TranslationBaseName "-" " " | title }}"
date = "{{ .Date }}"
draft = false
+++

* some other hugo.el
based on octopress.el

https://blog.aaronbieber.com/2019/12/10/introducing-hugo-el.html

* a vote for easy-hugo
https://blog.aaronbieber.com/2019/12/10/introducing-hugo-el.html

* use this to setup mathjax in hugo
https://geoffruddock.com/math-typesetting-in-hugo/

‹ Geoff RuddockAbout | Github | Instagram
Render LaTeX math expressions in Hugo with MathJax 3
FEB 04, 2020
 # javascript# latex
This blog runs on Hugo, a publishing framework which processes markdown text files into static web assets which can be conveniently hosted on a server without a database. It is great for a number of reasons (speed, simplicity) but one area where I find it lacking is in its support for math typesetting.

Typically, you embed a javascript library such as MathJax or KaTeX by adding a line of HTML to your website template. While the page is loading in a visitor’s browser, the library processes text enclosed in dollar signs and, renders it as LaTeX and replaces the contents of the page. The problem is that the initial page contents have already been processed by Hugo’s markdown engine before the page even loads. The markdown parser interprets underscores (_) as italics, and so it removes them and wraps the enclosed text in the appropriate HTML tags. However the underscore is frequently used in LaTeX for subscript. E.g. x_1 gets rendered to . So if your page contains multiple underscores, your LaTeX code will be broken before the page even starts loading.

The typical solution
The best general approach seems to be this one:

Configure MathJax to attempt to typeset within <code> blocks (which it skips by default)
Add a class has-jax to your CSS which undoes whatever code-specific formatting your website uses.
Add a pseudo-callback to MathJax which waits until typesetting is complete, then runs a piece of javascript to add the above class to all the parent element of all MathJax elements.
The page above includes all the necessary code snippets to implement this for MathJax 2.x. But MathJax 2 is a lot slower than MathJax 3 or KaTeX. I tried simply swapping out the src for the newer version, but this did not work, because it seem that MathJax 3 uses an entirely new syntax than 2.x.

MathJax v3 is a complete rewrite of MathJax from the ground up, and so its internal structure is quite different from that of version 2. That means MathJax v3 is not a drop-in replacement for MathJax v2, and upgrading to version 3 takes some adjustment to your web pages. 1

Adapted for MathJax 3
The code below is a modification of Doswa’s code which loads MathJax 3 instead of 2.x.

Create a file in your theme directory layouts/partials/mathjax_support.html as the following:

<script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$','$$'], ['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    }
  };

  window.addEventListener('load', (event) => {
      document.querySelectorAll("mjx-container").forEach(function(x){
        x.parentElement.classList += 'has-jax'})
    });

</script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
Next, open the file layouts/partials/header.html and add the following line just before the closing </head> tag:

{{ partial "mathjax_support.html" . }}
Finally, add the following lines to your CSS file. You may need to tinker with the contents here depending on your theme, these are just the settings which worked for me.

code.has-jax {
    -webkit-font-smoothing: antialiased;
    background: inherit !important;
    border: none !important;
    font-size: 100%;
}
Other approaches I considered
Here are a few other solutions I looked into, but ultimately decided not to adopt as a final solution.

Manually escape all problematic characters
You could manually escape all underscore or backslash characters with an additional backslash. This works if you rarely use LaTeX and just need a specific expression to render correctly, but it will get quickly annoying if your posts include multiple math expressions. Besides breaking rendering of LaTeX in your markdown editor, it also makes the raw code difficult to read.

Use MMark markdown processing engine
Hugo lets you specify which processing engine to use to convert markdown during the build process. There is one engine—MMark—which handles LaTeX well and so makes the above modifications entirely unnecessary. This was the approach previously officially recommended in Hugo documentation.

However according to the current docs, MMark is deprecated and will be removed in a future release. It may work for a while still, but it doesn’t make sense for me to adopt a solution that is already deprecated.

Goldmark engine with MathJax extension
The new default markdown engine used by Hugo is called goldmark. There is an extension goldmark-mathjax that seems to do exactly what we want. But as of Feb 2020, a PR to merge it into hugo for relying on unacceptable dependencies. So for the time being, this approach would require forking Hugo and modifying it to use this extension. I have no real experience with Go, so I decided to avoid this approach for now.

KaTeX math shortcode
If you are willing to use KaTeX instead of MathJax, then this approach may be a good option. But it is cumbersome to wrap all your inline math equations in a shortcode. It is already annoying that the backtick approach breaks in-editor latex rendering in most editors, but at least the raw latex code is displayed in monospace text, and the backticks do not take up much screen space. For example, to render  you would need to type {{ < math > }}x=1{{ </math> }}, which makes it even more difficult to read and edit content in your markdown editor. I didn’t find the speed difference between KaTeX and Mathjax 3 to be sufficient to justify the decreased editing experience.

MathJax docs – Upgrading from v2 to v3 ↩︎

👋   Hi, I’m Geoff.

I work at the intersection of data science and product. I help teams to build narratives around user behaviour at scale using quantitative data. These are some of my notes around work, personal projects, and general learning. I write primarily as a way of clarifying my own thinking, but I hope you’ll find some value in here as well!

* code snippets
https://discourse.gohugo.io/t/best-way-to-include-code-snippets/5676

* static in hugo

it is not easy, use relative paths.
../../images if your are in posts/

/images doesn't work because of the base-url

../../images works without having to canonifyURLs

* setting up for namecheap
URL Redirect Record pgm http://www.frankliu.org/pgm
URL Redirect Record blog http://www.frankliu.org/hugo
A Record @ 185.199.108.153
A Record @ 185.199.109.153
CNAME Record www frankieliu.github.io


https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages

https://medium.com/@shushugah/2-customs-domains-for-2-github-pages-a8a9e77d3e57

* setting apex

https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site

Not exactly how to set that up
https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain
