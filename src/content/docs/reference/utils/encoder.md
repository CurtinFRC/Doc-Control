---
title: Encoders
description: How to use encoders in wombat.
---

## Encoder

### Constructor

**There are no constructors for this class. It is only used to inherit from.**

### Methods

**These methods are available to all classes that inherit from this class.**

#### GetEncoderRawTicks

Returns the raw ticks from the encoder.

##### Example

```cpp
double ticks = encoder->GetEncoderRawTicks();
```

#### GetEncoderTickVelocity

Returns the velocity of the encoder in ticks per second.

##### Example

```cpp
double velocity = encoder->GetEncoderTickVelocity();
```

#### ZeroEncoder

Zeros the encoder.

##### Example

```cpp
encoder->ZeroEncoder();
```

#### SetEncoderPosition

Sets the encoder position.

##### Example

```cpp
encoder->SetEncoderPosition(0);
```

#### SetEncoderOffset

Sets the encoder offset.

##### Example

```cpp
encoder->SetEncoderOffset(0);
```

#### GetEncoderTicks

Returns the encoder ticks.

##### Example

```cpp
double ticks = encoder->GetEncoderTicks();
```

#### GetEncoderTicksPerRotation

Returns the encoder ticks per rotation.

##### Example

```cpp
double ticksPerRotation = encoder->GetEncoderTicksPerRotation();
```

#### SetReduction

Sets the reduction of the encoder.

##### Example

```cpp
encoder->SetReduction(1);
```

#### GetEncoderPosition

Returns the encoder position.

##### Example

```cpp
units::radian_t position = encoder->GetEncoderPosition();
```

#### GetEncoderDistance

Returns the encoder distance.

##### Example

```cpp
double distance = encoder->GetEncoderDistance();
```

#### GetEncoderAngularVelocity

Returns the encoder angular velocity.

##### Example

```cpp
units::radians_per_second_t velocity = encoder->GetEncoderAngularVelocity();
```

## DigitalEncoder

### Constructor

```cpp
wom::DigitalEncoder(int channelA, int channelB, double ticksPerRotation, double reduction = 1)
```

#### Example

```cpp
wom::DigitalEncoder *encoder = new wom::DigitalEncoder(0, 1, 4096);
```

## CANSparkMaxEncoder

### Constructor

```cpp
wom::CANSparkMaxEncoder(rev::CANSparkMax *controller, double reduction = 1)
```

#### Example

```cpp
wom::CANSparkMaxEncoder *encoder = new wom::CANSparkMaxEncoder(&controller);
```

## TalonFXEncoder

### Constructor

```cpp
wom::TalonFXEncoder(ctre::phoenix::motorcontrol::can::TalonFX *controller, double reduction = 1)
```

#### Example

```cpp
wom::TalonFXEncoder *encoder = new wom::TalonFXEncoder(&controller);
```

## TalonSRXEncoder

### Constructor

```cpp
wom::TalonSRXEncoder(ctre::phoenix::motorcontrol::can::TalonSRX *controller, double ticksPerRotation, double reduction = 1);
```

#### Example

```cpp
wom::TalonSRXEncoder *encoder = new wom::TalonSRXEncoder(&controller, 4096);
```

## DutyCycleEncoder

### Constructor

```cpp
wom::DutyCycleEncoder(int channel, double ticksPerRotation = 1, double reduction = 1)
```

#### Example

```cpp
wom::DutyCycleEncoder *encoder = new wom::DutyCycleEncoder(0, 4096);
```

## CanEncoder

### Constructor

```cpp
wom::CanEncoder(int deviceNumber, double ticksPerRotation = 4095, double reduction = 1, std::string name = "Drivebase")
```

#### Example

```cpp
wom::CanEncoder *encoder = new wom::CanEncoder(0, 4096);
```