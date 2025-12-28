# Project File Guide

Short descriptions of the important files in this repo so you can quickly find what does what.

## Root
- `ProjectSummary.md` – high-level goals and scope for the bike-controlled Mario Kart prototype.
- `README.md` – original upstream README (install/run steps and legacy drift-oriented gameplay notes).
- `index.html` – Vite entry HTML; mounts the React app.
- `package.json`, `package-lock.json`, `bun.lockb` – dependency manifests/locks.
- `vite.config.js`, `eslint.config.js` – tooling configuration.

## Source entry and layout
- `src/main.jsx` – React entry point; renders the canvas container, mobile controls, WebGPU canvas, and version badge.
- `src/App.jsx` – top-level scene assembly; wires keyboard controls, track scene, lighting, postprocessing composer; also sets the shared noise texture used by effects.
- `src/WebGPUCanvas.jsx` – wraps `<Canvas>` with shadows and basic GL settings, runs the app inside a BVH for frustum culling, and preloads assets.
- `src/index.css` – global styles for the canvas, loading screen, mobile UI, and HUD bits.

## Gameplay & state
- `src/PlayerController.jsx` – core movement loop: updates speed/rotation, handles jumping, smooths camera follow, and performs BVH-based wall collisions; feeds speed/position into the store.
- `src/constants.js` – kart tuning (min/max speed).
- `src/store.js` – zustand store for shared game state (position, speed, boosting flag, noise texture, joystick state, etc.).
- `src/utils/KartCollision.js` – collision helpers (BVH collider builders, capsule/box collision checks, and debug wall/pillar creators) used by the player controller.

## Scene and visuals
- `src/TrackScene.jsx` – assembles the playable scene: player controller plus the GLTF track model.
- `src/models/Mario-circuit-test.jsx` – GLTF-derived track loader; positions/scales the course, tags ground/dirt/wall meshes, and exposes the scene to the store.
- `src/misc/Lighting.jsx` – directional light that follows the player plus the environment sphere backdrop.
- `src/misc/EnvironmentSphere.jsx` – gradient sky shader and sun quad inside an HDRI environment preset; shaders live in `src/misc/vertex.glsl` and `src/misc/fragment.glsl`.
- `src/Composer.jsx` – postprocessing stack with custom color grading and bloom.
- `src/ColorGradingEffect.jsx` – custom postprocessing effect implementing extensive color adjustments, dirt/noise overlays, and chromatic aberration; driven by uniforms and the global noise texture.

## Vehicles & particles
- `src/models/Witch.jsx` – main rider/kart model (rigged “witch” glTF) with animation blending and wheel pose coupling; delegates wheel physics to `Wheels`.
- `src/models/Wheels.jsx` – simplified wheel rig: raycasts to ground, keeps wheels stuck to terrain, tilts the chassis, and steers front wheels based on input.
- `src/models/KartDust.jsx` – ties wheel contact states to dust particle emitters via imperative refs.
- `src/models/Kart.jsx` – legacy kart model with drift VFX (glows/sparks/trails/smoke); currently unused but kept in the repo.
- `src/particles/Dust.jsx` – removed; dust emitters were disabled with the VFX system.

## Input (mobile & touch)
- `src/hooks/useTouchScreen.js` – removed; touch/mobile controls were dropped.
- `src/mobile/...` – removed; touch controls were dropped.

## VFX framework
- Removed; custom VFX system and particle emitters were removed from the project.

## Assets
- `src/assets/react.svg` – default Vite icon (unused in-game).
