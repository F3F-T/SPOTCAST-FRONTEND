export interface CrewPost {
  id: number;
  category: string;
  profitable: boolean;
  content: string;
  duration: number;
  bookmarked: boolean;
  views: number;
  bookmarks: number;
}

interface CrewDashboard {
  [index: string]: CrewPost[];
}

export const posts: CrewDashboard = {
  all: [
    {
      id: 1,
      category: "all",
      content: "전체보기 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 2,
      category: "all",
      content: "전체보기 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 3,
      category: "all",
      content: "전체보기 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 4,
      category: "all",
      content: "전체보기 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 5,
      category: "all",
      content: "전체보기 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
  ],
  classic: [
    {
      id: 1,
      category: "classic",
      content: "클래식 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 2,
      category: "classic",
      content: "클래식 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 3,
      category: "classic",
      content: "클래식 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 4,
      category: "classic",
      content: "클래식 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 5,
      category: "classic",
      content: "클래식 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
  ],
  contemporaryMusic: [
    {
      id: 1,
      category: "contemporaryMusic",
      content: "실용음악 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 2,
      category: "contemporaryMusic",
      content: "실용음악 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 3,
      category: "contemporaryMusic",
      content: "실용음악 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 4,
      category: "contemporaryMusic",
      content: "실용음악 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 5,
      category: "contemporaryMusic",
      content: "실용음악 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
  ],
  theatre: [
    {
      id: 1,
      category: "theatre",
      content: "연기 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 2,
      category: "theatre",
      content: "연기 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 3,
      category: "theatre",
      content: "연기 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 4,
      category: "theatre",
      content: "연기 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 5,
      category: "theatre",
      content: "연기 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
  ],
  production: [
    {
      id: 1,
      category: "production",
      content: "연출 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 2,
      category: "production",
      content: "연출 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 3,
      category: "production",
      content: "연출 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 4,
      category: "production",
      content: "연출 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 5,
      category: "production",
      content: "연출 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
  ],
  modeling: [
    {
      id: 1,
      category: "modeling",
      content: "모델 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 2,
      category: "modeling",
      content: "모델 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 3,
      category: "modeling",
      content: "모델 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 4,
      category: "modeling",
      content: "모델 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
    {
      id: 5,
      category: "modeling",
      content: "모델 글 입니당",
      views: 1,
      bookmarks: 1,
      bookmarked: false,
      duration: 1,
      profitable: true,
    },
  ],
};
