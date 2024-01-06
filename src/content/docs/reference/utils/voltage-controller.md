---
title: 'Voltage Controller'
description: 'Voltage controller for the robot'
---
A VoltageController is analagous to a MotorController, but in terms of voltage instead of speed. It adapts the MotorController in order to control it via voltage instead of speed.

## Constructor
```cpp
VoltageController *controller = new VoltageController(frc::MotorController &motorController);
```

## Methods
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

### GetBusVoltage
Gets the bus voltage of the controller.

#### Usage
```cpp
units::volt_t bus_voltage = controller.GetBusVoltage();
```
