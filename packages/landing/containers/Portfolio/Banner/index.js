import React from "react";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import Box from "common/src/components/Box";
import Text from "common/src/components/Text";
import Heading from "common/src/components/Heading";
import Image from "common/src/components/Image";
import Container from "common/src/components/UI/Container";
import SocialProfile from "../SocialProfile";
import BannerWrapper from "./banner.style";

import { SOCIAL_PROFILES } from "common/src/data/Portfolio/data";
import { cornerDownRight } from "react-icons-kit/feather/cornerDownRight";
import PersonImage from "common/src/assets/image/person.jpg";

const BannerSection = ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  nameStyle,
  aboutStyle,
  roleWrapper,
}) => {
  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content="Hello, I’m" {...greetingStyle} />
            <Heading content="Rahul Aggarwal" {...nameStyle} />
            <SocialProfile items={SOCIAL_PROFILES} />
          </Box>
          <Box {...imageArea} className="image_area">
            <Image src={PersonImage} alt="Rahul Aggarwal" />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "stretch",
  },
  contentArea: {
    width: ["100%", "100%", "50%", "40%"],
    p: ["65px 0 80px 0", "65px 0 80px 0", "80px 0 60px 0", "0"],
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column",
  },
  imageArea: {
    width: ["100%", "100%", "50%", "60%"],
    flexBox: true,
    alignItems: "flex-end",
  },
  greetingStyle: {
    as: "h3",
    color: "#fff",
    fontSize: ["18px", "18px", "18px", "20px", "30px"],
    fontWeight: "500",
    mb: "8px",
  },
  nameStyle: {
    as: "h2",
    color: "#fff",
    fontSize: ["38px", "38px", "44px", "60px", "80px"],
    fontWeight: "800",
    mb: "6px",
  },
  designationStyle: {
    as: "h3",
    color: "#fff",
    fontSize: ["18px", "18px", "18px", "20px", "30px"],
    fontWeight: "700",
    mb: ["30px", "30px", "25px", "30px", "30px"],
    paddingTop: "15px",
  },
  roleWrapper: {
    flexBox: true,
    mb: "28px",
  },
  roleStyle: {
    as: "h4",
    fontSize: ["18px", "18px", "18px", "18px", "20px"],
    fontWeight: "500",
    color: "#fff",
    mb: "0",
    ml: "10px",
  },
  aboutStyle: {
    fontSize: ["15px", "15px", "15px", "16px", "16px"],
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.5",
    mb: "50px",
    marginRight: "50px",
  },
};

export default BannerSection;
