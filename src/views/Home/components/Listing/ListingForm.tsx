import React from "react";
import styled from 'styled-components'

import {
  Flex
} from '@arborswap/uikit'

import { useTranslation } from 'contexts/Localization'
import './listingForm.css';

const ListingWrap = styled.div`
    padding: 20px;
`
const ListingHeader = styled.div`
    width: 800px;
    margin: 0 auto;
    text-align:center;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width: 100%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
`
const ListingTitle = styled.h1`
    font-family: GilroyHome;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #464754;
    padding-top:100px;
    padding-bottom: 5px;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width: 100%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
`
const ListingSubTitle = styled.p`
    font-family: GilroyHome;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #807373;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width: 100%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
`
const FormWrapper = styled.div`
    width: 800px;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 20px;
    margin-top: 60px;
    padding: 20px;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width: 100%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
`
const FormContent = styled.div`
    margin: 0 auto;
`

const ListingForm = ()=>{
    const { t } = useTranslation();
    return (
        <>
            <ListingWrap>
                <ListingHeader>
                    <ListingTitle>Apply For Listing</ListingTitle>
                    <ListingSubTitle>Fill the form below carefully to apply.</ListingSubTitle>
                </ListingHeader>
                <FormWrapper>
                    <FormContent>
                    <div className="wrapper">
                        
                        <form action="#">
                            <div className="user-details">
                                <div className="title">Project Details</div>
                                <div className="input-box">
                                    <span className="details">Name *</span>
                                    <input type="text" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Website URL (optional )</span>
                                    <input type="text" />
                                </div>
                                <div className="input-box-full">
                                    <span className="details">Description * </span>
                                    <input type="text" />
                                </div>
                                
                                <div className="title mt40">Contact Info</div>

                                <div className="input-box">
                                    <span className="details">Name *</span>
                                    <input type="text" placeholder="E.g James Joe" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email Address *</span>
                                    <input type="text" placeholder="Enter email" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Telegram Handle *</span>
                                    <input type="text" placeholder="E.g @larry" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number (optional)</span>
                                    <input type="text" placeholder="E.g +147" />
                                </div>
                                <div className="input-box-full">
                                    <span className="details">Message / Comments</span>
                                    <textarea id="comment" />
                                </div>

                            </div>

                            <div className="button">
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    </FormContent>
                </FormWrapper>
            </ListingWrap>
        </>
    );
}

export default ListingForm;
