import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";
import Box from "common/src/components/Box";
import Text from "common/src/components/Text";
import Heading from "common/src/components/Heading";
import Container from "common/src/components/UI/Container";
import { plus } from "react-icons-kit/feather/plus";
import styled from "styled-components";

import { SKILLS } from "common/src/data/Portfolio/data";

const ProcessSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  listItem,
  listText,
  listTitle,
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="process_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Never Stop Learning." />
        </Box>

        <LearningRow>
          {SKILLS.map((skill, index) => (
            <LearningList key={`skill-${index}`}>
              <Heading content={skill.title} {...listTitle} />
              {skill.listItems.map((item, index) => (
                <Box {...listItem} key={`list-item-${index}`}>
                  <Icon icon={item.icon || plus} size={item.iconSize || 12} />
                  <Text as="span" content={item.content} {...listText} />
                </Box>
              ))}
            </LearningList>
          ))}
        </LearningRow>
      </Container>
    </Box>
  );
};

const LearningRow = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LearningList = styled.div`
  width: 33.333333%;
  padding-left: 35px;
  padding-right: 35px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 720px) {
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

ProcessSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  processRow: PropTypes.object,
  processCol: PropTypes.object,
  processImageStyle: PropTypes.object,
  processTitleStyle: PropTypes.object,
  processDescriptionStyle: PropTypes.object,
  learningRow: PropTypes.object,
  learningContentArea: PropTypes.object,
  learningListArea: PropTypes.object,
  learningTitle: PropTypes.object,
  learningSubTitle: PropTypes.object,
  learningDescription: PropTypes.object,
  buttonWrapper: PropTypes.object,
  buttonLabelStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  learningList: PropTypes.object,
  listItem: PropTypes.object,
  listText: PropTypes.object,
  listTitle: PropTypes.object,
};

ProcessSection.defaultProps = {
  sectionWrapper: {
    pt: ["60px", "80px", "90px", "100px", "140px"],
    pb: ["10px", "40px", "30px", "50px", "50px"],
  },
  secTitleWrapper: {
    mb: ["60px", "70px"],
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
    textAlign: "center",
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
    textAlign: "center",
  },
  processRow: {
    flexBox: true,
    flexWrap: "wrap",
    ml: ["0", "-15px", "-30px", "-70px", "-70px"],
    mr: ["0", "-15px", "-30px", "-70px", "-70px"],
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ["0", "15px", "30px", "70px", "70px"],
    pr: ["0", "15px", "30px", "70px", "70px"],
    mb: "40px",
  },
  processImageStyle: {
    ml: "auto",
    mr: "auto",
    mb: "35px",
  },
  processTitleStyle: {
    fontSize: ["20px", "18px", "20px", "20px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    textAlign: "center",
    mb: ["20px", "20px", "27px", "27px", "27px"],
  },
  processDescriptionStyle: {
    fontSize: ["15px", "15px", "16px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    textAlign: "center",
    lineHeight: "1.5",
  },
  learningRow: {
    flexBox: true,
    flexBox: "wrap",
    justifyContent: "center",
    mt: ["20px", "30px", "70px", "80px", "110px"],
  },
  learningContentArea: {
    width: ["100%", "100%", "75%", "75%", "75%"],
    pr: ["0px", "0px", "60px", "80px", "160px"],
    mb: ["70px", "70px", "0", "0", "0"],
  },
  learningTitle: {
    fontSize: ["22px", "22px", "24px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    flexBox: true,
    justifyContent: "center",
    alignItems: "center",
    mb: ["20px", "20px", "15px", "20px", "20px"],
    pr: ["0", "0", "0", "65px", "65px"],
  },
  learningSubTitle: {
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "20px",
    pr: ["0", "0", "0", "65px", "65px"],
  },
  learningDescription: {
    fontSize: "16px",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "25px",
  },
  buttonWrapper: {
    flexBox: true,
    alignItems: "center",
    mt: ["30px", "40px", "40px", "80px", "80px"],
    flexWrap: ["wrap"],
  },
  buttonLabelStyle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#3444f1",
    mb: ["20px", "20px", "20px", "0", "0"],
    mr: "30px",
    width: ["100%", "100%", "100%", "auto", "auto"],
  },
  buttonStyle: {
    type: "button",
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
    pl: "23px",
    pr: "23px",
  },
  learningList: {
    width: ["100%", "33.3333333%", "100%", "100%", "100%"],
    pl: ["0", "0", "35px", "35px", "35x"],
    pr: ["0", "0px", "35px", "35px", "35px"],
    mb: "0px",
    flexBox: true,
    flexDirection: "column",
    alignItems: "center",
  },
  listTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#302b4e",
    mb: "25px",
    textAlign: "center",
  },
  listItem: {
    flexBox: true,
    alignItems: "center",
    color: "#43414e",
    mb: "16px",
  },
  listText: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#43414e",
    mb: "0",
    ml: "5px",
  },
};

export default ProcessSection;
