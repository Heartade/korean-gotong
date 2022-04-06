import { UTF8Block } from "../../UTF8Blocks";

/** KS X 1001 호환용 한글 자모 - 현대 한글 자음 영역 */
export const Consonant1 = new UTF8Block(0x3131, 0x314e);
/** KS X 1001 호환용 한글 자모 - 현대 한글 모음 영역 */
export const Vowel1 = new UTF8Block(0x314f, 0x3163);
/** KS X 1001 호환용 한글 자모 - 채움 코드 */
export const Filler = new UTF8Block(0x3164, 0x3164);
/** KS X 1001 호환용 한글 자모 - 옛한글 자음 영역 */
export const Consonant2 = new UTF8Block(0x3165, 0x3186);
/** KS X 1001 호환용 한글 자모 - 옛한글 모음 영역 */
export const Vowel2 = new UTF8Block(0x3187, 0x318e);
/** KS X 1001 호환용 한글 자모 - 모든 자음 영역 */
export const AllConsonant = UTF8Block.join(Consonant1, Consonant2);
/** KS X 1001 호환용 한글 자모 - 모든 모음 영역 */
export const AllVowel = UTF8Block.join(Vowel1, Vowel2);
/** KS X 1001 호환용 한글 자모 - 모든 영역 */
export const AllCompatibility = UTF8Block.join(Consonant1, Vowel2);
