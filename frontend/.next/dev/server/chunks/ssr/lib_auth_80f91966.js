module.exports = [
"[project]/lib/auth.js [ssr] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/lib_auth_8920f9f3.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/lib/auth.js [ssr] (ecmascript, next/dynamic entry)");
    });
});
}),
];