(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/component/Header.js [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/src_component_Header_module_e857151e.css",
    "included": [
      "[project]/src/component/Header.module.css [app-client] (css)"
    ]
  },
  "static/chunks/src_component_ea2ea166._.js",
  "static/chunks/src_component_Header_053e9a40.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/component/Header.js [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);