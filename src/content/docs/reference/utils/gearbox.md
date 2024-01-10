---
title: 'Gearbox'
description: 'A struct allowing for a simple abstraction over everything normally included in a Gearbox'
---

The Gearbox struct has 3 components, a Voltage Controller, an Encoder and an frc::DCMotor. These components are everything normally used in a gearbox. We provide them here in order to provide a centralised and standardised way of decalaring them in Wombat. This means if we say, switch from Neos to Falcons we have very little refactoring to do and it is very easy to find where we must refactor.

## Usage
Most commonly you will see the Gearbox used as an item in a config for a subsystem eg:
```cpp
struct IntakeConfig {
  wom::Gearbox _gearbox;
}
```
We can then call its individual fields the same way we would any other struct, giving us access to all of their public methods and properties. An example of something we might want to do is send a voltage through the VoltageController. We can do this very easily, no matter the VoltageController our Gearbox gets when instantiated.
```cpp
_config._gearbox.transmission->SetVoltage(11_V);
```
This kind of thing avoids large refactoring changes if we say switch out individual components in our Gearbox.
