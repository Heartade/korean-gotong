import { UTF8Block } from "../../UTF8Blocks";

/** 한글 자모 확장 B - 옛한글 중성 영역 */
export const Vowel = new UTF8Block(0xd7b0, 0xd7c6);
/** 한글 자모 확장 B - 옛한글 종성 영역 */
export const Consonant = new UTF8Block(0xd7cb, 0xd7fb);
/** 한글 자모 확장 B - 모든 영역 */
export const AllExtendedB = UTF8Block.join(
  Vowel,
  Consonant
);
