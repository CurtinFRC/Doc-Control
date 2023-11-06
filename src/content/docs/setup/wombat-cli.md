---
title: 'Download Wombat CLI'
description: 'Download the Wombat CLI'
sidebar:
    order: 1
---

To easily create a project we have developed a CLI application. It is written in rust and can easily be installed on any platform.

## Download

### Release

To download the latest release you can go to the [releases page](https://github.com/spacey-sooty/create_wombat_project/releases) on github and download the setup file.

### From Source

To download from source you can clone the repository and build it yourself.

#### Windows

##### Install Dependencies
Download the following dependencies:

- [Rust](https://www.rust-lang.org/tools/install)
- [Git](https://git-scm.com/downloads)
- [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)

##### Build

Then run the following commands in a terminal:
```bash
git clone https://github.com/CurtinFRC/create_wombat_project.git
cd create_wombat_project
cargo install
cargo build
```

#### Linux

##### Install Dependencies
```bash
sudo apt install git
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

##### Build 
To install navigate to the directory you want to install the CLI in and run the following command:
```bash
git clone https://github.com/CurtinFRC/create_wombat_project.git
cd create_wombat_project
sudo cargo install
sudo cargo build
```

