(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/style/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// styles.js - 영화 사이트 스타일 가이드 (CDN용)
// 나중에 Vite/Webpack 사용 시: 모든 const 앞에 export 붙이면 됨!
// ========== 색상 ==========
// styles.js - 영화 사이트 스타일 가이드 (모듈 버전)
// ========== 색상 ==========
__turbopack_context__.s([
    "borderRadius",
    ()=>borderRadius,
    "colors",
    ()=>colors,
    "commonStyles",
    ()=>commonStyles,
    "fontSize",
    ()=>fontSize,
    "fontWeight",
    ()=>fontWeight,
    "layout",
    ()=>layout,
    "shadow",
    ()=>shadow,
    "spacing",
    ()=>spacing,
    "transition",
    ()=>transition
]);
const colors = {
    primary: '#E50914',
    secondary: '#B20710',
    dark: '#141414',
    darkGray: '#2F2F2F',
    mediumGray: '#808080',
    lightGray: '#E5E5E5',
    white: '#FFFFFF',
    yellow: '#F5C518',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    textPrimary: '#FFFFFF',
    textSecondary: '#808080',
    textLight: '#999999'
};
const spacing = {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
};
const fontSize = {
    small: '12px',
    medium: '14px',
    large: '16px',
    xlarge: '20px',
    xxlarge: '24px',
    title: '32px',
    hero: '48px'
};
const fontWeight = {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700
};
const shadow = {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.15)',
    large: '0 8px 16px rgba(0,0,0,0.2)',
    header: '0 2px 8px rgba(0,0,0,0.3)'
};
const borderRadius = {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '20px',
    circle: '50%'
};
const transition = {
    fast: 'all 0.2s ease',
    normal: 'all 0.3s ease',
    slow: 'all 0.5s ease'
};
const commonStyles = {
    header: {
        backgroundColor: colors.dark,
        color: colors.white,
        padding: "".concat(spacing.md, " ").concat(spacing.xl),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: shadow.header
    },
    logo: {
        margin: 0,
        fontSize: fontSize.xxlarge,
        color: colors.primary
    },
    searchInput: {
        padding: spacing.sm,
        borderRadius: borderRadius.small,
        border: 'none',
        width: '300px',
        fontSize: fontSize.medium
    },
    button: {
        padding: "".concat(spacing.sm, " ").concat(spacing.lg),
        fontSize: fontSize.medium,
        fontWeight: fontWeight.medium,
        border: 'none',
        borderRadius: borderRadius.small,
        cursor: 'pointer',
        transition: transition.normal
    },
    buttonPrimary: {
        backgroundColor: colors.primary,
        color: colors.white
    },
    buttonOutline: {
        backgroundColor: 'transparent',
        color: colors.white,
        border: "1px solid ".concat(colors.white),
        padding: "".concat(spacing.sm, " ").concat(spacing.md),
        borderRadius: borderRadius.small
    },
    filterButton: {
        backgroundColor: colors.dark,
        color: colors.white,
        border: "1px solid ".concat(colors.mediumGray),
        padding: "".concat(spacing.sm, " ").concat(spacing.md),
        borderRadius: borderRadius.round,
        cursor: 'pointer',
        transition: transition.normal
    },
    filterSection: {
        backgroundColor: colors.darkGray,
        padding: spacing.xl,
        color: colors.white
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: spacing.xl
    },
    movieCard: {
        backgroundColor: colors.darkGray,
        borderRadius: borderRadius.medium,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: transition.normal
    },
    moviePoster: {
        width: '100%',
        height: '250px',
        backgroundColor: colors.dark,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '80px'
    },
    movieInfo: {
        padding: spacing.md
    },
    movieTitle: {
        margin: "0 0 ".concat(spacing.sm, " 0"),
        color: colors.white,
        fontSize: fontSize.large
    },
    movieRating: {
        color: colors.yellow,
        fontWeight: fontWeight.bold
    },
    sectionTitle: {
        color: colors.white,
        marginBottom: spacing.lg,
        fontSize: fontSize.xxlarge
    },
    footer: {
        backgroundColor: colors.dark,
        color: colors.mediumGray,
        padding: spacing.xl,
        textAlign: 'center',
        marginTop: spacing.xxl
    },
    card: {
        backgroundColor: colors.white,
        padding: spacing.lg,
        borderRadius: borderRadius.medium,
        boxShadow: shadow.small
    },
    input: {
        padding: spacing.md,
        fontSize: fontSize.medium,
        border: "1px solid ".concat(colors.lightGray),
        borderRadius: borderRadius.small,
        width: '100%'
    },
    heading: {
        fontSize: fontSize.title,
        fontWeight: fontWeight.bold,
        color: colors.textPrimary,
        margin: "".concat(spacing.lg, " 0")
    }
};
const layout = {
    movieGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: spacing.lg
    },
    flexRow: {
        display: 'flex',
        gap: spacing.md,
        alignItems: 'center'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.md
    },
    spaceBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}; // ========== 사용 예시 (주석) ==========
 /*

## CDN 환경에서 사용 방법

### HTML에서 불러오기
<script src="styles.js"></script>
<script type="text/babel">
  // 바로 사용 가능!
  console.log(colors.primary);
</script>

### 컴포넌트에서 사용
function Header() {   
  return (
    <div style={commonStyles.header}>
      <h1 style={commonStyles.logo}>🎬 MovieHub</h1>
      <input 
        type="text" 
        placeholder="검색..."
        style={commonStyles.searchInput}
      />
      <button style={{
        ...commonStyles.button,
        ...commonStyles.buttonPrimary
      }}>
        로그인
      </button>
    </div>
  );
}

### 나중에 Vite/Webpack 사용 시 변경 방법:
1. 모든 const 앞에 export 추가
   const colors = {...}  →  export const colors = {...}

2. HTML에서 import 사용
   import { colors, spacing, commonStyles } from './styles.js';

*/  // ========== 사용 예시 (주석) ==========
 /*

// import는 export된 값을 가져올 때 쓰며,
같은 폴더 안에 있는 파일을 불러올 땐 './파일명.js' 형태로 경로를 쓴다.

import { colors, spacing, commonStyles } from './styles.js';  ('./styles.js' : 같은 위치에 있다.)

// 1. 직접 사용
<div style={{ backgroundColor: colors.primary, padding: spacing.md }}>

// 2. 공통 스타일 사용
<button style={commonStyles.buttonPrimary}>클릭</button>

// 3. 스타일 합치기 (...spread 연산자)
<button style={{ ...commonStyles.button, ...commonStyles.buttonPrimary }}>
  클릭
</button>

// 4. 추가 스타일과 합치기
<div style={{ ...commonStyles.card, marginTop: spacing.lg }}>
  내용
</div>
*/  /* 간단한 예시 */  /* 

import { colors, spacing } from './styles.js'; // 다른파일에서 가져온다.

function Header() {   
  return (
    <div style={{

      backgroundColor: colors.black,  ※                                  ※
      color: colors.white,                요소에 이렇게 넣어주시면 됩니다.
      padding: spacing.large          ※                                  ※

    }}>
      <h1>오늘의 할일!</h1>
    </div>
  );
}

*/ 
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/fqa.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/data/fqa.js
__turbopack_context__.s([
    "faqs",
    ()=>faqs
]);
const faqs = [
    {
        question: '영화 리뷰는 어떻게 작성하나요?',
        answer: "로그인 후 '리뷰 작성' 페이지로 이동하여 영화를 선택하고 의견을 작성할 수 있습니다. 영화 평점은 1점부터 5점까지 가능합니다."
    },
    {
        question: '작성한 리뷰를 나중에 수정하거나 삭제할 수 있나요?',
        answer: "네 가능합니다. '마이 페이지' → '내 리뷰'에서 작성한 리뷰를 수정하거나 삭제할 수 있습니다."
    },
    {
        question: '영화 정보와 포스터는 어디서 가져오나요?',
        answer: 'TMDb(The Movie Database) API를 사용하여 영화 정보, 포스터, 평점, 장르 등을 가져옵니다.'
    },
    {
        question: 'AI 챗봇 기능이 있나요?',
        answer: '네! AI 영화 도우미와 대화하며 맞춤형 영화 추천과 요약을 받을 수 있습니다.'
    },
    {
        question: '회원가입 없이도 사이트를 이용할 수 있나요?',
        answer: '영화 탐색과 리뷰 읽기는 가능하지만, 리뷰 작성과 AI 기능 이용은 로그인 후 가능합니다.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/qna/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FqaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/style/styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fqa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/fqa.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FqaPage() {
    _s();
    const [faqs, setFaqs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FqaPage.useEffect": ()=>{
            const saved = localStorage.getItem("faqs");
            if (saved) {
                setFaqs(JSON.parse(saved));
            } else {
                const withIds = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fqa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faqs"].map({
                    "FqaPage.useEffect.withIds": (f, i)=>({
                            ...f,
                            id: i + 1
                        })
                }["FqaPage.useEffect.withIds"]);
                localStorage.setItem("faqs", JSON.stringify(withIds));
                setFaqs(withIds);
            }
        }
    }["FqaPage.useEffect"], []);
    const filteredFaqs = faqs.filter((item)=>item.question.toLowerCase().includes(search.toLowerCase()));
    const toggleFaq = (id)=>{
        setOpenId(openId === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.noticeBox,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: styles.title,
                    children: "FAQ"
                }, void 0, false, {
                    fileName: "[project]/src/app/qna/page.js",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: styles.subtitle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary
                            },
                            children: "MovieHub"
                        }, void 0, false, {
                            fileName: "[project]/src/app/qna/page.js",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        " 이용 시 궁금한 점을 확인할 수 있습니다."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/qna/page.js",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.searchBox,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "검색어를 입력하세요",
                            value: search,
                            onChange: (e)=>setSearch(e.target.value),
                            style: styles.searchInput
                        }, void 0, false, {
                            fileName: "[project]/src/app/qna/page.js",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: styles.searchButton,
                            children: "검색"
                        }, void 0, false, {
                            fileName: "[project]/src/app/qna/page.js",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/qna/page.js",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: styles.table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.tableHeader,
                                        children: "번호"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/qna/page.js",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: styles.tableHeader,
                                        children: "질문"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/qna/page.js",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/qna/page.js",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/qna/page.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filteredFaqs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: "2",
                                    style: styles.emptyCell,
                                    children: "등록된 FAQ가 없습니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/qna/page.js",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/qna/page.js",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this) : filteredFaqs.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                ...styles.tableRow,
                                                cursor: "pointer",
                                                backgroundColor: openId === faq.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].darkGray : "transparent"
                                            },
                                            onClick: ()=>toggleFaq(faq.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: styles.tableCell,
                                                    children: faq.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/qna/page.js",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: styles.tableCell,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary
                                                            },
                                                            children: "MovieHub"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/qna/page.js",
                                                            lineNumber: 88,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        faq.question
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/qna/page.js",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/qna/page.js",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this),
                                        openId === faq.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: "2",
                                                style: styles.detailCell,
                                                children: faq.answer || "내용이 없습니다."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/qna/page.js",
                                                lineNumber: 96,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/qna/page.js",
                                            lineNumber: 95,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, faq.id, true, {
                                    fileName: "[project]/src/app/qna/page.js",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/qna/page.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/qna/page.js",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.footerBtns,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: styles.footerButton,
                            children: "검색결과 수집에 대한 정책"
                        }, void 0, false, {
                            fileName: "[project]/src/app/qna/page.js",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: styles.footerButton,
                            children: "MovieHub 사용문의"
                        }, void 0, false, {
                            fileName: "[project]/src/app/qna/page.js",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: styles.footerButton,
                            children: "제휴제안"
                        }, void 0, false, {
                            fileName: "[project]/src/app/qna/page.js",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: styles.footerButton,
                            children: "고객센터"
                        }, void 0, false, {
                            fileName: "[project]/src/app/qna/page.js",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/qna/page.js",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/qna/page.js",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/qna/page.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(FqaPage, "LJWTQUhfAEhGsQj2UtpaiKjvEm8=");
_c = FqaPage;
// ✅ 공지사항 스타일 그대로 복사
const styles = {
    container: {
        minHeight: "100vh",
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].dark,
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl,
        paddingTop: "100px"
    },
    noticeBox: {
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].darkGray,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderRadius"].large,
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xxl,
        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadow"].large
    },
    title: {
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontSize"].hero,
        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeight"].bold,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].white,
        textAlign: "center",
        marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md
    },
    subtitle: {
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontSize"].large,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].textSecondary,
        textAlign: "center",
        marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xxl
    },
    searchBox: {
        display: "flex",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl,
        justifyContent: "center"
    },
    searchInput: {
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontSize"].medium,
        border: "1px solid ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mediumGray),
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderRadius"].medium,
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].dark,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].white,
        width: "400px",
        outline: "none"
    },
    searchButton: {
        padding: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl),
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontSize"].medium,
        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeight"].medium,
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].white,
        border: "none",
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderRadius"].medium,
        cursor: "pointer",
        transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transition"].normal
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl
    },
    tableHeader: {
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].dark,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].textSecondary,
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontSize"].medium,
        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontWeight"].bold,
        textAlign: "left",
        borderBottom: "2px solid ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mediumGray)
    },
    tableRow: {
        transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transition"].fast
    },
    tableCell: {
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].white,
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontSize"].medium,
        borderBottom: "1px solid ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mediumGray)
    },
    detailCell: {
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl,
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].dark,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].textSecondary,
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontSize"].medium,
        lineHeight: 1.6,
        borderBottom: "1px solid ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mediumGray),
        animation: "fadeIn 0.3s ease-in-out"
    },
    emptyCell: {
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xxl,
        textAlign: "center",
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].textSecondary,
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontSize"].large
    },
    footerBtns: {
        display: "flex",
        justifyContent: "center",
        gap: "150px",
        flexWrap: "wrap"
    },
    footerButton: {
        padding: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg),
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontSize"].medium,
        backgroundColor: "transparent",
        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].textSecondary,
        border: "1px solid ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mediumGray),
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderRadius"].medium,
        cursor: "pointer",
        transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transition"].normal
    }
};
var _c;
__turbopack_context__.k.register(_c, "FqaPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_446c479b._.js.map