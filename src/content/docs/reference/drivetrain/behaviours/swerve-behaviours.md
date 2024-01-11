---
title: Swervedrive behaviours
description: Collection of swervedrive behaviours

sidebar:
    badge:
        text: New
        variant: tip
---

## Manual Swerve Drive

```cpp
wom::SwerveDrive _swerveDrive = new wom::SwerveDrive(config, frc::Pose2d());
wom::BehaviourScheduler::GetInstance()->Register(_swerveDrive);
_swerveDrive->SetDefaultBehaviour([this]() {
    return wom::make<wom::ManualDrivebase>(_swerveDrive, &controller);
});
```

- `controller` is a `frc::XboxController` object
- `config` is a `wom::SwerveBaseConfig` object ([docs here](/reference/drivetrain/swerve-drive#config))

## XDrivebase

```cpp
wom::SwerveDrive _swerveDrive = new wom::SwerveDrive(config, frc::Pose2d());

wom::BehaviourScheduler::GetInstance()->Register(_swerveDrive);
_swerveDrive->SetDefaultBehaviour([this]() {
    return wom::make<wom::XDrivebase>(_swerveDrive);
});
```

- `config` is a `SwerveBaseConfig` object ([docs here](/reference/drivetrain/swerve-drive#config))

## Follow Trajectory

```cpp
wom::SwerveDrive _swerveDrive = new wom::SwerveDrive(config, frc::Pose2d());

wom::utils::PathPlanner pathPlanner;

wom::BehaviourScheduler::GetInstance()->Register(_swerveDrive);

_swerveDrive->SetDefaultBehaviour([this]() {
    return wom::make<wom::FollowTrajectory>(_swerveDrive, pathPlanner, "path/to/trajectory.json");
});
```

- `config` is a `SwerveBaseConfig` object ([docs here](/reference/drivetrain/swerve-drive#config))
- `path/to/trajectory.json` is the path to the trajectory file relative to the deploy directory
- `pathPlanner` is a `wom::PathPlanner` object ([docs here](/reference/utils/path-planner))

## Simulated Swerve Drive

```cpp

frc::Timer timer;
frc::Field2d field2d;

wom::SwerveDrive _swerveDrive = new wom::SwerveDrive(config, frc::Pose2d());

wom::SwerveDrive _simDrive = new wom::TempSimSwerveDrive(&field2d, &timer);

_simDrive->SetPath("path/to/trajectory.json"); // relative to deploy directory

/* ================
     in main loop
   ================ */

_simDrive->OnUpdate(_swerveDrive);
```

### Methods

#### SetPath

Sets the path to follow

```cpp
void SetPath(std::string path);
```

- `path` is the path to the trajectory file relative to the deploy directory

#### GetPose

Gets the pose of the robot

```cpp
frc::Pose3d GetPose();
```

#### GetPose2d

Gets the pose of the robot (in 2d)

```cpp
frc::Pose2d GetPose2d();
```