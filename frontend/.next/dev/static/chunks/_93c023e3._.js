(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/auth.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jwt-decode/build/esm/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"])();
const useAuth = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const AuthProvider = ({ children })=>{
    _s1();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Custom logout function
    const logout = (reason = "Manual logout")=>{
        console.warn("🔴 Logging out triggered:", reason);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].success(`Logged out successfully.`, {
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error("Login failed: no token received from server");
                    return;
                }
                console.log("✅ Token received:", token);
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setToken(token);
                setUser(user);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].success(`Welcome back, ${user.username}!`);
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error("Registration failed: no token received from server");
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
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error("Person don fes u use that Username!");
                        break;
                    case "email_exists":
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error("Gadus don dey use that email!");
                        break;
                    case "whatsappNumber_exists":
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error("this number don dey linked already, try another one!");
                        break;
                    case "validation_error":
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error(`Validation error: ${err.message}`);
                        break;
                    default:
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error(err?.message || "Registration failed. Please try again.");
                        break;
                }
                return null;
            }
        } catch (error) {
            console.error("❌ Register error:", error);
            const message = "Network error. Please try again.";
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error(message);
            throw error;
        }
    };
    // Token restoration on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            console.log("⚙️ AuthProvider initialized...");
            const savedToken = localStorage.getItem("token");
            const savedUser = localStorage.getItem("user");
            if (savedToken && savedUser) {
                try {
                    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jwtDecode"])(savedToken);
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
        }
    }["AuthProvider.useEffect"], []);
    const value = {
        user,
        token,
        login,
        register,
        logout,
        loading
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/auth.js",
        lineNumber: 192,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(AuthProvider, "PbNA1f39UoOYe1R45Fy24SktfoU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/auth.js [client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/lib/auth.js [client] (ecmascript)"));
}),
"[project]/node_modules/jwt-decode/build/esm/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidTokenError",
    ()=>InvalidTokenError,
    "jwtDecode",
    ()=>jwtDecode
]);
class InvalidTokenError extends Error {
}
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p)=>{
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
            code = "0" + code;
        }
        return "%" + code;
    }));
}
function base64UrlDecode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch(output.length % 4){
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length");
    }
    try {
        return b64DecodeUnicode(output);
    } catch (err) {
        return atob(output);
    }
}
function jwtDecode(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified: must be a string");
    }
    options || (options = {});
    const pos = options.header === true ? 0 : 1;
    const part = token.split(".")[pos];
    if (typeof part !== "string") {
        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
    }
    let decoded;
    try {
        decoded = base64UrlDecode(part);
    } catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
    }
    try {
        return JSON.parse(decoded);
    } catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
    }
}
}),
]);

//# sourceMappingURL=_93c023e3._.js.map