import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { MenuItem } from "./MenuItem";
import { MainCategories, MainCategory } from "./MenuRoutes";

export const MenuLinks: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      mb={{ base: 2, md: 0 }}
      ml="auto"
      mr="auto"
    >
      <Stack
        spacing={{ base: 0, md: 4 }}
        align="left"
        justify={{ base: "flex-start", md: "flex-end" }}
        direction={{ base: "column", md: "row" }}
        // height={{ base: isOpen ? "auto" : "0px", md: "auto" }}
        // opacity={{ base: isOpen ? null : "0", md: null }}
        // transition={{ base: "all 0.1s linear", md: "none" }}
      >
        {MainCategories.map((mc) => (
          <MenuItem category={mc as MainCategory} />
        ))}
      </Stack>
    </Box>
  );
};
