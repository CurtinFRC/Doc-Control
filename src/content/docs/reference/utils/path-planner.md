---
title: 'Path Planner'
description: 'Utility to calculate trajectory from WPILib pathplanner'
---

The path planner is used to calculate trajectory from WPILibs pathweaver.

## Usage

You can use it by creating an instance of the path planner class using this code:

```cpp
PathPlanner pathPlanner;
```

Then you can use it to calculate trajectory like this:

```cpp
pathPlanner.getTrajectory("path/to/trajectory.json");
```

where the path is relative to the deploy directory.

The files can be created using WPILibs pathweaver found [here](https://docs.wpilib.org/en/stable/docs/software/pathplanning/pathweaver/introduction.html).