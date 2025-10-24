# TODO: Fix Render Backend Deployment Issues

- [x] Remove duplicate `userSchema.index()` calls in `backend/models/User.js` to eliminate index warnings, keeping only `unique: true` in schema.
- [x] Add try-catch around `app.listen()` in `backend/server.js` to handle EADDRINUSE errors gracefully. 
- [x] Update root `package.json` "start" script to run only backend: `"start": "npm run start --prefi x backend"`.
- [x] Fix MongoDB connection log in `backend/config/db.js` to "MongoDB Connected".
- [x] Ensure clear console logs for server start and MongoDB connection in `backend/server.js` and `backend/config/db.js`.
