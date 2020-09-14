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

windows - WSL (Ubuntu): how to open localhost in browser from bash terminal - Stack Overflow
https://stackoverflow.com/questions/52691835/wsl-ubuntu-how-to-open-localhost-in-browser-from-bash-terminal

windows - WSL (Ubuntu): how to open localhost in browser from bash terminal - Stack Overflow
https://stackoverflow.com/questions/52691835/wsl-ubuntu-how-to-open-localhost-in-browser-from-bash-terminal

how to add a desktop file for wslview - Google Search
https://www.google.com/search?q=how+to+add+a+desktop+file+for+wslview&rlz=1C1CHBF_enUS811US811&oq=how+to+add+a+desktop+file+for+wslview&aqs=chrome..69i57.6872j0j7&sourceid=chrome&ie=UTF-8

Is there a way to open a file in a browser from WSL? e.g. the command `open foo.html` in any Unix : bashonubuntuonwindows
https://www.reddit.com/r/bashonubuntuonwindows/comments/8teo9i/is_there_a_way_to_open_a_file_in_a_browser_from/

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

# speeding up compilation

1. need to make an exception to the ubuntu folder

   So, first get the UbuntuOnLinux (or your distro of choice) installation path
   going to %USERPROFILE%\AppData\Local\Packages and lookup for something like
   CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc.

   Copy the entire path from Explorer.exe address bar, then go to:

   Settings > Update & Security > Windows Defender > Open Windows Defender
   Secutiry Central > Protection Against Viruses & Threats > Advanced Config? >
   Exclusions > Add or Remove > Add > Folder and finally: paste the previous
   copied path.

1. need to make an exception to the binaries (process) from ubuntu
   1. use the script from noelbundick 
      https://gist.github.com/noelbundick/9c804a710eb76e1d6a234b14abf42a52
   1. this is referenced from the reddit

1. turn off real time protection
   1. win-r gpedit.msc
   1. On your Group Policy management machine, open the Group Policy Management
      Console, right-click the Group Policy Object you want to configure and
      click Edit.
   1. In the Group Policy Management Editor go to Computer configuration.
   1. Click Policies then Administrative templates.
   1. Expand the tree to Windows components > Windows Defender Antivirus >
      Real-time protection.
   1. Double-click the Turn off real-time protection setting and set the option
      to Enabled. Click OK.

Exclude WSL installations from Windows Defender realtime protection
https://gist.github.com/noelbundick/9c804a710eb76e1d6a234b14abf42a52

Speeding up WSL I/O up than 5x fast + saving a lot of battery life & CPU usage | by Leandro Cavalcante (@leandrocrs) | Medium
https://medium.com/@leandrocrs/speeding-up-wsl-i-o-up-than-5x-fast-saving-a-lot-of-battery-life-cpu-usage-c3537dd03c74

Windows Defender/Anti-malware Causing Performance Issues after CU update � Issue #1932 � microsoft/WSL
https://github.com/Microsoft/WSL/issues/1932

Slow compilation and file I/O : bashonubuntuonwindows
https://www.reddit.com/r/bashonubuntuonwindows/comments/8adfbm/slow_compilation_and_file_io/dwz6sn8/

Building GCC 10 on Windows Subsystem for Linux | Solarian Programmer
https://solarianprogrammer.com/2017/05/04/building-gcc-wsl-windows-subsystem-linux/

wsl disable windows defender - Google Search
https://www.google.com/search?q=wsl+disable+windows+defender&rlz=1C1CHBF_enUS811US811&oq=wsl+disable+windows+defender&aqs=chrome..69i57.6624j0j7&sourceid=chrome&ie=UTF-8

antivirus - How unwise is it to exclude WSL from Windows Defender? - Information Security Stack Exchange
https://security.stackexchange.com/questions/219553/how-unwise-is-it-to-exclude-wsl-from-windows-defender

Optimizing WSL | Matthew Carew
https://matthewcarew.com/optimizing-wsl/

WSL and Windows Defender � Issue #3435 � microsoft/WSL
https://github.com/microsoft/WSL/issues/3435

Windows Defender/Anti-malware Causing Performance Issues after CU update � Issue #1932 � microsoft/WSL
https://github.com/microsoft/WSL/issues/1932

Microsoft Developer: You Still Should Have Anti-Virus With Windows Subsystem For Linux - Phoronix
https://www.phoronix.com/scan.php?page=news_item&px=Windows-Defender-WSL-Needed

Improving Windows Subsystem for Linux WSL by 500% - Minutes to Seconds
https://www.cicoria.com/improving-windows-subsystem-for-linux-wsl-by-500-minutes-to-seconds/

Very slow performance - is this normal for WSL? : bashonubuntuonwindows
https://www.reddit.com/r/bashonubuntuonwindows/comments/a23nul/very_slow_performance_is_this_normal_for_wsl/

Speedup WSL by disabling Windows Real-time protection
https://leandrw.com.br/speedup-wsl-by-disabling-windows-real-time-protection/#:~:text=Click%20Policies%20then%20Administrative%20templates,Click%20OK

Enable and configure Microsoft Defender Antivirus protection capabilities - Windows security | Microsoft Docs
https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-antivirus/configure-real-time-protection-microsoft-defender-antivirus

Epic Development Environment using Windows Subsystem for Linux | by John Woodruff | Medium
https://medium.com/@johnbwoodruff/epic-dev-environment-with-wsl-dc81e234ae61

Slow compilation and file I/O : bashonubuntuonwindows
https://www.reddit.com/r/bashonubuntuonwindows/comments/8adfbm/slow_compilation_and_file_io/dwz6sn8/

Building GCC 10 on Windows Subsystem for Linux | Solarian Programmer
https://solarianprogrammer.com/2017/05/04/building-gcc-wsl-windows-subsystem-linux/

Speeding up WSL I/O up than 5x fast + saving a lot of battery life & CPU usage | by Leandro Cavalcante (@leandrocrs) | Medium
https://medium.com/@leandrocrs/speeding-up-wsl-i-o-up-than-5x-fast-saving-a-lot-of-battery-life-cpu-usage-c3537dd03c74

Speedup WSL by disabling Windows Real-time protection
https://leandrw.com.br/speedup-wsl-by-disabling-windows-real-time-protection/#:~:text=Click%20Policies%20then%20Administrative%20templates,Click%20OK.

Working with Group Policy Objects | Microsoft Docs
https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731212(v=ws.11)?redirectedfrom=MSDN

wsl disable windows defender - Google Search
https://www.google.com/search?q=wsl+disable+windows+defender&rlz=1C1CHBF_enUS811US811&oq=wsl+disable+windows+defender&aqs=chrome..69i57.6624j0j7&sourceid=chrome&ie=UTF-8

Exclude WSL installations from Windows Defender realtime protection
https://gist.github.com/frankieliu/3ca0e35f3d5f3e4b67bbb046ba85c4a2

# jupyter

Jupyter Notebook auto launch browser from WSL
https://www.cicoria.com/jupyter-notebook-launch-browser-from-wsl/

# issues
Issues � microsoft/WSL
https://github.com/microsoft/WSL/issues

# web server localhost problem

How to access to the web server which running on WSL(Windows Subsystem for Linux) from local network - Stack Overflow
https://stackoverflow.com/questions/49835559/how-to-access-to-the-web-server-which-running-on-wslwindows-subsystem-for-linux

Cannot use localhost to access a react-app running in WSL2 � Issue #4885 � microsoft/WSL
https://github.com/microsoft/WSL/issues/4885

