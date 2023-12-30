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

The files can be created using WPILibs pathweaver found [here](https://docs.wpilib.org/en/stable/docs/software/pathplanning/pathweaver/introduction.html).

**There are no arguments for the class**

## Implementation
We have implemented this using the builtin functions in WPILib. The code for reading a file and calculating a trajectory is as follows:

```cpp
frc::Trajectory utils::Pathplanner::getTrajectory(std::string_view path) {
    fs::path path_location = deploy_directory / path;
    return frc::TrajectoryUtil::FromPathweaverJson(path_location.string());
}
```
