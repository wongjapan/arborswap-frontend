import React from "react";
import styled from 'styled-components'

import {
  Flex
} from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import NavigationLite from "../NavigationLite";
import RoadmapItems from "./RoadmapItems";
import './roadmapItems.css';

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  padding-top: 36px;
  min-height: 1200px;
  background: #F5F6F7;
  flex-direction: column;
`
const InnerWrapper = styled(Flex)`
  width: 1200px;
  margin: 0 auto;
`

const RoadmapCom = ()=>{
    const { t } = useTranslation();
    return (
        <>
            <Wrapper>
                <InnerWrapper>
                    <NavigationLite />
                </InnerWrapper>
                <RoadmapItems />
            </Wrapper>
        </>
    );
}

export default RoadmapCom;
