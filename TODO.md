# TODO List for SAMKIEL BOT Web App Fixes and Enhancements

## 1. Registration Error Handling (Frontend)
- [x] Catch backend errors in `frontend/pages/register.js` and show them as toast notifications instead of Next.js modal errors.
- [x] Replace any `throw new Error()` or `console.error()` used in the `register` function with `toast.error()`.
- [x] Ensure errors like "Email already exists" or "Username already exists" appear as toast notifications, not modal crashes.

## 2. Navbar and Route Fixes
- [x] Fix two navbars rendering on the dashboard by moving the main <Navbar /> component to a common layout wrapper (_app.js or layout.js).
- [x] Add condition to hide navbar on login/register pages: `{!["/login", "/register"].includes(router.pathname) && <Navbar />}`.
- [x] Hide landing page when logged in by redirecting logged-in users to /dashboard in `frontend/pages/index.js`.
- [x] Update "Home" link in navbar to always redirect to /dashboard when logged in.

## 3. Upgrade Landing Page (frontend/pages/index.js)
- [x] Redesign the landing page to make it more visually appealing with Tailwind, include footer details, and modern responsive layout.
- [x] Replace current content with smooth gradient dark background, centered hero section with clear CTAs, and simple professional footer with credit and link.

## Summary of Changes Made:
- Created `frontend/components/Layout.js` to conditionally render Navbar.
- Updated `frontend/pages/_app.js` to use Layout instead of directly rendering Navbar.
- Removed Navbar import and render from `frontend/pages/dashboard.js`.
- Updated `frontend/components/Navbar.js` to conditionally link Home to dashboard if user is logged in.
- Redesigned `frontend/pages/index.js` with new layout, added redirect for logged-in users, and included footer.
- Updated `frontend/lib/auth.js` register function to use toast.error for errors and updated success message.

All tasks have been completed successfully. The web app now has improved error handling, fixed navbar issues, and an enhanced landing page.
