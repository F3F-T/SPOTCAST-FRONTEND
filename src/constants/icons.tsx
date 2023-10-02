type IconType = {
  [index: string]: string;
}; // key에 string으로 접근할 수 있도록 인덱스 선언

const ICONS: IconType = {
  arrowRight: "bi bi-chevron-right",
  arrowLeft: "bi bi-chevron-left",
  arrowUp: "bi bi-chevron-up",
  arrowDown: "bi bi-chevron-down",
  bookmarkEmpty: "bi bi-bookmark",
  bookmarkFill: "bi bi-bookmark-fill",
  starEmpty: "bi bi-star",
  starFill: "bi bi-star-fill",
  chatLeft: "bi bi-chat-left",
  chatCenter: "bi bi-chat-square",
  chatRight: "bi bi-chat-right",
  search: "bi bi-search",
  eye: "bi bi-eye",
  unchecked: "bi bi-check-circle",
  checked: "bi bi-check-circle-fill",
  bell: "bi bi-bell",
  bellFill: "bi bi-bell-fill",
  msg: "bi bi-chat-square-heart",
  msgFill: "bi bi-chat-square-heart-fill",
  mypage: "bi bi-person",
  mypageFill: "bi bi-person-circle",
  plus: "bi bi-patch-plus-fill",
  personCard: "bi bi-person-vcard",
  trash: "bi bi-trash3",
  reply: "bi bi-reply",
  close: "bi bi-x-lg",
  unfollow: "bi bi-person-x-fill",
  follow: "bi bi-person-fill-add",
  contact: "bi bi-envelope-fill",
  openMsg: "bi bi-envelope-open",
  sort: "bi bi-sort-down",
  heartEmpty: "bi bi-heart",
  heartFill: "bi bi-heart-fill",
  plusCircle: "bi bi-plus-circle",
} as const;

export default ICONS;
