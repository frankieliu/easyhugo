+++
categories = [""]
tags = [""]
title = "Ssh"
date = "2020-08-19T15:50:34-07:00"
draft = false
+++

* ssh keys
How does SSH find a local key? | DigitalOcean
https://www.digitalocean.com/community/questions/how-does-ssh-find-a-local-key

ssh uses .ssh/config to figure out which key-pair to use

* removing keys

This removes all keys from know_hosts file.

#+BEGIN_SRC bash
ssh-keygen -R hostname
#+END_SRC
