🎬 MovieHub
영화 정보 제공 웹 서비스

Next.js(App Router) 기반으로
영화 검색, 상세 정보 조회, 트렌딩 영화 확인 기능을 제공하는 웹 서비스입니다.

📌 프로젝트 소개

MovieHub는 사용자가 원하는 영화를
빠르고 직관적으로 탐색할 수 있도록 설계된 영화 정보 웹 서비스입니다.

영화 검색

영화 상세 정보 제공

트렌딩 영화 목록 확인

을 한 흐름으로 제공하는 것을 목표로 개발했습니다.

🗓️ 개발 기간 & 인원

개발 기간: 2025.10 ~ 2024.11 (약 3주)

개발 인원: 6명

프로젝트 형태: 팀 프로젝트

🧑‍💻 담당 역할 (Frontend)

메인 페이지 UI 구현

영화 검색 기능 개발

영화 상세 페이지 구현 (Dynamic Route)

외부 영화 API 연동

Next.js App Router 구조 설계 일부 참여

🛠️ 기술 스택
Frontend

Next.js 13 (App Router)

React

TypeScript

CSS / CSS Module

Data & API

외부 영화 정보 API (TMDB)

Fetch API

Environment

.env.local 환경 변수 관리

🏗️ 프로젝트 구조
app/
 ├─ page.tsx              # 메인 페이지
 ├─ movie/
 │   └─ [id]/page.tsx     # 영화 상세 페이지 (Dynamic Route)
 ├─ components/           # 공통 UI 컴포넌트
 ├─ services/             # API 호출 로직
 └─ styles/               # 스타일 파일


기능별 폴더 분리로 가독성과 유지보수성 고려

API 호출 로직을 서비스 레이어로 분리

✨ 주요 기능
🔍 영화 검색

사용자 키워드 입력 시 영화 API 호출

검색 결과 리스트 출력

검색어 변경 시 실시간 데이터 갱신

🎬 영화 상세 페이지

Dynamic Route([id]) 기반 상세 페이지 구성

영화 포스터, 줄거리, 평점, 개봉일 정보 제공

📈 트렌딩 영화

현재 인기 영화 목록 제공

메인 페이지에서 바로 접근 가능

⚙️ 실행 방법
1. 프로젝트 클론
git clone https://github.com/your-repository/MovieHub.git
cd MovieHub

2. 패키지 설치
npm install

3. 환경 변수 설정

루트 디렉토리에 .env.local 파일을 생성하고 아래와 같이 설정합니다.

NEXT_PUBLIC_API_KEY=YOUR_MOVIE_API_KEY

4. 개발 서버 실행
npm run dev


브라우저에서 http://localhost:3000 접속

🧩 트러블슈팅 & 해결 경험
초기 로딩 속도 문제

문제

모든 데이터를 클라이언트에서 fetch 하여
초기 로딩 시 화면 깜빡임 발생

해결

Next.js 서버 컴포넌트를 활용하여
초기 데이터를 서버에서 패칭하도록 구조 개선

결과

초기 로딩 속도 개선

사용자 경험 향상

🔐 보안 고려 사항

API Key 코드 직접 노출 방지

.env.local을 활용한 환경 변수 관리

GitHub 저장소에 민감 정보 미포함 처리

🚀 개선 사항 & 향후 계획

전역 상태 관리 라이브러리(Zustand / Redux) 도입

Jest, React Testing Library를 활용한 테스트 코드 작성

UI 컴포넌트 재사용성 강화

사용자 즐겨찾기 및 로그인 기능 추가

📚 프로젝트를 통해 배운 점

Next.js App Router 기반 서비스 구조 이해

외부 API 연동 및 비동기 데이터 처리 경험

팀 프로젝트 협업 및 역할 분담 경험

문제 상황 발생 시 원인 분석과 해결 능력 향상

📎 참고

외부 영화 API: TMDB
