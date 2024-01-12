---
title: Limelight
description: Vision subsystem
---

The limelight API is for interfacing with limelights in a behaviour form.

To create a limelight, you can use the following code:

```cpp
wom::Limelight *limelight = new wom::Limelight("limelight name");
```

## Parameters

| Type | Name | Description | See Also |
| ---- | ---- | ----------- | -------- |
| `std::string` | `name` | The name of the limelight | |

## Enums

### LimelightTargetingData

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `tv` | Whether the limelight has any valid targets (0 or 1) | `wom::LimelightTargetingData::kTv` |
| `tx` | Horizontal Offset From Crosshair To Target (LL1: -27 degrees to 27 degrees / LL2: -29.8 to 29.8 degrees) | `wom::LimelightTargetingData::kTx` |
| `ty` | Vertical Offset From Crosshair To Target (LL1: -20.5 degrees to 20.5 degrees / LL2: -24.85 to 24.85 degrees) | `wom::LimelightTargetingData::kTy` |
| `ta` | Target Area (0% of image to 100% of image) | `wom::LimelightTargetingData::kTa` |
| `tl` | The pipeline's latency contribution (ms). Add to "cl" to get total latency. | `wom::LimelightTargetingData::kTl` |
| `cl` | Capture pipeline latency (ms). Time between the end of the exposure of the middle row of the sensor to the beginning of the tracking pipeline. | `wom::LimelightTargetingData::kCl` |
| `tshort` | Sidelength of shortest side of the fitted bounding box (pixels) | `wom::LimelightTargetingData::kTshort` |
| `tlong` | Sidelength of longest side of the fitted bounding box (pixels) | `wom::LimelightTargetingData::kTlong` |
| `thor` | Horizontal sidelength of the rough bounding box (0 - 320 pixels) | `wom::LimelightTargetingData::kThor` |
| `tvert` | Vertical sidelength of the rough bounding box (0 - 320 pixels) | `wom::LimelightTargetingData::kTvert` |
| `getpipe` | True active pipeline index of the camera (0 .. 9) | `wom::LimelightTargetingData::kGetpipe` |
| `json` | Full JSON dump of targeting results | `wom::LimelightTargetingData::kJson` |
| `tclass` | Class ID of primary neural detector result or neural classifier result | `wom::LimelightTargetingData::kTclass` |
| `tc` | Get the average HSV color underneath the crosshair region as a NumberArray | `wom::LimelightTargetingData::kTc` |

### LimelightAprilTagData

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `botpose` | Robot transform in field-space. Translation (X,Y,Z) Rotation(Roll,Pitch,Yaw), total latency (cl+tl) | `wom::LimelightAprilTagData::kBotpose` |
| `botpose_wpiblue` | Robot transform in field-space (blue driverstation WPILIB origin). Translation (X,Y,Z) Rotation(Roll,Pitch,Yaw), total latency (cl+tl) | `wom::LimelightAprilTagData::kBotpose_wpiblue` |
| `botpose_wpired` | Robot transform in field-space (red driverstation WPILIB origin). Translation (X,Y,Z) Rotation(Roll,Pitch,Yaw), total latency (cl+tl) | `wom::LimelightAprilTagData::kBotpose_wpired` |
| `camerapose_targetspace` | 3D transform of the camera in the coordinate system of the primary in-view AprilTag (array (6)) | `wom::LimelightAprilTagData::kCamerapose_targetspace` |
| `targetpose_cameraspace` | 3D transform of the primary in-view AprilTag in the coordinate system of the Camera (array (6)) | `wom::LimelightAprilTagData::kTargetpose_cameraspace` |
| `targetpose_robotspace` | 3D transform of the primary in-view AprilTag in the coordinate system of the Robot (array (6)) | `wom::LimelightAprilTagData::kTargetpose_robotspace` |
| `botpose_targetspace` | 3D transform of the robot in the coordinate system of the primary in-view AprilTag (array (6)) | `wom::LimelightAprilTagData::kBotpose_targetspace` |
| `camerapose_robotspace` | 3D transform of the camera in the coordinate system of the robot (array (6)) | `wom::LimelightAprilTagData::kCamerapose_robotspace` |
| `tid0` | The ID of the primary AprilTag in the image | `wom::LimelightAprilTagData::kTid` |

### LimelightLEDMode

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `PipelineDefault` | Use the LED Mode set in the current pipeline | `wom::LimelightLEDMode::kPipelineDefault` |
| `ForceOff` | Force the LEDs off | `wom::LimelightLEDMode::kForceOff` |
| `ForceBlink` | Force the LEDs to blink | `wom::LimelightLEDMode::kForceBlink` |
| `ForceOn` | Force the LEDs on | `wom::LimelightLEDMode::kForceOn` |

### LimelightCamMode

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `VisionProcessor` | Vision processor | `wom::LimelightCamMode::kVisionProcessor` |
| `DriverCamera` | Driver camera (Increases exposure, disables vision processing) | `wom::LimelightCamMode::kDriverCamera` |

### LimelightPipeline

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `Pipeline0` | Pipeline 0 | `wom::LimelightPipeline::kPipeline0` |
| `Pipeline1` | Pipeline 1 | `wom::LimelightPipeline::kPipeline1` |
| `Pipeline2` | Pipeline 2 | `wom::LimelightPipeline::kPipeline2` |
| `Pipeline3` | Pipeline 3 | `wom::LimelightPipeline::kPipeline3` |
| `Pipeline4` | Pipeline 4 | `wom::LimelightPipeline::kPipeline4` |
| `Pipeline5` | Pipeline 5 | `wom::LimelightPipeline::kPipeline5` |
| `Pipeline6` | Pipeline 6 | `wom::LimelightPipeline::kPipeline6` |
| `Pipeline7` | Pipeline 7 | `wom::LimelightPipeline::kPipeline7` |
| `Pipeline8` | Pipeline 8 | `wom::LimelightPipeline::kPipeline8` |
| `Pipeline9` | Pipeline 9 | `wom::LimelightPipeline::kPipeline9` |

### LimelightStreamMode

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `Standard` | Side-by-side streams if a webcam is attached to Limelight | `wom::LimelightStreamMode::kStandard` |
| `PiPMain` | The secondary camera stream is placed in the lower-right corner of the primary camera stream | `wom::LimelightStreamMode::kPiPMain` |
| `PiPSecondary` | The primary camera stream is placed in the lower-right corner of the secondary camera stream | `wom::LimelightStreamMode::kPiPSecondary` |


### LimelightSnapshot

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `Reset` | Reset snapshot mode | `wom::LimelightSnapshotMode::kReset` |
| `Single` | Take two snapshots per second | `wom::LimelightSnapshotMode::kSingle` |


## Methods

### GetName

Gets the name of the limelight.

```cpp
std::string GetName();
```

### GetOffset

Gets the offset of the limelight.

```cpp
std::pair<double, double> GetOffset();
``` 

#### Example

```cpp
std::pair<double, double> offset = limelight->GetOffset();
```

### GetAprilTagData

Gets the AprilTag data from the limelight. The string that you pass in corresponds to the data that you want to fetch from it.

```cpp
std::vector<double> GetAprilTagData(wom::LimelightAprilTagData dataType);
```

#### Example

```cpp
std::vector<double> data = limelight->GetAprilTagData(wom::LimeLightAprilTagData::kBotpose);
```

### GetTargetingData

Gets the targeting data from the limelight. The string that you pass in corresponds to the data that you want to fetch from it.

```cpp
double GetTargetingData(wom::LimelightTargetingData, double defaultValue = 0.0)
```

#### Example

```cpp
double data = limelight->GetTargetingData(wom::LimelightTargetingData::kTx);
```

### SetLEDMode

Sets the LED mode of the limelight.

```cpp
void SetLEDMode(wom::LimelightLEDMode mode);
```

#### Example

```cpp
limelight->SetLEDMode(wom::LimelightLEDMode::kForceOn);
```

### SetCamMode

Sets the camera mode of the limelight.

```cpp
void SetCamMode(wom::LimelightCamMode mode);
```

#### Example

```cpp
limelight->SetCamMode(wom::LimelightCamMode::kDriverCamera);
```

### SetPipeline

Sets the pipeline of the limelight.

```cpp
void SetPipeline(wom::LimelightPipeline pipeline);
```

#### Example

```cpp
limelight->SetPipeline(wom::LimelightPipeline::kPipeline0);
```

### SetStreamMode

Sets the stream mode of the limelight.

```cpp
void SetStreamMode(wom::LimelightStreamMode mode);
```

#### Example

```cpp
limelight->SetStreamMode(wom::LimelightStreamMode::kPiPMain);
```

### SetSnapshot

Sets the snapshot mode of the limelight.

```cpp
void SetSnapshot(wom::LimelightSnapshot mode);
```

#### Example

```cpp
limelight->SetSnapshot(wom::LimelightSnapshotMode::kSingle);
```

### SetCrop

Sets the crop of the limelight.

```cpp
void SetCrop(std::array<double, 4> crop);
```

#### Example

```cpp
limelight->SetCrop({0.0, 0.0, 0.0, 0.0});
```

### IsAtSetPoseVision

Checks if the limelight is at the set pose.

```cpp
bool IsAtSetPoseVision(frc::Pose3d pose, units::second_t dt);
```

#### Example

```cpp
bool isAtSetPose = limelight->IsAtSetPoseVision(frc::Pose3d(0_m, 0_m, 0_rad), 0_s);
```

### GetSpeed

Gets the speed of the limelight between two poses.

```cpp
units::meters_per_second_t GetSpeed(frc::Pose3d pose1, frc::Pose3d pose2, units::second_t dt);
```

#### Example

```cpp
units::meters_per_second_t speed = limelight->GetSpeed(frc::Pose3d(0_m, 0_m, 0_rad), frc::Pose3d(0_m, 0_m, 0_rad), 0_s);
```

### GetPose

Gets the pose of the limelight.

```cpp
frc::Pose3d GetPose();
```

#### Example

```cpp
frc::Pose3d pose = limelight->GetPose();
```