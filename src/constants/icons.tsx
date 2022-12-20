type IconType = {
  [index: string]: string;
}; // key에 string으로 접근할 수 있도록 인덱스 선언

const Icons: IconType = {
  "arrow-right": "bi bi-chevron-right",
  "arrow-left": "bi bi-chevron-left",
  "arrow-up": "bi bi-chevron-up",
  "arrow-down": "bi bi-chevron-down",
  "bookmark-empty": "bi bi-bookmark",
  "bookmark-fill": "bi bi-bookmark-fill",
  "star-empty": "bi bi-star",
  "star-fill": "bi bi-star-fill",
  "chat-left": "bi bi-chat-left",
  "chat-center": "bi bi-chat-square",
  "chat-right": "bi bi-chat-right",
  "search": "bi bi-search",
  "eye" : "bi bi-eye"

};

export default Icons;
