---
title: Drivetrain
description: Tank Drive
---

A way to use tankdrive in wombat.

## Constructor

```cpp
wom::TankDrive *tankDrive = new wom::TankDrive(config);
```

### Config

| Type | Name | Description | See Also |
| --- | --- | --- | --- |
| `std::string` | `path` | The path in the networktables | |
| `wom::Gearbox` | `left1` | The first gearbox on the left | [Gearbox](/reference/utils/gearbox) |
| `wom::Gearbox` | `left2` | The second gearbox on the left | [Gearbox](/reference/utils/gearbox) |
| `wom::Gearbox` | `left3` | The third gearbox on the left | [Gearbox](/reference/utils/gearbox) |
| `wom::Gearbox` | `right1` | The first gearbox on the right | [Gearbox](/reference/utils/gearbox) |
| `wom::Gearbox` | `right2` | The second gearbox on the right | [Gearbox](/reference/utils/gearbox) |
| `wom::Gearbox` | `right3` | The third gearbox on the right | [Gearbox](/reference/utils/gearbox) |

#### Example

```cpp
// Rest of you code here
// left1, left2, left3, right1, right2, right3 are all Gearbox objects

wom::TankDriveConfig config = {
    "drivetrain",
    left1,
    left2,
    left3,
    right1,
    right2,
    right3
};

wom::TankDrive *tankDrive = new wom::TankDrive(config);
```

## TankDriveState

An enum of states for the tankdrive.

| Name | Value | Description |
| --- | --- | --- |
| `kIdle` | `0` | The drivetrain is idle |
| `kTank` | `1` | The drivetrain is driving in tank mode |

### Example

```cpp
wom::TankDriveState state = tankDrive->GetState();

wom::TankDriveState newState = wom::TankDriveState::kIdle;
```

## TankSpeeds

A struct of speeds for the tankdrive.

| Type | Name | Description | See Also |
| --- | --- | --- | --- |
| `double` | `left` | The speed of the left side | |
| `double` | `right` | The speed of the right side | |

### Example

```cpp
wom::TankSpeeds speeds = tankDrive->GetSpeeds();
wom::TankSpeeds newSpeeds = {0.5, 0.5};
```

## Methods

### GetConfig

Gets the config of the drivetrain.

Returns `wom::TankDriveConfig` (see above)

#### Usage

```cpp
wom::TankDriveConfig config = tankDrive->GetConfig();
```

### GetState

Gets the state of the drivetrain.

Returns `wom::TankDriveState` (see above)

#### Usage

```cpp
wom::TankDriveState state = tankDrive->GetState();
```

### SetState

Sets the state of the drivetrain.

#### Usage

```cpp
tankDrive->SetState(wom::TankDriveState::kIdle);
```

### SetSpeed

Sets the speed of the drivetrain.

#### Usage

```cpp
tankDrive->SetSpeed(speeds);
```

### GetSpeeds

Gets the speeds of the drivetrain.

Returns `wom::TankSpeeds` (see above)

#### Usage

```cpp
wom::TankSpeeds speeds = tankDrive->GetSpeeds();
```


