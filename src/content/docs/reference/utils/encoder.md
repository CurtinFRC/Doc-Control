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
DigitalEncoder(int channelA, int channelB, double ticksPerRotation, double reduction = 1)
```

#### Example

```cpp
DigitalEncoder *encoder = new DigitalEncoder(0, 1, 4096);
```

## CANSparkMaxEncoder

### Constructor

```cpp
CANSparkMaxEncoder(rev::CANSparkMax *controller, double reduction = 1)
```

#### Example

```cpp
CANSparkMaxEncoder *encoder = new CANSparkMaxEncoder(&controller);
```

## TalonFXEncoder

### Constructor

```cpp
TalonFXEncoder(ctre::phoenix::motorcontrol::can::TalonFX *controller, double reduction = 1)
```

#### Example

```cpp
TalonFXEncoder *encoder = new TalonFXEncoder(&controller);
```

## TalonSRXEncoder

### Constructor

```cpp
TalonSRXEncoder(ctre::phoenix::motorcontrol::can::TalonSRX *controller, double ticksPerRotation, double reduction = 1);
```

#### Example

```cpp
TalonSRXEncoder *encoder = new TalonSRXEncoder(&controller, 4096);
```

## DutyCycleEncoder

### Constructor

```cpp
DutyCycleEncoder(int channel, double ticksPerRotation = 1, double reduction = 1)
```

#### Example

```cpp
DutyCycleEncoder *encoder = new DutyCycleEncoder(0, 4096);
```

## CanEncoder

### Constructor

```cpp
CanEncoder(int deviceNumber, double ticksPerRotation = 4095, double reduction = 1, std::string name = "Drivebase")
```

#### Example

```cpp
CanEncoder *encoder = new CanEncoder(0, 4096);
```


