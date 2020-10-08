+++
aliases = []
author = "Thiago Cardoso"
canonicalURL = ""
date = 2020-10-08T03:00:00Z
draft = true
image = ""
images = []
lastmod = 2020-10-08T03:00:00Z
subtitle = ""
summary = ""
title = "How to select into a map using go-pg"

+++
* What is go-pg
* How go-pg maps into Go structures and or how SQL limits it to return either a structure or a list of it
* Examples of situations where the result of a query would be a map: when it is a map (the fact that I have a map is an indicator of bad design?), when aggregations are made (top N by?)
* The trick to create a map using JSON