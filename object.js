// 영향력이 큰 채널
const youtubeData = [
  {
      youtubeView1: {
          id: '000.111.22',
          URL: "유튜브 구독자 알고리즘 url",
          title: "KBSWORLDTV",
          views: 18700000,
      }
  },
  {
      youtubeView2: {
          id: '333.444.55',
          URL: "유튜브 구독자 알고리즘 url",
          title: "YTN",
          views: 18700000,
      }
  }
]

// 데이터 추가
const newData = [
  {
    id: '000.000.22',
    URL: "유튜브 구독자 알고리즘 url",
    title: "즐거움은 끝이 없다 T V N",
    views: 2000000,
  },
  {
    id: '111.000.33',
    URL: "유튜브 구독자 알고리즘 url",
    title: "차린건 쥐뿔도 없지만",
    views: 1500000,
  }
];
const addYoutubeData = {...youtubeData, newData};
console.log(addYoutubeData);
