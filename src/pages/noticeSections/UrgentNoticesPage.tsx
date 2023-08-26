import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllNotices } from "src/apis/notice/notice-api";
import queryKeys from "src/apis/queryKeys";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";
import NoticesWithPagination from "src/templates/noticesWithPagination/NoticesWithPagination";

const NOTICE_PER_PAGE = 30;

const UrgentNoticesPage = () => {
  const [page, setPage] = useState<number>(0);

  const { data, isLoading } = useQuery(
    [
      queryKeys.getNotice,
      {
        offset: page * NOTICE_PER_PAGE,
        limit: NOTICE_PER_PAGE,
        orderBy: "deadline",
      },
    ],
    getAllNotices,
  );

  return (
    <Area>
      <Spacer height={"50px"} />
      <Content>
        <Text as={"h1"} size={"2.5rem"} font={Font.Bold}>
          🌟 마감임박
        </Text>

        <Spacer height={"8px"} />

        <Text size={"1rem"} font={Font.Medium} color={colorSet.secondaryText}>
          마감 시간이 일주일도 안 남은 공지를 모아서 보여 드려요
        </Text>
      </Content>

      <Spacer height={"50px"} />

      <Content>
        <NoticesWithPagination
          notices={data?.list}
          isLoading={isLoading}
          noticePerPage={NOTICE_PER_PAGE}
          page={page}
          setPage={setPage}
        />
      </Content>
    </Area>
  );
};

export default UrgentNoticesPage;
