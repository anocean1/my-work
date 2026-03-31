# 개발 가이드: Next.js 어드민 콘솔

## 1. 아키텍처 개요
본 프로젝트는 유지보수성과 확장성을 위해 **도메인 주도 설계 (DDD)** 및 **FSD (Feature Sliced Design)** 개념을 따르는 모듈형 구조를 채택합니다.

### 폴더 구조
- `src/app/`: 라우팅 및 레이아웃. 라우팅 관련 로직만 위치합니다.
- `src/features/`: 복잡한 도메인별 모듈 (예: `auth`, `user-management`, `audit-logs`).
- `src/entities/`: 핵심 데이터 모델, 비즈니스 로직 및 타입.
- `src/shared/`: 공통 사용 컴포넌트 (UI Primitives), 훅, 유틸리티 및 전역 상수.
- `src/widgets/`: 여러 feature나 entity를 조합한 복합 컴포넌트.
- `docs/`: ADR (아키텍처 결정 기록) 및 시스템 설계 다이어그램.

## 2. 코딩 표준
- **TypeScript**: Strict 모드를 사용합니다. `any` 타입 사용을 금지합니다.
- **컴포넌트**: Tailwind CSS를 사용한 함수형 컴포넌트를 지향합니다.
- **명명 규칙**:
  - 컴포넌트: PascalCase (예: `AdminHeader.tsx`)
  - 훅: `use`로 시작하는 camelCase (예: `useAuth.ts`)
  - 유틸리티: camelCase (예: `formatDate.ts`)
- **서버 컴포넌트**: 기본적으로 React Server Components (RSC)를 사용합니다. 클라이언트 상호작용이 필요한 경우에만 `"use client"`를 사용합니다.

## 3. 보안 설계 (Security by Design)
- **인증**: 모든 어드민 경로는 Middleware 및 서버 측 검증을 통해 보호되어야 합니다.
- **검증**: 모든 폼 및 API 요청 검증에는 **Zod**를 사용합니다.
- **민감 데이터**: 비밀번호나 API 키 등은 절대 로그에 남기지 않으며, 환경 변수를 통해 관리합니다.
- **CSP**: 운영 환경에서는 콘텐츠 보안 정책 (Content Security Policy)을 강제합니다.

## 4. 개발 워크플로우
1. **설계**: `docs/` 내에 Markdown 또는 PlantUML을 이용한 설계를 작성합니다.
2. **ADR**: 중요한 아키텍처 결정 사항은 `docs/ADR/`에 기록합니다.
3. **구현**: `src/features/` 내에서 기능을 구현합니다.
4. **검증**: 제출 전 린트 체크 및 테스트를 수행합니다.

## 5. UI/UX 원칙
- 아이콘은 **Lucide React**를 사용합니다.
- Tailwind CSS를 활용해 일관된 간격과 타이포그래피를 유지합니다.
- 접근성(ARIA 레이블, 키보드 네비게이션)을 우선순위에 둡니다.
