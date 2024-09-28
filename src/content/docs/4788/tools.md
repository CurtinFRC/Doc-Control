---
title: Tools
description: Tools commonly used by 4788 programmers.
---

There are many tools that we use on 4788 to write, debug and work with code. This article covers some of the most common ones that you will encounter and need to use.

## AdvantageScope

[Download](https://github.com/Mechanical-Advantage/AdvantageScope/releases/)
[Documentation](https://docs.advantagescope.org/)

AdvantageScope is an application for interacting with your robots logs. It supports both live and retrospective log viewing and helps with debugging code.

To get started with AdvantageScope download it from the link above or with the WPILib installer and hit Ctrl + , to set the roboRIO address to 10.47.88.2.

## Choreo

[Download](https://github.com/SleipnirGroup/Choreo/releases)
[Documentation](https://sleipnirgroup.github.io/Choreo/)

Choreo is an application used for generating swerve paths for autonomous routines. It uses an NLP solver backend to create optimal paths.

To get started with Choreo download it from the link above and open your robot project in it.

## WPILib simulation

[Documentation](https://docs.wpilib.org/en/stable/docs/software/wpilib-tools/robot-simulation/introduction.html)

WPILib's in built simulation support will allow you to test your code without a robot. While not fully representative of a real robot it allows you to test most of your logic without a robot.

To get started with WPILib simulation configure your desired dashboard for simulation and run `./gradlew simulateJava`.
