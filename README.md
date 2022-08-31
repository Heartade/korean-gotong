# korean-gotong

한글에 고통받다가 만든 라이브러리

```typescript
import { getKoreanHanjaNumeral } from "korean-gotong/hanjaNumberTools";
import {
  getTopicParticle,
  getLinkingParticle,
  을를,
} from "korean-gotong/particleTools";

console.log(getTopicParticle("사과")); // '는'
console.log(을를("참외")); // '참외를'
console.log(getKoreanHanjaNumeral(12345)); // '만 이천삼백사십오'

let a = 24;
let b = 36;
console.log(`${a}${getLinkingParticle(getKoreanHanjaNumeral(a))} ${b}`); // '24와 36'
```

## 설명

```typescript
// default export
import Gotong from "korean-gotong";

const { HanjaNumberTools, ParticleTools, HangulCodes } = Gotong;
```

### HanjaNumberTools

```typescript
import { HanjaNumberTools } from "korean-gotong";
// or
import * as HanjaNumberTools from "korean-gotong/hanjaNumberTools";
```

- `HanjaNumberTools.getKoreanHanjaNumeral`
  - 숫자를 한국어 한자 기수법으로 변환
  - **주의:** 숫자 '6(六)'에는 항상 두음법칙이 적용되어 '육'으로 씀

```typescript
import { getKoreanHanjaNumeral } from "korean-gotong/hanjaNumberTools";

getKoreanHanjaNumeral(12345); // '만 이천삼백사십오'
getKoreanHanjaNumeral(-12345.006, {
  useSpaceEvery10K: false, // 만, 억, 조 등 단위 뒤에 공백을 넣지 않음
  omitOneInDigits: false, // 자릿수가 1인 자리에서 '일'을 생략하지 않음
}); // '마이너스 일만이천삼백사십오 점 영영육`
```

### ParticleTools

```typescript
import { ParticleTools } from "korean-gotong";
// or
import * as ParticleTools from "korean-gotong/particleTools";
```

- `ParticleTools.getEndsWithFinal`
  - 마지막 음절의 종성 음가가 있는 한글 문자열에 대해 `true` 반환

```typescript
import { getEndsWithFinal } from "korean-gotong/particleTools";

getEndsWithFinal("감귤"); // true
// 음절을 이루지 않는 자음은 '기역, 니은' 식으로 읽는 것으로 간주
getEndsWithFinal("ㅋㅋㅋ"); // true
getEndsWithFinal("사과"); // false
// 음절을 이루지 않는 모음은 '아, 야, 어, 여' 식으로 읽는 것으로 간주
getEndsWithFinal("ㅏㅑㅓㅕ"); // false
```

- `ParticleTools.getTopicParticle`
  - 주어진 한글 문자열에 따라 '은' 혹은 '는' 반환
- `ParticleTools.getSubjectParticle`
  - 주어진 한글 문자열에 따라 '이' 혹은 '가' 반환
- `ParticleTools.getObjectParticle`
  - 주어진 한글 문자열에 따라 '을' 혹은 '를' 반환
- `ParticleTools.getLinkingParticle`
  - 주어진 한글 문자열에 따라 '과' 혹은 '와' 반환

```typescript
import { ParticleTools } from "korean-gotong";

ParticleTools.getTopicParticle("오늘"); // '은'
ParticleTools.getSubjectParticle("점심"); // '이'
ParticleTools.getObjectParticle("메뉴"); // '를'
ParticleTools.getLinkingParticle("순두부"); // '와'
```

- `ParticleTools.addTopicParticle`
  - `ParticleTools.은는`으로도 사용 가능
  - 주어진 한글 문자열에 따라 '은' 혹은 '는'을 덧붙임
- `ParticleTools.addSubjectParticle`
  - `ParticleTools.이가`로도 사용 가능
  - 주어진 한글 문자열에 따라 '이' 혹은 '가'를 덧붙임
- `ParticleTools.addObjectParticle`
  - `ParticleTools.을를`로도 사용 가능
  - 주어진 한글 문자열에 따라 '을' 혹은 '를'을 덧붙임
- `ParticleTools.addLinkingParticle`
  - `ParticleTools.과와`로도 사용 가능
  - 주어진 한글 문자열에 따라 '과' 혹은 '와'를 덧붙임

```typescript
import { ParticleTools } from "korean-gotong";

ParticleTools.addTopicParticle("내일"); // '내일은'
ParticleTools.addSubjectParticle("저녁"); // '저녁이'
ParticleTools.addObjectParticle("식사"); // '식사를'
ParticleTools.addLinkingParticle("햄버거"); // '햄버거와'

ParticleTools.은는("내일"); // '내일은'
ParticleTools.이가("저녁"); // '저녁이'
ParticleTools.을를("식사"); // '식사를'
ParticleTools.과와("햄버거"); // '햄버거와'
```

### HanjaNumberTools와 ParticleTools 함께 사용하기

```typescript
import {
  getEndsWithFinal,
  getLinkingParticle,
} from "korean-gotong/particleTools";
import { getKoreanHanjaNumeral } from "korean-gotong/hanjaNumberTools";

function describeHeight(
  name1: string,
  name2: string,
  height1: number,
  height2: number
) {
  return `${name1}${getEndsWithFinal(name1) ? "이와" : "와"} ${name2}${
    getEndsWithFinal(name2) ? "이의" : "의"
  } 키는 각각 ${height1}${getLinkingParticle(
    getKoreanHanjaNumeral(height1)
  )} ${height2}센티미터이다.`;
}

// "승연이와 민하의 키는 각각 170.3과 168.5센티미터이다."
console.log(describeHeight("승연", "민하", 170.3, 168.5));

// "민하와 승연이의 키는 각각 168.5와 170.3센티미터이다."
console.log(describeHeight("민하", "승연", 168.5, 170.3));
```

### HangulCodes

```typescript
import { HangulCodes } from "korean-gotong";
// or
import * as HangulCodes from "korean-gotong/hangulCodes";
```

- `HangulCodes.UTF8Blocks`
  - `UTF8Block`: 문자 코드 범위 정보를 사용하기 위한 클래스
    - `UTF8Block.has`: 특정 코드가 범위 내에 포함되는지 확인
    - `UTF8Block.join`: 여러 개의 `UTF8Block` 객체에 대해 같은 범위를 나타내는 하나의 `UTF8Block` 객체 반환
- `HangulCodes.Blocks`
  - `Jamo`: UTF-8의 한글 자모 영역
  - `Syllables`: UTF-8의 완성형 한글 음절 영역
  - `Compatibility`: KS X 1001 조합형 자모 호환 영역 (**주의:** 테스트되지 않음)
  - `ExtendedA`: UTF-8의 한글 자모 확장 A 영역 (조합형 옛한글 모음)
  - `ExtendedB`: UTF-8의 한글 자모 확장 B 영역 (조합형 옛한글 자모)
- `HangulCodes.All`
  - `AllConsonant`: 모든 자음 낱자를 포함하는 `UTF8Block` 객체
  - `AllVowel`: 모든 모음 낱자를 포함하는 `UTF8Block` 객체
