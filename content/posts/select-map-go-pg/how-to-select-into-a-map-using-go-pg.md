---
_template: post
---

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
A SQL query result is often (could I say always?) a table — a list of rows, all having the same set of columns. When an ORM parses such result it will create a list of objects of a given type. It is no different with [go-pg](https://github.com/go-pg/pg "go-pg").

go-pg is a PostgreSQL client and ORM for Go. Queries using this library are made having a Go struct as basis, for example:

    type User struct {
        ID string
        Name string
        Email string
    }
    
    users := []*User{}
    err := conn.
        Model(users).
        Where("email LIKE ?", ...)
        Select()
        

* What is go-pg
* Examples of situations where the result of a query would be a map: when it is a map (the fact that I have a map is an indicator of bad design?), when aggregations are made (top N by?)
* The trick to create a map using JSON
