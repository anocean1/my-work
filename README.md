# Next.js 어드민 콘솔 (Next.js Admin Console)

보안과 확장성을 고려한 Next.js 14+ 기반의 프론트엔드-백엔드 통합 어드민 콘솔 템플릿입니다.

## 🚀 주요 특징
- **Framework**: Next.js 14+ (App Router, Server Components)
- **Security**: NextAuth.js 기반의 세션 인증 및 Middleware를 통한 경로 보호
- **Architecture**: 도메인 주도 설계 (DDD) 및 모듈형 구조 채택
- **Styling**: Tailwind CSS 및 Lucide React 아이콘 활용
- **Validation**: Zod를 사용한 강력한 타입 검증

## 🛠 폴더 구조
```text
src/
├── app/             # 라우팅 및 전역 레이아웃
├── features/        # 비즈니스 로직 모듈 (auth, dashboard 등)
├── entities/        # 데이터 모델 및 엔티티
├── shared/          # 공통 컴포넌트, 훅, 유틸리티
└── widgets/         # 복합 UI 컴포넌트
docs/                # 아키텍처 및 개발 가이드 문서
```

## 🏁 시작하기

### 1. 환경 설정
`.env.local` 파일이 생성되었는지 확인하고 필요한 환경 변수를 설정합니다.

### 2. 패키지 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000`에 접속하여 확인할 수 있습니다.
- **데모 계정**: `admin` / `admin123`

## 📖 문서 (Documentation)
상세한 개발 지침 및 아키텍처 정보는 다음 문서를 참고하세요.
- [개발 가이드 (Development Guide)](./docs/DEVELOPMENT_GUIDE.md)
- [시스템 아키텍처 (Architecture)](./docs/ARCHITECTURE.md)
- [아키텍처 결정 기록 (ADR)](./docs/ADR/001-modular-ddd-structure.md)

## 🛡 보안 원칙 (Security by Design)
본 프로젝트는 초기 단계부터 보안을 우선순위에 두고 설계되었습니다. 모든 관리자 페이지는 인증된 세션 없이는 접근이 불가능하며, 서버 액션(Server Actions)을 통해 안전한 데이터 처리를 보장합니다.
