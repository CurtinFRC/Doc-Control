---
title: Limelight
description: Vision subsystem
---

The limelight API is for interfacing with limelights in a behaviour form.

To create and schedule a limelight behaviour, you can use the following code:

```cpp
Limelight *limelight = new Limelight("limelight name");
```

## Parameters

| Type | Name | Description | See Also |
| ---- | ---- | ----------- | -------- |
| `std::string` | `name` | The name of the limelight | |

## Enums

### LimelightTargetingData

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `tv` | Whether the limelight has any valid targets (0 or 1) | `LimelightTargetingData::kTv` |
| `tx` | Horizontal Offset From Crosshair To Target (LL1: -27 degrees to 27 degrees / LL2: -29.8 to 29.8 degrees) | `LimelightTargetingData::kTx` |
| `ty` | Vertical Offset From Crosshair To Target (LL1: -20.5 degrees to 20.5 degrees / LL2: -24.85 to 24.85 degrees) | `LimelightTargetingData::kTy` |
| `ta` | Target Area (0% of image to 100% of image) | `LimelightTargetingData::kTa` |
| `tl` | The pipeline's latency contribution (ms). Add to "cl" to get total latency. | `LimelightTargetingData::kTl` |
| `cl` | Capture pipeline latency (ms). Time between the end of the exposure of the middle row of the sensor to the beginning of the tracking pipeline. | `LimelightTargetingData::kCl` |
| `tshort` | Sidelength of shortest side of the fitted bounding box (pixels) | `LimelightTargetingData::kTshort` |
| `tlong` | Sidelength of longest side of the fitted bounding box (pixels) | `LimelightTargetingData::kTlong` |
| `thor` | Horizontal sidelength of the rough bounding box (0 - 320 pixels) | `LimelightTargetingData::kThor` |
| `tvert` | Vertical sidelength of the rough bounding box (0 - 320 pixels) | `LimelightTargetingData::kTvert` |
| `getpipe` | True active pipeline index of the camera (0 .. 9) | `LimelightTargetingData::kGetpipe` |
| `json` | Full JSON dump of targeting results | `LimelightTargetingData::kJson` |
| `tclass` | Class ID of primary neural detector result or neural classifier result | `LimelightTargetingData::kTclass` |
| `tc` | Get the average HSV color underneath the crosshair region as a NumberArray | `LimelightTargetingData::kTc` |

### LimelightAprilTagData

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `botpose` | Robot transform in field-space. Translation (X,Y,Z) Rotation(Roll,Pitch,Yaw), total latency (cl+tl) | `LimelightAprilTagData::kBotpose` |
| `botpose_wpiblue` | Robot transform in field-space (blue driverstation WPILIB origin). Translation (X,Y,Z) Rotation(Roll,Pitch,Yaw), total latency (cl+tl) | `LimelightAprilTagData::kBotpose_wpiblue` |
| `botpose_wpired` | Robot transform in field-space (red driverstation WPILIB origin). Translation (X,Y,Z) Rotation(Roll,Pitch,Yaw), total latency (cl+tl) | `LimelightAprilTagData::kBotpose_wpired` |
| `camerapose_targetspace` | 3D transform of the camera in the coordinate system of the primary in-view AprilTag (array (6)) | `LimelightAprilTagData::kCamerapose_targetspace` |
| `targetpose_cameraspace` | 3D transform of the primary in-view AprilTag in the coordinate system of the Camera (array (6)) | `LimelightAprilTagData::kTargetpose_cameraspace` |
| `targetpose_robotspace` | 3D transform of the primary in-view AprilTag in the coordinate system of the Robot (array (6)) | `LimelightAprilTagData::kTargetpose_robotspace` |
| `botpose_targetspace` | 3D transform of the robot in the coordinate system of the primary in-view AprilTag (array (6)) | `LimelightAprilTagData::kBotpose_targetspace` |
| `camerapose_robotspace` | 3D transform of the camera in the coordinate system of the robot (array (6)) | `LimelightAprilTagData::kCamerapose_robotspace` |
| `tid0` | The ID of the primary AprilTag in the image | `LimelightAprilTagData::kTid` |

### LimelightLEDMode

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `PipelineDefault` | Use the LED Mode set in the current pipeline | `LimelightLEDMode::kPipelineDefault` |
| `ForceOff` | Force the LEDs off | `LimelightLEDMode::kForceOff` |
| `ForceBlink` | Force the LEDs to blink | `LimelightLEDMode::kForceBlink` |
| `ForceOn` | Force the LEDs on | `LimelightLEDMode::kForceOn` |

### LimelightCamMode

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `VisionProcessor` | Vision processor | `LimelightCamMode::kVisionProcessor` |
| `DriverCamera` | Driver camera (Increases exposure, disables vision processing) | `LimelightCamMode::kDriverCamera` |

### LimelightPipeline

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `Pipeline0` | Pipeline 0 | `LimelightPipeline::kPipeline0` |
| `Pipeline1` | Pipeline 1 | `LimelightPipeline::kPipeline1` |
| `Pipeline2` | Pipeline 2 | `LimelightPipeline::kPipeline2` |
| `Pipeline3` | Pipeline 3 | `LimelightPipeline::kPipeline3` |
| `Pipeline4` | Pipeline 4 | `LimelightPipeline::kPipeline4` |
| `Pipeline5` | Pipeline 5 | `LimelightPipeline::kPipeline5` |
| `Pipeline6` | Pipeline 6 | `LimelightPipeline::kPipeline6` |
| `Pipeline7` | Pipeline 7 | `LimelightPipeline::kPipeline7` |
| `Pipeline8` | Pipeline 8 | `LimelightPipeline::kPipeline8` |
| `Pipeline9` | Pipeline 9 | `LimelightPipeline::kPipeline9` |

### LimelightStreamMode

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `Standard` | Side-by-side streams if a webcam is attached to Limelight | `LimelightStreamMode::kStandard` |
| `PiPMain` | The secondary camera stream is placed in the lower-right corner of the primary camera stream | `LimelightStreamMode::kPiPMain` |
| `PiPSecondary` | The primary camera stream is placed in the lower-right corner of the secondary camera stream | `LimelightStreamMode::kPiPSecondary` |

### LimelightSnapshot

| Name | Description | Usage |
| ---- | ----------- | ----- |
| `Reset` | Reset snapshot mode
 | `LimelightSnapshot::kReset` |
| `Single` | Take two snapshots per second | `LimelightSnapshot::kSingle` |

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
std::vector<double> GetAprilTagData(LimeLightAprilTagData dataType);
```

#### Example

```cpp
std::vector<double> data = limelight->GetAprilTagData(LimeLightAprilTagData::kBotpose);
```

### GetTargetingData

Gets the targeting data from the limelight. The string that you pass in corresponds to the data that you want to fetch from it.

```cpp
double GetTargetingData(LimelightTargetingData, double defaultValue = 0.0)
```

#### Example

```cpp
double data = limelight->GetTargetingData(LimelightTargetingData::kTx);
```

### SetLEDMode

Sets the LED mode of the limelight.

```cpp
void SetLEDMode(Limelight::LEDMode mode);
```

#### Example

```cpp
limelight->SetLEDMode(Limelight::LEDMode::kForceOn);
```

### SetCamMode

Sets the camera mode of the limelight.

```cpp
void SetCamMode(Limelight::CamMode mode);
```

#### Example

```cpp
limelight->SetCamMode(Limelight::CamMode::kDriverCamera);
```

### SetPipeline

Sets the pipeline of the limelight.

```cpp
void SetPipeline(Limelight::Pipeline pipeline);
```

#### Example

```cpp
limelight->SetPipeline(Limelight::Pipeline::kPipeline0);
```

### SetStreamMode

Sets the stream mode of the limelight.

```cpp
void SetStreamMode(Limelight::StreamMode mode);
```

#### Example

```cpp
limelight->SetStreamMode(Limelight::StreamMode::kPiPMain);
```

### SetSnapshot

Sets the snapshot mode of the limelight.

```cpp
void SetSnapshot(Limelight::Snapshot mode);
```

#### Example

```cpp
limelight->SetSnapshot(Limelight::Snapshot::kSingle);
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