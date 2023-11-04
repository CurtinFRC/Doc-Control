---
title: 'Wombat'
description: 'Thorough documentation of the entire Wombat library explaining usage and implementation'
---

This section of the documentation aims less to provide a guide of how to use Wombat as a whole, or its some of its components but more to provide an in depth explanation of the usage, effect and implementation of everything within Wombat. It can be used as a reference to you whenever you are writing code but would not be an effective place to learn how to use Wombat.

## Project Structure
Wombat is structured in a very specific way. It is namespaced according to the location of each file, with wom as the root namespace. Everything is split into directories based on its categorisation. If you would like to use proper namespacing as we do internally you can use the directory that items are found within the Wombat for your includes. If you would like to avoid this (which we reccomend in most cases) you can include `Wombat.h` in your project which will remove the need for any namespacing and give you access to all features. 

