---
title: Drivetrain behaviours
description: Collection of tank drive behaviours
---

## Manual Tank Drive

### Constructor

```cpp
Drivetrain *drivetrain = new Drivetrain(drivetrain_config);

XboxController *controller = new XboxController(0);

TankDrive *manualTankDrive = new TankDrive(drivetrain, controller);
```

The `drivetrain_config` can be found [here](/reference/drivetrain#config).

Schedule the behaviour as you would normally and you have a manual tank drive.