import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box style={{height: "100vh", padding: "20px"}}>
          <Heading>Oops!</Heading>
          <Text>
            {isRouteErrorResponse(error)
              ? error.data
              : "An unexpected error occured."}
          </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
