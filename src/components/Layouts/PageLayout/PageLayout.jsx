import { Box, Flex, Spinner } from "@chakra-ui/react";
import Sidebar from "../../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import Navbar from "../../NavBar/NavBar";
import { useAuthState } from "react-firebase-hooks/auth";

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavBar = !user && !loading && pathname !== "/auth";

  if (!user && loading) {
    return <PageLayoutSpinner />;
  }
  return (
    <Flex flexDir={canRenderNavBar ? "column" : "row"}>
      {/* left part */}
      {canRenderSidebar ? (
        <Box width={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {canRenderNavBar ? <Navbar /> : null}
      <Box
        flex={1}
        width={{ base: 'calc("100% - 70px")', md: 'calc("100% - 240px")' }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
}

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};
