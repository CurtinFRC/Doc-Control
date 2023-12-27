---
title: 'Voltage Controller'
description: 'Voltage controller for the robot'
---

A VoltageController is analagous to a MotorController, but in terms of voltage instead of speed.

## Usage

### Constructor
This class shouldn't be used directly

### SetVoltage
Sets the voltage of the controller.

#### Usage
```cpp
controller.SetVoltage(12_V);
```

### GetVoltage
Gets the voltage of the controller.

#### Usage
```cpp
units::volt_t voltage = controller.GetVoltage();
```

### SetInverted
Sets the inversion of the controller.

#### Usage
```cpp
controller.SetInverted(true);
```

### GetInverted
Gets the inversion of the controller.

#### Usage
```cpp
bool inverted = controller.GetInverted();
```

### GetEstimatedRealVoltage
Get the estimated real voltage of the output, based on the controller voltage.

#### Usage
```cpp
units::volt_t real_voltage = controller.GetEstimatedRealVoltage();
```
