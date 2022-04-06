import { UTF8Block } from "../UTF8Blocks";

/** 첫가끝 한글 자모 영역 */
export * as Jamo from "./Jamo";
/** 첫가끝 완성형 한글 영역 */
export const Syllables = new UTF8Block(0xac00, 0xd7a3);
/** KS X 1001 호환용 조합형 자모 영역 */
export * as Compatibility from "./Compatibility";
/** 첫가끝 한글 자모 확장 A 영역 */
export * as ExtendedA from "./ExtendedA";
/** 첫가끝 한글 자모 확장 B 영역 */
export * as ExtendedB from "./ExtendedB";