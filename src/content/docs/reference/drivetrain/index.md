---
title: Drivetrain
description: Tank Drive
---

A way to use tankdrive in wombat.

## Constructor

```cpp
TankDrive *tankDrive = new TankDrive(config);
```

### Config

| Type | Name | Description | See Also |
| --- | --- | --- | --- |
| `std::string` | `path` | The path in the networktables | |
| `wom::utils::Gearbox` | `left1` | The first gearbox on the left | [Gearbox](/reference/utils/gearbox) |
| `wom::utils::Gearbox` | `left2` | The second gearbox on the left | [Gearbox](/reference/utils/gearbox) |
| `wom::utils::Gearbox` | `left3` | The third gearbox on the left | [Gearbox](/reference/utils/gearbox) |
| `wom::utils::Gearbox` | `right1` | The first gearbox on the right | [Gearbox](/reference/utils/gearbox) |
| `wom::utils::Gearbox` | `right2` | The second gearbox on the right | [Gearbox](/reference/utils/gearbox) |
| `wom::utils::Gearbox` | `right3` | The third gearbox on the right | [Gearbox](/reference/utils/gearbox) |

#### Example

```cpp
// Rest of you code here
// left1, left2, left3, right1, right2, right3 are all Gearbox objects

TankDriveConfig config = {
    "drivetrain",
    left1,
    left2,
    left3,
    right1,
    right2,
    right3
};

TankDrive *tankDrive = new TankDrive(config);
```

## TankDriveState

An enum of states for the tankdrive.

| Name | Value | Description |
| --- | --- | --- |
| `kIdle` | `0` | The drivetrain is idle |
| `kTank` | `1` | The drivetrain is driving in tank mode |

### Example

```cpp
TankDriveState state = tankDrive->GetState();

TankDriveState newState = TankDriveState::kIdle;
```

## TankSpeeds

A struct of speeds for the tankdrive.

| Type | Name | Description | See Also |
| --- | --- | --- | --- |
| `double` | `left` | The speed of the left side | |
| `double` | `right` | The speed of the right side | |

### Example

```cpp
TankSpeeds speeds = tankDrive->GetSpeeds();
TankSpeeds newSpeeds = {0.5, 0.5};
```

## Methods

### GetConfig

Gets the config of the drivetrain.

Returns `TankDriveConfig` (see above)

#### Usage

```cpp
TankDriveConfig config = tankDrive->GetConfig();
```

### GetState

Gets the state of the drivetrain.

Returns `TankDriveState` (see above)

#### Usage

```cpp
TankDriveState state = tankDrive->GetState();
```

### SetState

Sets the state of the drivetrain.

#### Usage

```cpp
tankDrive->SetState(TankDriveState::kIdle);
```

### SetSpeed

Sets the speed of the drivetrain.

#### Usage

```cpp
tankDrive->SetSpeed(speeds);
```

### GetSpeeds

Gets the speeds of the drivetrain.

Returns `TankSpeeds` (see above)

#### Usage

```cpp
TankSpeeds speeds = tankDrive->GetSpeeds();
```


