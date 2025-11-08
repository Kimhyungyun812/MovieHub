module.exports = [
"[project]/.next-internal/server/app/movieInfo/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/style/styles.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
        padding: `${spacing.md} ${spacing.xl}`,
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
        padding: `${spacing.sm} ${spacing.lg}`,
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
        border: `1px solid ${colors.white}`,
        padding: `${spacing.sm} ${spacing.md}`,
        borderRadius: borderRadius.small
    },
    filterButton: {
        backgroundColor: colors.dark,
        color: colors.white,
        border: `1px solid ${colors.mediumGray}`,
        padding: `${spacing.sm} ${spacing.md}`,
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
        margin: `0 0 ${spacing.sm} 0`,
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
        border: `1px solid ${colors.lightGray}`,
        borderRadius: borderRadius.small,
        width: '100%'
    },
    heading: {
        fontSize: fontSize.title,
        fontWeight: fontWeight.bold,
        color: colors.textPrimary,
        margin: `${spacing.lg} 0`
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
}),
"[project]/src/lib/data/review.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialReviews",
    ()=>initialReviews
]);
const initialReviews = [
    {
        id: 1,
        movieId: null,
        userId: 1,
        userName: '김철수',
        rating: 5,
        content: '기대 이상으로 정말 재미있게 봤습니다. 사실 큰 기대를 하지 않고 관람했는데, 예상외의 즐거움을 얻었습니다. 영화는 시종일관 흥미로운 스토리와 매력적인 캐릭터들로 관객의 시선을 사로잡았습니다. 특히 배우들의 자연스러운 연기와 환상적인 케미스트리는 극의 재미를 한층 더 끌어올렸습니다. 지루할 틈 없이 빠르게 전개되는 사건들과 곳곳에 배치된 유머 코드 덕분에 시간 가는 줄 모르고 영화에 빠져들었습니다. 화려한 볼거리나 심오한 메시지는 없을지 몰라도, 영화 본연의 목적인 재미라는 측면에서는 매우 충실한 작품이었습니다. 영화를 보는 내내 유쾌하고 즐거운 에너지를 느낄 수 있었고, 다 보고 나니 기분 전환이 제대로 된 느낌입니다. 스트레스 없이 가볍게 즐길 수 있는 영화를 찾고 계신다면 이 영화를 강력히 추천합니다. 기대치를 낮추고 본다면 훨씬 더 큰 만족감을 얻으실 수 있을 겁니다.',
        likes: 234,
        date: '2025-10-20',
        isVerified: true
    },
    {
        id: 2,
        movieId: null,
        userId: 2,
        userName: '이영희',
        rating: 4,
        content: '기대 이상이었어요. 중간에 약간 지루한 부분도 있었지만 전체적으로 만족스러운 작품입니다.',
        likes: 156,
        date: '2025-10-20',
        isVerified: true
    },
    {
        id: 3,
        movieId: null,
        userId: 3,
        userName: '박민수',
        rating: 5,
        content: '올해 본 영화 중 최고! 엔딩 신이 정말 인상 깊었어요. 여운이 오래 남네요.',
        likes: 189,
        date: '2025-10-19',
        isVerified: true
    },
    {
        id: 4,
        movieId: null,
        userId: 4,
        userName: '정수진',
        rating: 3,
        content: '평범했어요. 특별히 나쁘진 않지만 기억에 남을 정도는 아니었습니다.',
        likes: 45,
        date: '2025-10-19',
        isVerified: false
    },
    {
        id: 5,
        movieId: null,
        userId: 5,
        userName: '최동욱',
        rating: 4,
        content: '배우들의 연기가 정말 훌륭했습니다. 몰입감이 대단했어요!',
        likes: 198,
        date: '2025-10-18',
        isVerified: true
    },
    {
        id: 6,
        movieId: null,
        userId: 6,
        userName: '강민지',
        rating: 5,
        content: '가족들과 함께 보기 좋은 영화예요. 따뜻하고 감동적인 스토리였습니다.',
        likes: 312,
        date: '2025-10-18',
        isVerified: true
    },
    {
        id: 7,
        movieId: null,
        userId: 7,
        userName: '윤지호',
        rating: 2,
        content: '기대가 너무 컸나봐요. 스토리가 너무 뻔했고 지루했습니다.',
        likes: 67,
        date: '2025-10-17',
        isVerified: true
    },
    {
        id: 8,
        movieId: null,
        userId: 8,
        userName: '서현우',
        rating: 5,
        content: 'OST가 정말 좋아요! 영화 보고 나서 계속 듣고 있습니다.',
        likes: 423,
        date: '2025-10-17',
        isVerified: true
    },
    {
        id: 9,
        movieId: null,
        userId: 9,
        userName: '임서연',
        rating: 4,
        content: '영상미가 정말 압도적이었어요. IMAX로 보길 잘했습니다!',
        likes: 267,
        date: '2025-10-16',
        isVerified: true
    },
    {
        id: 10,
        movieId: null,
        userId: 10,
        userName: '한지민',
        rating: 3,
        content: '그냥 그래요. 시간 때우기에는 괜찮았습니다.',
        likes: 23,
        date: '2025-10-16',
        isVerified: false
    },
    {
        id: 11,
        movieId: null,
        userId: 11,
        userName: '조성훈',
        rating: 5,
        content: '반전이 정말 대박이었어요! 예상 못했습니다. 스포 조심!',
        likes: 512,
        date: '2025-10-15',
        isVerified: true
    },
    {
        id: 12,
        movieId: null,
        userId: 12,
        userName: '배수지',
        rating: 4,
        content: '감동적인 스토리였어요. 마지막에 울컥했습니다 ㅠㅠ',
        likes: 289,
        date: '2025-10-15',
        isVerified: true
    },
    {
        id: 13,
        movieId: null,
        userId: 13,
        userName: '권혁수',
        rating: 1,
        content: '돈 아까웠어요. 졸다가 나왔습니다. 비추천.',
        likes: 89,
        date: '2025-10-14',
        isVerified: true
    },
    {
        id: 14,
        movieId: null,
        userId: 14,
        userName: '송민아',
        rating: 5,
        content: '완벽한 영화! 다시 보러 갈 예정입니다. 인생작 등극!',
        likes: 678,
        date: '2025-10-14',
        isVerified: true
    },
    {
        id: 15,
        movieId: null,
        userId: 15,
        userName: '신재훈',
        rating: 4,
        content: '액션 신이 정말 박진감 넘쳤어요. 손에 땀을 쥐게 하네요!',
        likes: 345,
        date: '2025-10-13',
        isVerified: true
    },
    {
        id: 16,
        movieId: null,
        userId: 16,
        userName: '안소희',
        rating: 3,
        content: '볼만했어요. 기대를 안하고 봐서 그런지 괜찮았습니다.',
        likes: 78,
        date: '2025-10-13',
        isVerified: false
    },
    {
        id: 17,
        movieId: null,
        userId: 17,
        userName: '오태양',
        rating: 5,
        content: '연출이 정말 탁월했습니다. 감독님 천재 인정!',
        likes: 456,
        date: '2025-10-12',
        isVerified: true
    },
    {
        id: 18,
        movieId: null,
        userId: 18,
        userName: '유나래',
        rating: 4,
        content: '예고편보다 훨씬 재밌었어요. 기대 안했는데 대박!',
        likes: 234,
        date: '2025-10-12',
        isVerified: true
    },
    {
        id: 19,
        movieId: null,
        userId: 19,
        userName: '장서준',
        rating: 2,
        content: '스토리가 너무 산만했어요. 뭔가 정신없었습니다.',
        likes: 56,
        date: '2025-10-11',
        isVerified: true
    },
    {
        id: 20,
        movieId: null,
        userId: 20,
        userName: '홍예린',
        rating: 5,
        content: '명작입니다! 모든 장면이 완벽했어요. 꼭 보세요!',
        likes: 789,
        date: '2025-10-11',
        isVerified: true
    },
    {
        id: 21,
        movieId: null,
        userId: 21,
        userName: '문정우',
        rating: 4,
        content: '유머 코드가 저랑 딱 맞았어요. 웃다가 배 아팠습니다 ㅋㅋ',
        likes: 412,
        date: '2025-10-10',
        isVerified: true
    },
    {
        id: 22,
        movieId: null,
        userId: 22,
        userName: '진하늘',
        rating: 3,
        content: '나쁘지 않았어요. 무난한 영화였습니다.',
        likes: 67,
        date: '2025-10-10',
        isVerified: false
    },
    {
        id: 23,
        movieId: null,
        userId: 23,
        userName: '노은별',
        rating: 5,
        content: 'CG가 정말 놀라웠어요! 기술력이 대단합니다.',
        likes: 523,
        date: '2025-10-09',
        isVerified: true
    },
    {
        id: 24,
        movieId: null,
        userId: 24,
        userName: '류시우',
        rating: 4,
        content: '메시지가 명확하고 좋았어요. 생각할 거리를 주는 영화입니다.',
        likes: 298,
        date: '2025-10-09',
        isVerified: true
    },
    {
        id: 25,
        movieId: null,
        userId: 25,
        userName: '하진우',
        rating: 1,
        content: '별로였어요. 시간 낭비한 느낌입니다.',
        likes: 34,
        date: '2025-10-08',
        isVerified: true
    },
    {
        id: 26,
        movieId: null,
        userId: 26,
        userName: '표다은',
        rating: 5,
        content: '감독의 철학이 느껴지는 작품이었습니다. 예술적이에요!',
        likes: 367,
        date: '2025-10-08',
        isVerified: true
    },
    {
        id: 27,
        movieId: null,
        userId: 27,
        userName: '남궁민',
        rating: 4,
        content: '어린이들과 보기 좋은 영화예요. 교육적이기도 합니다.',
        likes: 189,
        date: '2025-10-07',
        isVerified: true
    },
    {
        id: 28,
        movieId: null,
        userId: 28,
        userName: '선우진',
        rating: 3,
        content: '평타는 쳤어요. 기대를 많이 하지 않으면 괜찮습니다.',
        likes: 45,
        date: '2025-10-07',
        isVerified: false
    },
    {
        id: 29,
        movieId: null,
        userId: 29,
        userName: '황보람',
        rating: 5,
        content: '배우들의 케미가 환상적이었어요! 꿀조합!',
        likes: 623,
        date: '2025-10-06',
        isVerified: true
    },
    {
        id: 30,
        movieId: null,
        userId: 30,
        userName: '독고수',
        rating: 4,
        content: '색감이 정말 아름다웠어요. 한 편의 그림을 보는 것 같았습니다.',
        likes: 278,
        date: '2025-10-06',
        isVerified: true
    },
    {
        id: 31,
        movieId: null,
        userId: 31,
        userName: '제갈량',
        rating: 2,
        content: '중반부가 너무 늘어졌어요. 편집이 아쉽습니다.',
        likes: 67,
        date: '2025-10-05',
        isVerified: true
    },
    {
        id: 32,
        movieId: null,
        userId: 32,
        userName: '사공민',
        rating: 5,
        content: '올해 최고의 영화! 10점 만점에 10점입니다!',
        likes: 891,
        date: '2025-10-05',
        isVerified: true
    },
    {
        id: 33,
        movieId: null,
        userId: 33,
        userName: '황지우',
        rating: 4,
        content: '깊이 있는 스토리였어요. 어른들이 보기 좋습니다.',
        likes: 312,
        date: '2025-10-04',
        isVerified: true
    },
    {
        id: 34,
        movieId: null,
        userId: 34,
        userName: '탁연아',
        rating: 3,
        content: '그냥저냥 볼만했어요. 크게 기억에 남진 않네요.',
        likes: 56,
        date: '2025-10-04',
        isVerified: false
    },
    {
        id: 35,
        movieId: null,
        userId: 35,
        userName: '진서현',
        rating: 5,
        content: '명대사가 많았어요! 인생명언 건졌습니다.',
        likes: 534,
        date: '2025-10-03',
        isVerified: true
    },
    {
        id: 36,
        movieId: null,
        userId: 36,
        userName: '나지원',
        rating: 4,
        content: '포스터 보고 기대 안했는데 의외로 재밌었어요!',
        likes: 234,
        date: '2025-10-03',
        isVerified: true
    },
    {
        id: 37,
        movieId: null,
        userId: 37,
        userName: '소유진',
        rating: 1,
        content: '개연성이 너무 없어요. 스토리가 말이 안 됩니다.',
        likes: 89,
        date: '2025-10-02',
        isVerified: true
    },
    {
        id: 38,
        movieId: null,
        userId: 38,
        userName: '천재민',
        rating: 5,
        content: '사운드가 끝내줍니다! 극장에서 꼭 보세요!',
        likes: 678,
        date: '2025-10-02',
        isVerified: true
    },
    {
        id: 39,
        movieId: null,
        userId: 39,
        userName: '방하늘',
        rating: 4,
        content: '원작보다 낫네요. 각색을 잘했습니다.',
        likes: 367,
        date: '2025-10-01',
        isVerified: true
    },
    {
        id: 40,
        movieId: null,
        userId: 40,
        userName: '마서영',
        rating: 3,
        content: '호불호가 갈릴 것 같아요. 저는 그냥 그랬습니다.',
        likes: 78,
        date: '2025-10-01',
        isVerified: false
    },
    {
        id: 41,
        movieId: null,
        userId: 41,
        userName: '석민재',
        rating: 5,
        content: '캐릭터가 매력적이에요! 주인공 팬 됐습니다.',
        likes: 712,
        date: '2025-09-30',
        isVerified: true
    },
    {
        id: 42,
        movieId: null,
        userId: 42,
        userName: '추가은',
        rating: 4,
        content: '예상치 못한 전개가 많았어요. 지루할 틈이 없었습니다.',
        likes: 445,
        date: '2025-09-30',
        isVerified: true
    },
    {
        id: 43,
        movieId: null,
        userId: 43,
        userName: '명수정',
        rating: 2,
        content: '기대에 못 미쳤어요. 아쉬운 작품입니다.',
        likes: 67,
        date: '2025-09-29',
        isVerified: true
    },
    {
        id: 44,
        movieId: null,
        userId: 44,
        userName: '예서윤',
        rating: 5,
        content: '엔딩 크레딧까지 완벽! 쿠키 영상도 대박이에요!',
        likes: 823,
        date: '2025-09-29',
        isVerified: true
    },
    {
        id: 45,
        movieId: null,
        userId: 45,
        userName: '설하윤',
        rating: 4,
        content: '연기가 정말 자연스러웠어요. 몰입감 100%!',
        likes: 389,
        date: '2025-09-28',
        isVerified: true
    },
    {
        id: 46,
        movieId: null,
        userId: 46,
        userName: '복지훈',
        rating: 3,
        content: '볼만했어요. 특별하진 않지만 나쁘지도 않았습니다.',
        likes: 92,
        date: '2025-09-28',
        isVerified: false
    },
    {
        id: 47,
        movieId: null,
        userId: 47,
        userName: '모연우',
        rating: 5,
        content: '시간 가는 줄 몰랐어요! 정말 재밌었습니다!',
        likes: 567,
        date: '2025-09-27',
        isVerified: true
    },
    {
        id: 48,
        movieId: null,
        userId: 48,
        userName: '채시원',
        rating: 4,
        content: '속편이 기대되는 작품이에요. 빨리 나왔으면!',
        likes: 423,
        date: '2025-09-27',
        isVerified: true
    },
    {
        id: 49,
        movieId: null,
        userId: 49,
        userName: '우지안',
        rating: 1,
        content: '뭐가 좋다는 건지 모르겠어요. 이해 불가.',
        likes: 45,
        date: '2025-09-26',
        isVerified: true
    },
    {
        id: 50,
        movieId: null,
        userId: 50,
        userName: '도현서',
        rating: 5,
        content: '평론가들의 평이 이해가 가는 영화예요. 수작!',
        likes: 678,
        date: '2025-09-26',
        isVerified: true
    },
    {
        id: 51,
        movieId: null,
        userId: 1,
        userName: '김철수',
        rating: 4,
        content: '조금 길긴 했지만 재밌게 봤습니다. 추천해요!',
        likes: 234,
        date: '2025-09-25',
        isVerified: true
    },
    {
        id: 52,
        movieId: null,
        userId: 2,
        userName: '이영희',
        rating: 3,
        content: '평범한 영화였어요. 기대를 많이 하면 실망할 수 있어요.',
        likes: 89,
        date: '2025-09-25',
        isVerified: false
    },
    {
        id: 53,
        movieId: null,
        userId: 3,
        userName: '박민수',
        rating: 5,
        content: '감동 그 자체! 엔딩에서 눈물 펑펑 쏟았어요 ㅠㅠ',
        likes: 712,
        date: '2025-09-24',
        isVerified: true
    },
    {
        id: 54,
        movieId: null,
        userId: 4,
        userName: '정수진',
        rating: 4,
        content: '배경음악이 정말 좋았어요. OST 꼭 찾아 들을게요!',
        likes: 445,
        date: '2025-09-24',
        isVerified: true
    },
    {
        id: 55,
        movieId: null,
        userId: 5,
        userName: '최동욱',
        rating: 2,
        content: '전개가 너무 느렸어요. 지루했습니다.',
        likes: 56,
        date: '2025-09-23',
        isVerified: true
    },
    {
        id: 56,
        movieId: null,
        userId: 6,
        userName: '강민지',
        rating: 5,
        content: '완전 대박! 이 영화 안 보면 후회해요!',
        likes: 891,
        date: '2025-09-23',
        isVerified: true
    },
    {
        id: 57,
        movieId: null,
        userId: 7,
        userName: '윤지호',
        rating: 4,
        content: '스릴 넘치는 전개였어요. 손에 땀을 쥐었습니다!',
        likes: 367,
        date: '2025-09-22',
        isVerified: true
    },
    {
        id: 58,
        movieId: null,
        userId: 8,
        userName: '서현우',
        rating: 3,
        content: '그냥 평범했어요. 시간 때우기 정도.',
        likes: 78,
        date: '2025-09-22',
        isVerified: false
    },
    {
        id: 59,
        movieId: null,
        userId: 9,
        userName: '임서연',
        rating: 5,
        content: '촬영 기법이 신선했어요! 연출력 대박!',
        likes: 623,
        date: '2025-09-21',
        isVerified: true
    },
    {
        id: 60,
        movieId: null,
        userId: 10,
        userName: '한지민',
        rating: 4,
        content: '생각보다 재밌었어요. 기대 안했는데 좋았습니다!',
        likes: 289,
        date: '2025-09-21',
        isVerified: true
    },
    {
        id: 61,
        movieId: null,
        userId: 11,
        userName: '조성훈',
        rating: 1,
        content: '최악이었어요. 다시는 안 봅니다.',
        likes: 34,
        date: '2025-09-20',
        isVerified: true
    },
    {
        id: 62,
        movieId: null,
        userId: 12,
        userName: '배수지',
        rating: 5,
        content: '주연 배우의 연기가 압권이었어요! 연기 대상 가즈아!',
        likes: 756,
        date: '2025-09-20',
        isVerified: true
    },
    {
        id: 63,
        movieId: null,
        userId: 13,
        userName: '권혁수',
        rating: 4,
        content: '웃다가 울다가 정신없었어요. 감정 기복 심함 주의!',
        likes: 412,
        date: '2025-09-19',
        isVerified: true
    },
    {
        id: 64,
        movieId: null,
        userId: 14,
        userName: '송민아',
        rating: 3,
        content: '중간 정도 하는 영화예요. 무난했습니다.',
        likes: 67,
        date: '2025-09-19',
        isVerified: false
    },
    {
        id: 65,
        movieId: null,
        userId: 15,
        userName: '신재훈',
        rating: 5,
        content: '이런 영화를 기다렸어요! 완벽한 작품!',
        likes: 834,
        date: '2025-09-18',
        isVerified: true
    },
    {
        id: 66,
        movieId: null,
        userId: 16,
        userName: '안소희',
        rating: 4,
        content: '아이들과 함께 보기 딱 좋았어요. 가족 영화!',
        likes: 345,
        date: '2025-09-18',
        isVerified: true
    },
    {
        id: 67,
        movieId: null,
        userId: 17,
        userName: '오태양',
        rating: 2,
        content: '스토리가 너무 예측 가능했어요. 새로운 게 없었습니다.',
        likes: 89,
        date: '2025-09-17',
        isVerified: true
    },
    {
        id: 68,
        movieId: null,
        userId: 18,
        userName: '유나래',
        rating: 5,
        content: '소름 돋는 명작! 꼭 보세요!',
        likes: 923,
        date: '2025-09-17',
        isVerified: true
    },
    {
        id: 69,
        movieId: null,
        userId: 19,
        userName: '장서준',
        rating: 4,
        content: '러닝타임이 적당했어요. 템포감 좋았습니다!',
        likes: 278,
        date: '2025-09-16',
        isVerified: true
    },
    {
        id: 70,
        movieId: null,
        userId: 20,
        userName: '홍예린',
        rating: 3,
        content: '볼만하긴 한데 엄청 좋진 않았어요.',
        likes: 56,
        date: '2025-09-16',
        isVerified: false
    },
    {
        id: 71,
        movieId: null,
        userId: 21,
        userName: '문정우',
        rating: 5,
        content: '미장센이 예술이에요! 모든 장면이 포스터감!',
        likes: 667,
        date: '2025-09-15',
        isVerified: true
    },
    {
        id: 72,
        movieId: null,
        userId: 22,
        userName: '진하늘',
        rating: 4,
        content: '메시지가 좋았어요. 생각할 거리를 많이 줍니다.',
        likes: 389,
        date: '2025-09-15',
        isVerified: true
    },
    {
        id: 73,
        movieId: null,
        userId: 23,
        userName: '노은별',
        rating: 1,
        content: '돈 낭비했어요. 환불 받고 싶네요.',
        likes: 23,
        date: '2025-09-14',
        isVerified: true
    },
    {
        id: 74,
        movieId: null,
        userId: 24,
        userName: '류시우',
        rating: 5,
        content: '디테일이 살아있는 영화! 두 번 봐도 재밌을 것 같아요!',
        likes: 734,
        date: '2025-09-14',
        isVerified: true
    },
    {
        id: 75,
        movieId: null,
        userId: 25,
        userName: '하진우',
        rating: 4,
        content: '조연들의 연기도 훌륭했어요. 캐스팅이 완벽!',
        likes: 423,
        date: '2025-09-13',
        isVerified: true
    },
    {
        id: 76,
        movieId: null,
        userId: 26,
        userName: '표다은',
        rating: 3,
        content: '가볍게 보기 좋은 영화예요. 부담 없이 보세요.',
        likes: 112,
        date: '2025-09-13',
        isVerified: false
    },
    {
        id: 77,
        movieId: null,
        userId: 27,
        userName: '남궁민',
        rating: 5,
        content: '올해 베스트! 아카데미 후보감입니다!',
        likes: 889,
        date: '2025-09-12',
        isVerified: true
    },
    {
        id: 78,
        movieId: null,
        userId: 28,
        userName: '선우진',
        rating: 4,
        content: '복선 회수가 완벽합니다!',
        likes: 589,
        date: '2025-09-12',
        isVerified: true
    },
    {
        id: 79,
        movieId: null,
        userId: 29,
        userName: '강도윤',
        rating: 5,
        content: '감정선이 정말 섬세하게 표현된 영화였습니다. 작은 표정 하나하나에 의미가 담겨 있어서 끝나고도 한참 동안 생각났어요.',
        likes: 478,
        date: '2025-09-11',
        isVerified: true
    },
    {
        id: 80,
        movieId: null,
        userId: 30,
        userName: '최서린',
        rating: 4,
        content: '전체적인 완성도가 높아요. 스토리, 음악, 연출 모두 균형 잡혀 있습니다. 다만 약간 늘어지는 부분이 있어요.',
        likes: 213,
        date: '2025-09-10',
        isVerified: true
    },
    {
        id: 81,
        movieId: null,
        userId: 31,
        userName: '이도현',
        rating: 3,
        content: '그냥 무난했어요. 특별히 좋지도 나쁘지도 않은 그런 영화였습니다.',
        likes: 67,
        date: '2025-09-10',
        isVerified: false
    },
    {
        id: 82,
        movieId: null,
        userId: 32,
        userName: '조민하',
        rating: 5,
        content: '이 영화는 단순한 오락 영화가 아니에요. 인간의 감정, 관계, 그리고 삶의 의미에 대해 깊이 있게 다루고 있어서, 한 장면 한 장면이 철학적으로 느껴졌습니다. 특히 마지막 장면에서 주인공이 내뱉는 대사는 정말 인생의 진리를 담고 있다고 느꼈어요. 이런 작품은 쉽게 나오지 않습니다.',
        likes: 834,
        date: '2025-09-09',
        isVerified: true
    },
    {
        id: 83,
        movieId: null,
        userId: 33,
        userName: '윤가영',
        rating: 2,
        content: '기대에 비해 실망스러웠어요. 예고편이 너무 과하게 만들어진 느낌입니다.',
        likes: 56,
        date: '2025-09-09',
        isVerified: true
    },
    {
        id: 84,
        movieId: null,
        userId: 34,
        userName: '홍석진',
        rating: 4,
        content: '연출력이 정말 뛰어났습니다. 장면 전환, 음악의 타이밍, 배우의 감정 연기 모두 흠잡을 데가 없어요. 다만 개인적으로는 조금 더 임팩트 있는 결말이었으면 좋았을 것 같아요.',
        likes: 322,
        date: '2025-09-08',
        isVerified: true
    },
    {
        id: 85,
        movieId: null,
        userId: 35,
        userName: '신하늘',
        rating: 5,
        content: '오랜만에 가슴이 벅차오르는 영화를 봤어요. 단순히 재밌다를 넘어서 삶에 대한 새로운 관점을 주는 작품이었습니다. 연출, 음악, 대사, 색감 모두 예술 그 자체였어요. 한동안 이 여운에서 벗어나기 어려울 것 같아요.',
        likes: 912,
        date: '2025-09-08',
        isVerified: true
    },
    {
        id: 86,
        movieId: null,
        userId: 36,
        userName: '전태윤',
        rating: 4,
        content: '가볍게 보기 좋은 영화예요. 내용도 따뜻하고 위로가 되는 부분이 많습니다.',
        likes: 203,
        date: '2025-09-07',
        isVerified: true
    },
    {
        id: 87,
        movieId: null,
        userId: 37,
        userName: '정하늘',
        rating: 1,
        content: '연출 의도는 알겠는데 너무 난해했어요. 끝까지 봤지만 무슨 말을 하려는지 모르겠더군요.',
        likes: 45,
        date: '2025-09-07',
        isVerified: true
    },
    {
        id: 88,
        movieId: null,
        userId: 38,
        userName: '김나윤',
        rating: 5,
        content: '이런 영화가 바로 “예술”이라고 생각합니다. 장면 하나하나가 회화처럼 아름답고, 대사 한 줄 한 줄이 시처럼 와닿았어요. 단순히 스토리만 보는 영화가 아니라, 감정과 철학, 인간의 본질을 함께 느낄 수 있는 작품이었어요. 특히 주인공이 마지막에 흘리는 눈물 한 방울이 얼마나 많은 의미를 담고 있었는지… 정말 깊은 감동을 받았습니다.',
        likes: 1056,
        date: '2025-09-06',
        isVerified: true
    },
    {
        id: 89,
        movieId: null,
        userId: 39,
        userName: '박성훈',
        rating: 3,
        content: '볼만하긴 했는데, 조금 늘어진 감이 있었어요. 연출은 좋았지만 전개가 다소 예측 가능했습니다.',
        likes: 128,
        date: '2025-09-06',
        isVerified: false
    },
    {
        id: 90,
        movieId: null,
        userId: 40,
        userName: '이도연',
        rating: 4,
        content: '전체적으로 메시지가 좋았어요. 엔딩에서 주는 여운이 꽤 진했습니다.',
        likes: 254,
        date: '2025-09-05',
        isVerified: true
    },
    {
        id: 91,
        movieId: null,
        userId: 41,
        userName: '서준혁',
        rating: 5,
        content: '감독의 연출력이 빛나는 작품. 대사 하나하나에 의미가 있고, 인물들의 심리가 자연스럽게 드러나서 몰입도가 엄청납니다. 음악도 정말 완벽했어요.',
        likes: 645,
        date: '2025-09-05',
        isVerified: true
    },
    {
        id: 92,
        movieId: null,
        userId: 42,
        userName: '노태영',
        rating: 2,
        content: '음악은 좋았는데 스토리가 너무 산만했어요. 초반엔 재밌었지만 갈수록 집중이 안 되더군요.',
        likes: 76,
        date: '2025-09-04',
        isVerified: true
    },
    {
        id: 93,
        movieId: null,
        userId: 43,
        userName: '오수빈',
        rating: 4,
        content: '잔잔하고 따뜻한 감동이 있는 영화였어요. 보고 나면 마음이 편안해집니다.',
        likes: 332,
        date: '2025-09-04',
        isVerified: true
    },
    {
        id: 94,
        movieId: null,
        userId: 44,
        userName: '임태민',
        rating: 5,
        content: '감정 표현이 정말 탁월했어요. 배우들의 연기가 너무 리얼해서 현실 이야기처럼 느껴졌습니다. 특히 후반부의 긴장감은 손에 땀을 쥐게 했어요. 극장에서 보길 정말 잘했다는 생각이 듭니다.',
        likes: 802,
        date: '2025-09-03',
        isVerified: true
    },
    {
        id: 95,
        movieId: null,
        userId: 45,
        userName: '박소민',
        rating: 5,
        content: '처음부터 끝까지 눈을 뗄 수 없었어요. 스토리 전개도 좋았고, 캐릭터의 감정선도 너무 잘 표현되어 있었어요. 특히 마지막 장면은 아직도 잊히지 않습니다. 단순한 재미를 넘어서 인생에 대한 통찰을 준 영화였어요.',
        likes: 978,
        date: '2025-09-03',
        isVerified: true
    },
    {
        id: 96,
        movieId: null,
        userId: 46,
        userName: '이재원',
        rating: 3,
        content: '그럭저럭 볼만했어요. 감동적인 부분도 있었지만, 전체적으로는 무난했습니다.',
        likes: 144,
        date: '2025-09-02',
        isVerified: false
    },
    {
        id: 97,
        movieId: null,
        userId: 47,
        userName: '한도현',
        rating: 5,
        content: '보는 내내 마음이 따뜻해졌어요. 특히 중반 이후의 전개는 정말 눈물 없이 보기 힘듭니다. 인생에서 가장 중요한 게 무엇인지 생각하게 만드는 영화예요. 가족, 용서, 사랑 — 이런 주제를 이렇게 진솔하게 풀어낼 수 있다니 정말 놀라웠습니다.',
        likes: 1034,
        date: '2025-09-02',
        isVerified: true
    },
    {
        id: 98,
        movieId: null,
        userId: 48,
        userName: '유지혜',
        rating: 4,
        content: '엔딩이 너무 좋았어요. 여운이 남아서 며칠 동안 생각났습니다.',
        likes: 289,
        date: '2025-09-01',
        isVerified: true
    },
    {
        id: 99,
        movieId: null,
        userId: 49,
        userName: '정우빈',
        rating: 1,
        content: '솔직히 지루했어요. 주제는 좋은데 표현 방식이 너무 어려웠습니다.',
        likes: 56,
        date: '2025-09-01',
        isVerified: true
    },
    {
        id: 100,
        movieId: null,
        userId: 50,
        userName: '백하린',
        rating: 5,
        content: '올해 본 영화 중 단연 최고였습니다. 감동, 재미, 메시지 모두 완벽하게 조화를 이루고 있어요. 엔딩 크레딧이 올라갈 때까지 자리에서 일어나지 못했습니다. 이런 영화는 정말 오랜만이에요.',
        likes: 1289,
        date: '2025-08-31',
        isVerified: true
    },
    {
        id: 101,
        movieId: 6,
        user: '박소연',
        rating: 4.2,
        review: '스토리도 좋았고 연기도 정말 자연스러웠어요. 중간중간 몰입감이 떨어지는 부분만 빼면 완벽!',
        date: '2025-10-18'
    },
    {
        id: 102,
        movieId: 3,
        user: '이재현',
        rating: 3.8,
        review: '예상 가능한 전개였지만 연출이 세련돼서 지루하지 않았어요. 음악이 특히 좋았습니다.',
        date: '2025-10-17'
    },
    {
        id: 103,
        movieId: 9,
        user: '최민지',
        rating: 4.7,
        review: '감정선이 너무 섬세하게 표현돼서 마지막에 눈물이 났어요. 강력 추천합니다!',
        date: '2025-10-16'
    },
    {
        id: 104,
        movieId: 1,
        user: '정우성',
        rating: 2.9,
        review: '배우들은 좋았지만 전개가 너무 느리고 결말이 허무했어요. 한 번 보면 충분할 듯.',
        date: '2025-10-15'
    },
    {
        id: 105,
        movieId: 8,
        user: '김하늘',
        rating: 4.5,
        review: 'OST, 연기, 영상미 모두 훌륭했습니다. 최근 본 작품 중 최고였어요.',
        date: '2025-10-14'
    },
    {
        id: 106,
        movieId: 2,
        user: '조민수',
        rating: 3.3,
        review: '초반은 재밌었는데 후반부가 다소 루즈했어요. 그래도 전체적으로 나쁘지 않았어요.',
        date: '2025-10-13'
    },
    {
        id: 107,
        movieId: 4,
        user: '한지민',
        rating: 4.9,
        review: '진짜 명작입니다. 연출, 대사, 연기까지 모두 완벽. 또 보고 싶어요!',
        date: '2025-10-12'
    },
    {
        id: 108,
        movieId: 7,
        user: '서준호',
        rating: 3.1,
        review: '컨셉은 흥미로웠지만 마무리가 급했어요. 그래도 배우들 덕분에 볼만했어요.',
        date: '2025-10-11'
    },
    {
        id: 109,
        movieId: 5,
        user: '윤아름',
        rating: 4.0,
        review: '전개가 깔끔하고 긴장감이 좋았어요. 스릴러 좋아하는 분들께 추천합니다.',
        date: '2025-10-10'
    },
    {
        id: 110,
        movieId: 10,
        user: '김도윤',
        rating: 2.5,
        review: '기대가 너무 컸나 봐요. 설정이 좀 억지스럽고 캐릭터 몰입이 힘들었어요.',
        date: '2025-10-09'
    },
    {
        id: 111,
        movieId: null,
        userId: 1,
        userName: '강서진',
        rating: 5,
        content: '이 영화는 정말 인생 영화입니다! 모든 장면이 예술작품처럼 아름답고, 대사 하나하나가 깊은 울림을 줍니다.',
        likes: 892,
        date: '2025-08-30',
        isVerified: true
    },
    {
        id: 112,
        movieId: null,
        userId: 2,
        userName: '송민재',
        rating: 4,
        content: '전개가 빠르고 몰입감이 좋았어요. 액션 씬도 훌륭했습니다!',
        likes: 456,
        date: '2025-08-30',
        isVerified: true
    },
    {
        id: 113,
        movieId: null,
        userId: 3,
        userName: '정은서',
        rating: 3,
        content: '나쁘진 않았지만 기대만큼은 아니었어요. 그래도 볼만했습니다.',
        likes: 123,
        date: '2025-08-29',
        isVerified: false
    },
    {
        id: 114,
        movieId: null,
        userId: 4,
        userName: '박준영',
        rating: 5,
        content: '감동의 물결이 끊이지 않았어요. 영화관에서 세 번이나 울었습니다 ㅠㅠ',
        likes: 734,
        date: '2025-08-29',
        isVerified: true
    },
    {
        id: 115,
        movieId: null,
        userId: 5,
        userName: '최유진',
        rating: 2,
        content: '스토리가 너무 뻔하고 연출도 식상했어요. 아쉬운 작품입니다.',
        likes: 89,
        date: '2025-08-28',
        isVerified: true
    },
    {
        id: 116,
        movieId: null,
        userId: 6,
        userName: '이서준',
        rating: 4,
        content: '배우들의 연기력이 정말 대단했어요. 특히 주연 배우의 눈빛 연기가 인상적이었습니다.',
        likes: 567,
        date: '2025-08-28',
        isVerified: true
    },
    {
        id: 117,
        movieId: null,
        userId: 7,
        userName: '김하은',
        rating: 5,
        content: '올해 최고의 영화! 음악, 영상, 스토리 모두 완벽했어요. 꼭 보세요!',
        likes: 1023,
        date: '2025-08-27',
        isVerified: true
    },
    {
        id: 118,
        movieId: null,
        userId: 8,
        userName: '윤도현',
        rating: 3,
        content: '중간 정도 되는 영화예요. 기대를 많이 하지 않으면 괜찮습니다.',
        likes: 178,
        date: '2025-08-27',
        isVerified: false
    },
    {
        id: 119,
        movieId: null,
        userId: 9,
        userName: '장민지',
        rating: 4,
        content: '반전이 정말 놀라웠어요! 마지막까지 긴장감을 놓칠 수 없었습니다.',
        likes: 445,
        date: '2025-08-26',
        isVerified: true
    },
    {
        id: 120,
        movieId: null,
        userId: 10,
        userName: '박지훈',
        rating: 5,
        content: '감정 연기가 정말 리얼했어요. 극장에서 보길 정말 잘했다는 생각이 듭니다.',
        likes: 678,
        date: '2025-08-26',
        isVerified: true
    },
    {
        id: 121,
        movieId: null,
        userId: 11,
        userName: '오수아',
        rating: 1,
        content: '돈과 시간이 너무 아까웠어요. 중간에 나올까 고민했습니다.',
        likes: 67,
        date: '2025-08-25',
        isVerified: true
    },
    {
        id: 122,
        movieId: null,
        userId: 12,
        userName: '서태양',
        rating: 4,
        content: 'CG가 정말 화려했어요. IMAX로 보는 걸 추천합니다!',
        likes: 389,
        date: '2025-08-25',
        isVerified: true
    },
    {
        id: 123,
        movieId: null,
        userId: 13,
        userName: '진수빈',
        rating: 5,
        content: '캐릭터들이 너무 매력적이었어요! 특히 주인공의 성장 스토리가 감동적이었습니다.',
        likes: 812,
        date: '2025-08-24',
        isVerified: true
    },
    {
        id: 124,
        movieId: null,
        userId: 14,
        userName: '한가을',
        rating: 3,
        content: '그냥 평범한 영화였어요. 특별한 감흥은 없었습니다.',
        likes: 134,
        date: '2025-08-24',
        isVerified: false
    },
    {
        id: 125,
        movieId: null,
        userId: 15,
        userName: '배성민',
        rating: 4,
        content: '유머 감각이 좋았어요. 웃다가 감동받는 영화입니다.',
        likes: 523,
        date: '2025-08-23',
        isVerified: true
    },
    {
        id: 126,
        movieId: null,
        userId: 16,
        userName: '조예린',
        rating: 5,
        content: '이런 걸작을 만들어주신 감독님께 감사드립니다. 진짜 명작이에요!',
        likes: 967,
        date: '2025-08-23',
        isVerified: true
    },
    {
        id: 127,
        movieId: null,
        userId: 17,
        userName: '홍지우',
        rating: 2,
        content: '스토리 전개가 너무 느려서 지루했어요. 편집이 아쉽습니다.',
        likes: 95,
        date: '2025-08-22',
        isVerified: true
    },
    {
        id: 128,
        movieId: null,
        userId: 18,
        userName: '임채원',
        rating: 4,
        content: '촬영 기법이 정말 독특했어요. 예술 영화 같은 느낌이었습니다.',
        likes: 412,
        date: '2025-08-22',
        isVerified: true
    },
    {
        id: 129,
        movieId: null,
        userId: 19,
        userName: '양서현',
        rating: 5,
        content: '사운드트랙이 정말 좋았어요! OST 앨범 바로 구매했습니다.',
        likes: 745,
        date: '2025-08-21',
        isVerified: true
    },
    {
        id: 130,
        movieId: null,
        userId: 20,
        userName: '문준호',
        rating: 3,
        content: '볼만은 했지만 한 번으로 충분한 영화예요.',
        likes: 167,
        date: '2025-08-21',
        isVerified: false
    },
    {
        id: 131,
        movieId: null,
        userId: 21,
        userName: '신다은',
        rating: 4,
        content: '메시지가 깊고 의미 있는 영화였어요. 생각할 거리를 많이 줍니다.',
        likes: 498,
        date: '2025-08-20',
        isVerified: true
    },
    {
        id: 132,
        movieId: null,
        userId: 22,
        userName: '남궁하늘',
        rating: 5,
        content: '엔딩 신이 정말 압권이었어요! 소름 돋았습니다.',
        likes: 856,
        date: '2025-08-20',
        isVerified: true
    },
    {
        id: 133,
        movieId: null,
        userId: 23,
        userName: '권도윤',
        rating: 1,
        content: '캐릭터에 공감이 안 갔어요. 스토리도 억지스러웠습니다.',
        likes: 78,
        date: '2025-08-19',
        isVerified: true
    },
    {
        id: 134,
        movieId: null,
        userId: 24,
        userName: '황시우',
        rating: 4,
        content: '가족과 함께 보기 정말 좋은 영화예요. 따뜻한 감동이 있습니다.',
        likes: 534,
        date: '2025-08-19',
        isVerified: true
    },
    {
        id: 135,
        movieId: null,
        userId: 25,
        userName: '안지원',
        rating: 5,
        content: '배우들의 케미가 환상적이에요! 연기 호흡이 정말 잘 맞았습니다.',
        likes: 923,
        date: '2025-08-18',
        isVerified: true
    },
    {
        id: 136,
        movieId: null,
        userId: 26,
        userName: '표준우',
        rating: 3,
        content: '무난한 영화였어요. 기대치를 낮추면 괜찮습니다.',
        likes: 189,
        date: '2025-08-18',
        isVerified: false
    },
    {
        id: 137,
        movieId: null,
        userId: 27,
        userName: '탁민서',
        rating: 4,
        content: '색감이 정말 아름다웠어요. 한 편의 그림을 보는 것 같았습니다.',
        likes: 612,
        date: '2025-08-17',
        isVerified: true
    },
    {
        id: 138,
        movieId: null,
        userId: 28,
        userName: '소하은',
        rating: 5,
        content: '이 영화 때문에 인생관이 바뀌었어요. 정말 깊은 감동을 받았습니다.',
        likes: 1045,
        date: '2025-08-17',
        isVerified: true
    },
    {
        id: 139,
        movieId: null,
        userId: 29,
        userName: '하준서',
        rating: 2,
        content: '초반은 좋았는데 후반부가 산만했어요. 결말도 아쉬웠습니다.',
        likes: 112,
        date: '2025-08-16',
        isVerified: true
    },
    {
        id: 140,
        movieId: null,
        userId: 30,
        userName: '유채린',
        rating: 4,
        content: '전개가 깔끔하고 스토리가 탄탄했어요. 추천합니다!',
        likes: 467,
        date: '2025-08-16',
        isVerified: true
    },
    {
        id: 141,
        movieId: null,
        userId: 31,
        userName: '방시온',
        rating: 5,
        content: '감독의 연출력이 빛나는 작품! 장면 하나하나가 완벽했어요.',
        likes: 789,
        date: '2025-08-15',
        isVerified: true
    },
    {
        id: 142,
        movieId: null,
        userId: 32,
        userName: '석민재',
        rating: 3,
        content: '그냥저냥 볼 만했어요. 크게 인상 깊진 않았습니다.',
        likes: 156,
        date: '2025-08-15',
        isVerified: false
    },
    {
        id: 143,
        movieId: null,
        userId: 33,
        userName: '추서윤',
        rating: 4,
        content: '대사가 정말 인상적이었어요. 명대사가 많았습니다.',
        likes: 545,
        date: '2025-08-14',
        isVerified: true
    },
    {
        id: 144,
        movieId: null,
        userId: 34,
        userName: '명재희',
        rating: 5,
        content: '올해 본 영화 중 단연 최고! 10점 만점에 12점 주고 싶어요.',
        likes: 1134,
        date: '2025-08-14',
        isVerified: true
    },
    {
        id: 145,
        movieId: null,
        userId: 35,
        userName: '예도윤',
        rating: 1,
        content: '스토리가 이해가 안 갔어요. 너무 난해했습니다.',
        likes: 89,
        date: '2025-08-13',
        isVerified: true
    },
    {
        id: 146,
        movieId: null,
        userId: 36,
        userName: '설아인',
        rating: 4,
        content: '영상미가 정말 뛰어났어요. 모든 장면이 포스터감입니다.',
        likes: 678,
        date: '2025-08-13',
        isVerified: true
    },
    {
        id: 147,
        movieId: null,
        userId: 37,
        userName: '복지훈',
        rating: 5,
        content: '배우들의 연기가 정말 자연스러웠어요. 몰입도 100%!',
        likes: 923,
        date: '2025-08-12',
        isVerified: true
    },
    {
        id: 148,
        movieId: null,
        userId: 38,
        userName: '모서진',
        rating: 3,
        content: '볼만했지만 특별하진 않았어요. 평범한 영화입니다.',
        likes: 201,
        date: '2025-08-12',
        isVerified: false
    },
    {
        id: 149,
        movieId: null,
        userId: 39,
        userName: '채민하',
        rating: 4,
        content: '긴장감이 넘치는 영화였어요. 손에 땀을 쥐게 했습니다.',
        likes: 512,
        date: '2025-08-11',
        isVerified: true
    },
    {
        id: 150,
        movieId: null,
        userId: 40,
        userName: '우재민',
        rating: 5,
        content: '이렇게 완성도 높은 영화는 정말 오랜만이에요. 강추합니다!',
        likes: 1067,
        date: '2025-08-11',
        isVerified: true
    },
    {
        id: 151,
        movieId: null,
        userId: 41,
        userName: '도연우',
        rating: 2,
        content: '기대했는데 실망스러웠어요. 예고편이 더 재밌었습니다.',
        likes: 134,
        date: '2025-08-10',
        isVerified: true
    },
    {
        id: 152,
        movieId: null,
        userId: 42,
        userName: '진유나',
        rating: 4,
        content: '음악이 정말 좋았어요. 분위기를 완벽하게 살렸습니다.',
        likes: 589,
        date: '2025-08-10',
        isVerified: true
    },
    {
        id: 153,
        movieId: null,
        userId: 43,
        userName: '나태준',
        rating: 5,
        content: '감동의 연속이었어요. 영화 보고 한참 동안 멍했습니다.',
        likes: 845,
        date: '2025-08-09',
        isVerified: true
    },
    {
        id: 154,
        movieId: null,
        userId: 44,
        userName: '소지안',
        rating: 3,
        content: '나쁘지 않았지만 강렬한 인상은 없었어요.',
        likes: 178,
        date: '2025-08-09',
        isVerified: false
    },
    {
        id: 155,
        movieId: null,
        userId: 45,
        userName: '천하늘',
        rating: 4,
        content: '액션 신이 정말 박력 있었어요. 스턴트가 대단했습니다.',
        likes: 623,
        date: '2025-08-08',
        isVerified: true
    },
    {
        id: 156,
        movieId: null,
        userId: 46,
        userName: '마준혁',
        rating: 5,
        content: '올해의 영화! 모든 면에서 완벽한 작품이었습니다.',
        likes: 1189,
        date: '2025-08-08',
        isVerified: true
    },
    {
        id: 157,
        movieId: null,
        userId: 47,
        userName: '석서아',
        rating: 1,
        content: '스토리가 너무 억지스러웠어요. 공감하기 힘들었습니다.',
        likes: 95,
        date: '2025-08-07',
        isVerified: true
    },
    {
        id: 158,
        movieId: null,
        userId: 48,
        userName: '추현우',
        rating: 4,
        content: '반전이 좋았어요. 예상치 못한 전개가 인상적이었습니다.',
        likes: 534,
        date: '2025-08-07',
        isVerified: true
    },
    {
        id: 159,
        movieId: null,
        userId: 49,
        userName: '명가은',
        rating: 5,
        content: '캐스팅이 정말 완벽했어요. 배우들 모두 최고였습니다!',
        likes: 967,
        date: '2025-08-06',
        isVerified: true
    },
    {
        id: 160,
        movieId: null,
        userId: 50,
        userName: '예준서',
        rating: 3,
        content: '무난하게 볼 만한 영화예요. 시간 때우기 좋습니다.',
        likes: 223,
        date: '2025-08-06',
        isVerified: false
    },
    {
        id: 161,
        movieId: null,
        userId: 1,
        userName: '설도현',
        rating: 4,
        content: '연출이 세련되고 템포도 좋았어요. 재밌게 봤습니다!',
        likes: 678,
        date: '2025-08-05',
        isVerified: true
    },
    {
        id: 162,
        movieId: null,
        userId: 2,
        userName: '복하윤',
        rating: 5,
        content: '감정선이 너무 섬세하게 표현되어 있어요. 진짜 명작입니다!',
        likes: 1023,
        date: '2025-08-05',
        isVerified: true
    },
    {
        id: 163,
        movieId: null,
        userId: 3,
        userName: '모시원',
        rating: 2,
        content: '기대 이하였어요. 스토리가 너무 평범했습니다.',
        likes: 145,
        date: '2025-08-04',
        isVerified: true
    },
    {
        id: 164,
        movieId: null,
        userId: 4,
        userName: '채지혜',
        rating: 4,
        content: '후반부가 정말 압권이었어요. 마지막까지 긴장감 넘쳤습니다.',
        likes: 756,
        date: '2025-08-04',
        isVerified: true
    },
    {
        id: 165,
        movieId: null,
        userId: 5,
        userName: '우태민',
        rating: 5,
        content: '이런 영화를 기다렸어요! 스토리, 연기 모두 완벽합니다.',
        likes: 1145,
        date: '2025-08-03',
        isVerified: true
    },
    {
        id: 166,
        movieId: null,
        userId: 6,
        userName: '도서빈',
        rating: 3,
        content: '그냥 평범했어요. 특별히 기억에 남을 건 없었습니다.',
        likes: 267,
        date: '2025-08-03',
        isVerified: false
    },
    {
        id: 167,
        movieId: null,
        userId: 7,
        userName: '나재원',
        rating: 4,
        content: '촬영이 정말 아름다웠어요. 영상미가 뛰어났습니다.',
        likes: 589,
        date: '2025-08-02',
        isVerified: true
    },
    {
        id: 168,
        movieId: null,
        userId: 8,
        userName: '소다현',
        rating: 5,
        content: 'OST가 귀에 쏙쏙 들어와요. 영화 보고 계속 듣고 있습니다!',
        likes: 834,
        date: '2025-08-02',
        isVerified: true
    },
    {
        id: 169,
        movieId: null,
        userId: 9,
        userName: '천수민',
        rating: 1,
        content: '지루했어요. 중간에 졸았습니다. 비추천.',
        likes: 78,
        date: '2025-08-01',
        isVerified: true
    },
    {
        id: 170,
        movieId: null,
        userId: 10,
        userName: '방하린',
        rating: 4,
        content: '메시지가 좋았어요. 생각할 거리를 많이 주는 영화입니다.',
        likes: 612,
        date: '2025-08-01',
        isVerified: true
    },
    {
        id: 171,
        movieId: null,
        userId: 11,
        userName: '석예은',
        rating: 5,
        content: '배우들의 호흡이 정말 좋았어요. 케미가 최고입니다!',
        likes: 945,
        date: '2025-07-31',
        isVerified: true
    },
    {
        id: 172,
        movieId: null,
        userId: 12,
        userName: '추민규',
        rating: 3,
        content: '볼만은 했지만 기대만큼은 아니었어요.',
        likes: 234,
        date: '2025-07-31',
        isVerified: false
    },
    {
        id: 173,
        movieId: null,
        userId: 13,
        userName: '명시우',
        rating: 4,
        content: '대사가 인상 깊었어요. 명대사가 많은 영화입니다.',
        likes: 567,
        date: '2025-07-30',
        isVerified: true
    },
    {
        id: 174,
        movieId: null,
        userId: 14,
        userName: '예지안',
        rating: 5,
        content: '올해 최고의 작품! 다시 보러 갈 예정입니다.',
        likes: 1267,
        date: '2025-07-30',
        isVerified: true
    },
    {
        id: 175,
        movieId: null,
        userId: 15,
        userName: '설우빈',
        rating: 2,
        content: '스토리 전개가 너무 느렸어요. 지루한 부분이 많았습니다.',
        likes: 167,
        date: '2025-07-29',
        isVerified: true
    },
    {
        id: 176,
        movieId: null,
        userId: 16,
        userName: '복서준',
        rating: 4,
        content: '액션이 정말 박진감 넘쳤어요. 스턴트가 대단했습니다!',
        likes: 723,
        date: '2025-07-29',
        isVerified: true
    },
    {
        id: 177,
        movieId: null,
        userId: 17,
        userName: '모하은',
        rating: 5,
        content: '감독의 연출력이 빛나는 영화! 모든 장면이 예술입니다.',
        likes: 1089,
        date: '2025-07-28',
        isVerified: true
    },
    {
        id: 178,
        movieId: null,
        userId: 18,
        userName: '채도윤',
        rating: 3,
        content: '평범한 영화였어요. 무난하게 볼 만합니다.',
        likes: 289,
        date: '2025-07-28',
        isVerified: false
    },
    {
        id: 179,
        movieId: null,
        userId: 19,
        userName: '우연우',
        rating: 4,
        content: '반전이 좋았어요! 예상 못한 전개가 재미있었습니다.',
        likes: 645,
        date: '2025-07-27',
        isVerified: true
    },
    {
        id: 180,
        movieId: null,
        userId: 20,
        userName: '도가은',
        rating: 5,
        content: '완벽한 영화! 스토리, 연기, 음악 모두 10점 만점입니다.',
        likes: 1156,
        date: '2025-07-27',
        isVerified: true
    },
    {
        id: 181,
        movieId: null,
        userId: 21,
        userName: '나준혁',
        rating: 1,
        content: '돈 아까웠어요. 기대에 완전히 못 미쳤습니다.',
        likes: 92,
        date: '2025-07-26',
        isVerified: true
    },
    {
        id: 182,
        movieId: null,
        userId: 22,
        userName: '소시온',
        rating: 4,
        content: '영상미가 정말 뛰어났어요. 눈이 즐거운 영화입니다.',
        likes: 678,
        date: '2025-07-26',
        isVerified: true
    },
    {
        id: 183,
        movieId: null,
        userId: 23,
        userName: '천서아',
        rating: 5,
        content: '감동적인 스토리였어요. 마지막에 눈물이 났습니다 ㅠㅠ',
        likes: 923,
        date: '2025-07-25',
        isVerified: true
    },
    {
        id: 184,
        movieId: null,
        userId: 24,
        userName: '방현우',
        rating: 3,
        content: '그냥 볼 만했어요. 크게 특별한 건 없었습니다.',
        likes: 312,
        date: '2025-07-25',
        isVerified: false
    },
    {
        id: 185,
        movieId: null,
        userId: 25,
        userName: '석지혜',
        rating: 4,
        content: '배우들의 연기가 자연스러웠어요. 몰입도가 높았습니다.',
        likes: 734,
        date: '2025-07-24',
        isVerified: true
    },
    {
        id: 186,
        movieId: null,
        userId: 26,
        userName: '추태민',
        rating: 5,
        content: '올해 본 영화 중 최고! 진짜 명작입니다.',
        likes: 1234,
        date: '2025-07-24',
        isVerified: true
    },
    {
        id: 187,
        movieId: null,
        userId: 27,
        userName: '명소민',
        rating: 2,
        content: '스토리가 너무 뻔했어요. 새로운 게 없었습니다.',
        likes: 178,
        date: '2025-07-23',
        isVerified: true
    },
    {
        id: 188,
        movieId: null,
        userId: 28,
        userName: '예재원',
        rating: 4,
        content: '음악이 정말 좋았어요. 분위기를 잘 살렸습니다.',
        likes: 589,
        date: '2025-07-23',
        isVerified: true
    },
    {
        id: 189,
        movieId: null,
        userId: 29,
        userName: '설이안',
        rating: 5,
        content: '감독의 철학이 느껴지는 작품! 예술적이에요.',
        likes: 1067,
        date: '2025-07-22',
        isVerified: true
    },
    {
        id: 190,
        movieId: null,
        userId: 30,
        userName: '복다현',
        rating: 3,
        content: '무난한 영화였어요. 시간 보내기 좋습니다.',
        likes: 267,
        date: '2025-07-22',
        isVerified: false
    },
    {
        id: 191,
        movieId: null,
        userId: 31,
        userName: '모수빈',
        rating: 4,
        content: '전개가 빠르고 긴장감이 넘쳤어요. 재밌었습니다!',
        likes: 812,
        date: '2025-07-21',
        isVerified: true
    },
    {
        id: 192,
        movieId: null,
        userId: 32,
        userName: '채하린',
        rating: 5,
        content: '이런 영화를 기다렸어요! 완벽한 작품입니다.',
        likes: 1189,
        date: '2025-07-21',
        isVerified: true
    },
    {
        id: 193,
        movieId: null,
        userId: 33,
        userName: '우연우',
        rating: 1,
        content: '너무 지루했어요. 중간에 나오고 싶었습니다.',
        likes: 89,
        date: '2025-07-20',
        isVerified: true
    },
    {
        id: 194,
        movieId: null,
        userId: 34,
        userName: '도준서',
        rating: 4,
        content: 'CG가 정말 대단했어요. 기술력이 놀라웠습니다.',
        likes: 723,
        date: '2025-07-20',
        isVerified: true
    },
    {
        id: 195,
        movieId: null,
        userId: 35,
        userName: '나가을',
        rating: 5,
        content: '배우들의 케미가 환상적이었어요. 꿀조합입니다!',
        likes: 1045,
        date: '2025-07-19',
        isVerified: true
    },
    {
        id: 196,
        movieId: null,
        userId: 36,
        userName: '소태양',
        rating: 3,
        content: '볼만했지만 강렬한 인상은 없었어요.',
        likes: 334,
        date: '2025-07-19',
        isVerified: false
    },
    {
        id: 197,
        movieId: null,
        userId: 37,
        userName: '천민지',
        rating: 4,
        content: '색감이 정말 아름다웠어요. 영상이 예술입니다.',
        likes: 689,
        date: '2025-07-18',
        isVerified: true
    },
    {
        id: 198,
        movieId: null,
        userId: 38,
        userName: '방서진',
        rating: 5,
        content: '올해 최고의 영화! 강력 추천합니다!',
        likes: 1278,
        date: '2025-07-18',
        isVerified: true
    },
    {
        id: 199,
        movieId: null,
        userId: 39,
        userName: '석도현',
        rating: 2,
        content: '기대했는데 실망스러웠어요. 스토리가 약했습니다.',
        likes: 156,
        date: '2025-07-17',
        isVerified: true
    },
    {
        id: 200,
        movieId: null,
        userId: 40,
        userName: '추하은',
        rating: 4,
        content: '대사가 인상적이었어요. 명대사가 많았습니다.',
        likes: 734,
        date: '2025-07-17',
        isVerified: true
    },
    {
        id: 201,
        movieId: null,
        userId: 41,
        userName: '명시원',
        rating: 5,
        content: '감동의 연속! 엔딩까지 완벽한 영화였습니다.',
        likes: 1123,
        date: '2025-07-16',
        isVerified: true
    },
    {
        id: 202,
        movieId: null,
        userId: 42,
        userName: '예연우',
        rating: 3,
        content: '평범했어요. 기대를 많이 하지 않으면 괜찮습니다.',
        likes: 289,
        date: '2025-07-16',
        isVerified: false
    },
    {
        id: 203,
        movieId: null,
        userId: 43,
        userName: '설우빈',
        rating: 4,
        content: '액션이 정말 화려했어요. 볼거리가 많았습니다.',
        likes: 812,
        date: '2025-07-15',
        isVerified: true
    },
    {
        id: 204,
        movieId: null,
        userId: 44,
        userName: '복가은',
        rating: 5,
        content: '완벽한 영화! 모든 면에서 만족스러웠습니다.',
        likes: 1267,
        date: '2025-07-15',
        isVerified: true
    },
    {
        id: 205,
        movieId: null,
        userId: 45,
        userName: '모지안',
        rating: 1,
        content: '별로였어요. 시간과 돈이 아까웠습니다.',
        likes: 101,
        date: '2025-07-14',
        isVerified: true
    },
    {
        id: 206,
        movieId: null,
        userId: 46,
        userName: '채현우',
        rating: 4,
        content: '연출이 정말 세련되었어요. 감각적인 영화입니다.',
        likes: 689,
        date: '2025-07-14',
        isVerified: true
    },
    {
        id: 207,
        movieId: null,
        userId: 47,
        userName: '우서아',
        rating: 5,
        content: 'OST가 정말 좋았어요. 영화 보고 계속 듣고 있습니다!',
        likes: 945,
        date: '2025-07-13',
        isVerified: true
    },
    {
        id: 208,
        movieId: null,
        userId: 48,
        userName: '도태민',
        rating: 3,
        content: '그냥저냥 볼 만했어요. 특별한 건 없었습니다.',
        likes: 312,
        date: '2025-07-13',
        isVerified: false
    },
    {
        id: 209,
        movieId: null,
        userId: 49,
        userName: '나소민',
        rating: 4,
        content: '배우들의 연기가 훌륭했어요. 몰입도가 높았습니다.',
        likes: 756,
        date: '2025-07-12',
        isVerified: true
    },
    {
        id: 210,
        movieId: null,
        userId: 50,
        userName: '소재원',
        rating: 5,
        content: '올해의 영화! 진짜 명작이에요. 강추합니다!',
        likes: 1345,
        date: '2025-07-12',
        isVerified: true
    },
    {
        id: 211,
        movieId: null,
        userId: 1,
        userName: '천이안',
        rating: 2,
        content: '스토리가 너무 산만했어요. 집중하기 힘들었습니다.',
        likes: 189,
        date: '2025-07-11',
        isVerified: true
    },
    {
        id: 212,
        movieId: null,
        userId: 2,
        userName: '방다현',
        rating: 4,
        content: '영상미가 정말 뛰어났어요. 눈이 즐거웠습니다.',
        likes: 734,
        date: '2025-07-11',
        isVerified: true
    },
    {
        id: 213,
        movieId: null,
        userId: 3,
        userName: '석수빈',
        rating: 5,
        content: '감독의 연출력이 빛나는 작품! 예술영화 같았어요.',
        likes: 1089,
        date: '2025-07-10',
        isVerified: true
    },
    {
        id: 214,
        movieId: null,
        userId: 4,
        userName: '추하린',
        rating: 3,
        content: '무난한 영화였어요. 기대치를 낮추면 괜찮습니다.',
        likes: 356,
        date: '2025-07-10',
        isVerified: false
    },
    {
        id: 215,
        movieId: null,
        userId: 5,
        userName: '명연우',
        rating: 4,
        content: '반전이 정말 좋았어요! 마지막까지 긴장감 넘쳤습니다.',
        likes: 812,
        date: '2025-07-09',
        isVerified: true
    },
    {
        id: 216,
        movieId: null,
        userId: 6,
        userName: '예준서',
        rating: 5,
        content: '완벽한 영화! 다시 보러 갈 예정입니다.',
        likes: 1234,
        date: '2025-07-09',
        isVerified: true
    },
    {
        id: 217,
        movieId: null,
        userId: 7,
        userName: '설가을',
        rating: 1,
        content: '너무 지루했어요. 졸다가 나왔습니다.',
        likes: 112,
        date: '2025-07-08',
        isVerified: true
    },
    {
        id: 218,
        movieId: null,
        userId: 8,
        userName: '복태양',
        rating: 4,
        content: '음악이 정말 좋았어요. 분위기를 완벽하게 살렸습니다.',
        likes: 689,
        date: '2025-07-08',
        isVerified: true
    },
    {
        id: 219,
        movieId: null,
        userId: 9,
        userName: '모민지',
        rating: 5,
        content: '배우들의 케미가 환상적! 연기도 최고였습니다.',
        likes: 1156,
        date: '2025-07-07',
        isVerified: true
    },
    {
        id: 220,
        movieId: null,
        userId: 10,
        userName: '채서진',
        rating: 3,
        content: '볼만했지만 크게 인상 깊진 않았어요.',
        likes: 378,
        date: '2025-07-07',
        isVerified: false
    },
    {
        id: 221,
        movieId: null,
        userId: 11,
        userName: '우도현',
        rating: 4,
        content: '액션이 정말 박진감 넘쳤어요. 스턴트가 대단했습니다!',
        likes: 845,
        date: '2025-07-06',
        isVerified: true
    },
    {
        id: 222,
        movieId: null,
        userId: 12,
        userName: '도하은',
        rating: 5,
        content: '올해 최고의 작품! 10점 만점에 12점입니다.',
        likes: 1389,
        date: '2025-07-06',
        isVerified: true
    },
    {
        id: 223,
        movieId: null,
        userId: 13,
        userName: '나시원',
        rating: 2,
        content: '기대에 못 미쳤어요. 스토리가 약했습니다.',
        likes: 167,
        date: '2025-07-05',
        isVerified: true
    },
    {
        id: 224,
        movieId: null,
        userId: 14,
        userName: '소연우',
        rating: 4,
        content: '대사가 인상적이었어요. 명대사가 많은 영화입니다.',
        likes: 723,
        date: '2025-07-05',
        isVerified: true
    },
    {
        id: 225,
        movieId: null,
        userId: 15,
        userName: '천우빈',
        rating: 5,
        content: '감동적인 스토리! 마지막에 눈물이 났습니다.',
        likes: 1067,
        date: '2025-07-04',
        isVerified: true
    },
    {
        id: 226,
        movieId: null,
        userId: 16,
        userName: '방가은',
        rating: 3,
        content: '평범했어요. 특별히 기억에 남을 건 없었습니다.',
        likes: 289,
        date: '2025-07-04',
        isVerified: false
    },
    {
        id: 227,
        movieId: null,
        userId: 17,
        userName: '석지안',
        rating: 4,
        content: '촬영이 정말 아름다웠어요. 영상이 예술입니다.',
        likes: 812,
        date: '2025-07-03',
        isVerified: true
    },
    {
        id: 228,
        movieId: null,
        userId: 18,
        userName: '추현우',
        rating: 5,
        content: '완벽한 영화! 모든 면에서 만족스러웠습니다.',
        likes: 1278,
        date: '2025-07-03',
        isVerified: true
    },
    {
        id: 229,
        movieId: null,
        userId: 19,
        userName: '명서아',
        rating: 1,
        content: '돈 아까웠어요. 시간 낭비한 느낌입니다.',
        likes: 123,
        date: '2025-07-02',
        isVerified: true
    },
    {
        id: 230,
        movieId: null,
        userId: 20,
        userName: '예태민',
        rating: 4,
        content: '연출이 세련되었어요. 감각적인 영화입니다.',
        likes: 689,
        date: '2025-07-02',
        isVerified: true
    },
    {
        id: 231,
        movieId: null,
        userId: 21,
        userName: '설소민',
        rating: 5,
        content: 'OST가 정말 좋았어요! 영화 보고 계속 듣고 있습니다.',
        likes: 1145,
        date: '2025-07-01',
        isVerified: true
    },
    {
        id: 232,
        movieId: null,
        userId: 22,
        userName: '복재원',
        rating: 3,
        content: '그냥 볼 만했어요. 무난한 영화였습니다.',
        likes: 334,
        date: '2025-07-01',
        isVerified: false
    },
    {
        id: 233,
        movieId: null,
        userId: 23,
        userName: '모이안',
        rating: 4,
        content: '배우들의 연기가 자연스러웠어요. 몰입도 100%!',
        likes: 756,
        date: '2025-06-30',
        isVerified: true
    },
    {
        id: 234,
        movieId: null,
        userId: 24,
        userName: '채다현',
        rating: 5,
        content: '올해의 명작! 진짜 최고였습니다.',
        likes: 1456,
        date: '2025-06-30',
        isVerified: true
    },
    {
        id: 235,
        movieId: null,
        userId: 25,
        userName: '우수빈',
        rating: 2,
        content: '스토리가 너무 뻔했어요. 새로운 게 없었습니다.',
        likes: 178,
        date: '2025-06-29',
        isVerified: true
    },
    {
        id: 236,
        movieId: null,
        userId: 26,
        userName: '도하린',
        rating: 4,
        content: '영상미가 뛰어났어요. 눈이 정말 즐거웠습니다.',
        likes: 823,
        date: '2025-06-29',
        isVerified: true
    },
    {
        id: 237,
        movieId: null,
        userId: 27,
        userName: '나연우',
        rating: 5,
        content: '감독의 철학이 느껴지는 작품! 예술적이었어요.',
        likes: 1189,
        date: '2025-06-28',
        isVerified: true
    },
    {
        id: 238,
        movieId: null,
        userId: 28,
        userName: '소준서',
        rating: 3,
        content: '무난했어요. 기대를 많이 하지 않으면 괜찮습니다.',
        likes: 312,
        date: '2025-06-28',
        isVerified: false
    },
    {
        id: 239,
        movieId: null,
        userId: 29,
        userName: '천가을',
        rating: 4,
        content: '전개가 빠르고 긴장감이 넘쳤어요. 재밌게 봤습니다!',
        likes: 867,
        date: '2025-06-27',
        isVerified: true
    },
    {
        id: 240,
        movieId: null,
        userId: 30,
        userName: '방태양',
        rating: 5,
        content: '이런 영화를 기다렸어요! 완벽한 작품입니다.',
        likes: 1323,
        date: '2025-06-27',
        isVerified: true
    },
    {
        id: 241,
        movieId: null,
        userId: 31,
        userName: '석민지',
        rating: 1,
        content: '너무 지루했어요. 끝까지 보기 힘들었습니다.',
        likes: 134,
        date: '2025-06-26',
        isVerified: true
    },
    {
        id: 242,
        movieId: null,
        userId: 32,
        userName: '추서진',
        rating: 4,
        content: 'CG가 대단했어요. 기술력이 놀라웠습니다.',
        likes: 734,
        date: '2025-06-26',
        isVerified: true
    },
    {
        id: 243,
        movieId: null,
        userId: 33,
        userName: '명도현',
        rating: 5,
        content: '배우들의 케미가 환상적! 꿀조합이었습니다.',
        likes: 1234,
        date: '2025-06-25',
        isVerified: true
    },
    {
        id: 244,
        movieId: null,
        userId: 34,
        userName: '예하은',
        rating: 3,
        content: '볼만했지만 강렬한 인상은 없었어요.',
        likes: 389,
        date: '2025-06-25',
        isVerified: false
    },
    {
        id: 245,
        movieId: null,
        userId: 35,
        userName: '설시원',
        rating: 4,
        content: '색감이 아름다웠어요. 영상이 정말 예술이었습니다.',
        likes: 812,
        date: '2025-06-24',
        isVerified: true
    },
    {
        id: 246,
        movieId: null,
        userId: 36,
        userName: '복연우',
        rating: 5,
        content: '올해 최고의 영화! 강력 추천드립니다!',
        likes: 1467,
        date: '2025-06-24',
        isVerified: true
    },
    {
        id: 247,
        movieId: null,
        userId: 37,
        userName: '모우빈',
        rating: 2,
        content: '기대했는데 실망스러웠어요. 스토리가 약했습니다.',
        likes: 156,
        date: '2025-06-23',
        isVerified: true
    },
    {
        id: 248,
        movieId: null,
        userId: 38,
        userName: '채가은',
        rating: 4,
        content: '대사가 인상적이었어요. 명대사가 많았습니다.',
        likes: 723,
        date: '2025-06-23',
        isVerified: true
    },
    {
        id: 249,
        movieId: null,
        userId: 39,
        userName: '우지안',
        rating: 5,
        content: '감동의 연속! 엔딩까지 완벽했습니다.',
        likes: 1189,
        date: '2025-06-22',
        isVerified: true
    },
    {
        id: 250,
        movieId: null,
        userId: 40,
        userName: '도태민',
        rating: 3,
        content: '평범했어요. 시간 때우기에는 좋았습니다.',
        likes: 367,
        date: '2025-06-22',
        isVerified: false
    }
];
}),
"[project]/src/app/movieInfo/[id]/ReviewList.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/movieInfo/[id]/ReviewList.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/movieInfo/[id]/ReviewList.js <module evaluation>", "default");
}),
"[project]/src/app/movieInfo/[id]/ReviewList.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/movieInfo/[id]/ReviewList.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/movieInfo/[id]/ReviewList.js", "default");
}),
"[project]/src/app/movieInfo/[id]/ReviewList.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$movieInfo$2f5b$id$5d2f$ReviewList$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/movieInfo/[id]/ReviewList.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$movieInfo$2f5b$id$5d2f$ReviewList$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/movieInfo/[id]/ReviewList.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$movieInfo$2f5b$id$5d2f$ReviewList$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/movieInfo/[id]/CrewList.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client'; // 👈 더 이상 클라이언트 컴포넌트일 필요 없으므로 삭제하거나 주석 처리합니다.
__turbopack_context__.s([
    "default",
    ()=>CrewList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)"); // 👈 Next.js의 Link 컴포넌트 임포트
;
;
;
// API/이미지 경로는 page.js에서 가져오므로 여기서는 필요 없습니다.
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
function CrewList({ director, cast, styles }) {
    // 모달 관련 useState, API 호출 함수, 이벤트 핸들러 모두 제거됨
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: styles.section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.sectionHeader,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: styles.sectionTitle,
                        children: "감독 & 주요 출연진"
                    }, void 0, false, {
                        fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.crewGrid,
                    children: [
                        director && // 👈 div 대신 Link 컴포넌트 사용, href 속성 추가
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/person/${director.id}`,
                            style: {
                                textDecoration: 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.crewItem,
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: director.profile_path ? `${IMAGE_BASE_URL}/w185${director.profile_path}` : 'https://i.imgur.com/dDD1biL.png',
                                        alt: director.name,
                                        style: styles.crewImage
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: styles.crewName,
                                                children: director.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                                                lineNumber: 32,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: styles.textSecondary?.color || '#808080'
                                                },
                                                children: "감독"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                                                lineNumber: 33,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                                lineNumber: 25,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this),
                        cast.map((person)=>// 👈 div 대신 Link 컴포넌트 사용, href 속성 추가
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/person/${person.id}`,
                                style: {
                                    textDecoration: 'none'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.crewItem,
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: person.profile_path ? `${IMAGE_BASE_URL}/w185${person.profile_path}` : 'https://i.imgur.com/dDD1biL.png',
                                            alt: person.name,
                                            style: styles.crewImage
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: styles.crewName,
                                                    children: person.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: styles.textSecondary?.color || '#808080'
                                                    },
                                                    children: person.character
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)
                            }, person.id, false, {
                                fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/movieInfo/[id]/CrewList.js",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/src/app/movieInfo/[id]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// [전체 코드]
__turbopack_context__.s([
    "default",
    ()=>MovieInfoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/style/styles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$review$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/review.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$movieInfo$2f5b$id$5d2f$ReviewList$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/movieInfo/[id]/ReviewList.js [app-rsc] (ecmascript)"); // 👈 [추가] ReviewList 컴포넌트 임포트
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$movieInfo$2f5b$id$5d2f$CrewList$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/movieInfo/[id]/CrewList.js [app-rsc] (ecmascript)"); // 👈 [추가] CrewList 컴포넌트 임포트
;
;
;
;
;
;
;
// --- TMDB API 호출 함수들 ---
// ❗️ [수정] .env.local 파일 변경에 맞춰 변수 이름 수정
const TMDB_API_KEY = ("TURBOPACK compile-time value", "9e64f5eb945c14fa9c4818f4052e5ce2");
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
// 공통 fetch 함수
async function fetchTMDb(path) {
    const url = `${TMDB_BASE_URL}${path}?api_key=${TMDB_API_KEY}&language=ko-KR`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch: ${url}`);
    }
    return res.json();
}
// ... (getMovieDetails, getMovieCredits, getMovieImages, getSimilarMovies, getMovieVideos 함수는 기존과 동일) ...
// 영화 상세 정보
async function getMovieDetails(id) {
    return fetchTMDb(`/movie/${id}`);
}
// 출연진 및 제작진 정보
async function getMovieCredits(id) {
    return fetchTMDb(`/movie/${id}/credits`);
}
// 영화 이미지 (갤러리용)
async function getMovieImages(id) {
    const url = `${TMDB_BASE_URL}/movie/${id}/images?api_key=${TMDB_API_KEY}`;
    const res = await fetch(url);
    return res.json();
}
// 관련 영화 목록
async function getSimilarMovies(id) {
    return fetchTMDb(`/movie/${id}/similar`);
}
// 영화 비디오 (예고편) 정보
async function getMovieVideos(id) {
    const url = `${TMDB_BASE_URL}/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=ko-KR,en-US`;
    const res = await fetch(url);
    return res.json();
}
// ... (renderStars, formatRuntime 함수는 기존과 동일) ...
// 별점 렌더링 헬퍼 함수
const renderStars = (rating)=>{
    const score = rating / 2;
    const stars = [];
    const fullStars = Math.floor(score);
    for(let i = 0; i < fullStars; i++){
        stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].yellow
            },
            children: "★"
        }, `full-${i}`, false, {
            fileName: "[project]/src/app/movieInfo/[id]/page.js",
            lineNumber: 68,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0)));
    }
    for(let i = stars.length; i < 5; i++){
        stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].mediumGray
            },
            children: "☆"
        }, `empty-${i}`, false, {
            fileName: "[project]/src/app/movieInfo/[id]/page.js",
            lineNumber: 71,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0)));
    }
    return stars;
};
// 런타임 변환 함수
const formatRuntime = (minutes)=>{
    if (!minutes) return '';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h > 0 ? `${h}시간 ` : ''}${m}분`;
};
async function MovieInfoPage({ params }) {
    const { id } = await params;
    const [movie, credits, images, similar, videos] = await Promise.all([
        getMovieDetails(id),
        getMovieCredits(id),
        getMovieImages(id),
        getSimilarMovies(id),
        getMovieVideos(id)
    ]);
    // --- API 데이터 가공 ---
    const director = credits.crew.find((person)=>person.job === 'Director');
    const cast = credits.cast.slice(0, 5);
    const galleryImages = images.backdrops.slice(0, 4);
    const relatedMovies = similar.results.slice(0, 5);
    // 헬퍼 함수들을 API 데이터 가공 이후에 정의합니다.
    const findVideoKey = ()=>{
        const trailer = videos.results.find((v)=>v.type === 'Trailer' && v.site === 'YouTube');
        if (trailer) return trailer.key;
        const teaser = videos.results.find((v)=>v.type === 'Teaser' && v.site === 'YouTube');
        if (teaser) return teaser.key;
        const anyVideo = videos.results.find((v)=>v.site === 'YouTube');
        if (anyVideo) return anyVideo.key;
        return null;
    };
    const videoKey = findVideoKey();
    const pageReviews = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$review$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initialReviews"].slice(0, 5);
    // --- 스타일 정의 ---
    const styles = {
        // ... (heroWrapper, heroContainer, heroContent 등 기존 스타일은 모두 동일) ...
        pageWrapper: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].dark,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].textPrimary,
            minHeight: '100vh'
        },
        heroWrapper: {
            position: 'relative',
            padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].xxl} 0`,
            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].xxl,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(10, 10, 10, 0.9)), url(${IMAGE_BASE_URL}/original${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        heroContainer: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commonStyles"].container,
            display: 'flex',
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].xxl,
            alignItems: 'flex-start'
        },
        heroContent: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg
        },
        heroImageWrapper: {
            flex: 1
        },
        posterImage: {
            width: '100%',
            height: 'auto',
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["borderRadius"].medium,
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].darkGray}`
        },
        videoWrapper: {
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["borderRadius"].medium,
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].dark,
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].darkGray}`
        },
        videoIframe: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        },
        title: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].hero,
            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontWeight"].bold,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].white,
            margin: 0
        },
        metadata: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].large,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].lightGray
        },
        description: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].medium,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].lightGray,
            lineHeight: 1.6
        },
        infoBoxes: {
            display: 'flex',
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg,
            marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg
        },
        infoBox: {
            backgroundColor: 'rgba(30, 30, 30, 0.8)',
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["borderRadius"].medium,
            flex: 1,
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].darkGray}`
        },
        infoBoxTitle: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].medium,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].textSecondary,
            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].sm
        },
        infoBoxContent: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].large,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].white,
            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontWeight"].medium
        },
        ratingStars: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].xlarge,
            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].sm
        },
        mainContainer: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commonStyles"].container,
            paddingTop: 0
        },
        section: {
            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].xxl
        },
        sectionHeader: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["layout"].spaceBetween,
            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg,
            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].darkGray}`,
            paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].md
        },
        sectionTitle: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commonStyles"].sectionTitle,
            marginBottom: 0
        },
        galleryGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].md
        },
        galleryImage: {
            width: '100%',
            height: '160px',
            objectFit: 'cover',
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["borderRadius"].medium,
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
        },
        crewGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg
        },
        crewItem: {
            display: 'flex',
            alignItems: 'center',
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].md,
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].darkGray,
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].md,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["borderRadius"].medium,
            transition: 'background-color 0.2s'
        },
        crewImage: {
            width: '60px',
            height: '60px',
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["borderRadius"].circle,
            objectFit: 'cover',
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].dark
        },
        crewName: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].large,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].white
        },
        // ... (리뷰 관련 스타일들: reviewButton, reviewList, reviewItem, reviewUser 등) ...
        reviewButton: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commonStyles"].button,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commonStyles"].buttonPrimary
        },
        reviewList: {
            display: 'flex',
            flexDirection: 'column',
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg
        },
        reviewItem: {
            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].darkGray}`,
            paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg
        },
        reviewUser: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].medium,
            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontWeight"].bold,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].white,
            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].sm
        },
        reviewContent: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].medium,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].lightGray,
            lineHeight: 1.5,
            whiteSpace: 'pre-line'
        },
        reviewContentClickable: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].medium,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].lightGray,
            lineHeight: 1.5,
            cursor: 'pointer',
            whiteSpace: 'pre-line',
            transition: 'color 0.2s'
        },
        readMoreButton: {
            background: 'none',
            border: 'none',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].info,
            cursor: 'pointer',
            padding: '4px 0',
            marginTop: '4px',
            fontSize: '14px',
            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontWeight"].bold
        },
        // ... (relatedGrid, relatedCard 등 나머지 스타일들) ...
        relatedGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg
        },
        relatedCard: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commonStyles"].movieCard,
            cursor: 'default'
        },
        relatedPoster: {
            width: '100%',
            height: '320px',
            objectFit: 'cover',
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].dark
        },
        relatedTitle: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commonStyles"].movieTitle,
            textAlign: 'center',
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].medium,
            padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].sm} 0`
        },
        // 👈 [추가] 모달(팝업) 관련 스타일 10개
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        modalContent: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].darkGray,
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].xl,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["borderRadius"].medium,
            width: '90%',
            maxWidth: '700px',
            maxHeight: '80vh',
            overflowY: 'auto',
            position: 'relative',
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].mediumGray}`
        },
        modalCloseButton: {
            position: 'absolute',
            top: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].md,
            right: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].md,
            background: 'none',
            border: 'none',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].white,
            fontSize: '30px',
            cursor: 'pointer',
            lineHeight: 1
        },
        personHeader: {
            display: 'flex',
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg,
            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg,
            paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].lg,
            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].mediumGray}`
        },
        personImage: {
            width: '100px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["borderRadius"].medium,
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].dark
        },
        personInfo: {
            flex: 1
        },
        personName: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].title,
            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontWeight"].bold,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].white,
            margin: 0,
            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].sm
        },
        personBio: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].medium,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].lightGray,
            lineHeight: 1.6,
            margin: 0
        },
        filmographyTitle: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].xlarge,
            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontWeight"].bold,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].white,
            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].md
        },
        filmographyList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        filmographyItem: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].dark,
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].md,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["borderRadius"].small,
            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].sm,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].medium,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].white
        },
        filmographyYear: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].textSecondary,
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fontSize"].small,
            flexShrink: 0,
            marginLeft: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].md
        },
        // (텍스트 색상을 위한 임시 스타일 - styles.js에 이미 있다면 무시해도 됨)
        textPrimary: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].textPrimary
        },
        textLight: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].textLight
        },
        textSecondary: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colors"].textSecondary
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.pageWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.heroWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.heroContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.heroContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: styles.title,
                                    children: movie.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.metadata,
                                    children: `${movie.release_date.split('-')[0]} · ${formatRuntime(movie.runtime)} · ${movie.genres.map((g)=>g.name).join(', ')}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: styles.description,
                                    children: movie.overview
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.infoBoxes,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.infoBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.infoBoxTitle,
                                                    children: "인기도"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                                    lineNumber: 451,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.infoBoxContent,
                                                    children: [
                                                        Math.round(movie.popularity),
                                                        " 점"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                                    lineNumber: 452,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        ...styles.infoBoxTitle,
                                                        marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].md
                                                    },
                                                    children: "총 투표 수"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                                    lineNumber: 453,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.infoBoxContent,
                                                    children: [
                                                        movie.vote_count.toLocaleString(),
                                                        " 회"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                                    lineNumber: 456,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.infoBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.infoBoxTitle,
                                                    children: "관람객 평점"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.ratingStars,
                                                    children: renderStars(movie.vote_average)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                                    lineNumber: 460,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.infoBoxContent,
                                                    children: [
                                                        movie.vote_average.toFixed(1),
                                                        " / 10.0"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                                    lineNumber: 461,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/movieInfo/[id]/page.js",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.heroImageWrapper,
                            children: videoKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.videoWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    style: styles.videoIframe,
                                    src: `https://www.youtube.com/embed/${videoKey}`,
                                    title: "Movie Trailer",
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                    lineNumber: 472,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                lineNumber: 471,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: `${IMAGE_BASE_URL}/w500${movie.poster_path}`,
                                        alt: movie.title,
                                        style: styles.posterImage
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                        lineNumber: 483,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: styles.posterCaption,
                                        children: "*예고편을 찾을 수 없습니다."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                        lineNumber: 488,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/movieInfo/[id]/page.js",
                            lineNumber: 469,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                    lineNumber: 441,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/movieInfo/[id]/page.js",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: styles.mainContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: styles.section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.sectionHeader,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: styles.sectionTitle,
                                    children: "영화 갤러리"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                lineNumber: 500,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.galleryGrid,
                                children: galleryImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: `${IMAGE_BASE_URL}/w780${image.file_path}`,
                                        alt: `갤러리 이미지 ${index + 1}`,
                                        style: styles.galleryImage
                                    }, index, false, {
                                        fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/movieInfo/[id]/page.js",
                        lineNumber: 499,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$movieInfo$2f5b$id$5d2f$CrewList$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        director: director,
                        cast: cast,
                        styles: styles
                    }, void 0, false, {
                        fileName: "[project]/src/app/movieInfo/[id]/page.js",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: styles.section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.sectionHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: styles.sectionTitle,
                                        children: "감상 후기"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                        lineNumber: 521,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/review/write?movieId=${id}&movieTitle=${movie.title}`,
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: styles.reviewButton,
                                                children: "작성하기"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                                lineNumber: 523,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                        lineNumber: 522,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$movieInfo$2f5b$id$5d2f$ReviewList$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                reviews: pageReviews,
                                styles: styles
                            }, void 0, false, {
                                fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/movieInfo/[id]/page.js",
                        lineNumber: 519,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: styles.section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.sectionHeader,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: styles.sectionTitle,
                                    children: "관련 영화"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                    lineNumber: 532,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.relatedGrid,
                                children: relatedMovies.map((related)=>// ⭐ [수정] Link 컴포넌트로 감싸고 href 추가
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/movieInfo/${related.id}`,
                                        style: {
                                            textDecoration: 'none'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...styles.relatedCard,
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `${IMAGE_BASE_URL}/w500${related.poster_path}`,
                                                    alt: related.title,
                                                    style: styles.relatedPoster
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                                    lineNumber: 539,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commonStyles"].movieInfo || {
                                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$style$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["spacing"].md
                                                    },
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: styles.relatedTitle,
                                                            children: related.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                                            lineNumber: 545,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                                    lineNumber: 544,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this)
                                    }, related.id, false, {
                                        fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                        lineNumber: 537,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/movieInfo/[id]/page.js",
                                lineNumber: 534,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/movieInfo/[id]/page.js",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/movieInfo/[id]/page.js",
                lineNumber: 497,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/movieInfo/[id]/page.js",
        lineNumber: 438,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/movieInfo/[id]/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/movieInfo/[id]/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b2fa4a4c._.js.map