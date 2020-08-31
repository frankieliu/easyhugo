+++
categories = [""]
tags = [""]
title = "Vim"
date = "2020-08-18T16:59:35-07:00"
draft = false
+++

* Editing
** follow links
Ctrl-] : follow link
Ctrl-T : previous topic
Ctrl-O : older location
Ctrl-I : newer location
** add files from file

#+BEGIN_SRC vim 
:r tail -5 file.txt
:r head -5 file.txt
#+END_SRC

vim -- How to read range of lines from a file into current buffer - Stack Overflow
https://stackoverflow.com/questions/240244/vim-how-to-read-range-of-lines-from-a-file-into-current-buffer


** cmdline editing

If you need to do a lot of editing in the command line, it is best to use 

#+BEGIN_SRC vim
q:
#+END_SRC

bash - In VIM, how do you delete to end of line while in command mode :? - Super User
https://superuser.com/questions/846854/in-vim-how-do-you-delete-to-end-of-line-while-in-command-mode

** closing panes

#+BEGIN_SRC vim
Ctrl-W O
#+END_SRC

vim close all panes besides current one - Google Search
https://www.google.com/search?q=vim+close+all+panes+besides+current+one&oq=vim+close+all+panes+besides+current+one&aqs=chrome..69i57.11285j0j7&sourceid=chrome&ie=UTF-8

** tabs and buffers

editor - Using Vim's tabs like buffers - Stack Overflow
https://stackoverflow.com/questions/102384/using-vims-tabs-like-buffers

* Modes
** hugo

Too basic...

robertbasic/vim-hugo-helper: A small Vim plugin with a set of helpers for Hugo https://gohugo.io
https://github.com/robertbasic/vim-hugo-helper

** org mode for vim

jceb/vim-orgmode: Text outlining and task management for Vim based on Emacs' Org-Mode
https://github.com/jceb/vim-orgmode

vim-orgmode/orgguide.txt at master · jceb/vim-orgmode
https://github.com/jceb/vim-orgmode/blob/master/doc/orgguide.txt

** nerdtree
preservim/nerdtree: A tree explorer plugin for vim.
https://github.com/preservim/nerdtree
** markdown
plasticboy/vim-markdown: Markdown Vim Mode
https://github.com/plasticboy/vim-markdown#options
* plugins
** alternatives

Vim: So long Pathogen, hello native package loading | George Ornbo
https://shapeshed.com/vim-packages/

plugin system - What is the Vim8 package feature and how should I use it? - Vi and Vim Stack Exchange
https://vi.stackexchange.com/questions/9522/what-is-the-vim8-package-feature-and-how-should-i-use-it

** details
#+BEGIN_SRC bash

mkdir -p ~/.vim/pack/plugins/start
cd ~/.vim/pack/plugins/start

git submodule add <github> vim-<package name>
# optional:
# I like to prepend all package names with vim-

# if .zip or .vimball (:so %)
# need to move the files generated to
# a folder under ~/.vim/pack/plugins/start

cd vim-<package name>/docs # or doc
vim-helptags.sh .     # script is below
#+END_SRC

** generating tags

#+BEGIN_SRC vim
:helptags <directory>
#+END_SRC

Vim helptag generation - Stack Overflow
https://stackoverflow.com/questions/4180590/vim-helptag-generation

I wrote a little shell script to help with the tags

#+BEGIN_SRC bash
#!/bin/bash
vim -u NONE -c "helptags $$1" -c q
#+END_SRC

* keymappings
** summary
Use ~.vim/ftplugin/org.vim~ and add any mappings there

#+BEGIN_SRC vim
nnoremap <buffer> <localleader>np q:i! cd ../..; hugo new content/posts/.org<Esc>hhhi
#+END_SRC

Understand Vim Mappings and Create Your Own Shortcuts! | by Jonas B. Rossi |
vim drops | Medium
https://medium.com/vim-drops/understand-vim-mappings-and-create-your-own-shortcuts-f52ee4a6b8ed

** conditional mapping

key bindings - File Type dependent key mapping - Vi and Vim Stack Exchange
https://vi.stackexchange.com/questions/10664/file-type-dependent-key-mapping

key bindings - File Type dependent key mapping - Vi and Vim Stack Exchange
https://vi.stackexchange.com/questions/10664/file-type-dependent-key-mapping

How to set conditional mappings in VIM (ie: depending on the extension of a file)? - Stack Overflow
https://stackoverflow.com/questions/13673424/how-to-set-conditional-mappings-in-vim-ie-depending-on-the-extension-of-a-file

* shell command

It defaults to executing in directory where you started vim.

If you want it to follow the current buffer, then use

#+BEGIN_SRC vim
set autochdir
#+END_SRC

Executing a shell command in the parent directory - Vi and Vim Stack Exchange
https://vi.stackexchange.com/questions/13612/executing-a-shell-command-in-the-parent-directory

* leader

#+BEGIN_SRC vim
set Leader='\'
#+END_SRC

Can you have different localleaders for different Vim plugins? - Stack Overflow
https://stackoverflow.com/questions/12076227/can-you-have-different-localleaders-for-different-vim-plugins

Leaders / Learn Vimscript the Hard Way
https://learnvimscriptthehardway.stevelosh.com/chapters/06.html

vim - What is the <leader> in a .vimrc file? - Stack Overflow
https://stackoverflow.com/questions/1764263/what-is-the-leader-in-a-vimrc-file

* vimscript
Autoloading / Learn Vimscript the Hard Way
https://learnvimscriptthehardway.stevelosh.com/chapters/53.html

* filetype

Vim documentation: filetype
http://vimdoc.sourceforge.net/htmldoc/filetype.html

vim - How to get 'filetype' of a buffer specified by a number? - Stack Overflow
https://stackoverflow.com/questions/18714650/how-to-get-filetype-of-a-buffer-specified-by-a-number

* hidden write on change

set hidden : so that vim doesn't ask you to write out everytime you change
buffers

Vim buffer FAQ | Vim Tips Wiki | Fandom
https://vim.fandom.com/wiki/Vim_buffer_FAQ#hidden

* snippets

* save files

How to save a file with a new name in VIM while switching to that new buffer (and closing the original) - Stack Overflow
https://stackoverflow.com/questions/31092505/how-to-save-a-file-with-a-new-name-in-vim-while-switching-to-that-new-buffer-an

vi - Renaming the current file in Vim - Stack Overflow
https://stackoverflow.com/questions/1205286/renaming-the-current-file-in-vim

How to save as a new file and keep working on the original one in Vim? - Stack Overflow
https://stackoverflow.com/questions/4980168/how-to-save-as-a-new-file-and-keep-working-on-the-original-one-in-vim

* panes

How do I change the current split's width and height? - Vi and Vim Stack Exchange
https://vi.stackexchange.com/questions/514/how-do-i-change-the-current-splits-width-and-height

* clipboard

Pasting a huge amount of text into vim is slow? - Stack Overflow
https://stackoverflow.com/questions/18258561/pasting-a-huge-amount-of-text-into-vim-is-slow

Difference between vim-gtk and vim-gnome - Ask Ubuntu
https://askubuntu.com/questions/33260/difference-between-vim-gtk-and-vim-gnome

virtual machine - How can I get vim yank to clipboard ("*y) working? - Stack Overflow
https://stackoverflow.com/questions/40709985/how-can-i-get-vim-yank-to-clipboard-y-working

* vimscript

Preface / Learn Vimscript the Hard Way
https://learnvimscriptthehardway.stevelosh.com/preface.html

https://stevelosh.com
https://stevelosh.com/

* python

Running Python code in Vim - Stack Overflow
https://stackoverflow.com/questions/18948491/running-python-code-in-vim

# stay in visual mode

Vim: how to stay in visual mode after executing a command - Stack Overflow
https://stackoverflow.com/questions/4711079/vim-how-to-stay-in-visual-mode-after-executing-a-command

keyboard shortcuts - Vim visual mode, stay selected - Super User
https://superuser.com/questions/115038/vim-visual-mode-stay-selected

## how to do it
gv 
