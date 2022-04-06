import { within } from "../utils";

export interface IUTF8BlockLike {
  start: number;
  end: number;
  has: (charCode: number) => boolean;
}

/**
 * UTF8 블록 정보를 저장하는 클래스
 */
export class UTF8Block {
  private range: { start: number; end: number }[] = [];
  /**
   * 블록에 글자가 포함되는지 확인
   * @param charCode 글자 코드 (`str.charCodeAt(0)`)
   * @returns 블록에 글자가 포함되는지 여부
   */
  has(charCode: number) {
    return this.range.some((v) => within(v.start, charCode, v.end));
  }
  /**
   * 여러 블록의 글자들을 모두 포함하는 새 블록 정보를 생성
   * @param blocks 합칠 블록의 목록
   * @returns 새 블록 인스턴스
   */
  static join(...blocks: UTF8Block[]) {
    let ret = new UTF8Block();
    let range = blocks
      .reduce<{ start: number; end: number }[]>(
        (p, c) => [...p, ...c.range],
        []
      )
      .sort((a, b) => a.start - b.start)
      .reduce<{ start: number; end: number }[]>((previous, current) => {
        if (previous.length > 0) {
          if (within(previous[0].start, current.start, previous[0].end)) {
            previous[0] = {
              start: previous[0].start,
              end: Math.max(previous[0].start, previous[0].end),
            };
            return previous;
          } else {
            previous.unshift(current);
            return previous;
          }
        }
        return [current];
      }, [])
      .reverse();
    ret.range = range;
    return ret;
  }
  constructor(start: number = 0, end: number = 0) {
    this.range = [
      {
        start: start,
        end: end,
      },
    ];
  }
}
