---
title: 'Robot Startup'
description: 'Our robot startup function'
---

Normally in FRC code there is a clause 
```cpp
#ifndef RUNNING_FRC_TESTS
int main() {
  return frc::StartRobot<Robot>();
}
#endif
```
or something similar in the Robot.cpp file. In wombat we use something different which under the hood is very similar. 

## Usage
Create a file `src/main/cpp/Main.cpp`. This file will contain your robot startup function and should not be edited after the robot startup function is called. In this file we place this code, with a message for other programmers:
```cpp
/*
  Dont edit this file
  Go to Robot.cpp
*/

#include "Robot.h"
#include "utils/RobotStartup.h"

WOMBAT_ROBOT_MAIN(Robot);
```
That's it. 

<!--- ## Implementation --->
<!--- TODO! --->

