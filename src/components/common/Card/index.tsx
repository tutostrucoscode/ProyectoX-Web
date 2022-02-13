import { Card, Grid, SxProps, Theme } from "@mui/material";
import { ReactChild } from "react";
import "../../../styles/styles.css";

interface Props {
  children: ReactChild[] | ReactChild;
  typeCard: string;
  colorCard?: string;
  sx?: SxProps<Theme> | undefined;
  className?: string;
  height?: string;
}

const AppCard = (props: Props) => {
  const typeCard = (type: string) => {
    switch (type) {
      case (type = "img"):
        return (
          <>
            <Grid item xs={12}>
              <Card
                className={props.className}
                sx={{
                  width: "100%",
                  height: props.height,
                  backgroundColor: "transparent",
                  margin: "0px 0px",
                  alignItems: "center",
                }}
              >
                <Grid
                  className="CardDefault"
                  item={false}
                  container
                  spacing={2}
                  sx={props.sx}
                >
                  {props.children}
                </Grid>
              </Card>
            </Grid>
          </>
        );
      case (type = "card"):
        return (
          <>
            <Grid item xs={12}>
              <Card
                sx={{
                  margin: "0px 0px",
                  alignItems: "center",
                  backgroundColor: props.colorCard,
                }}
              >
                <Grid
                  className="CardDefault"
                  item={false}
                  container
                  spacing={2}
                  sx={props.sx}
                >
                  {props.children}
                </Grid>
              </Card>
            </Grid>
          </>
        );
      case (type = "default"):
        return (
          <>
            <Grid item xs={12}>
              <Card
                sx={{
                  margin: "0px 0px",
                  alignItems: "center",
                  backgroundColor: props.colorCard,
                  boxShadow: "none",
                }}
              >
                <Grid
                  className="CardDefault"
                  item={false}
                  container
                  spacing={2}
                  sx={props.sx}
                >
                  {props.children}
                </Grid>
              </Card>
            </Grid>
          </>
        );
      default:
        break;
    }
  };
  return <>{typeCard(props.typeCard)}</>;
};

export default AppCard;
