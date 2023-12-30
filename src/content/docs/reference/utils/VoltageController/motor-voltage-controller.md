---
title: 'Motor Voltage Controller'
description: 'Motor voltage controller for the robot'
---
The MotorVoltageController is an adapter for an `frc::MotorController` to a VoltageController.

**See also: [Voltage Controller](./index.md)**

## Constructor
```cpp
MotorVoltageController controller(frc::MotorController& motorController);
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

### GetBusVoltage
Gets the bus voltage of the controller.

#### Usage
```cpp
units::volt_t bus_voltage = controller.GetBusVoltage();
```

**Contains all the other methods of [Voltage Controller](./index.md)**
