import { Txt } from '@sambad/sds/components';
import { HTMLAttributes, ReactNode } from 'react';

interface ProgressingQuestionInfoProps extends HTMLAttributes<HTMLDivElement> {
  renderQuestion: ReactNode;
}

export const ProgressingQuestionInfo = ({ renderQuestion, ...rest }: ProgressingQuestionInfoProps) => {
  return (
    <div {...rest}>
      <Txt typography="subtitle1" as="p" css={{ marginBottom: '8px' }}>
        진행 중인 릴레이 질문
      </Txt>
      {renderQuestion}
    </div>
  );
};