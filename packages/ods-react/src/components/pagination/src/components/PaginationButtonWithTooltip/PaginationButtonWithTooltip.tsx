import type { FC, ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../tooltip/src';

const PaginationButtonWithTooltip: FC<{
  tooltip?: string;
  children: ReactNode;
}> = ({ tooltip, children }) =>
  tooltip ? (
    <Tooltip>
      <TooltipTrigger asChild>{ children }</TooltipTrigger>
      <TooltipContent>{ tooltip }</TooltipContent>
    </Tooltip>
  ) : (
    <>{ children }</>
  );

export { PaginationButtonWithTooltip };
