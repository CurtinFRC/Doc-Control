---
title: NI Driverstation Protocol
---

For more in depth documentation see [frcture](https://frcture.readthedocs.io/en/latest/).

Driverstation Values
---
``` bash
# Modes
Teleoperated = 0x00;
Test = 0x01;
Autonomous = 0x02;

# Enabled/Disabled
Enabled = 0x04;
EmergencyStop = 0x80;

# Alliance colour and position
Red1 = 0x00;
Red2 = 0x01;
Red3 = 0x02;
Blue1 = 0x03;
Blue2 = 0x04;
Blue3 = 0x05;

# Other
RequestRestartCode = 0x04;
RequestReboot = 0x08;
RequestNormal = 0x00;
TagCommVersion = 0x01;
FMSCommVersion = 0x00;
FMSConnected = 0x08;
FMSRadioPing = 0x10;
FMSRobotPing = 0x08;
FMSRobotComms = 0x20;
RTagCANInfo = 0x0e;
RTagCPUInfo = 0x05;
RTagRAMInfo = 0x06;
RTagDiskInfo = 0x04;
RequestTime = 0x01;
RobotHasCode = 0x20;
TagDate = 0x0f;
TagJoystick = 0x0c;
TagTimezone = 0x10;
```

Packet structure
---
Each packet consists of 6 bytes.
- second byte is packet size
- fourth byte is the mode and enabled/disabled message
- sixth byte is the alliance position and colour
