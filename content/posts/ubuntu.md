+++
categories = [""]
tags = [""]
title = "Ubuntu"
date = "2020-08-23T18:15:16-07:00"
draft = false
+++

13 Keyboard Shortcut Every Ubuntu 18.04 User Should Know - It's FOSS
https://itsfoss.com/ubuntu-shortcuts/

# icon problem
System Settings messed up and crashing [SOLVED] / Newbie Corner / Arch Linux Forums
https://bbs.archlinux.org/viewtopic.php?id=235871

Bug #1672027 “Invalid Context= “stock” line for icon theme: " : Bugs : kmines package : Ubuntu
https://bugs.launchpad.net/ubuntu/+source/kmines/+bug/1672027

bash show theme errors · Issue #322 · PapirusDevelopmentTeam/papirus-icon-theme
https://github.com/PapirusDevelopmentTeam/papirus-icon-theme/issues/322

windows - WSL (Ubuntu): how to open localhost in browser from bash terminal - Stack Overflow
https://stackoverflow.com/questions/52691835/wsl-ubuntu-how-to-open-localhost-in-browser-from-bash-terminal

# vnc

Problem
- localhost is yes by default
- set to -localhost no

networking - TigerVNCViewer: unable to connect to socket: Connection Refused (10061) - Ask Ubuntu
https://askubuntu.com/questions/1209147/tigervncviewer-unable-to-connect-to-socket-connection-refused-10061

# icons

Desktop files: putting your application in the desktop menus
https://developer.gnome.org/integration-guide/stable/desktop-files.html.en

Installing icons
https://developer.gnome.org/integration-guide/stable/icons.html.en

how to find icons for firefox - Google Search
https://www.google.com/search?q=how+to+find+icons+for+firefox&rlz=1C1CHBF_enUS811US811&oq=how+to+find+icons+for+firefox&aqs=chrome..69i57.3542j0j7&sourceid=chrome&ie=UTF-8

# get your ip address

ip addr

How To Check IP Address on Ubuntu 18.04 (Desktop) - TecAdmin
https://tecadmin.net/check-ip-address-ubuntu-18-04-desktop/#:~:text=Press%20CTRL%20%2B%20ALT%20%2B%20T%20to,addresses%20configured%20on%20your%20system.

# firefox vs chrome problem xdg- exo- mime

xdg-settings
exo-preferred-applications
update-alternatives --config x-www-browser
.local/share/applicatoins/mimeapps.list
.share/xfce4/helpers/custom-WebBrowser.desktop
.config/mimeapps.list

-- put desktop files here
.local/share/applications/
/usr/share/applications/

I have tried to change all of these to point wslview but firefox still gets picked up somehow.
In the end resorted to removing firefox.

