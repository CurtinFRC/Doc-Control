---
title: PID
description: How to use PID in wombat.
---

PID is a way to control motors to a certain position or velocity.

## PID Config

To create PID loop, you need to create a `PIDConfig` object.

To create one you can use the following constructor:

```cpp
wom::PIDConfig(std::string path, kp_t kp = kp_t{0}, ki_t ki = ki_t{0}, kd_t kd = kd_t{0},
            error_t stableThresh = error_t{-1}, deriv_t stableDerivThresh = deriv_t{-1},
            in_t izone = in_t{-1})
```

The constructor is contained inside of a struct holding all of the configuration values.

To create a `PIDConfig` object you can use the following code:

```cpp
wom::SwerveDriveConfig::pose_angle_conf_t config {
    "/path/to/pid/in/nt/tables",
    kp, 
    ki,
    kd
};
```

### Parameters

| Type | Name | Description | See Also |
| --- | --- | --- | --- |
| `std::string` | `path` | The path in the networktables | |
| `wom::PIDConfig::kp_t` | `kp` | The proportional gain | |
| `wom::PIDConfig::ki_t` | `ki` | The integral gain | |
| `wom::PIDConfig::kd_t` | `kd` | The derivative gain | |
| `wom::PIDConfig::error_t` | `stableThresh` | The error threshold for the PID loop to be considered stable | |
| `wom::PIDConfig::deriv_t` | `stableDerivThresh` | The derivative threshold for the PID loop to be considered stable | |
| `in_t` | `izone` | The integral zone | |

`in_t` is the input type, `out_t` is the output type, `kp_t` is the proportional gain type, `ki_t` is the integral gain type, `kd_t` is the derivative gain type, `error_t` is the error threshold type, `deriv_t` is the derivative threshold type.

## PID Loop

Then you can create a PID loop using the following code:

```cpp
// main.h

class Example {
    public:
        Example();
    private:
        wom::PIDController<IN, OUT> _pid;
};
```

```cpp
// main.c

Example::Example() : _pid{"path", config}
```

where `IN` is the input type and `OUT` is the output type.


### Methods

#### SetSetpoint

Sets the setpoint of the PID loop.

```cpp
void SetSetpoint(IN setpoint);
```

- `setpoint` is the setpoint of the PID loop (**must always be the same type as `IN` in the constructor**)

#### GetSetpoint

Gets the setpoint of the PID loop.

```cpp
IN GetSetpoint();
```

#### GetError

Gets the error value of the PID loop.

```cpp
in_t GetError();
```

#### SetWrap

Sets the range of the input. If the input is outside of the range, it will wrap around to the other side of the range.

```cpp
void SetWrap(std::optional<in_t> range)
```

##### Example

```cpp
_pid.SetWrap(0_rad);
```

#### Reset

Resets the integral value

```cpp
void Reset();
```

#### Calculate

Calculates the output of the PID loop.

```cpp
OUT Calculate(IN input, units::second_t dt, out_t feedforward = out_t{0})
```

- `input` is the input of the PID loop (**must always be the same type as `IN` in the constructor**)
- `dt` is the time delta
- `feedforward` is the feedforward value (**must always be the same type as `OUT` in the constructor**)

##### Example

```cpp
double output = _pid.Calculate(input, dt, feedforward);
```

#### IsStable

Checks if the PID loop is stable.

```cpp
bool IsStable();
```