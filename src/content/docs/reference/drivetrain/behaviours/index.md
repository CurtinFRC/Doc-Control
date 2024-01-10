---
title: Drivetrain behaviours
description: Collection of tank drive behaviours
---

## Manual Tank Drive

### Behaviour

```cpp
_tankDrive = new TankDrive(config);

wom::BehaviourScheduler::GetInstance()->Register(_tankDrive);
_tankDrive->SetDefaultBehaviour([this]() {
    return wom::make<wom::ManualDrivebase>(_tankDrive, &controller);
});
```

- `controller` is a `frc::XboxController` object
- `config` is a `TankDriveConfig` object ([docs here](/reference/drivetrain/tank-drive#config))