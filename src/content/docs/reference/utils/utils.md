---
title: 'Utility Functions'
description: 'Miscellaneous utility functions and classes'
---
This is a collection of utility functions and classes that do not fit in one of the other catagories.

## now()
Returns the current time in seconds since the program started.

### Usage

```cpp
units::second_t time = now();
```

## WritePose2NT
Writes a Pose2d to a NetworkTable.

### Usage
```cpp
WritePose2NT(table, pose);
```

## WritePose3NT
Writes a Pose3d to a NetworkTable.

### Usage
```cpp
WritePose3NT(table, pose);
```

## deadzone
Returns 0 if the value is within the deadzone, otherwise returns the value.

### Usage
```cpp
double val = deadzone(0.1, 0.05);
```

## spow2
Returns the square of the value.

### Usage
```cpp
double val = spow2(2);
```

## invert
Inverts the system and returns it back to you.

### Usage
```cpp
let inverted = invert<System>(system);
```
