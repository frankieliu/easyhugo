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

# sshfs
sshfs net use delete - Google Search
https://www.google.com/search?rlz=1C1CHBF_enUS811US811&sxsrf=ALeKk03R40P1mYWMYzgBNub8hvyjdl1uPw%3A1600838837151&ei=tdxqX9TfCOaq0PEP3I-e8AE&q=sshfs+net+use+delete&oq=sshfs+net+use+delete&gs_lcp=CgZwc3ktYWIQAzIFCCEQoAEyBQghEKsCMgUIIRCrAjIFCCEQqwI6BAgAEEc6BggAEBYQHjoHCCEQChCgAVD64RBY4OgQYMnqEGgAcAF4AIAB1gGIAeQFkgEFNS4xLjGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwiUjuyxxf7rAhVmFTQIHdyHBx4Q4dUDCA0&uact=5
