+++
categories = [""]
tags = [""]
title = "Windows"
date = "2020-09-04T16:05:45-07:00"
draft = false
+++

# net

## firewall network settings

Windows + R, wf.msc

## ip address

ipconfig.exe

More convoluted way:
Control Panel/Network and Internet/Network and Sharing Center/Change adapter settings/Wi-Fi

or

Control Panel/Network and Internet/Network Connections

How to find your device IP address on Windows 10 ? Pureinfotech
https://pureinfotech.com/find-ip-address-windows-10/

# shortcuts

## group permissions

Windows + R, gpedit.msc

## powershell as admin

Windows (search), Powershell, Right click admin
Windows + R (run), powershell, Start-Process powershell -Verb RunAs
Windows + X (x menu), powershell as admin
Crtl-Shift-Esc (task manager), Alt-f, n (new task), powershell, tab, space, enter
Start, scroll, windows powershell, powershell adminn

5 Ways to Run Powershell as Administrator in Windows 10 | Password Recovery
https://www.top-password.com/blog/5-ways-to-run-powershell-as-administrator-in-windows-10/#:~:text=Press%20Windows%20%2B%20R%20keys%20together,rights%20of%20the%20current%20user.

## run

Windows + R

## creating a shortcut to a powershell script

Right click on desktop
Create a shortcut
powershell.exe -noexit -ExecutionPolicy Bypass -File \\wsl$\Ubuntu\home\adam\github\Admin\bin\powershell-proxy.ps1

## creating shortcut to network connections

Control Panel/Network and Sharing Center/Change adapter settings
On the address bar drag Network connections to the Desktop
For the WiFi icon drag to the the Desktop

# taskbar
4 Incredible Taskbar Customisation Tricks You Need to Know
https://www.crypticbutter.com/4-taskbar-customisation-tricks/

# screenshot
windows how to screen shot selected window - Google Search
https://www.google.com/search?q=windows+how+to+screen+shot+selected+window&rlz=1C1CHBF_enUS811US811&oq=windows+how+to+screen+shot+selected+window&aqs=chrome..69i57.12823j0j7&sourceid=chrome&ie=UTF-8

