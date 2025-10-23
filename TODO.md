# TODO: Fix JWT Token Deletion Issue in SAMKIEL BOT Frontend

## Tasks
- [x] Update `frontend/lib/auth.js` to add detailed logging, set token/user before verification, prevent premature logout, add custom logout with reason, and include toast for logout.
- [x] Update `frontend/lib/api.js` to add logging in interceptors for requests and responses.
- [x] Ensure login sets user correctly (without token in user state, but it's minor).
- [x] Fix login function to extract token from correct backend response structure (data.data.token).
- [x] Fix register function to extract token from correct backend response structure (data.data.token).
- [ ] Test login flow, check console for logs.
- [ ] Verify token persists after login and on dashboard load.
- [ ] If issues persist, check backend for token generation or middleware.
