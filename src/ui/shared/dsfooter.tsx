"use client"
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import twitter from "../../../public/images/dashboard/twitter.svg";
import instagram from "../../../public/images/dashboard/instagram.svg";
import linkedin from "../../../public/images/dashboard/linkedin.svg";
import discord from "../../../public/images/dashboard/discord.svg";

const StyledLink = styled(Link)({
    color: "#fff",
    fontFamily: "Roboto",
    textDecoration: "none",
    transition: "0.5s",
    fontSize: 14,
    "&:hover": {
        textDecoration: "underline",
        color: "#1CA7FB"
    }
});

const SocialIcon = styled(Link)({
    background: "linear-gradient(1deg,rgba(24, 28, 31, 0),rgba(45, 48, 55, 0))",
    borderRadius: "5rem",
    display: "inline-block",
    transition: "0.5s",
    "&:hover": {
        background: "linear-gradient(90deg, #1ab3e5 0%, #1ab3e5 50%, #1ab3e5 100%) !important",
    }
});

const Dsfooter = () => {
    return (
        <Box sx={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "2rem 0rem",
            "@media(max-width: 600px)": {
                justifyContent: "center"
            }
        }}>
            <Box>
                <Typography color={'#fff'}>Copyright © 2025 mdccoin.com. All rights reserved.</Typography>
            </Box>
            <Box component={'ul'} sx={{
                margin: 0, padding: 0, listStyle: "none",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap"
            }}>
                <Box component={'li'}>
                    <SocialIcon href={""} target="_blank">
                        <Image src={twitter} alt={"twitter"} style={{ display: "block", width: "50px", height: "auto" }} />
                    </SocialIcon>
                </Box>
                <Box component={'li'}>
                    <SocialIcon href={""} target="_blank">
                        <Image src={instagram} alt={"instagram"} style={{ display: "block", width: "50px", height: "auto" }} />
                    </SocialIcon>
                </Box>
                <Box component={'li'}>
                    <SocialIcon href={""} target="_blank">
                        <Image src={linkedin} alt={"linkedin"} style={{ display: "block", width: "50px", height: "auto" }} />
                    </SocialIcon>
                </Box>
                <Box component={'li'}>
                    <SocialIcon href={""} target="_blank">
                        <Image src={discord} alt={"discord"} style={{ display: "block", width: "50px", height: "auto" }} />
                    </SocialIcon>
                </Box>
            </Box>
        </Box>
    );
};

export default Dsfooter;
