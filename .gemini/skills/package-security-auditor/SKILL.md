---
name: package-security-auditor
description: 프로젝트의 package-lock.json을 분석하여 알려진 보안 취약성(CVE)을 검출하고, SBOM 및 패키지 수명 주기(LTS/EOL)를 기반으로 공급망 보안 상태를 분석하여 한글 보고서를 생성합니다.
---

# 패키지 및 공급망 보안 검사 (Package & Supply Chain Auditor)

이 스킬은 프로젝트의 패키지 의존성을 취약점(CVE), SBOM 분석, 패키지 수명 주기(LTS) 관점에서 점검하고 개선 방안을 제시하는 통합 보안 워크플로우를 제공합니다.

## 사용 시점
- "현재 프로젝트의 패키지 보안 취약성을 점검해줘."
- "공급망 보안 및 SBOM 분석을 수행해줘."
- "사용 중인 패키지가 LTS 버전인지 확인해봐."
- "오래된 패키지나 지원 중단된 패키지가 있는지 검사해줘."

## 분석 워크플로우

1.  **취약점 및 의존성 분석 (CVE & Dependency Audit)**: 
    - `npm audit --json`을 실행하여 알려진 보안 취약점을 수집합니다.
2.  **SBOM 분석 (Software Bill of Materials Review)**: 
    - `package-lock.json`을 직접 파싱하여 전체 의존성 리스트(SBOM)를 생성하고 분석합니다.
    - 취약한 공급자나 알려지지 않은 출처의 패키지가 있는지 점검합니다.
3.  **LTS 및 수명 주기 점검 (LTS/EOL Assessment)**: 
    - 주요 프레임워크(Next.js, React) 및 라이브러리의 버전이 보안 지원 범위(LTS) 내에 있는지 확인합니다.
    - GitHub 스타 수, 마지막 커밋 날짜 등을 기반으로 유지보수 상태를 휴리스틱하게 점검합니다.
4.  **통합 한글 리포트 생성**:
    - **취약점 요약**: 심각도별 취약점 개수 및 위험도.
    - **공급망 보안 현황**: SBOM 기반의 의존성 안전성 진단.
    - **유지보수 상태 분석**: LTS 미준수 혹은 지원 종료 예정 패키지 식별.
    - **권장 조치 사항**: 업데이트 계획 및 대체 패키지 제안.

## 참고 가이드
- [보안 취약성 정의 (Severity Guide)](references/severity-guide.md)
- [공급망 보안 및 패키지 수명 주기 가이드 (SBOM & LTS Guide)](references/supply-chain-security.md)

## 실행 예시 (Pseudocode)
```bash
# 취약점 점검 및 상세 데이터 수집
npm audit --json
```
