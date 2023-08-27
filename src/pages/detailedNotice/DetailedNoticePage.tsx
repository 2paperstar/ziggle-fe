import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import { getNotice } from "src/apis/notice/notice-api";
import queryKeys from "src/apis/queryKeys";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Flex from "src/atoms/containers/flex/Flex";
import Spacer from "src/atoms/spacer/Spacer";
import useIsMobile from "src/hooks/useIsMobile";
import colorSet from "src/styles/colorSet";
import { isEmpty } from "src/utils/utils";
import styled from "styled-components";

import Banner from "../home/assets/banner2.png";
import BackToMainBtn from "./BackToMainBtn";
import CopyLinkButton from "./CopyLinkButton";
import FullPageImageViewer from "./FullPageImageViewer";
import HowAboutThese from "./HowAboutThese";
import ImageCarousel from "./ImageCarousel";
import NoticeContent from "./NoticeContent";
import NoticeInfo from "./NoticeInfo";
import ShareButton from "./ShareButton";
import ZaboShowcase from "./ZaboShowcase";

export interface dummyDetailedNotice {
  title: string;
  isReminded: boolean;
  images: string[];
  deadline?: string;
  author: string;
  dateCreated: string;
  viewCount: number;
  tags: string[];
  content: string;
}

// 큰 포스터 이미지 (ZaboShowcase)의 밑부분을 덮기 위해 생성
const CoverContent = styled(Content)`
  z-index: 1;
  background-color: ${colorSet.colorless};
`;

const DetailedNoticePage = () => {
  const [showImageViewer, setShowImageViewer] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const { id } = useParams();

  const { data, isLoading } = useQuery(
    [queryKeys.getNotice, Number(id)],
    getNotice,
    {
      enabled: !isNaN(Number(id)),
    },
  );

  if (isLoading || !data) {
    return <div>loading...</div>; // TODO: 스켈레톤 추가
  }

  const isImageExist = !isEmpty(data.imagesUrl);

  return (
    <>
      <ScrollRestoration />

      <Area>
        {isImageExist ? (
          <ZaboShowcase
            src={data?.imagesUrl[0] ?? Banner} // TODO: 이미지가 없을 때 대체 이미지
            onShow={
              isEmpty(data.imagesUrl)
                ? undefined
                : () => {
                    setShowImageViewer(true);
                  }
            }
          />
        ) : (
          <></>
        )}

        <CoverContent>
          <Spacer height={isMobile ? "30px" : "50px"} />

          <Flex justifyContent={"space-between"}>
            <Flex gap={"8px"}>
              <CopyLinkButton title={data.title} />
              <ShareButton title={data.title} />
            </Flex>

            <BackToMainBtn />
          </Flex>

          <Spacer height={isMobile ? "15px" : "20px"} />

          <NoticeInfo
            id={data.id}
            deadline={data.deadline ?? undefined}
            title={data.title}
            isReminded={data.reminder}
            author={data.author}
            dateCreated={data.createdAt}
            viewCount={data.views}
            tags={data.tags}
          />

          <Spacer height={"20px"} />

          <NoticeContent content={data.body} />

          <Spacer height={"80px"} />

          {!isEmpty(data.imagesUrl) && (
            <ImageCarousel imageSrcs={data.imagesUrl} />
          )}

          <Spacer height={"80px"} />

          <HowAboutThese />
        </CoverContent>
      </Area>

      {showImageViewer && (
        <FullPageImageViewer
          srcs={data.imagesUrl}
          startIndex={0}
          onClose={() => {
            setShowImageViewer(false);
          }}
        />
      )}
    </>
  );
};

export default DetailedNoticePage;
