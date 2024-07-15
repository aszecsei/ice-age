# Ice Age

> a frozen survival modpack with an emphasis on tech mods

## Getting Started

This modpack uses [packwiz](https://packwiz.infra.link/). This tool can be used to create local archives, or [packwiz-installer](https://packwiz.infra.link/tutorials/installing/packwiz-installer/) can create auto-updating instances. The following instructions will use [Prism Launcher](https://prismlauncher.org/) and `packwiz-installer` for a simple installation procedure.

1. Set up an instance in Prism using Minecraft 1.20.1 and NeoForge 47.1.106 (or later)
2. Download `packwiz-installer-bootstrap.jar` from the [GitHub releases](https://github.com/packwiz/packwiz-installer-bootstrap/releases) and copy it into the instance's `.minecraft` folder
3. Go to `Edit > Settings > Custom commands` and enable custom commands using the checkbox.
4. Type `"$INST_JAVA" -jar packwiz-installer-bootstrap.jar "https://raw.githubusercontent.com/aszecsei/ice-age/main/pack.toml"` into the `Pre-launch command` field.
5. Launch the instance. Some mods may require manual downloading from CurseForge; `packwiz-installer` will notify you of these requirements.