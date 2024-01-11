---
title: Elevator
description: Elevator subsystem
---

The elevator subsystem is for a single elevator. It can be used to move to a position and respond to manual commands.

To create an elevator subsystem, you can use the following code:

```cpp
wom::Elevator *elevator = new wom::Elevator("elevator path (in nt tables)", config) // config is a ElevatorConfig
```

## Parameters

| Type | Name | Description | See Also |
| ---- | ---- | ----------- | -------- |
| `wom::ElevatorConfig` | `config` | The configuration for the elevator | |

## Config

| Type | Name | Description | See Also |
| ---- | ---- | ----------- | -------- |
| `std::string` | `path` | The path to the elevator in the NT tables | |
| `wom::Gearbox` | `leftGearbox` | The left gearbox for the elevator | |
| `wom::Gearbox` | `rightGearbox` | The right gearbox for the elevator | |
| `wom::CANSparkMaxEncoder` | `encoder` | The encoder for the elevator | |
| `frc::DigitalInput*` | `topSensor` | The top sensor for the elevator | |
| `frc::DigitalInput*` | `bottomSensor` | The bottom sensor for the elevator | |
| `units::meter_t` | `radius` | The radius of the elevator | |
| `units::kilogram_t` | `mass` | The mass of the elevator | |
| `units::meter_t` | `maxHeight` | The maximum height of the elevator | |
| `units::meter_t` | `minHeight` | The minimum height of the elevator | |
| `units::meter_t` | `initialHeight` | The initial height of the elevator | |
| `wom::PIDConfig<units::meter, units::volt>` | `pid` | The PID configuration for the elevator | [PID Config](/reference/utils/pid/#PID-Config) |
| `wom::PIDConfig<units::meters_per_second, units::volt>` | `velocityPID` | The velocity PID configuration for the elevator | [PID Config](/reference/utils/pid/#PID-Config) |

## States

wom::ElevatorState is an enum of states for the elevator.

| Name | Value | Description |
| ---- | ----- | ----------- |
| `kIdle` | `0` | The elevator is idle |
| `kPID` | `1` | The elevator is in PID mode |
| `kManual` | `2` | The elevator is in manual mode |
| `kVelocity` | `3` | The elevator is in velocity mode |

## Methods

### SetManual

Sets the elevator to manual mode.

```cpp
void SetManual(units::volt_t voltage)
```

#### Usage

```cpp
elevator->SetManual(12_V)
```

### SetPID

Sets the elevator to PID mode.

```cpp
void SetPID(units::meter_t height)
```

#### Usage

```cpp
elevator->SetPID(1_m)
```

### SetState

Sets the state of the elevator.

```cpp
void SetState(wom::ElevatorState state)
```

See [States](#states) for the possible states.

#### Usage

```cpp
elevator->SetState(wom::ElevatorState::kPID)
```

### SetVelocity

Sets the elevator to velocity mode.

```cpp
void SetVelocity(units::meters_per_second_t velocity)
```

#### Usage

```cpp
elevator->SetVelocity(1_mps)
```

### GetElevatorEncoderPos

Returns the elevator encoder position.

```cpp
double GetElevatorEncoderPos()
```

#### Usage

```cpp
double pos = elevator->GetElevatorEncoderPos()
```

### SetElevatorSpeedLimit

Sets the elevator speed limit.

```cpp
void SetElevatorSpeedLimit(double limit)
```

#### Usage

```cpp
elevator->SetElevatorSpeedLimit(1_mps)
```

### GetConfig

Gets the config of the elevator.

Returns `wom::ElevatorConfig` (see above)

#### Usage

```cpp
wom::ElevatorConfig config = elevator->GetConfig()
```

### IsStable

Returns whether the elevator is stable.

```cpp
bool IsStable()
```

#### Usage

```cpp
bool stable = elevator->IsStable()
```

### GetState

Returns the state of the elevator.

```cpp
wom::ElevatorState GetState()
```

#### Usage

```cpp
wom::ElevatorState state = elevator->GetState()
```

### GetHeight

Returns the height of the elevator.

```cpp
units::meter_t GetHeight()
```

#### Usage

```cpp
units::meter_t height = elevator->GetHeight()
```

### MaxSpeed

Returns the maximum speed of the elevator.

```cpp
units::meters_per_second_t MaxSpeed()
```

#### Usage

```cpp
units::meters_per_second_t maxSpeed = elevator->MaxSpeed()
```

### GetElevatorVelocity

Returns the elevator velocity.

```cpp
units::meters_per_second_t GetElevatorVelocity()
```

#### Usage

```cpp
units::meters_per_second_t velocity = elevator->GetElevatorVelocity()
```