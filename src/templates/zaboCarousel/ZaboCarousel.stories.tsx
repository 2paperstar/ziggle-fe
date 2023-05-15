import { Meta, StoryFn } from "@storybook/react";

// import colorSet from "src/styles/colorSet";
import ZaboCarousel from "./ZaboCarousel";

export default {
  title: "templates/zaboCarousel/ZaboCarousel",
  component: ZaboCarousel,
} as Meta<typeof ZaboCarousel>;

const Template: StoryFn<typeof ZaboCarousel> = (args) => (
  <ZaboCarousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  carouselTitle: "🌟 마감임박",
  manyZabos: [
    {
      id: 0,
      thumbnailUrl: "https://picsum.photos/3000/3000?random=1",
      title: "23년도 인포팀 신규 부원 모집",
      date: "2023.02.13",
      viewCount: 110,
      author: "이정우",
      organization: "INFOTEAM",
    },
    {
      id: 1,
      thumbnailUrl: "https://picsum.photos/4000/2000?random=2",
      title: "별 보는 낭만동아리 스페이스바 2023년도 신입 부원 리크루팅",
      date: "2023.02.13",
      viewCount: 110,
      author: "이정우",
      organization: "INFOTEAM",
    },
    {
      id: 2,
      thumbnailUrl: "https://picsum.photos/3000/4000?random=3",
      title: "공연동아리 지대로 연극 <ART> 선착순 티켓팅!!",
      date: "2023.02.13",
      viewCount: 110,
      author: "이정우",
      organization: "INFOTEAM",
    },
    {
      id: 3,
      thumbnailUrl: "https://picsum.photos/4000/4000?random=4",
      title: "휴익에 어서와!!! 23년도 휴강익스프레스 리크루팅 시작!!!! 많관부",
      date: "2023.02.13",
      viewCount: 110,
      author: "이정우",
      organization: "INFOTEAM",
    },
    {
      id: 4,
      thumbnailUrl: "https://picsum.photos/1000/1200?random=5",
      title: "MACMOO 막무가내 마라맛 원데이클래스",
      date: "2023.02.13",
      viewCount: 110,
      author: "이정우",
      organization: "INFOTEAM",
    },
    {
      id: 5,
      thumbnailUrl: "https://picsum.photos/1200/700?random=6",
      title: "공연동아리 지대로 연극 <ART> 선착순 티켓팅!!",
      date: "2023.02.13",
      viewCount: 110,
      author: "이정우",
      organization: "INFOTEAM",
    },
    {
      id: 6,
      title: "<속보> 도글리 유니콘 기업 선정 / 예나 선정이 딸이예요",
      date: "2023.05.13",
      viewCount: 202210,
      author: "고도현",
      organization: "도글리",
      content:
        "서울, 2023년 5월 13일 - 글로벌 스타트업 도글리(Dogly)가 유니콘 기업으로 선정되었다는 소식이 전해졌다. 이러한 성과는 도글리의 혁신적인 비즈니스 모델과 급속한 성장으로 인정받은 결과로 해석되고 있다. 도글리는 2015년에 창립된 AI 기반의 스타트업으로, 애완동물 관련 서비스를 제공하는 플랫폼이다. 사용자는 도글리 앱을 통해 애완동물의 건강, 영양, 행동 등을 관리할 수 있으며, 전문가와 정보를 공유하고 상담을 받을 수 있다. 또한, 도글리는 애완동물용 제품을 개발하고 판매하여 수익을 창출하고 있다.도글리는 창업 이후 지속적인 성장을 이루어내며 투자자들의 관심을 받았다. 최근에는 대규모 투자유치를 통해 기업 가치를 높여왔다. 성장세를 이어가며 전 세계적으로 수많은 애완동물 사용자들에게 인기를 얻고 있는 도글리는 이번 유니콘 기업 선정으로 글로벌 기업들의 주목을 받게 되었다.유니콘 기업은 초기에 창업된 기업으로서, 자본시장에서 10억 달러 이상의 평가를 받은 기업을 지칭한다. 이는 기업이 혁신적인 비즈니스 모델과 높은 성장 잠재력을 가지고 있음을 인정하는 증거로 간주된다. 도글리의 유니콘 기업 선정은 그들의 창의성과 노력이 결실을 맺은 결과로 해석될 수 있다.도글리의 대표는 이번 선정에 대해 '저희 도글리가 유니콘 기업으로 선정되어 매우 기쁘게 생각한다'며 '애완동물 사용자들에게 최상의 서비스를 제공하기 위해 더욱 노력하겠다'고 밝혔다.",
    },
  ],
  //   carouselBGColor: colorSet.secondary,
};
