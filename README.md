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
