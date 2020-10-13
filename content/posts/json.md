+++
categories = [""]
tags = [""]
title = "Json"
date = "2020-08-21T14:24:11-07:00"
draft = false
+++

get the first (or n'th) element in a jq json parsing - Stack Overflow
https://stackoverflow.com/questions/38500363/get-the-first-or-nth-element-in-a-jq-json-parsing

printing only the first top N levels, collapsing the rest · Issue #306 · stedolan/jq
https://github.com/stedolan/jq/issues/306

jq/src at master · stedolan/jq
https://github.com/stedolan/jq/tree/master/src

jq/docs at master · stedolan/jq
https://github.com/stedolan/jq/tree/master/docs

This:

```
reduce path(.[]?[]?[]?) as $path (.; setpath($path; {}))
```

works for me with code from master. If you're using 1.3 you'll need to drop the `?`s and ignore the errors or write something more like:

```
def iter: if type == "array" or type == "object" then .[] else empty end;
reduce path(iter|iter|iter) as $path (.; setpath($path; {}))
```

which works for me too.

Also, you might want to know what was replaced, an array or object, so maybe:

```
reduce path(.[]?[]?[]?) as $path (.; setpath($path; getpath($path)|if type == "array" then [] elif type == "object" then {} else . end))
```

In English: iterate the paths three levels deep in . then set at each of
those paths either whatever value is there if it is scalar, else an empty
structure of the same type (array or object). The reduction is needed because
jq is copy-on-write, so after setting a value to a path in . we need to
replace . with the output of setpath(), which is basically what `reduce`
does. This should probably be in the tutorial, as it's quite useful. With a
bit more effort we could have a built-in truncate tree function (instead of
`.[]?[]?[]?` we'd use `recurse(.[]?)[0:depth]`.

vouill/jq-cheatsheet: Some useful jq commands
https://github.com/vouill/jq-cheatsheet

shell - How to get key names from JSON using jq - Stack Overflow
https://stackoverflow.com/questions/23118341/how-to-get-key-names-from-json-using-jq

# jq

jq 1.4 Manual
https://stedolan.github.io/jq/manual/v1.4/#Builtinoperatorsandfunctions

jq Manual (development version)
https://stedolan.github.io/jq/manual/

# space in key

jq - Syntax when there is a space in the key - Stack Overflow
https://stackoverflow.com/questions/33700103/syntax-when-there-is-a-space-in-the-key

# filter

json - How to filter an array of objects based on values in an inner array with jq? - Stack Overflow
https://stackoverflow.com/questions/26701538/how-to-filter-an-array-of-objects-based-on-values-in-an-inner-array-with-jq

json - JQ: Select multiple conditions - Stack Overflow
https://stackoverflow.com/questions/33057420/jq-select-multiple-conditions

filter on "string contains" � Issue #33 � stedolan/jq
https://github.com/stedolan/jq/issues/33

json - Pattern matching field names with jq - Stack Overflow
https://stackoverflow.com/questions/42051601/pattern-matching-field-names-with-jq

# counting elements | length

Count JSON Array Elements with jq - Big Datums
http://bigdatums.net/2017/05/13/count-json-array-elements-with-jq/

# combine json files

```
jq -s '.' *.json > combined.json
```

Combine JSON files from a directory using jq - Tutorial Shares
http://tutorialshares.com/combine-json-files-from-a-directory-using-jq/#:~:text=How%20to%20merge%202%20or,and%20run%20this%20jq%20command.&text=Using%20the%20%2Ds%20option%20will,your%20case%2C%20are%20also%20arrays.

# formatting json

python - Reformat JSON file? - Stack Overflow
https://stackoverflow.com/questions/40139200/reformat-json-file

Free Online JSON Formatter - FreeFormatter.com
https://www.freeformatter.com/json-formatter.html#ad-output

JSON editing in Visual Studio Code
https://code.visualstudio.com/docs/languages/json#:~:text=You%20can%20format%20your%20JSON,Document%20from%20the%20context%20menu.

Combine JSON files from a directory using jq - Tutorial Shares
http://tutorialshares.com/combine-json-files-from-a-directory-using-jq/#:~:text=How%20to%20merge%202%20or,and%20run%20this%20jq%20command.&text=Using%20the%20%2Ds%20option%20will,your%20case%2C%20are%20also%20arrays.

# Loading

## R

R - JSON Files - Tutorialspoint
https://www.tutorialspoint.com/r/r_json_files.htm
