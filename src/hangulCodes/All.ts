import { Compatibility, ExtendedA, ExtendedB, Jamo } from "./Blocks";
import { UTF8Block } from "./UTF8Blocks";

/**
 * 모든 자음 영역
 */
export const AllConsonant = UTF8Block.join(
  Jamo.AllConsonant,
  Compatibility.AllConsonant,
  ExtendedB.Consonant
);

/**
 * 모든 모음 영역
 */
export const AllVowel = UTF8Block.join(
  Jamo.AllMedial,
  Compatibility.AllVowel,
  ExtendedA.AllExtendedA,
  ExtendedB.Vowel
);
