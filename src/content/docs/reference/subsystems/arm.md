---
title: Arm
description: Arm subsystem
---

The arm subsystem is for a single arm. It can be used to move to a position and respond to manual commands.

To create an arm subsystem, you can use the following code:

```cpp
wom::Arm *arm = new wom::Arm(config); // config is a ArmConfig
```

## Parameters

| Type | Name | Description | See Also |
| ---- | ---- | ----------- | -------- |
| `wom::ArmConfig` | `config` | The configuration for the arm | |

## Config

| Type | Name | Description | See Also |
| ---- | ---- | ----------- | -------- |
| `std::string` | `path` | The path to the arm in the NT tables | |
| `wom::Gearbox` | `leftGearbox` | The left gearbox for the arm | |
| `wom::Gearbox` | `rightGearbox` | The right gearbox for the arm | |
| `wom::CANSparkMaxEncoder` | `armEncoder` | The encoder for the arm | |
| `wom::utils::PIDConfig<units::radian, units::volt>` | `pidConfig` | The PID configuration for the arm | [PID Config](/reference/utils/pid/#PID-Config) |
| `wom::utils::PIDConfig<units::radians_per_second, units::volt>` | `velocityConfig` | The velocity PID configuration for the arm | [PID Config](/reference/utils/pid/#PID-Config) |
| `units::kilogram_t` | `armMass` | The mass of the arm | |
| `units::kilogram_t` | `loadMass` | The mass of the load | |
| `units::meter_t` | `armLength` | The length of the arm | |
| `units::radian_t` | `minAngle` | The minimum angle of the arm | |
| `units::radian_t` | `maxAngle` | The maximum angle of the arm | |
| `units::radian_t` | `initialAngle` | The initial angle of the arm | |
| `units::radian_t` | `angleOffset` | The angle offset of the arm | |

## States

wom::ArmState is an enum of states for the arm.

| Name | Value | Description |
| ---- | ----- | ----------- |
| `kIdle` | `0` | The arm is idle |
| `kAngle` | `1` | The arm is in angle mode |
| `kRaw` | `2` | The arm is in raw mode |
| `kVelocity` | `3` | The arm is in velocity mode |

## Methods

### SetIdle

Sets the arm to idle mode.

```cpp
void SetIdle();
```

#### Usage

```cpp
arm->SetIdle();
```

### SetAngle

Sets the arm to angle mode.

```cpp
void SetAngle(units::radian_t angle);
```

#### Usage

```cpp
arm->SetAngle(90_deg);
```

### SetRaw

Sets the arm to raw mode.

```cpp
void SetRaw(units::volt_t voltage);
```

#### Usage

```cpp
arm->SetRaw(12_V);
```

### SetVelocity

Sets the arm to velocity mode.

```cpp
void SetVelocity(units::radians_per_second_t velocity);
```

#### Usage

```cpp
arm->SetVelocity(100_rad_per_s);
```

### SetState

Sets the state of the arm.

```cpp
void SetState(wom::ArmState state);
```

See [States](#states) for the possible states.

#### Usage

```cpp
arm->SetState(wom::ArmState::kAngle);
```

### SetArmSpeedLimit

Sets the arm speed limit.

```cpp
void SetArmSpeedLimit(double limit);
```

#### Usage

```cpp
arm->SetArmSpeedLimit(0.5);
```

### GetConfig

Returns the arm config.

```cpp
wom::ArmConfig GetConfig();
```

#### Usage

```cpp
wom::ArmConfig config = arm->GetConfig();
```

### GetAngle

Returns the arm angle.

```cpp
units::radian_t GetAngle();
```

#### Usage

```cpp
units::radian_t angle = arm->GetAngle();
```

### MaxSpeed

Returns the maximum speed of the arm.

```cpp
units::radians_per_second_t MaxSpeed();
```

#### Usage

```cpp
units::radians_per_second_t maxSpeed = arm->MaxSpeed();
```

### GetArmVelocity

Returns the arm velocity.

```cpp
units::radians_per_second_t GetArmVelocity();
```

#### Usage

```cpp
units::radians_per_second_t velocity = arm->GetArmVelocity();
```

### IsStable

Returns whether the arm is stable.

```cpp
bool IsStable();
```

#### Usage

```cpp
bool stable = arm->IsStable();
```