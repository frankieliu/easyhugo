+++
categories = [""]
tags = [""]
title = "Flatpak"
date = "2020-08-22T13:48:14-07:00"
draft = false
+++

#+BEGIN_SRC sh
sudo aptitude install flatpak
sudo aptitude install gnome-software-plugin-flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.gnome.Extensions
flatpak run org.gnome.Extensions
#+END_SRC

Note that the directories 

'/var/lib/flatpak/exports/share'
'/home/adam/.local/share/flatpak/exports/share'

are not in the search path set by the XDG_DATA_DIRS environment variable, so
applications installed by Flatpak may not appear on your desktop until the
session is restarted.

Extensions—Linux Apps on Flathub
https://flathub.org/apps/details/org.gnome.Extensions

Flatpak—the future of application distribution
https://flatpak.org/setup/Ubuntu/

adam@quack:~$ flatpak install flathub org.gnome.Extensions

Note that the directories 

'/var/lib/flatpak/exports/share'
'/home/adam/.local/share/flatpak/exports/share'

are not in the search path set by the XDG_DATA_DIRS environment variable, so
applications installed by Flatpak may not appear on your desktop until the
session is restarted.

Looking for matches…
Required runtime for org.gnome.Extensions/x86_64/stable (runtime/org.gnome.Platform/x86_64/3.36) found in remote flathub
Do you want to install it? [Y/n]: Y

org.gnome.Extensions permissions:
        ID                                         Branch       Op       Remote        Download
 1. [✓] org.freedesktop.Platform.GL.default        19.08        i        flathub         88.6 MB / 89.1 MB
 2. [✓] org.freedesktop.Platform.VAAPI.Intel       19.08        i        flathub          8.6 MB / 8.7 MB
 3. [✓] org.freedesktop.Platform.openh264          2.0          i        flathub          1.5 MB / 1.5 MB
 4. [✓] org.gnome.Extensions.Locale                stable       i        flathub          6.2 kB / 85.6 kB
 5. [✓] org.gnome.Platform.Locale                  3.36         i        flathub         16.8 kB / 323.0 MB
 6. [✓] org.gtk.Gtk3theme.Yaru-dark                3.22         i        flathub        147.3 kB / 171.3 kB
 7. [\] org.gnome.Platform                         3.36         i        flathub         47.5 MB / 324.5 MB
 8. [ ] org.gnome.Extensions                       stable       i        flathub       < 61.0 kB

Installing 7/8… ████▏                 21%  6.8 MB/s  00:26

flatpack run org.gnome.extensions

