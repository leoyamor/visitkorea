# Day 9 GSC 24h Check (2026-04-03 KST)

| Date (KST) | Window | URL | Impressions | Clicks | CTR | Avg Position | Indexed? | Canonical Match? | Notes |
|---|---|---|---:|---:|---:|---:|---|---|---|
| 2026-04-03 | Last 24 hours | https://planmykorea.com/before-you-go/korea-entry-requirements/ | 0 | 0 | 0 | 0 | Yes/No | Yes/No |  |
| 2026-04-03 | Last 24 hours | https://planmykorea.com/before-you-go/sim-or-esim/ | 0 | 4 | 0 | 13.3 | Yes/No | Yes/No |  |
| 2026-04-03 | Last 24 hours | https://planmykorea.com/before-you-go/travel-insurance-for-korea/ | 0 | 0 | 0 | 0 | Yes/No | Yes/No |  |

## 판단 기준 (초기 신호)
- 노출이 `0`보다 크면 초기 신호 있음
- 클릭은 `0`이어도 정상일 수 있음 (초기 24시간은 특히)
- 초기 신호 OK: 3개 URL 중 각 URL이 `Indexed=Yes`, `Canonical Match=Yes`, 그리고 `Impressions > 0`이면 통과

## 기록용 표 템플릿 (복붙)
| Date (KST) | Window | URL | Impressions | Clicks | CTR | Avg Position | Indexed? | Canonical Match? | Notes |
|---|---|---|---:|---:|---:|---:|---|---|---|
| 2026-04-03 | Last 24 hours | https://planmykorea.com/before-you-go/korea-entry-requirements/ |  |  |  |  | Yes/No | Yes/No |  |
| 2026-04-03 | Last 24 hours | https://planmykorea.com/before-you-go/sim-or-esim/ |  |  |  |  | Yes/No | Yes/No |  |
| 2026-04-03 | Last 24 hours | https://planmykorea.com/before-you-go/travel-insurance-for-korea/ |  |  |  |  | Yes/No | Yes/No |  |

## Day 9 작업 상태 (2026-04-03)
- 핵심 10페이지 `hreflang`(EN/ES) 적용: 완료
- 언어 전환 링크 점검: 완료 (언어 스위처 및 경로 변환 로직 포함)
- 국제 타게팅 오류/언어 불일치 체크: 코드/산출물 기준 완료
- 완료 기준: 핵심 10페이지 `hreflang` 누락 0건 확인

## 핵심 10페이지 기준
1. `/plan-your-trip/`
2. `/choose-a-city/`
3. `/getting-around-korea/`
4. `/what-to-eat/`
5. `/where-to-stay/`
6. `/things-to-do/`
7. `/travel-basics/`
8. `/before-you-go/`
9. `/before-you-go/korea-entry-requirements/`
10. `/before-you-go/sim-or-esim/`

## 자동 검증 결과
- 실행: `npm run day9:hreflang-check`
- 결과: `PASSED`
- 검증 항목:
  - EN/ES 각 페이지의 `canonical`
  - `hreflang=en`, `hreflang=es`, `hreflang=x-default`
  - `html lang` 값
  - 언어 전환 UI 존재(`data-lang-switcher`)
  - sitemap 내 alternates 블록
