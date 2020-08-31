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
