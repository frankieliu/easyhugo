+++
categories = [""]
tags = [""]
title = "Yuml"
date = "2020-08-23T22:16:35-07:00"
draft = false
+++

<script src="../../js/yuml-diagram.min.js"></script>

<div class="yuml" yuml="
// {type:class}
[A]->[B]
">
</div>

<script>
var x = document.getElementsByClassName("yuml");
var i;
for (i=0; i < x.length; i++) {
    var yumlText = x[i].getAttribute("yuml");
    var yumlId = x[i].id;
    var yuml = new yuml_diagram();
    var svg = yuml.processYumlDocument(yumlText, false);
    x[i].innerHTML = svg;
}
</script>

