---
title: 'Encoder'
description: 'An extendable abstraction for Encoders'
---

When working in FRC one of the most important things is knowing where you are. One of the most important things in doing this is encoders. Unfortunately there are a lot of encoders. To make code easier to refactor and write we have created an abstraction over the many different encoders.

## Usage

### Constructor
This class shouldn't be used directly but there are some common items from this constructor that will be used in inherited classes.
```cpp
Encoder(double encoderTicksPerRotation, double reduction, int type)
```
