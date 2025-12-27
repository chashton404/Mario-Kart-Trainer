# Bike-Controlled Mario Kart (Web)

## Project Overview

This project turns an indoor bike trainer into a game controller.

The goal is to ride a **real bike** and control a **Mario Kart–style racing game in the browser**, where:
- Pedaling harder makes the kart go faster
- The player rides along a 3D Mario Kart track
- Real cycling data (power, cadence, etc.) drives gameplay instead of keyboard input

The project is built on top of the open-source **Mario-Kart-3.js** Three.js demo and extends it with **real-world sensor input via Web Bluetooth**.

---

## Core Idea

Instead of pressing `W` to accelerate:

- The game connects to a **Wahoo KICKR Core** smart trainer via **Web Bluetooth**
- The trainer streams **instantaneous power (watts)**
- Watts are mapped to **kart throttle / speed**
- The rider physically pedals to move through the track

This creates a lightweight fitness game that blends:
- indoor cycling
- real-time physics
- 3D web graphics

---

## Hardware & Inputs

### Primary Input (Required)
- **Wahoo KICKR Core**
  - Connected via Bluetooth Low Energy
  - Uses the standard **Cycling Power Service (UUID 0x1818)**
  - Reads **Cycling Power Measurement (UUID 0x2A63)**

### Optional Inputs (Future)
- Cadence (derived from Cycling Power packets)
- Heart Rate (via BLE heart-rate strap)
- Keyboard or gamepad for steering or items

---

## Technology Stack

- **Three.js** – 3D rendering
- **Web Bluetooth** – real-time bike sensor input
- **JavaScript (ES Modules)**
- **Vite** (via Mario-Kart-3.js)
- **glTF (.glb)** – 3D track models
- **Git branches** for experimentation and feature isolation

---

## Current Scope

### In Scope
- Load a custom Mario Kart track (`.glb`) into the scene
- Connect to the bike trainer from the browser
- Stream live power data
- Smooth and map watts to throttle
- Replace keyboard acceleration with bike input
- Simplify visuals (disable particles and post-processing) for clarity and performance

### Out of Scope (for now)
- Items or weapons
- Multiplayer
- Highly realistic kart physics
- Reverse engineering proprietary controllers (e.g. Zwift Click, SRAM AXS)

---

## Design Philosophy

- **Open standards first**
  - Use Bluetooth SIG services (Cycling Power, FTMS)
  - Avoid closed or proprietary BLE devices
- **Simple over realistic**
  - Arcade-style physics
  - Clear mapping from effort to motion
- **Debuggable**
  - Minimal visual noise while developing
  - On-screen overlays for watts, speed, and throttle
- **Iterative**
  - Start playable quickly
  - Add complexity only when needed

---

## Planned Architecture
Wahoo KICKR Core
↓ (BLE)
Web Bluetooth
↓
Power (Watts)
↓
Smoothing / Mapping
↓
Kart Throttle / Speed
↓
Three.js Render Loop

---

## Branching Strategy

- `main`
  - Original Mario-Kart-3.js behavior
- `chore/simplify-rendering`
  - Disable particles, post-processing, and heavy effects
- `feature/bike-controls`
  - Web Bluetooth integration
  - Watts to throttle mapping
  - Trainer-specific logic

---

## Long-Term Ideas (Optional)

- Resistance control (FTMS) for hills and terrain
- Time trials and lap timing
- Energy or stamina systems based on heart rate
- Custom tracks designed specifically for cycling
- Local leaderboards or performance tracking

---

## Summary

This project is about **making biking feel like playing a game**, not turning Mario Kart into a simulator.

If pedaling harder makes Mario go faster, the project is a success.
