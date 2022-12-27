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
};

export default ICONS;