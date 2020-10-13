+++
categories = [""]
tags = [""]
title = "Apps"
date = "2020-08-21T12:11:09-07:00"
draft = false
+++

# Screen capture

maim

# File diff

meld

# Image viewer

geeqie

# Sound recorder

audio-recorder

# Screen recorder

simplescreenrecorder

# Draw on screen

gromit-mpx
drawOnYouScreen (gnome-extension)

# Json processing

jq

# Large file editor

joe

# Hex editor

mc (midnight commander)

# Animated gif

## ffmpeg and convert

```bash
ffmpeg -ss 01:44 -i Linus-Torvalds-Nvidia.mp4 -t 00:04 Linus-Torvalds-Nvidia_%03d.png
convert -delay 100 -loop 0 *.jpeg animatedGIF.gif
```

## vlc and gimp

vlc : tools/preferences/video/filter/scene filter

gimp: open as layers (select all images), crop, image->scale 30dpi 400px, filters->animation

## ffmpeg directly

ffmpeg -i input.mp4 -filter_complex "[0:v] palettegen" palette.png
create a palette [0:v] 0: first stream, v: video

ffmpeg -i input.mp4 -i palette.png -filter_complex "[0:v][1:v] paletteuse"
 -r 10 output.gif

## recording directly

byzanz allows you to record a animated gif
$ byzanz-record --duration=15 --x=100 --y=200 --width=600 --height=800 out.gif

# get rectangle
xdotool
$ xdotool getwindowfocus getwindowgeometry -shell
slop

# peek capture screen to animated gif
$ sudo add-apt-repository ppa:peek-developers/stable
$ sudo apt update
$ sudo apt install peek

# animated gifs
https://github.com/lettier/gifcurry

snap install gifcurry
sudo snap connect gifcurry:removable-media
gifcurry

# screenkey
https://www.omgubuntu.co.uk/screenkey-show-key-presses-screen-ubuntu
screenkey

# UEFI

EasyUEFI Enterprise v4.0 + Crack (download torrent) - TPB
https://tpb.party/torrent/36442419/EasyUEFI_Enterprise_v4.0___Crack

Manage EFI/UEFI boot options & Manage EFI System Partitions & Fix EFI/UEFI boot issues the easy way!
https://www.easyuefi.com/index-us.html

# Window activation

Download | The Official KMSpico Site
https://www.getkmspico.com/download

# crop pdf

briss download | SourceForge.net
https://sourceforge.net/projects/briss/

# creating djvu file

jpeg - convert serveral image files to a single djvu file - Super User
https://superuser.com/questions/519767/convert-serveral-image-files-to-a-single-djvu-file

Command line batch image cropping tool - Stack Overflow
https://stackoverflow.com/questions/1893244/command-line-batch-image-cropping-tool

How To Install XnConvert In Ubuntu | Unixmen
https://www.unixmen.com/install-xnconvert-ubuntu/

Popular Tools for easily Cropping and Resizing images in Ubuntu
https://vitux.com/popular-tools-for-easily-cropping-and-resizing-images-in-ubuntu/#:~:text=Using%20ImageMagick&text=The%20graphical%20menu%20of%20the,the%20command%20line%20as%20well.

standard image sizes - Google Search
https://www.google.com/search?q=standard+image+sizes&sxsrf=ALeKk01DT74aLx7x1Ii7NVrHyg8WwT895Q:1601987196986&tbm=isch&source=iu&ictx=1&fir=Zyg1sWds4oLWdM%252CpD48AMDrN0BulM%252C_&vet=1&usg=AI4_-kQQUhPd8KMp2Adhh2KIj52LEir-hw&sa=X&ved=2ahUKEwjPkL6u-5_sAhWHq54KHXmSBo0Q_h16BAgUEAU#imgrc=Zyg1sWds4oLWdM

How insert the outline (the bookmarks) into DjVu - Ebooks Stack Exchange
https://ebooks.stackexchange.com/questions/7866/how-insert-the-outline-the-bookmarks-into-djvu

HandyOutliner for DjVu / PDF
http://handyoutlinerfo.sourceforge.net/

HandyOutliner for DjVu / PDF download | SourceForge.net
https://sourceforge.net/projects/handyoutlinerfo/#screenshots

HandyOutliner for DjVu / PDF download | SourceForge.net
https://sourceforge.net/projects/handyoutlinerfo/

Comparison of optical character recognition software - Wikipedia
https://en.wikipedia.org/wiki/Comparison_of_optical_character_recognition_software

Help:DjVu files - Wikisource, the free online library
https://en.wikisource.org/wiki/Help:DjVu_files

ocrodjvu — Jakub Wilk's software
http://jwilk.net/software/ocrodjvu

Ubuntu Manpage: ocrodjvu - OCR for DjVu files
http://manpages.ubuntu.com/manpages/bionic/man1/ocrodjvu.1.html

