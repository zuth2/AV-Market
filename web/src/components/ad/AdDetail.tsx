import { Flex, Icon, Link, Text, Image } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { REGULAR_BROWN } from "../../utils/colors";
import { formatAvatarLink } from "../../utils/formatLinks";

interface AdDetailProps {
  icon?: IconType;
  avatar?: string;
  text: string;
  href?: string;
}

export const AdDetail: React.FC<AdDetailProps> = ({
  icon,
  text,
  href,
  avatar,
}) => {
  return (
    <Flex
      color={REGULAR_BROWN}
      align="center"
      my={3}
      as={href ? Link : Text}
      href={href ?? null}
      style={{ textDecoration: "none" }}
    >
      {avatar ? (
        <Image
          w={8}
          h={8}
          mr={2}
          src={formatAvatarLink(avatar)}
          border={`2px solid ${REGULAR_BROWN}`}
          boxSizing="content-box"
          borderRadius="3px"
        />
      ) : (
        <Icon
          as={icon}
          w={8}
          h={8}
          mr={2}
          alignSelf={text.length > 40 ? "start" : "unset"}
        />
      )}

      <Text fontSize={text.length > 40 ? 15 : 20} whiteSpace="pre-line">
        {text}
      </Text>
    </Flex>
  );
};
