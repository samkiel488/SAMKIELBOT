# TODO: Fix and Enhance SAMKIEL BOT Authentication System

## 1. Fix React Hot Toast Reference Error
- [x] Import `toast` from "react-hot-toast" in `frontend/pages/register.js`
- [x] Import `toast` from "react-hot-toast" in `frontend/pages/login.js`
- [x] Verify `react-hot-toast` is installed (already in package.json)
- [x] Ensure `<Toaster />` is in `frontend/pages/_app.js` (already present)

## 2. Fix Auto-Logout After Login
- [x] Install `jwt-decode` package in frontend
- [x] Update `frontend/lib/auth.js` useEffect to use `jwt-decode` for client-side token validation
- [x] Ensure token is saved before any validation or redirect in login/register functions (already done)
- [x] Verify backend returns JWT with `exp` claim (confirmed in authController.js)

## 3. Add Loading States for Auth Actions
- [x] Add loading state in `frontend/pages/register.js` for form submission
- [x] Add loading state in `frontend/pages/login.js` for form submission
- [x] Update button text and disable during loading
- [x] Add visual feedback (dim button, cursor-not-allowed)

## 4. Final Testing Checklist
- [ ] Test registration: No toast error, success/error toasts, loading state
- [ ] Test login: Loading state, stays logged in after redirect, no immediate logout
- [ ] Test token persistence across refresh
