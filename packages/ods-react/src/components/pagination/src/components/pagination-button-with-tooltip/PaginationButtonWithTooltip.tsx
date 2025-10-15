import { type FC, type JSX, type ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../tooltip/src';

interface PaginationButtonWithTooltipProp {
  children: ReactNode;
  tooltip?: string;
}

const PaginationButtonWithTooltip: FC<PaginationButtonWithTooltipProp> = ({
  children,
  tooltip,
}): JSX.Element =>
  tooltip ? (
    <Tooltip>
      <TooltipTrigger asChild>{ children }</TooltipTrigger>
      <TooltipContent>{ tooltip }</TooltipContent>
    </Tooltip>
  ) : (
    <>{ children }</>
  );

export {
  PaginationButtonWithTooltip,
  type PaginationButtonWithTooltipProp,
};
