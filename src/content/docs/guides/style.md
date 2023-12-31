---
title: 'Wombat Style Guide'
description: 'The official style guide for Wombat code'
---

In Wombat we use the WPILib styleguide. Below is some important things some of which aren't well checked by our formatter. For an in depth explanation of our styleguide see the [WPILib Styleguide repo](https://github.com/wpilibsuite/styleguide).

## Editor Config
Wombat uses an editorconfig file, which you should apply to your editor using the appropiate plugin.

## Tabs or Spaces?
When writing Wombat code you should always use two spaces **not** tabs.
It is acceptable to remap your tab to use two spaces.
The only exception to the two spaces rule is when declaring the scope of fields in a class.
Use one space in this case eg.
```cpp
class Style {
 public:
  Style();
 private:
  std::string name;
}
```

## Naming
The case we use for naming depends on what you are creating.
Files, classes, structs, functions and enums are named using upper camel case.
Variables, function parametres, namespaces and folders should be named using lower camel case.
Enum fields should be named using upper camel case but with a lowercase k at the beggining.
A file might look like this :
```cpp
// helloWorld/HelloWorld.cpp
#include "helloWorld/HelloWorld.h"

#include <stdio.h>

int two = 2;

void hello() {
  printf("hello");
}

struct HelloUser {
  char **hello;
  char **user;
}

enum Name {
  kBob,
  kJoe,
}

class HelloWorld {
 public:
  HelloWorld();
}
```
Your names should be descriptive of what information is stored or functionality is performed by the thing you are naming.

## Organising Includes
When organising includes we are not very strict but it is expected you do something similar to this.
We split our includes up by a single line based on whether or not they are internal, from the standard library or external.
An example might look like this :
```cpp
#pragma once

#include "subsystems/Shooter.h"
#include "utils/RobotStartup.h"

#include <iostream>
#include <string>

#include <frc/geometry/Pose2d.h>
```

## Project Structure
Within Wombat and projects using Wombat we follow a structure to organise it.
This part will be split into two sections, projects using Wombat and Wombat.

### Projects Using Wombat
```
root
  - wombat
  - src
    - main
      - cpp
        - write cpp files here
        - behaviours
          - write behaviour cpp files here
      - include
        - write header files here
        - behaviours
          - write behaviour header files here
    - test
      - cpp
        - write tests here
        - behaviours
          - write tests for behaviours here
```
In this you see the way that we structure our Wombat projects.
This keeps our structure clean and makes it easy to find different files.
One file should be created per subsystem or for a group of behaviours.

### Wombat
```
root
  - src
    - main
      - cpp
        - utils
        - subsystems
        - drivetrain
        - behaviour
      - include
        - Wombat.h
        - utils
        - subsystems
        - drivetrain
        - behaviour
    - test
      - cpp
        - write tests here
```
This is designed to correspond with our namespacing and make everything easy to find.

## Functions
```cpp
void Bob() {
  // code here
}
```
Notice how the open curly brace is on the same line?
This is a requirement.
Any functions which are written like so
```cpp
void Bob
{
  // code here
}
```
will not be accepted.

## Classes
```cpp
class Bob {
  // code here
}
```
Similar to functions this is how classes should be declared
```cpp
class Bob
{
  // code here
}
```
will not be accepted.

## Enums
```cpp
enum Bob {
  // code here
}
```
Similar to functions this is how enums should be declared
```cpp
enum Bob
{
  // code here
}
```
will not be accepted.

## Structs
```cpp
struct Bob {
  // code here
}
```
Similar to functions this is how structs should be declared
```cpp
struct Bob
{
  // code here
}
```
will not be accepted.
