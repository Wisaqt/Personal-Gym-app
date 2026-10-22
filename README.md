# gym-log

A personal workout tracker I built to log daily lifting sessions, track progressive overload, and calculate barbell plates at the gym without dealing with ads, bloated fitness apps, or subscriptions.

Works on mobile as an installable PWA (iOS and Android) and saves everything locally to the device.

## Features

- **Workout Logger:** Track daily exercises, sets, reps, and weights with progressive overload cues.
- **Exercise Library:** 60+ exercises with form demonstrations, target muscles, and alternatives.
- **Plate Calculator:** Barbell math for 20kg/15kg bars with visual plate breakdown.
- **Profiles:** Support for multiple user profiles.
- **Offline First:** Fully functional without an internet connection using Service Workers.
- **No Account Needed:** Everything is stored in browser `localStorage`.

## Tech

- Vanilla JavaScript, CSS3, HTML5
- Service Worker API for offline cache
- Zero external build tools or frameworks

## Running locally

```bash
node server.js
```

Open `http://localhost:3000` in your browser.
