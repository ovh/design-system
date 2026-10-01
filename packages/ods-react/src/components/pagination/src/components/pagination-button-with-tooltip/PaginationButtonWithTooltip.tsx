import { type FC, type JSX, type ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../tooltip/src';
import { usePagination } from '../../contexts/usePagination';

interface PaginationButtonWithTooltipProp {
  children: ReactNode;
  tooltip?: string;
}

const PaginationButtonWithTooltip: FC<PaginationButtonWithTooltipProp> = ({
  children,
  tooltip,
}): JSX.Element => {
  const { getPageUrl } = usePagination();

  if (!tooltip) {
    return <>{ children }</>;
  }

  return (
    <Tooltip>
      {/* TooltipTrigger carries role="button", which is right for the Button the trigger usually
          is, and wrong for the anchor it becomes in link mode: it would announce a link as a
          button, the very thing link mode exists to avoid. */}
      <TooltipTrigger
        asChild
        role={ getPageUrl ? undefined : 'button' }>
        { children }
      </TooltipTrigger>

      <TooltipContent>{ tooltip }</TooltipContent>
    </Tooltip>
  );
};

export {
  PaginationButtonWithTooltip,
  type PaginationButtonWithTooltipProp,
};
