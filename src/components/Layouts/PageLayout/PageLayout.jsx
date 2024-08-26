import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

export default function PageLayout({ children }) {
  const { pathName } = useLocation();

  return (
    <Flex>
      {/* left part */}
      {pathName !== "/auth" ? (
        <Box width={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* content */}
      <Box
        flex={1}
        width={{ base: 'calc("100% - 70px")', md: 'calc("100% - 240px")' }}
      >
        {children}
      </Box>
    </Flex>
  );
}
