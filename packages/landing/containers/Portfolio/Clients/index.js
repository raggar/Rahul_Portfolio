import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "common/src/components/Box";
import Text from "common/src/components/Text";
import Heading from "common/src/components/Heading";
import Image from "common/src/components/Image";
import Container from "common/src/components/UI/Container";

import { CLIENTS } from "common/src/data/Portfolio/data";
import { ClientsImage } from "./clients.style";

const ClientsSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
}) => {
  const [header, setHeader] = useState("I want to help build your story.");
  const [content, setContent] = useState([
    "Throughout the years I have contributed to several phenomenal companies, startups, and initiatives. Click to learn more!",
  ]);
  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={header} />
          {content.length == 1 ? (
            <Text {...secDescription} content={content[0]} />
          ) : (
            content.map((bullet) => (
              <>
                <Text {...secDescription} content={"- " + bullet} />
                <br />
              </>
            ))
          )}
        </Box>
        <Box {...row}>
          {CLIENTS.map(({ image, title, description }, index) => (
            <ClientsImage key={`client-${index}`}>
              <Image
                style={{
                  cursor: "pointer",
                }}
                src={image}
                alt={title}
                title={title}
                onClick={() => (setHeader(title), setContent(description))}
              />
            </ClientsImage>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

ClientsSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
};

ClientsSection.defaultProps = {
  sectionWrapper: {
    pt: ["40px", "60px", "80px", "80px", "80px"],
    pb: ["60px", "80px", "100px", "130px", "130px"],
  },
  secTitleWrapper: {
    mb: "60px",
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
    fontSize: "16px",
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
    textAlign: "center",
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default ClientsSection;
