import React, { useState } from 'react'
import { Flex, IconButton, CogIcon, Button } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import Ndropdown from './Ndropdown'

const ItemWrap = styled.div`
    position: relative;
`

const MenuItem = styled.div`
    margin: 0px 15px;
    background: #F5F1EB;
    cursor: pointer;
    box-shadow: 0px 0px 2px #dcdcdc;
`
const MenuItemLeft = styled.div`
    display: inline-block;
    padding: 10px;
`
const MenuItemRight = styled.div`
    display: inline-block;
    background: #FFFFFF;
    border-radius: 6px;
    padding: 12px;
`
const ItemIcon = styled.span`
    display: inline-block;
    padding-right: 10px;
`
const ItemText = styled.span`
    font-family: 'GilroyHome';
    display: inline-block;
    vertical-align: top;
    padding: 5px 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.02em;
`


const MenuButton = () => {
    const t = useTranslation()
    
    const [toggle, setToggle] = useState(false)
    const [activeItem, setActiveItem] = useState({
        img: '/images/headericons/BinanceSmartChainBadge.png',
        title: 'Binance Smart Chain'
    })

    const [itemData, setItemData] = useState([
        {
            iconimg: "/images/headericons/BinanceSmartChainBadge.png",
            title: "Binance Smart Chain", 
            subtitle: "Connected", 
            status: true, 
            isActive: true
        },{
            iconimg: "/images/headericons/EthereumChain.png",
            title: "Ethereum Chain", 
            subtitle: "Not Connected", 
            status: false, 
            isActive: false
        },{
            iconimg: "/images/headericons/BinanceSmartChainBadge.png",
            title: "Polygon Chain", 
            subtitle: "Not Connected", 
            status: false, 
            isActive: false
        }
    ])
    
    const toggleNetworkDropdown = ()=>{
         
        if(toggle){
            setToggle(false)
        }else{
            setToggle(true)
        }
    }

    const updateMenuItem = (index)=>{

        let temItem = [...itemData]
        temItem = temItem.map((item)=>{ 
            return {...item, isActive: false }
        })
        
        temItem[index].isActive = true;
    
        setItemData(temItem);

        setActiveItem({
            img: itemData[index].iconimg,
            title: itemData[index].title
        })
        
        setToggle(false)
    }

  return (
        <ItemWrap>
            <MenuItem onClick={toggleNetworkDropdown}>
                <MenuItemLeft>
                    <ItemIcon>
                        <img width="26" src={activeItem.img} alt="" />
                    </ItemIcon>
                    <ItemText> {activeItem.title} </ItemText>
                </MenuItemLeft>
                <MenuItemRight>
                    <img src="/images/headericons/arrow-up.png" alt="" />
                </MenuItemRight>
            </MenuItem>
            {toggle ? <Ndropdown updateMenuItem={updateMenuItem} itemData={itemData} /> : ''}
        </ItemWrap>
  )
}

export default MenuButton