module.exports = [
"[externals]/jwt-decode [external] (jwt-decode, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("jwt-decode");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/auth.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/jwt-decode [external] (jwt-decode, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])();
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Custom logout function
    const logout = (reason = "Manual logout")=>{
        console.warn("🔴 Logging out triggered:", reason);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].success(`Logged out successfully.`, {
            duration: 3000
        });
        router.push("/login");
    };
    // Login function
    const login = async (identifier, password)=>{
        try {
            console.log("🟢 Logging in...");
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000/api")}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    identifier,
                    password
                })
            });
            const data = await response.json();
            if (response.ok) {
                // ✅ Extract token and user correctly from backend structure
                const { data: responseData } = data; // successResponse wraps the result in data
                const token = responseData?.token;
                const user = responseData;
                if (!token) {
                    console.error("❌ No token returned from backend:", data);
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("Login failed: no token received from server");
                    return;
                }
                console.log("✅ Token received:", token);
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setToken(token);
                setUser(user);
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].success(`Welcome back, ${user.username}!`);
                console.log("✅ User successfully logged in:", user.username);
                router.push("/dashboard");
                return user;
            } else {
                throw new Error(JSON.stringify(data));
            }
        } catch (error) {
            console.error("❌ Login error:", error);
            throw error;
        }
    };
    // Register function
    const register = async (userData)=>{
        try {
            console.log("🟢 Registering...");
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000/api")}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            if (response.ok) {
                // ✅ Extract token and user correctly from backend structure
                const { data: responseData } = data; // successResponse wraps the result in data
                const token = responseData?.token;
                const user = responseData;
                if (!token) {
                    console.error("❌ No token returned from backend:", data);
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("Registration failed: no token received from server");
                    return null;
                }
                console.log("✅ Token received:", token);
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setToken(token);
                setUser(user);
                console.log("✅ User successfully registered:", user.username);
                router.push("/dashboard");
                return user;
            } else {
                const err = data;
                switch(err?.code){
                    case "username_exists":
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("Person don fes u use that Username!");
                        break;
                    case "email_exists":
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("Gadus don dey use that email!");
                        break;
                    case "whatsappNumber_exists":
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error("this number don dey linked already, try another one!");
                        break;
                    case "validation_error":
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error(`Validation error: ${err.message}`);
                        break;
                    default:
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error(err?.message || "Registration failed. Please try again.");
                        break;
                }
                return null;
            }
        } catch (error) {
            console.error("❌ Register error:", error);
            const message = "Network error. Please try again.";
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error(message);
            throw error;
        }
    };
    // Token restoration on mount
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        console.log("⚙️ AuthProvider initialized...");
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");
        if (savedToken && savedUser) {
            try {
                const decoded = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$jwt$2d$decode__$5b$external$5d$__$28$jwt$2d$decode$2c$__esm_import$29$__["jwtDecode"])(savedToken);
                const now = Date.now();
                console.log("📦 Saved token detected:", decoded);
                console.log("📆 Expiration:", new Date(decoded.exp * 1000));
                if (decoded.exp * 1000 > now) {
                    console.log("✅ Token still valid, restoring session...");
                    setToken(savedToken);
                    setUser(JSON.parse(savedUser));
                } else {
                    console.warn("⚠️ Token expired at:", new Date(decoded.exp * 1000));
                    logout("Token expired");
                }
            } catch (err) {
                console.error("❌ Token decode error:", err);
                logout("Invalid token");
            }
        } else {
            console.log("ℹ️ No token found in storage.");
        }
        setLoading(false);
    }, []);
    const value = {
        user,
        token,
        login,
        register,
        logout,
        loading
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/auth.js",
        lineNumber: 192,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/login.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
function Login() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        identifier: '',
        password: ''
    });
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const { login, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (user) {
            router.push('/dashboard');
        }
    }, [
        user,
        router
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Update username for welcome message
        if (name === 'identifier') {
            setUsername(value);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            await login(formData.identifier, formData.password);
        } catch (error) {
            const err = JSON.parse(error.message);
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$29$__["default"].error(err.message || 'Login failed');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: "Login - 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-12 flex-col justify-center relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/20"
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-white mb-6 transition-opacity duration-500",
                                children: [
                                    "Welcome back, ",
                                    username || 'friend',
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xl text-gray-300 mb-8",
                                children: "Ready to manage your bots? Sign in to access your dashboard and deploy with ease."
                            }, void 0, false, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-white/10 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-white/10 rounded-full animate-pulse delay-100"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 bg-white/10 rounded-full animate-pulse delay-200"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-bounce delay-1000"
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/login.js",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-white mb-2",
                                    children: "Sign in to 𝕊𝔸𝕄𝕂𝕀𝔼𝕃 𝔹𝕆𝕋"
                                }, void 0, false, {
                                    fileName: "[project]/pages/login.js",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400",
                                    children: "Enter your credentials to access your account"
                                }, void 0, false, {
                                    fileName: "[project]/pages/login.js",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "lg:hidden mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-white transition-opacity duration-500",
                                        children: [
                                            "Welcome back, ",
                                            username || 'friend',
                                            "!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/login.js",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/login.js",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                            className: "mt-8 space-y-6",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                    htmlFor: "identifier",
                                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                                    children: "Email or Username"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                    id: "identifier",
                                                    name: "identifier",
                                                    type: "text",
                                                    required: true,
                                                    className: "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",
                                                    placeholder: "Enter your email or username",
                                                    value: formData.identifier,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                    htmlFor: "password",
                                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                                    children: "Password"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                    id: "password",
                                                    name: "password",
                                                    type: showPassword ? 'text' : 'password',
                                                    required: true,
                                                    className: "w-full px-4 py-3 pr-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",
                                                    placeholder: "Enter your password",
                                                    value: formData.password,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "absolute right-3 top-10 text-gray-400 hover:text-gray-300 focus:outline-none focus:text-gray-300",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    "aria-label": showPassword ? 'Hide password' : 'Show password',
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["HiEyeOff"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/login.js",
                                                        lineNumber: 133,
                                                        columnNumber: 35
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["HiEye"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/login.js",
                                                        lineNumber: 133,
                                                        columnNumber: 60
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/login.js",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    className: `w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`,
                                    children: loading ? "Signing In..." : "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/pages/login.js",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/register",
                                        className: "text-purple-400 hover:text-purple-300 transition-colors duration-200",
                                        children: "Don't have an account? Sign up here"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/login.js",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/login.js",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/login.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f8a564e2._.js.map