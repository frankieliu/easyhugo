+++
categories = [""]
tags = [""]
title = "Make"
date = "2020-08-18T14:14:01-07:00"
draft = false
+++

# Getting the makefile directory

gnu make - How to get current relative directory of your Makefile? - Stack Overflow
https://stackoverflow.com/questions/18136918/how-to-get-current-relative-directory-of-your-makefile

shell - How can I use Bash syntax in Makefile targets? - Stack Overflow
https://stackoverflow.com/questions/589276/how-can-i-use-bash-syntax-in-makefile-targets

# Passing arguments

makefile - Passing additional variables from command line to make - Stack Overflow
https://stackoverflow.com/questions/2826029/passing-additional-variables-from-command-line-to-make

# bash syntax in makefile

shell - How can I use Bash syntax in Makefile targets? - Stack Overflow
https://stackoverflow.com/questions/589276/how-can-i-use-bash-syntax-in-makefile-targets

# conda activate in makefile

python - Makefile can't use `conda activate` - Stack Overflow
https:/stackpecify bash in order for conda activate to work.

#+BEGIN_SRC makefile
SHELL=/bin/bash
# Note that the extra activate is needed to ensure that the activate floats env to the front of PATH
CONDA_ACTIVATE=source $$(conda info --base)/etc/profile.d/conda.sh ; conda activate ; conda activate

py3build:
    ($(CONDA_ACTIVATE) py3.6 ; python setup.py build )verflow.com/questions/53382383/makefile-cant-use-conda-activate
#+END_SRC

# ONESHELL

``` makefile
.ONESHELL:
foo : bar/lose
        cd $(@D)
        gobble $(@F) > ../$@
```

One Shell (GNU make)
https://www.gnu.org/software/make/manual/html_node/One-Shell.html#One-Shell

# bash in make

shell - How can I use Bash syntax in Makefile targets? - Stack Overflow
https://stackoverflow.com/questions/589276/how-can-i-use-bash-syntax-in-makefile-targets

# passing arguments
parameters - How to pass argument to Makefile from command line? - Stack Overflow
https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line/6273809

makefile - Passing arguments to "make run" - Stack Overflow
https://stackoverflow.com/questions/2214575/passing-arguments-to-make-run
