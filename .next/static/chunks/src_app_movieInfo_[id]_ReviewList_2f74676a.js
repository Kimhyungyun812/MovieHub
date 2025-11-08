(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/movieInfo/[id]/ReviewList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// 개별 리뷰 아이템을 관리하는 컴포넌트
function ReviewItem(param) {
    let { review, styles } = param;
    _s();
    // 'isExpanded' (펼쳐짐) 상태를 각 리뷰 아이템이 개별적으로 관리합니다.
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 이 길이(예: 100자)를 기준으로 "더보기"를 표시합니다.
    const TRUNCATE_LENGTH = 100;
    const isLong = review.content.length > TRUNCATE_LENGTH;
    // "더보기" 또는 "간략히" 버튼을 클릭했을 때의 핸들러
    const handleToggle = (e)=>{
        // 이벤트가 부모로 전파되는 것을 막습니다 (필요시).
        e.stopPropagation();
        setIsExpanded(!isExpanded); // 상태를 반전시킵니다 (true -> false, false -> true)
    };
    // 리뷰 텍스트를 클릭했을 때 (더보기 버튼과 동일하게 작동)
    const handleTextClick = ()=>{
        if (isLong && !isExpanded) {
            setIsExpanded(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.reviewItem,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.reviewUser,
                children: review.userName
            }, void 0, false, {
                fileName: "[project]/src/app/movieInfo/[id]/ReviewList.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                // 긴 리뷰일 경우 클릭 가능하도록 스타일과 핸들러 적용
                style: isLong ? styles.reviewContentClickable : styles.reviewContent,
                onClick: handleTextClick,
                children: isLong && !isExpanded ? "".concat(review.content.substring(0, TRUNCATE_LENGTH), "...") : review.content
            }, void 0, false, {
                fileName: "[project]/src/app/movieInfo/[id]/ReviewList.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            isLong && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleToggle,
                style: styles.readMoreButton,
                children: isExpanded ? '간략히' : '...더보기'
            }, void 0, false, {
                fileName: "[project]/src/app/movieInfo/[id]/ReviewList.js",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/movieInfo/[id]/ReviewList.js",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(ReviewItem, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = ReviewItem;
function ReviewList(param) {
    let { reviews, styles } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.reviewList,
        children: reviews.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewItem, {
                review: review,
                styles: styles
            }, review.id, false, {
                fileName: "[project]/src/app/movieInfo/[id]/ReviewList.js",
                lineNumber: 58,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/movieInfo/[id]/ReviewList.js",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c1 = ReviewList;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReviewItem");
__turbopack_context__.k.register(_c1, "ReviewList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_movieInfo_%5Bid%5D_ReviewList_2f74676a.js.map