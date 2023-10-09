const BOARD_TYPE = {
  RECRUIT: "RECRUIT",
  CASTING_AUDITION: "CASTING_AUDITION",
} as const;

const PROFITABLE_STATUS = {
  ALL: "null",
  PROFITABLE: "PROFITABLE",
  NON_PROFITABLE: "NON_PROFITABLE",
} as const;

const REG_STATUS = {
  ALL: "ALL",
  END: "END",
  ONGOING: "ONGOING",
} as const;

const CATEGORY_ID: { [key: string]: number } = {
  실용음악: 3,
  클래식: 4,
  영화: 5,
  드라마: 6,
  연극: 7,
  "방송/예능": 8,
  모델: 9,
  광고: 10,
  기타: 11,
};

export { PROFITABLE_STATUS, REG_STATUS, BOARD_TYPE, CATEGORY_ID };
