import { UTF8Block } from "../../UTF8Blocks";

/** 한글 자모 - 현대 한글 초성 영역 */
export const ModernInitial = new UTF8Block(0x1100, 0x1112);
/** 한글 자모 - 옛한글 초성 영역 */
export const ObsoleteInitial = new UTF8Block(0x1113, 0x115e);
/** 한글 자모 - 모든 초성 영역 */
export const AllInitial = UTF8Block.join(ModernInitial, ObsoleteInitial);

/** 한글 자모 - 한글 초성 채움 문자 */
export const HCF = new UTF8Block(0x115f, 0x115f);
/** 한글 자모 - 한글 중성 채움 문자 */
export const HJF = new UTF8Block(0x1160, 0x1160);

/** 한글 자모 - 현대 한글 중성 영역 */
export const ModernMedial = new UTF8Block(0x1161, 0x1175);
/** 한글 자모 - 옛한글 중성 영역 */
export const ObsoleteMedial = new UTF8Block(0x1176, 0x11a7);
/** 한글 자모 - 모든 중성 영역 */
export const AllMedial = UTF8Block.join(ModernMedial, ObsoleteMedial);

/** 한글 자모 - 현대 한글 종성 영역 */
export const ModernFinal = new UTF8Block(0x11a8, 0x11c2);
/** 한글 자모 - 옛한글 종성 영역 */
export const ObsoleteFinal = new UTF8Block(0x11c3, 0x11ff);
/** 한글 자모 - 모든 종성 영역 */
export const AllFinal = UTF8Block.join(ModernFinal, ObsoleteFinal);

/** 한글 자모 - 모든 영역 */
export const AllJamo = UTF8Block.join(ModernInitial, ObsoleteFinal);

/** 한글 자모 - 모든 자음 영역 */
export const AllConsonant = UTF8Block.join(AllInitial, AllFinal);