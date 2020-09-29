+++
categories = [""]
tags = [""]
title = "Bash"
date = "2020-08-18T15:16:24-07:00"
draft = false
+++

# files
## mkdir

bash - Only mkdir if it does not exist - Stack Overflow
https://stackoverflow.com/questions/18622907/only-mkdir-if-it-does-not-exist

## stat -c

Shell Scripting: Check File Size ( Find File Size ) - nixCraft
https://www.cyberciti.biz/faq/bash-csh-sh-check-and-file-file-size/

## test -e for symlinks 

bash - Create symlink - overwrite if one exists - Unix & Linux Stack Exchange
https://unix.stackexchange.com/questions/207294/create-symlink-overwrite-if-one-exists/207296

How to Check if a File or Directory Exists in Bash | Linuxize
https://linuxize.com/post/bash-check-if-file-exists/

# commands
## aliases

Bash aliases you can?t live without | Opensource.com
https://opensource.com/article/19/7/bash-aliases

## addition and subtraction

scripting - how can I add (subtract, etc.) two numbers with bash? - Unix & Linux Stack Exchange
https://unix.stackexchange.com/questions/93029/how-can-i-add-subtract-etc-two-numbers-with-bash

## $?
terminal - Reusing output from last command in Bash - Stack Overflow
https://stackoverflow.com/questions/24283097/reusing-output-from-last-command-in-bash

Special Parameters (Bash Reference Manual)
https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html

Function and difference between $() and ${} in Makefile - Stack Overflow
https://stackoverflow.com/questions/19475037/function-and-difference-between-and-in-makefile/19476225

## history

Where is bash's history stored? - Unix & Linux Stack Exchange
https://unix.stackexchange.com/questions/145250/where-is-bashs-history-stored#:~:text=bash%20keeps%20it%20in%20working,bash%20starts%20or%20on%20request.&text=While%20running%2C%20the%20history%20is,%22%24%2D%22%20)%20is%20set.

command line - Bash history handling with multiple terminals - Ask Ubuntu
https://askubuntu.com/questions/80371/bash-history-handling-with-multiple-terminals

## which -a

bash - How can I find all copies of an executable name in my PATH? - Stack Overflow
https://stackoverflow.com/questions/17999715/how-can-i-find-all-copies-of-an-executable-name-in-my-path

## checksum and sha1

Linux and Unix sha1sum command tutorial with examples | George Ornbo
https://shapeshed.com/unix-sha1sum/

How to Calculate CRC Checksum in Linux using Cksum Command
https://www.thegeekstuff.com/2012/07/cksum-command-examples/

## pipe to shell

use cat |

shell - Pipe input into a script - Stack Overflow
https://stackoverflow.com/questions/19408649/pipe-input-into-a-script

## check if variable set

if [ -z ${var+x} ]; then echo hello; fi

shell - How to check if a variable is set in Bash? - Stack Overflow
https://stackoverflow.com/questions/3601515/how-to-check-if-a-variable-is-set-in-bash

## $@

bash argument for all command line arguments - Google Search
https://www.google.com/search?q=bash+argument+for+all+command+line+arguments&rlz=1C1CHBF_enUS811US811&oq=bash+argument+for+all+command+line+arguments&aqs=chrome..69i57.11101j0j7&sourceid=chrome&ie=UTF-8

## functions

Bash Functions | Linuxize
https://linuxize.com/post/bash-functions/#:~:text=Passing%20Arguments%20to%20Bash%20Functions,-To%20pass%20any&text=The%20passed%20parameters%20are%20%241,arguments%20passed%20to%20the%20function.

## conditionals

Bash If-else statement - TecAdmin
https://tecadmin.net/tutorial/bash-scripting/bash-if-else-statement/#:~:text=Bash%20if%20else%20Statment&text=Where%20execution%20of%20a%20block,is%20executed%2C%20which%20is%20optional.

## eval and exec

bash - What's the difference between eval and exec? - Unix & Linux Stack Exchange
https://unix.stackexchange.com/questions/296838/whats-the-difference-between-eval-and-exec

## wget

wget -r --no-parent

mirror - Is there a way to disable wget from getting files from parent directories to given depth? - Unix & Linux Stack Exchange
https://unix.stackexchange.com/questions/26890/is-there-a-way-to-disable-wget-from-getting-files-from-parent-directories-to-giv

# view

## tab in echo

Echo tab characters in bash script - Stack Overflow
https://stackoverflow.com/questions/525872/echo-tab-characters-in-bash-script

# text processing
## unique elements

```bash
sort <file> | uniq -u
```

bash - What is the difference between "sort -u" and "sort | uniq"? - Unix & Linux Stack Exchange
https://unix.stackexchange.com/questions/76049/what-is-the-difference-between-sort-u-and-sort-uniq

uniq - How to print only the unique lines in BASH? - Stack Overflow
https://stackoverflow.com/questions/23740545/how-to-print-only-the-unique-lines-in-bash

## cut

Linux and Unix cut command tutorial with examples | George Ornbo
https://shapeshed.com/unix-cut/

## remove duplicate paragraphs

text processing - How to remove duplicate paragraphs - Unix & Linux Stack Exchange
https://unix.stackexchange.com/questions/609765/how-to-remove-duplicate-paragraphs/609771#609771

linux - sed paragraph tags - Unix & Linux Stack Exchange
https://unix.stackexchange.com/questions/364112/sed-paragraph-tags

text processing - Delete duplicate lines pairwise? - Unix & Linux Stack Exchange
https://unix.stackexchange.com/questions/277365/delete-duplicate-lines-pairwise

bash - Remove paragraph from file - Unix & Linux Stack Exchange
https://unix.stackexchange.com/questions/192465/remove-paragraph-from-file

uniq remove duplicate paragraphs - Google Search
https://www.google.com/search?q=uniq+remove+duplicate+paragraphs&rlz=1C1CHBF_enUS811US811&oq=uniq+remove+duplicate+paragraphs&aqs=chrome..69i57.7557j0j7&sourceid=chrome&ie=UTF-8

## awk

### record

awk record - Google Search
https://www.google.com/search?rlz=1C1CHBF_enUS811US811&sxsrf=ALeKk02lPw3TxCa19CUXp6mYRUtjOf9iTQ%3A1600299141039&ei=haBiX4_YAcPa9APKxKWoDA&q=awk+record&oq=awk+record&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BAgjECc6BggAEBYQHjoHCAAQFBCHAjoFCAAQkQI6BAgAEEM6BwgAELEDEENQrqEBWL62AWCytwFoAnABeACAAWWIAd4RkgEEMjcuMZgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwjPrtfu6u7rAhVDLX0KHUpiCcUQ4dUDCA0&uact=5

### remove duplicate lines

remove duplicate lines using awk
https://www.unix.com/shell-programming-and-scripting/153131-remove-duplicate-lines-using-awk.html

### iterate over records

Awk: Iterate over all records, stop when value threshold
https://www.unix.com/shell-programming-and-scripting/245700-awk-iterate-over-all-records-stop-when-value-threshold.html

### fields

Fields (The GNU Awk User?s Guide)
https://www.gnu.org/software/gawk/manual/html_node/Fields.html

### split records

awk split records (The GNU Awk User?s Guide)
https://www.gnu.org/software/gawk/manual/html_node/awk-split-records.html

### multiline

Multiple Line (The GNU Awk User?s Guide)
https://www.gnu.org/software/gawk/manual/html_node/Multiple-Line.html

### conditional

4 Awk If Statement Examples ( if, if else, if else if, :? )
https://www.thegeekstuff.com/2010/02/awk-conditional-statements/

### matching

Matching Patterns and Processing Information with awk
https://www3.physnet.uni-hamburg.de/physnet/Tru64-Unix/HTML/APS32DTE/WKXXXXXX.HTM

### command line

How to use variable in awk command ? Linux Hint
https://linuxhint.com/awk_command_variables/

## sort

sort -n -t '-' -k2

linux - Sort files numerically in bash - Stack Overflow
https://stackoverflow.com/questions/13360925/sort-files-numerically-in-bash

What does the k parameter do in the sort function (Linux Bash Scripting)? - Stack Overflow
https://stackoverflow.com/questions/17478511/what-does-the-k-parameter-do-in-the-sort-function-linux-bash-scripting

sorting - How to loop all files in sorted order in Bash? - Stack Overflow
https://stackoverflow.com/questions/7992689/how-to-loop-all-files-in-sorted-order-in-bash

## sed deleting leading spaces

sed tip: Remove / Delete All Leading Blank Spaces / Tabs ( whitespace ) From Each Line - nixCraft
https://www.cyberciti.biz/tips/delete-leading-spaces-from-front-of-each-word.html

## joining files

How to cat multiple files from a list of files in Bash? - Stack Overflow
https://stackoverflow.com/questions/11619500/how-to-cat-multiple-files-from-a-list-of-files-in-bash

## read file line by line

Linux/UNIX: Bash Read a File Line By Line - nixCraft
https://www.cyberciti.biz/faq/unix-howto-read-line-by-line-from-file/

## remove duplicate paragraphs

text processing - How to remove duplicate paragraphs - Unix & Linux Stack Exchange
https://unix.stackexchange.com/questions/609765/how-to-remove-duplicate-paragraphs/609771?noredirect=1#comment1138742_609771
