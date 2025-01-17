'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

import { useTranslation } from '@/app/i18next/client';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import LazyCat from '@/assets/lazy-cat.svg';

import HorizontalScrollButton from '../../molecules/HorizontalScrollButton';
import Zabo from '../../organisms/Zabo';
import ImageZabo from '../../organisms/Zabo/ImageZabo';
import TextZabo from '../../organisms/Zabo/TextZabo';
import { ZaboOrigin, ZaboSize } from '../../organisms/Zabo/Zabo';

const SCROLL_AMOUNT = 800;

interface ZaboCarouselProps {
  notices: ((
    | Omit<React.ComponentProps<typeof ImageZabo>, 'width' | 'height' | 't'>
    | Omit<React.ComponentProps<typeof TextZabo>, 'width' | 'height' | 't'>
  ) & { id: number })[];
  title: string;
  sectionHref?: string;
  containerClassName?: string;
  carouselClassName?: string;
}

const ZaboCarousel = <Origin extends ZaboOrigin>({
  notices,
  width,
  height,
  title,
  sectionHref,
  containerClassName,
  carouselClassName,
}: ZaboCarouselProps & ZaboSize<Origin>) => {
  const { t, i18n } = useTranslation();
  const size = { width, height } as ZaboSize<Origin>;
  const carouselEl = useRef<HTMLDivElement>(null);
  const [carouselLeft, setCarouselLeft] = useState(0);
  const leftDisabled = carouselLeft === 0;
  const rightDisabled = carouselEl.current
    ? carouselLeft + 10 >
      carouselEl.current.scrollWidth - carouselEl.current.clientWidth
    : true;

  const scroll = (amount: number) => {
    if (!carouselEl.current) return;
    carouselEl.current.scrollBy({ left: amount, behavior: 'smooth' });
  };
  const handleCarouselScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setCarouselLeft(e.currentTarget.scrollLeft);
  };

  return (
    <div
      className={[
        'flex flex-col w-full items-center',
        ...(containerClassName ? [containerClassName] : []),
      ].join(' ')}
    >
      <Title
        title={title}
        href={sectionHref}
        onLeft={() => scroll(-SCROLL_AMOUNT)}
        onRight={() => scroll(SCROLL_AMOUNT)}
        leftDisabled={leftDisabled}
        rightDisabled={rightDisabled}
      />
      {notices.length > 0 ? (
        <div
          className={[
            'w-full flex flex-nowrap pt-1 pb-4 items-center justify-center overflow-y-hidden',
            ...(carouselClassName ? [carouselClassName] : []),
          ].join(' ')}
        >
          <div
            ref={carouselEl}
            onScroll={handleCarouselScroll}
            className="flex gap-5 overflow-x-scroll content scrollbar-none"
          >
            {notices.map(({ id, ...notice }) => (
              <div key={id} className="shrink-0">
                <Link href={`/${i18n.language}/notice/${id}`}>
                  <Zabo {...notice} {...size} t={t} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};

const Title = ({
  title,
  href,
  onLeft,
  onRight,
  leftDisabled,
  rightDisabled,
}: {
  title: string;
  href?: string;
  onLeft: () => void;
  onRight: () => void;
  leftDisabled: boolean;
  rightDisabled: boolean;
}) => (
  <div className="flex justify-between items-center py-5 content">
    {href ? (
      <Link href={href} className="group">
        <div className="flex gap-5">
          <TitleText title={title} />
          <ArrowRightIcon className="stroke-secondayText w-5 transition-transform group-hover:translate-x-2" />
        </div>
      </Link>
    ) : (
      <TitleText title={title} />
    )}
    <HorizontalScrollButton>
      <HorizontalScrollButton.Left disabled={leftDisabled} onClick={onLeft} />
      <HorizontalScrollButton.Right
        disabled={rightDisabled}
        onClick={onRight}
      />
    </HorizontalScrollButton>
  </div>
);

const Empty = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-72">
      <LazyCat />
      <div className="text-xl text-secondayText font-medium p-5">
        {t('emptyNotices')}
      </div>
    </div>
  );
};

const TitleText = ({ title }: { title: string }) => (
  <h2 className="text-3xl md:text-5xl font-bold m-0">{title}</h2>
);

export default ZaboCarousel;
