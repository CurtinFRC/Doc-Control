---
title: 'Misc Utility Functions'
description: 'Miscellaneous utility functions'
---

This is a collection of utility functions that do not fit in one of the other catagories.

## Usage

To include all of the following functions use this code:

```cpp
#include "utils/Utils.h"
```

### `now()`

Returns the current time in seconds since the program started.

#### Usage
    
```cpp
units::second_t time = now();
```

### `WritePose2NT(std::shared_ptr<nt::NetworkTable> table, frc::Pose2d pose)`

Writes a Pose2d to a NetworkTable.

#### Usage
```cpp
WritePose2NT(table, pose);
```

### `WritePose3NT(std::shared_ptr<nt::NetworkTable> table, frc::Pose3d pose)`

Writes a Pose3d to a NetworkTable.

#### Usage
```cpp
WritePose3NT(table, pose);
```

### `deadzone(double val, double deadzone)`

Returns 0 if the value is within the deadzone, otherwise returns the value.

#### Usage
```cpp
double val = deadzone(0.1, 0.05);
```

### `spow2(double val)`

Returns the square of the value.

#### Usage
```cpp
double val = spow2(2);
```