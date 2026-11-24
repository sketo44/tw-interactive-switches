# Salla component bundle workflow

The maintained Arabic publishing checklist is included in `README.md` under **مسار النشر المختصر**. Keep the following gates in order:

1. Define the supported page component in `twilight-bundle.json`.
2. Build, test, and run the official Salla demo locally.
3. Push the tested code to `main`.
4. Prepare at least four 1600×1200 JPEG screenshots below 200 KB.
5. Fill Arabic and English screenshot metadata, pricing, and support details.
6. Submit the publication request and wait for Salla review.
7. Install and test in a demo store after Salla makes the bundle available.

On Windows, retain the Vite middleware that rewrites `/@fsC:/` to `/@fs/C:/` for the current Salla demo plugin.
