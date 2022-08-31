import { AllConsonant, Syllables } from "./hangulCodes";

/**
 * 주어진 문자열의 마지막 글자가 음가가 있는 종성으로 끝나는지 확인하는 함수
 * @param str 확인할 문자열
 * @returns 마지막 글자가 음가가 있는 종성으로 끝나는 한글이면 `true`, 아니면 `false`
 */
export const getEndsWithFinal = (str: string): boolean => {
  const charcode = str.charCodeAt(str.length - 1);
  if (Syllables.has(charcode)) {
    return (charcode - 0xac00) % 28 !== 0;
  } else if (AllConsonant.has(charcode)) {
    return true; // 초성 혹은 자음으로 끝나는 단어
  }
  return false;
};

/**
 * 주어진 문자열 뒤에 보조사 '은'/'는' 중에서 무엇이 오는지 반환
 * @param str 조사 앞의 문자열
 * @returns '은' 또는 '는'
 */
export const getTopicParticle = (str: string): string => {
  return getEndsWithFinal(str) ? "은" : "는";
};

/**
 * 주어진 문자열 뒤에 격조사 '을'/'를' 중에서 무엇이 오는지 반환
 * @param str 조사 앞의 문자열
 * @returns '을' 또는 '를'
 */
export const getObjectParticle = (str: string): string => {
  return getEndsWithFinal(str) ? "을" : "를";
};

/**
 * 주어진 문자열 뒤에 격조사/보조사 '이'/'가' 중에서 무엇이 오는지 반환
 * @param str 조사 앞의 문자열
 * @returns '이' 또는 '가'
 */
export const getSubjectParticle = (str: string): string => {
  return getEndsWithFinal(str) ? "이" : "가";
};

/**
 * 주어진 문자열 뒤에 접속조사 '과'/'와' 중에서 무엇이 오는지 반환
 * @param str 조사 앞의 문자열
 * @returns '과' 또는 '와'
 */
export const getLinkingParticle = (str: string): string => {
  return getEndsWithFinal(str) ? "과" : "와";
};

/**
 * `getTopicParticle`을 사용해 입력 문자열에 '은'/'는'를 붙여 반환
 * @param str '은'/'는'을 붙일 문자열
 * @example addTopicParticle('사과') //'사과는' 반환
 */
export const addTopicParticle = (str: string) => str + getTopicParticle(str);
/**
 * `getSubjectParticle`을 사용해 입력 문자열에 '이'/'가'를 붙여 반환
 * @param str '이'/'가'를 붙일 문자열
 * @example addSubjectParticle('사과') //'사과가' 반환
 */
export const addObjectParticle = (str: string) => str + getSubjectParticle(str);
/**
 * `getObjectParticle`을 사용해 입력 문자열에 '을'/'를'를 붙여 반환
 * @param str '을'/'를'을 붙일 문자열
 * @example addObjectParticle('사과') //'사과를' 반환
 */
export const addSubjectParticle = (str: string) => str + getObjectParticle(str);
/**
 * `getLinkingParticle`을 사용해 입력 문자열에 '과'/'와'를 붙여 반환
 * @param str '과'/'와'를 붙일 문자열
 * @example addLinkingParticle('사과') //'사과와' 반환
 */
export const addLinkingParticle = (str: string) =>
  str + getLinkingParticle(str);

/**
 * `getTopicParticle`을 사용해 입력 문자열에 '은'/'는'를 붙여 반환
 * @category alias
 * @see {@link addTopicParticle}
 * @param str '은'/'는'을 붙일 문자열
 * @example 은는('사과') //'사과는' 반환
 */
export const 은는 = addTopicParticle;
/**
 * `getSubjectParticle`을 사용해 입력 문자열에 '이'/'가'를 붙여 반환
 * @category alias
 * @see {@link addSubjectParticle}
 * @param str '이'/'가'를 붙일 문자열
 * @example 이가('사과') //'사과가' 반환
 */
export const 이가 = addSubjectParticle;
/**
 * `getObjectParticle`을 사용해 입력 문자열에 '을'/'를'를 붙여 반환
 * @category alias
 * @see {@link addObjectParticle}
 * @param str '을'/'를'을 붙일 문자열
 * @example 을를('사과') //'사과를' 반환
 */
export const 을를 = addObjectParticle;
/**
 * `getLinkingParticle`을 사용해 입력 문자열에 '과'/'와'를 붙여 반환
 * @category alias
 * @see {@link addLinkingParticle}
 * @param str '과'/'와'를 붙일 문자열
 * @example 과와('사과') //'사과와' 반환
 */
export const 과와 = addLinkingParticle;
