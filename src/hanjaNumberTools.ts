const koreanHanjaDigits = [
  "영",
  "일",
  "이",
  "삼",
  "사",
  "오",
  "육",
  "칠",
  "팔",
  "구",
];

const koreanHanjaPowers = ["", "십", "백", "천"];

const koreanHanjaPowers10K = [
  "",
  "만",
  "억",
  "조",
  "경",
  "해",
  "자",
  "양",
  "구",
  "간",
  "정",
  "재",
  "극",
];

/**
 * 숫자 읽기 실행 시 부가 설정
 */
export type KoreanNumeralSettings = {
  /**
   * 일만 단위로 띄어쓰기를 시행할지 지정
   *
   * @see {@link https://kornorms.korean.go.kr/m/m_regltn.do | 한글 맞춤법} 제44항
   * @defaultValue `true`
   */
  useSpaceEvery10K: boolean;
  /**
   * 십의 자리 이상에서 자릿수가 1인 경우 `"일백"`, `"일십"` 등에서 `"일"`을 생략할지 지정
   *
   * @defaultValue `true`
   */
  omitOneInDigits: boolean;
  /**
   * 소수점 아래의 0을 `"공"` 대신 한자 `"영"`으로 읽을지 지정
   *
   * @defaultValue `true`
   */
  fractionLeadingZeroInHanja: boolean;
  /**
   * 음수 표기 `"-"`를 `"마이너스"` 대신 한자어 `"음수"`로 읽을지 지정
   * @defaultValue `false`
   */
  minusInHanja: boolean;
};

const defaultKoreanHanjaNumeralSettings: KoreanNumeralSettings = {
  useSpaceEvery10K: true,
  omitOneInDigits: true,
  fractionLeadingZeroInHanja: true,
  minusInHanja: false,
};

const _getKoreanHanjaNumeral_int_under10K = (
  number: number,
  settings: Partial<KoreanNumeralSettings>
) => {
  let integerString = Math.abs(number % 10000).toString();
  return integerString
    .split("")
    .map((v, i) => {
      let digit = parseInt(v);
      let digitString = "";
      if (digit) {
        digitString =
          (digit === 1 && settings.omitOneInDigits
            ? ""
            : koreanHanjaDigits[digit]) +
          koreanHanjaPowers[integerString.length - 1 - i];
      } else digitString = "";
      return digitString;
    })
    .join("");
};

/**
 * 숫자를 한국어 한자 기수법으로 읽은 결과를 반환하는 함수
 *
 * @param number 변환할 숫자
 * @param settings 부가 설정 (선택 항목)
 * @returns 한글 및 공백으로 이루어진 문자열
 *
 * @remark 숫자 6은 위치에 무관히 `"륙"`이 아닌 `"육"`으로 읽음
 * @see {@link https://kornorms.korean.go.kr/m/m_regltn.do | 한글 맞춤법} 제11항 [붙임 4] 및 [붙임 5]
 */
export const getKoreanHanjaNumeral = (
  number: number,
  settings: Partial<KoreanNumeralSettings> = defaultKoreanHanjaNumeralSettings
): string => {
  const fullSettings: KoreanNumeralSettings = {
    ...defaultKoreanHanjaNumeralSettings,
    ...settings,
  };
  let integer = Math.trunc(number);
  let fraction = Math.abs(number) - Math.abs(integer);
  let ret = "";

  if (integer === 0) ret += "영";
  else {
    let power10k = 0;
    integer = Math.abs(integer);
    while (integer >= 1) {
      ret =
        _getKoreanHanjaNumeral_int_under10K(
          integer,
          power10k ? fullSettings : { ...fullSettings, omitOneInDigits: false }
        ) +
        koreanHanjaPowers10K[power10k] +
        (power10k && fullSettings.useSpaceEvery10K ? " " : "") +
        ret;
      power10k++;
      integer = Math.trunc(integer / 10000);
    }
  }
  if (number < 0)
    ret = (fullSettings.minusInHanja ? "음수" : "마이너스") + " " + ret;
  if (fraction) {
    ret +=
      " 점 " +
      number
        .toString()
        .split(".")[1]
        .split("")
        .map((v, i) => {
          let digit = parseInt(v);
          if (digit) {
            return koreanHanjaDigits[digit];
          } else {
            return fullSettings.fractionLeadingZeroInHanja ? "영" : "공";
          }
        })
        .join("");
  }
  return ret;
};
