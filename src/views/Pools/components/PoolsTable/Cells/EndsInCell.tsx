import React from 'react'
import styled from 'styled-components'
import { Flex, Link, Skeleton, Text, TimerIcon } from '@arborswap/uikit'
import { getBscScanLink } from 'utils'
import { Pool } from 'state/types'
import { useBlock } from 'state/block/hooks'
import Balance from 'components/Balance'
import { useTranslation } from 'contexts/Localization'
import { getPoolBlockInfo } from 'views/Pools/helpers'
import BaseCell, { CellContent } from './BaseCell'

interface FinishCellProps {
  pool: Pool
}

const StyledCell = styled(BaseCell)`
  flex: 2 0 100px;
`

const EndsInCell: React.FC<FinishCellProps> = ({ pool }) => {
  const { lockTime } = pool
  const { t } = useTranslation()

  return (
    <StyledCell role="cell">
      <CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {t('Duration (Days)')}
        </Text>
        {lockTime}
      </CellContent>
    </StyledCell>
  )
}

export default EndsInCell
