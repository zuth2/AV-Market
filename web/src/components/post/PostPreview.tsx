import { Box, Flex, Heading, Icon, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { MdMail } from "react-icons/md";
import {
  useMeFullQuery,
  useMePreviewQuery,
  useMeQuery,
} from "../../generated/graphql";
import { REGULAR_BROWN } from "../../utils/colors";
import { FINALIZE_LABEL, PRICE_LABEL } from "../../utils/strings";
import { AdListing } from "../ad/AdListing";

interface PostPreviewProps {
  values: {
    title: string;
    price: string;
    desc: string;
    images: any[];
  };
  details: {
    main: string;
    sub: string;
    wear: string;
  };
}

export const PostPreview: React.FC<PostPreviewProps> = ({
  values: { title, price, images },
  details: { wear },
}) => {
  const [{ data, fetching }] = useMePreviewQuery();
  return (
    <Box>
      <Heading my={4} size="md">
        {FINALIZE_LABEL}
      </Heading>

      {!fetching && data.me ? (
        <AdListing
          ad={{
            owner: data.me,
            id: 0,
            title: title,
            price: parseInt(price),
            createdAt: "2012.12.21.",
            updatedAt: "2012.12.21",
            wear: wear,
          }}
          thumbPreview={images[0]}
        />
      ) : null}
    </Box>
  );
};