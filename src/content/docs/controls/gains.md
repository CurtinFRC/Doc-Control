---
title: Gains
---

Some notes on common gain types for FRC mechanisms:

- We can find KV for a mechanism from max speed / max output
- We can find KA for a mechanism from max output \* mass \* radius / stall torque
- You can find PD gains for a system from KV and KA using LQR as done [here](https://github.com/CurtinFRC/2025-Reefscape/blob/97b38f60e3f359b29868ac4a912493ae2ca4138e/src/main/java/org/curtinfrc/frc2025/util/FeedbackAnalysis.java)
- KS is the amount of voltage before the amount required to make a mechanism move
- KS and KG can be found for an elevator or arm using KG = (output up + output down) / 2 and KS = (output up - output down) / 2 where output up and down are the voltage needed to move the mechanism up or down. Note also for arms this will require some use of trig if the arm cannot start flat
- note all of these ignore mechanism gear ratios

Some more notes on tuning can be found in these articles

- https://docs.wpilib.org/en/stable/docs/software/advanced-controls/introduction/tutorial-intro.html
- https://docs.wpilib.org/en/stable/docs/software/advanced-controls/introduction/common-control-issues.html#common-control-loop-tuning-issues
- https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/device-specific/talonfx/closed-loop-requests.html
