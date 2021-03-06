import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import React, { useState } from "react";
import { AdListing } from "../../../components/ad/AdListing";
import { Layout } from "../../../components/Layout";
import { useUserAdsQuery } from "../../../generated/graphql";
import {
  DARKER_REGULAR_BROWN,
  LIGHTER_REGULAR_BROWN,
  LIGHTEST_REGULAR_BROWN,
} from "../../../utils/colors";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import { formatProfileLink } from "../../../utils/formatLinks";
import { isServer } from "../../../utils/isServer";
import { USERS_ADS_LABEL } from "../../../utils/strings";
import { useGetIdFromUrl } from "../../../utils/useGetIdFromUrl";

const UserAds: React.FC<{}> = () => {
  const [page, setPage] = useState(0);
  const intId = useGetIdFromUrl();
  const [{ data }] = useUserAdsQuery({
    variables: { userId: intId, limit: 10, offset: 10 * page },
    pause: isServer() || intId === -1,
  });

  return (
    <Layout variant="regular">
      {data ? (
        <Box>
          <HStack>
            <NextLink href={formatProfileLink(intId)}>
              <Link style={{ textDecoration: "none" }}>
                <Heading size="xl" color={DARKER_REGULAR_BROWN}>
                  {data.userAds.owner.username}
                </Heading>
              </Link>
            </NextLink>
            <Heading size="xl" color={LIGHTER_REGULAR_BROWN}>
              {USERS_ADS_LABEL}
            </Heading>
          </HStack>
          {data.userAds.ads.map((ad) => (
            <Box my={2}>
              <AdListing ad={ad} />
            </Box>
          ))}

          <Flex justify="space-between" my={10} align="center">
            <Flex w={"40%"} justify="flex-start">
              <Button
                color={"white"}
                bgColor={LIGHTER_REGULAR_BROWN}
                _hover={{ bgColor: LIGHTEST_REGULAR_BROWN }}
                display={page !== 0 ? "block" : "none"}
                onClick={() => setPage(page - 1)}
              >
                Previous page
              </Button>
            </Flex>
            <Box w={"20%"} textAlign="center">
              <Text>Page {page + 1}</Text>
            </Box>

            <Flex w={"40%"} justify="flex-end">
              <Button
                bgColor={LIGHTER_REGULAR_BROWN}
                _hover={{ bgColor: LIGHTEST_REGULAR_BROWN }}
                color={"white"}
                display={data?.userAds.hasMore ? "block" : "none"}
                onClick={() => setPage(page + 1)}
              >
                Next page
              </Button>
            </Flex>
          </Flex>
        </Box>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(UserAds);
