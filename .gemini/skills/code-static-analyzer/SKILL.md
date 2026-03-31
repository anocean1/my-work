---
name: code-static-analyzer
description: TypeScript, JavaScript, Node.js, Next.js 기반 프로젝트의 코드 품질 및 보안 취약성을 분석하고, AI 기반의 아키텍처 및 의미론적 검사를 수행하여 한글 리포트를 생성합니다.
---

# 코드 정적 및 아키텍처 분석 (Code & Architecture Analyzer)

이 스킬은 표준 정적 분석 도구(ESLint, TSC)와 모델(AI) 기반의 패턴 인식을 결합하여 프로젝트의 품질을 입체적으로 점검합니다.

## 사용 시점
- "프로젝트 전체 코드를 정적 분석해줘."
- "Next.js 코드 품질과 아키텍처 설계를 점검해줘."
- "TypeScript 타입 오류 및 보안상 위험한 로직이 있는지 확인해봐."
- "DDD 계층 규칙이 잘 지켜지고 있는지 분석해줘."

## 분석 워크플로우

1.  **도구 기반 분석 (Tool-based Analysis)**: 
    - `npm run lint` 및 `npx tsc --noEmit`을 실행하여 표준 오류를 수집합니다.
2.  **모델 기반 검사 (Model-based Semantic Review)**: 
    - AI가 코드를 직접 읽고 다음 항목들을 분석합니다.
    - **DDD 계층 준수**: `features/` 간 참조 및 `shared/`의 상향 참조 위반 여부.
    - **보안 검토**: Server Action 유효성 검사 누락, 민감 정보 클라이언트 노출 여부.
    - **Next.js 최적화**: RSC(서버 컴포넌트) 활용도 및 `"use client"` 오남용 여부.
    - **유지보수성**: 대형 컴포넌트의 `widgets/` 분리 필요성 검토.
3.  **통합 한글 리포트 생성**:
    - **표준 분석 결과 요약**: 에러/경고 개수 및 파일명.
    - **아키텍처 및 설계 피드백**: AI가 발견한 논리적/구조적 문제점 분석.
    - **상세 개선 가이드**: 구체적인 코드 수정 예시와 권장 사항 제공.

## 참고 가이드
- [정적 및 아키텍처 분석 가이드 (Static Analysis Guide)](references/static-analysis-guide.md)

## 실행 예시 (Pseudocode)
```bash
# 전체 프로젝트 정적 분석(ESLint, TSC) 및 AI 기반 아키텍처 리뷰 실행
npx eslint . && npx tsc --noEmit
```
