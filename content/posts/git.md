+++
categories = [""]
tags = [""]
title = "Git"
date = "2020-08-18T14:09:35-07:00"
draft = false
+++

# add and commmit in one line
Git add and commit in one command - Stack Overflow
https://stackoverflow.com/questions/4298960/git-add-and-commit-in-one-command

# Save username and passwords
credentials - How to save username and password in GIT [GitExtension]? - Stack Overflow
https://stackoverflow.com/questions/35942754/how-to-save-username-and-password-in-git-gitextension

# Submodules

If you happen to clone a repo without doing a submodule add then you have
to do the following steps to get it right:

```bash
git rm --cached <submodule>
git rm -f <submodule>
git submodule add <submodule>
git add .
git commit -m""
git push
```

On the receiving side

```bash
git pull
cd <pathto>/<submodule>
git submodule init <submodule>
git submodule update
```

```bash
git submodule update --init             # from root of repo (update dep)
git pull --recurse-submodules           # pull stuff for submodule
git submodule update --recursive        # if you forget --recursive on clone
git submodule update --init --recursive # if submodules within submodules
```

Using submodules in Git - Tutorial
https://www.vogella.com/tutorials/GitSubmodules/article.html

Pull git submodules after cloning project from GitHub - Stack Overflow
https://stackoverflow.com/questions/16773642/pull-git-submodules-after-cloning-project-from-github

Issue with adding common code as git submodule: "already exists in the index" - Stack Overflow
https://stackoverflow.com/questions/12898278/issue-with-adding-common-code-as-git-submodule-already-exists-in-the-index

## delete submodule

How effectively delete a git submodule.
https://gist.github.com/myusuf3/7f645819ded92bda6677

## move submodule

How do I move an existing Git submodule within a Git repository? - Stack Overflow
https://stackoverflow.com/questions/4604486/how-do-i-move-an-existing-git-submodule-within-a-git-repository

How do I move an existing Git submodule within a Git repository? - Stack Overflow
https://stackoverflow.com/questions/4604486/how-do-i-move-an-existing-git-submodule-within-a-git-repository/24767348#24767348


# downloading individual files
git - Download single files from GitHub - Stack Overflow
https://stackoverflow.com/questions/4604663/download-single-files-from-github

The Ultimate Wget Download Guide With 15 Awesome Examples
https://www.thegeekstuff.com/2009/09/the-ultimate-wget-download-guide-with-15-awesome-examples/

# hub

hub-pull-request(1) - Create a GitHub Pull Request.
https://hub.github.com/hub-pull-request.1.html

hub · an extension to command-line git
https://hub.github.com/

```bash
  # clone a repo
  hub clone octocat/Spoon-Knife

  cd Spoon-Knife

  # create a topic branch
  git checkout -b feature

  # make some changes...
  git commit -am "done with feature"

  # It's time to fork the repo!
  hub fork --remote-name origin
  → (forking repo on GitHub...)
  → git remote add origin git@github.com:YOUR_USER/Spoon-Knife.git

  # push the changes to your new remote
  git push origin feature

  # check the CI status for this branch
  hub ci-status --verbose

  # open a pull request for the branch you've just pushed
  hub pull-request
  → (opens a text editor for your pull request message)
```

# diff branches

Viewing Differences Between Branches | Git Branches and Merging | Treehouse
https://teamtreehouse.com/library/viewing-differences-between-branches
