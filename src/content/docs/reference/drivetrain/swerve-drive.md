---
title: Swervedrive
description: Swervedrive stuff
---

## Constructor

```cpp
frc::Pose2d initial_pose = frc::Pose2d(0_m, 0_m, 0_rad);

SwerveDrive *swerveDrive = new SwerveDrive(config, initial_pose);
```

### Config

| Type | Name | Description | See Also |
| --- | --- | --- | --- |
| `std::string` | `path` | The path in the networktables | |
| `SwerveModule::angle_pid_conf_t` | `anglePID` | The angle PID config | [SwerveModule](#swerve-modules) |  
| `SwerveModule::velocity_pid_conf_t` | `velocityPID` | The velocity PID config | [SwerveModule](#swerve-modules) |
| `wpi::array<SwerveModuleConfig, 4>` | `modules` | The modules | [SwerveModule](#swerve-modules) |
| `wom::utils::Gyro` | `gyro` | The gyro | [Gyro](/reference/utils/gyro) |
| `units::kilogram_t` | `mass` | The mass of the robot | |
| `wpi::array<double, 3>` | `stateStdDevs` | The standard deviations of the state | |
| `wpi::array<double, 3>` | `visionMeasurementStdDevs` | The standard deviations of the vision measurements | |

#### Example

```cpp
SwerveDriveConfig config;
```

## SwerveDriveState

An enum of states for the swervedrive.

| Name | Value | Description |
| --- | --- | --- |
| `kZeroing` | `0` | The drivetrain is zeroing |
| `kIdle` | `1` | The drivetrain is idle |
| `kVelocity` | `2` | The drivetrain is driving in velocity mode |
| `kFieldRelativeVelocity` | `3` | The drivetrain is driving in field relative velocity mode |
| `kPose` | `4` | The drivetrain is driving in pose mode |
| `kIndividualTuning` | `5` | The drivetrain is tuning individual modules |
| `kTuning` | `6` | The drivetrain is tuning |
| `kXWheels` | `7` | The drivetrain is driving in x wheels mode |
| `kModuleTurn` | `8` | The drivetrain is turning a module |
| `kFRVelocityRotationLock` | `9` | The drivetrain is driving in field relative velocity rotation lock mode |

### Example

```cpp
SwerveDriveState state = swerveDrive->GetState();
SwerveDriveState newState = SwerveDriveState::kIdle;
```

## FieldRelativeSpeeds

A struct of speeds for the swervedrive.

| Type | Name | Description | See Also |
| --- | --- | --- | --- |
| `units::meters_per_second_t` | `vx` | The x speed | |
| `units::meters_per_second_t` | `vy` | The y speed | |
| `units::radians_per_second_t` | `omega` | The omega speed | |

### Example

```cpp
swerveDrive->SetFieldRelativeVelocity({1_mps, 1_mps, 1_rad_per_s});
```

## Methods

### RotateMatchJoystick

Switches the state to handle the robot's rotation matching that of the joystick.

```cpp
void RotateMatchJoystick(units::radian_t joystickAngle, FieldRelativeSpeeds speeds)
```

#### Usage

```cpp
swerveDrive->RotateMatchJoystick(1_rad, {1_mps, 1_mps, 1_rad_per_s});
```

### SetIdle

Switches the state to idle.

#### Usage

```cpp
swerveDrive->SetIdle();
```

### SetZeroing

Switches the state to zeroing.

#### Usage

```cpp
swerveDrive->SetZeroing();
```

### SetVelocity

Switches the state to velocity.

```cpp
void SetVelocity(frc::ChassisSpeeds speeds)
```

#### Usage

```cpp
swerveDrive->SetVelocity({1_mps, 1_mps, 1_rad_per_s});
```

### SetFieldRelativeVelocity

Switches the state to field relative velocity.

See [Field Relative Speeds](#field-relative-speeds).

```cpp
void SetFieldRelativeVelocity(FieldRelativeSpeeds speeds)
```

#### Usage

```cpp
swerveDrive->SetFieldRelativeVelocity({1_mps, 1_mps, 1_rad_per_s});
```

### SetPose

Switches the state to pose.

```cpp
void SetPose(frc::Pose2d pose)
```

#### Usage

```cpp
swerveDrive->SetPose({1_m, 1_m, 1_rad});
```

### IsAtSetPose

Checks if the robot is at the set pose.

#### Usage

```cpp
bool isAtSetPose = swerveDrive->IsAtSetPose();
```

### SetIndividualTuning

Switches the state to individual tuning.

```cpp
void SetIndividualTuning(int mod, units::radian_t angle, units::meters_per_second_t speed)
```

#### Usage

```cpp
swerveDrive->SetIndividualTuning(0, 1_rad, 1_mps);
```

### SetTuning

Switches the state to tuning.

```cpp
SetTuning(units::radian_t angle, units::meters_per_second_t speed)
```

#### Usage

```cpp
swerveDrive->SetTuning(1_rad, 1_mps);
```

### SetZero

Sets PID setpoints to zero.

#### Usage

```cpp
swerveDrive->SetZero();
```

### SetVoltageLimit

Sets the voltage limit.

```cpp
void SetVoltageLimit(units::volt_t driveVoltageLimit)
```

#### Usage

```cpp
swerveDrive->SetVoltageLimit(12_V);
```

### OnResetMode

Resets the intergral value of the PID controllers.

#### Usage

```cpp
swerveDrive->OnResetMode();
```

### SetXWheelState

Switches the state to x wheels.

#### Usage

```cpp
swerveDrive->SetXWheelState();
```

### SetIsFieldRelative

Sets whether the drivetrain is field relative.

```cpp
void SetIsFieldRelative(bool value)
```

#### Usage

```cpp
swerveDrive->SetIsFieldRelative(true);
```

### GetIsFieldRelative

Gets whether the drivetrain is field relative.

#### Usage

```cpp
bool isFieldRelative = swerveDrive->GetIsFieldRelative();
```

### SetAccelerationLimit

Sets the acceleration limit.

```cpp
void SetAccelerationLimit(units::meters_per_second_squared_t limit)
```

#### Usage

```cpp
swerveDrive->SetAccelerationLimit(1_mps_sq);
```

### ResetPose

Resets the pose.

```cpp
void ResetPose(frc::Pose2d pose)
```

#### Usage

```cpp
swerveDrive->ResetPose({1_m, 1_m, 1_rad});
```

### GetPose

Gets the pose.

#### Usage

```cpp
frc::Pose2d pose = swerveDrive->GetPose();
```

### AddVisionMeasurement

Adds a vision measurement.

```cpp
void AddVisionMeasurement(frc::Pose2d pose, units::second_t timestamp)
```

#### Usage

```cpp
swerveDrive->AddVisionMeasurement({1_m, 1_m, 1_rad}, 1_s);
```

### GetConfig

Gets the config of the drivetrain.

Returns `SwerveDriveConfig` (see above)

#### Usage

```cpp
SwerveDriveConfig config = swerveDrive->GetConfig();
```


## Swerve Modules

### Constructor

```cpp
SwerveModule(std::string path, SwerveModuleConfig config, angle_pid_conf_t anglePID, velocity_pid_conf_t velocityPID)
```

#### Example

```cpp
SwerveModule *swerveModule = new SwerveModule(config);
```

#### Config

| Type | Name | Description | See Also |
| --- | --- | --- | --- |
| `frc::Translation2d` | `position` | The position of the module | |
| `wom::utils::Gearbox` | `driveMotor` | The drive gearbox | [Gearbox](/reference/utils/gearbox) |
| `wom::utils::Gearbox` | `turnMotor` | The turn gearbox | [Gearbox](/reference/utils/gearbox) |
| `CANCoder` | `canEncoder` | The CANCoder | |
| `units::meter_t` | `wheelRadius` | The radius of the wheel | |

##### Example

```cpp
SwerveModuleConfig config = {
    frc::Translation2d(1_m, 1_m),
    driveMotor,
    turnMotor,
    canEncoder,
    1_m
};
```

### SwerveModuleState

An enum of states for the swerve module.

| Name | Value | Description |
| --- | --- | --- |
| `kZeroing` | `0` | The module is zeroing |
| `kIdle` | `1` | The module is idle |
| `kPID` | `2` | The module is driving in PID mode |

#### Example

```cpp
SwerveModuleState state = swerveModule->GetState();
SwerveModuleState newState = SwerveModuleState::kIdle;
```

### Methods

#### SetZero

Sets PID setpoints to zero.

##### Usage

```cpp
swerveModule->SetZero();
```

#### SetIdle

Switches the state to idle.

##### Usage

```cpp
swerveModule->SetIdle();
```

#### SetPID

Switches the state to PID and sets the setpoints.

```cpp
void SetPID(units::radian_t angle, units::meters_per_second_t speed, units::second_t dt)
```

##### Usage

```cpp
swerveModule->SetPID(1_rad, 1_mps, 1_s);
```

#### SetVoltageLimit

Sets the voltage limit.

```cpp
void SetVoltageLimit(units::volt_t driveVoltageLimit)
```

##### Usage

```cpp
swerveModule->SetVoltageLimit(12_V);
```

#### SetAccelerationLimit

Sets the acceleration limit.

```cpp
SetAccelerationLimit(units::meters_per_second_squared_t limit)
```

##### Usage

```cpp
swerveModule->SetAccelerationLimit(1_mps_sq);
```


#### GetPosition

Gets the position of the module.

##### Usage

```cpp
frc::SwerveModulePosition position = swerveModule->GetPosition();
```

#### GetSpeed

Gets the speed of the module.

##### Usage

```cpp
frc::SwerveModuleSpeed speed = swerveModule->GetSpeed();
```

#### GetDistance

Gets the distance of the module.

##### Usage

```cpp
units::meter_t dist = swerveModule->GetDistance();
```

#### GetConfig

Gets the config of the module.

Returns `SwerveModuleConfig` (see above)

##### Usage

```cpp
SwerveModuleConfig config = swerveModule->GetConfig();
```



