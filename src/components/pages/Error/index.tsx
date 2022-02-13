import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import AppCard from "../../common/Card";
import Page from "../../common/Page";
import { red } from "@mui/material/colors";
import "../../../styles/styles.css";

interface Props {}

const Error = (props: Props) => {
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
            <ErrorIcon sx={{ color: red[700], fontSize: 100 }} />
            <Typography
              variant="h4"
              color="#FFFFFF"
              sx={{
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                zIndex: 3,
                position: "relative",
                fontWeight: "bold",
                fontStyle: "normal",
                fontFamily: "Akrobat",
                fontSize: "46px",
              }}
            >
              Error Detectado
            </Typography>
            <Typography
              variant="h4"
              color="#FFFFFF"
              sx={{
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                zIndex: 3,
                position: "relative",
                fontWeight: "bold",
                fontStyle: "normal",
                fontFamily: "Akrobat",
                fontSize: "46px",
              }}
            >
              Por favor comunicarse con el Staff.
            </Typography>
          </Grid>
        </AppCard>
      </Page>
    </>
  );
};

export default Error;
