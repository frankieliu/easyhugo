+++
categories = [""]
tags = [""]
title = "Wsl2"
date = "2020-08-18T14:11:59-07:00"
draft = false
+++

# x11

windows 10 - How to set up working X11 forwarding on WSL2 - Stack Overflow
https://stackoverflow.com/questions/61110603/how-to-set-up-working-x11-forwarding-on-wsl2

VcXsrv Windows X Server download | SourceForge.net
https://sourceforge.net/projects/vcxsrv/

Xming X Server for Windows - Fonts
http://www.straightrunning.com/XmingNotes/fonts.php

xcfe
https://www.reddit.com/r/bashonubuntuonwindows/comments/4warx0/xfce4_runs_flawlessly_over_vnc/

## opengl

190245 ? OpenGL apps report GLXBadContext X error on x86_64
https://bugzilla.redhat.com/show_bug.cgi?id=190245

sudo aptitude install ubuntu-desktop mesa-utils
export LIBGL_ALWAYS_INDIRECT=0

Does WSL support openGL? � Issue #2855 � microsoft/WSL
https://github.com/microsoft/WSL/issues/2855

# ubuntu

Detect ubuntu on wsl
https://stackoverflow.com/questions/38859145/detect-ubuntu-on-windows-vs-native-ubuntu-from-bash-script

Virtual machine ip
https://www.reddit.com/r/bashonubuntuonwindows/comments/c871g7/command_to_get_virtual_machine_ip_in_wsl2/

# interoperability with windows
## interop
Windows interoperability with Linux | Microsoft Docs
https://docs.microsoft.com/en-us/windows/wsl/interop
## selecting default browser

windows - WSL (Ubuntu): how to open localhost in browser from bash terminal - Stack Overflow
https://stackoverflow.com/questions/52691835/wsl-ubuntu-how-to-open-localhost-in-browser-from-bash-terminal

New Issue � wslutilities/wslu
https://github.com/wslutilities/wslu/issues/new/choose

## how to start edge

windows subsystem for linux - How do I start Edge from WSL2? - Stack Overflow
https://stackoverflow.com/questions/61686075/how-do-i-start-edge-from-wsl2

How To Launch Microsoft Edge from Run or Command Prompt - Edge Talk
https://edgetalk.net/how-to-launch-microsoft-edge-from-run-or-command-prompt/

## powershell

powershell.exe -F '<powershell script>.ps1'
Note that you need to run explorer.exe .
So that the network share will open up.

Calling a PowerShell Script from WSL
https://www.raymondcamden.com/2017/09/25/calling-a-powershell-script-from-wsl

Running a command as Administrator using PowerShell? - Stack Overflow
https://stackoverflow.com/questions/7690994/running-a-command-as-administrator-using-powershell

# ssh

Missing the proxy step

SSH on Windows Subsystem for Linux (WSL) | Illuminia Studios
https://www.illuminiastudios.com/dev-diaries/ssh-on-windows-subsystem-for-linux/

Windows interoperability with Linux | Microsoft Docs
https://docs.microsoft.com/en-us/windows/wsl/interop

SSH-ing into a Windows WSL Linux Subsystem � Jeet Sukumaran
https://jeetblogs.org/post/sshing-into-a-windows-wsl-linux-subsystem/

Linux'izing your Windows PC into a dev machine ? Part 1 | cepa.io
https://cepa.io/2018/02/10/linuxizing-your-windows-pc-part1/

Linux'izing your Windows PC into a dev machine ? Part 2 | cepa.io
https://cepa.io/2018/02/20/linuxizing-your-windows-pc-part2/

## best of the lot

How to SSH into WSL2 on Windows 10 from an external machine - Scott Hanselman
https://www.hanselman.com/blog/HowToSSHIntoWSL2OnWindows10FromAnExternalMachine.aspx

THE EASY WAY how to SSH into Bash and WSL2 on Windows 10 from an external machine - Scott Hanselman
https://www.hanselman.com/blog/THEEASYWAYHowToSSHIntoBashAndWSL2OnWindows10FromAnExternalMachine.aspx

## hyper-v

hyper v - ubuntu under windows subsystem for linux 2 (wsl2) has no internet access - Stack Overflow
https://stackoverflow.com/questions/62406362/ubuntu-under-windows-subsystem-for-linux-2-wsl2-has-no-internet-access

## forwarding port for ssh

### install

$ sudo apt install openssh-server

or if installed already

$ dpkg --reconfigure openssh-server

### sshd config

Using port 2222

$ sudo vim /etc/ssh/sshd_config

```
Port 2222
#AddressFamily any
ListenAddress 0.0.0.0
#ListenAddress ::
```

$ service ssh start


### forward ports to wsl

Use ip addr to find out the address of wsl

netsh interface portproxy add v4tov4 listenaddress=0.0.0.0 listenport=2222 connectaddress=172.23.129.80 connectport=2222

### open the firewall

netsh advfirewall firewall add rule name=?Open Port 2222 for WSL2? dir=in action=allow protocol=TCP localport=2222

netsh interface portproxy show v4tov4

netsh int portproxy reset all

### automated script

Since the connectaddress does change, might want to script it:

~/bin/powershell-proxy.ps1

# connection to outside

sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'
sudo bash -c 'echo "nameserver 8.8.4.4" >> /etc/resolv.conf'

Can not connect to internet in WSL 2 � Issue #4275 � microsoft/WSL
https://github.com/microsoft/WSL/issues/4275

# from windows to wsl

$ explorer.exe .

This will open explorer to the location

powershell> cd \\ws$\Ubuntu\home\user\whatever 

# windows address

$ ipconfig.exe

