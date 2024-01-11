---
title: Shooter
description: Shooter subsystem
---

The shooter subsystem is for a single flywheel shooter. It can be used to spin up, hold at a position and respond to manual commands.

To create and schedule a shooter behaviour, you can use the following code:

```cpp
wom::Shooter *shooter = new wom::Shooter("shooter path (in nt tables)", config); // config is a ShooterConfig
```

## Parameters

| Type | Name | Description | See Also |
| ---- | ---- | ----------- | -------- |
| `std::string` | `path` | The path to the shooter in the NT tables | |
| `wom::ShooterConfig` | `config` | The configuration for the shooter | |

## Config

| Type | Name | Description | See Also |
| ---- | ---- | ----------- | -------- |
| `wom::Gearbox` | `gearbox` | The gearbox for the shooter | |
| `wom::PIDConfig<units::radians_per_second, units::volt>` | `pid` | The PID configuration for the shooter | [PID Config](/reference/utils/pid/#PID-Config) |
| `units::ampere_t` | `currentLimit` | The current limit for the shooter | |

## States

wom::ShooterState is an enum of states for the shooter.

| Name | Value | Description |
| ---- | ----- | ----------- |
| `kPID` | `0` | The shooter is idle |
| `kManual` | `1` | The shooter is in manual mode |
| `kIdle` | `2` | The shooter is idle |

## Methods

### SetManual

Sets the shooter to manual mode.

```cpp
void SetManual(units::volt_t voltage);
```

#### Usage

```cpp
shooter->SetManual(12_V);
```

### SetPID

Sets the shooter to PID mode.

```cpp
void SetPID(units::radians_per_second_t goal);
```

#### Usage

```cpp
shooter->SetPID(100_rad_per_s);
```

### SetState

Sets the state of the shooter.

```cpp
void SetState(wom::ShooterState state);
```

See [States](#states) for the possible states.

#### Usage

```cpp
shooter->SetState(wom::ShooterState::kPID);
```

### IsStable

Returns whether the shooter is stable.

```cpp
bool IsStable();
```

#### Usage

```cpp
bool stable = shooter->IsStable();
```

## Behaviours

### Shooter Constant

The shooter constant behaviour is used to hold the shooter at a constant speed.

```cpp
wom::ShooterConstant(wom::Shooter* s, units::volt_t setpoint)
```

#### Parameters

| Type | Name | Description | See Also |
| ---- | ---- | ----------- | -------- |
| `wom::Shooter*` | `s` | The shooter to use | [Shooter](#shooter) |
| `units::volt_t` | `setpoint` | The setpoint for the shooter | |

### Shooter Spinup

The shooter spinup behaviour is used to spin up the shooter to a certain speed.

```cpp
wom::ShooterSpinup(wom::Shooter* s, units::radians_per_second_t speed, bool hold = false)
```

#### Parameters

| Type | Name | Description | See Also |
| ---- | ---- | ----------- | -------- |
| `wom::Shooter*` | `s` | The shooter to use | [Shooter](#shooter) |
| `units::radians_per_second_t` | `speed` | The speed to spin up to | |
| `bool` | `hold` | Whether to hold the shooter at the speed | |

