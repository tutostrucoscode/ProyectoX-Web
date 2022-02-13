import { Box, Container, CssBaseline } from "@mui/material";
import { ReactChild } from "react";
import { ContainerMain } from "../../../styles/container";
import BarApp from "../AppBar";

interface Props {
  children: ReactChild[] | ReactChild;
}

const Page = (props: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CssBaseline />
        <BarApp />
        <ContainerMain>
          <Box sx={{ display: "flex" }}>
            <Container>{props.children}</Container>
          </Box>
        </ContainerMain>
      </Box>
    </>
  );
};

export default Page;
