---
title: Styleguide
description: 4788's code styleguide
---

We use the [WPILib styleguide for Java](https://github.com/wpilibsuite/styleguide/blob/main/README.md), enforced using spotless, spotbugs and pmd. You can check if your code complies by running `./gradlew build -PwithJavaFormat`. In order for any code to be merged it **must** pass these checks.

You can fix formatting by commenting `/format` on your pull request then pulling down the changes. Note that there may be some issues you need to fix by hand.
