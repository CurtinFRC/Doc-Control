---
title: 'Utility Functions'
description: 'Miscellaneous utility functions'
---

This is a collection of utility functions that do not fit in one of the other catagories.

## Usage

### now

Returns the current time in seconds since the program started.

#### Usage
    
```cpp
units::second_t time = now();
```

### WritePose2NT

Writes a Pose2d to a NetworkTable.

#### Usage
```cpp
WritePose2NT(table, pose);
```

### WritePose3NT

Writes a Pose3d to a NetworkTable.

#### Usage
```cpp
WritePose3NT(table, pose);
```

### WriteTrajectory

Writes a Trajectory to a NetworkTable.

#### Usage
```cpp
WriteTrajectory(table, trajectory);
```

### WriteTrajectoryState

Writes a Trajectory State (`frc::Trajectory::State`) to a NetworkTable.

#### Usage
```cpp
WriteTrajectoryState(table, trajectoryState);
```

### TrajectoryStateToPose2d

Converts a Trajectory State (`frc::Trajectory::State`) to a Pose2d.

#### Usage
```cpp
Pose2d pose = TrajectoryStateToPose2d(trajectoryState);
```

### deadzone

Returns 0 if the value is within the deadzone, otherwise returns the value.

#### Usage
```cpp
double val = deadzone(0.1, 0.05);
```

### spow2

Returns the square of the value.

#### Usage
```cpp
double val = spow2(2);
```

## NTBound

A class that binds a NetworkTable entry to a variable.

### Constructor

```cpp
NTBound(std::shared_ptr<nt::NetworkTable> table, std::string name, const nt::Value &value,
        std::function<void(const nt::Value &)> onUpdateFn)
```

#### Example

```cpp
NTBound bound = NTBound(table, "name", nt::Value::MakeDouble(0), [](const nt::Value &v) {
  std::cout << "Value updated to " << v.GetDouble() << std::endl;
});
```

### NTBoundDouble

A class that binds a NetworkTable entry to a double.

#### Constructor

```cpp
NTBoundDouble(std::shared_ptr<nt::NetworkTable> table, std::string name, double &val)
```

#### Example

```cpp
double val = 0;

NTBoundDouble bound = NTBoundDouble(table, "name", val);
```

### NTBoundUnit

A class that binds a NetworkTable entry to a unit.

#### Constructor

```cpp
NTBoundUnit(std::shared_ptr<nt::NetworkTable> table, std::string name, units::unit_t<T> &val)
```

#### Example

```cpp
units::meter_t val = 0_m;

NTBoundUnit bound = NTBoundUnit(table, "name", val);
```