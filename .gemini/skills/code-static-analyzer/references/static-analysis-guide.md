# Next.js 및 TypeScript 정적 분석 가이드 (Static Analysis Guide)

본 가이드는 정적 분석 도구(ESLint, TSC)와 모델(AI) 기반의 휴리스틱 검사를 통해 코드 품질을 유지하는 방법을 설명합니다.

## 1. 정적 분석 도구 검사항목
- **ESLint**: 미사용 변수, 코딩 규칙 준수, Next.js 관련 안티 패턴.
- **TSC**: 타입 불일치, `any` 남용, 복잡한 타입 정의 오류.

## 2. 모델 기반 아키텍처 및 보안 검사항목 (AI Logic)

### 📐 아키텍처 무결성 (DDD Enforcement)
- **Layer Violation**: `shared/`가 `features/`를 참조하는지 확인 (상향 참조 금지).
- **Circular Dependency**: `features/` 모듈 간의 직접적인 순환 참조 여부.
- **Domain logic placement**: 비즈니스 로직이 `app/` 라우터가 아닌 `features/`나 `entities/`에 적절히 위치했는지 확인.

### 🛡 보안 및 데이터 검증 (Security & Semantic)
- **Input Validation**: 모든 Server Action이 Zod 등으로 명시적인 유효성 검사를 수행하는지 확인.
- **Secret Exposure**: 클라이언트 컴포넌트(`"use client"`)에 민감한 API 키나 환경 변수가 전달되는지 확인.
- **CSRF/XSS Check**: 사용자 입력이 적절히 새니타이징되어 UI에 반영되는지 검토.

### ⚡️ Next.js 14+ 설계 패턴
- **RSC usage**: 데이터 페칭이 가능한 한 서버 컴포넌트(RSC)에서 수행되는지 확인.
- **Isolate Client Logic**: 인터랙션이 필요한 부분만 최소한으로 `"use client"`로 분리했는지 확인.
- **Widget Refactoring**: 컴포넌트가 너무 방대(150~200라인 초과)해져서 `widgets/`로 분리가 필요한지 판단.
