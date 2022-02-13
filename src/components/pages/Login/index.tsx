import Grid from "@mui/material/Grid/Grid";
import { useLocation } from "react-router-dom";
import AppCard from "../../common/Card";
import Page from "../../common/Page";

interface Props {}

const Login = (props: Props) => {
  const router = useLocation();
  console.log("Locacion: ", router);
  return (
    <>
      <Page>
        <AppCard typeCard={"img"} className="sector3" height="92%">
          <Grid
            item={false}
            xs={12}
            sm
            sx={{
              marginTop: "95.01px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ color: "white" }}>login</p>
          </Grid>
        </AppCard>
      </Page>
    </>
  );
};

export default Login;
