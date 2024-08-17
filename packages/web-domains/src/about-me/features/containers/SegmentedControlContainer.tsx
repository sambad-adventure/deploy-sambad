'use client';

import { SegmentedControl } from '@sambad/sds/components';
import { HTMLAttributes, useState } from 'react';

import { AboutMeContainer } from './AboutMeContainer';
import { AnsweredQuestionsContainer } from './AnsweredQuestionsContainer';
import { aboutMeSectionCss, segmentedCss, segmentedSectionCss } from './styles';

type TabType = 'about-me' | 'answered-questions';

type SegmentedControlContainerProps = HTMLAttributes<HTMLDivElement>;

export const SegmentedControlContainer = (props: SegmentedControlContainerProps) => {
  const [tab, setTab] = useState<TabType>('about-me');

  const handleTab = (value: string) => {
    setTab(value as TabType);
  };

  return (
    <section css={segmentedSectionCss} {...props}>
      <SegmentedControl value={tab} onValueChange={handleTab} css={segmentedCss}>
        <SegmentedControl.Item value="about-me">자기소개</SegmentedControl.Item>
        <SegmentedControl.Item value="answered-questions">릴레이 질문</SegmentedControl.Item>
      </SegmentedControl>

      <div css={aboutMeSectionCss}>
        {tab === 'about-me' && <AboutMeContainer />}
        {tab === 'answered-questions' && <AnsweredQuestionsContainer />}
      </div>
    </section>
  );
};
