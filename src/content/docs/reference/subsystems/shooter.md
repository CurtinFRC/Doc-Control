---
title: Shooter
description: Shooter subsystem
---

The shooter subsystem is for a single flywheel shooter. It can be used to spin up, hold at a position and respond to manual commands.

To create and schedule a shooter behaviour, you can use the following code:

```cpp
Shooter *shooter = new Shooter("shooter path (in nt tables)", config); // config is a ShooterConfig
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

## Methods


