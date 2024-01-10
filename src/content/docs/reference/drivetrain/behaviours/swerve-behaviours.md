---
title: Swervedrive behaviours
description: Collection of swervedrive behaviours

sidebar:
    badge:
        text: New
        variant: tip
---

## Manual Swerve Drive

### Constructor

```cpp
SwerveDrive *swerve_drive = new SwerveDrive(swerve_drive_config);

XboxController *controller = new XboxController(0);

ManualDrivebase *drivetrain = new ManualDrivebase(swerve_drive, controller);
```

The `swerve_drive_config` can be found [here](/reference/drivetrain/swerve-drive#config).