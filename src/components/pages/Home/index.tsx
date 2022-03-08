import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography";
import "../../../styles/styles.css";
import Button from "@mui/material/Button/Button";
import Container from "@mui/material/Container/Container";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { setModal } from "../../../redux/slice/modal";
import Video from "../../common/Modal/Video";
import Page from "../../common/Page";
import AppCard from "../../common/Card";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Card from "@mui/material/Card/Card";
import CardActions from "@mui/material/CardActions/CardActions";
import bgDiscord from "../../assets/img/bgDiscord.jpg";
interface Props {}

const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleModalOpen = () => dispatch(setModal(true));

  return (
    <>
      <Page>
        <Container>
          <Grid container spacing={2}>
            {/*Secto 1*/}
            <AppCard typeCard={"img"} className="sector1">
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
                <Typography
                  variant="h4"
                  color="#FFFFFF"
                  sx={{
                    textAlign: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: "210px",
                    height: "55px",
                    zIndex: 3,
                    position: "relative",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontFamily: "Akrobat",
                    fontSize: "46px",
                  }}
                >
                  PROYECTO X
                </Typography>
                <Typography
                  variant="h4"
                  color="#FFFFFF"
                  sx={{
                    textAlign: "center",
                    alignContent: "center",
                    width: "179px",
                    height: "29px",
                    zIndex: 3,
                    position: "relative",
                    fontWeight: "300",
                    fontStyle: "normal",
                    fontFamily: "Akrobat",
                    fontSize: "24px",
                  }}
                >
                  EL ROL NUNCA PARA!
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  marginTop: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    zIndex: 3,
                    position: "relative",
                    padding: "0px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "143px",
                    height: "44px",
                    background:
                      "linear-gradient(180deg, #4FBDBA 0%, #35858B 100%)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "6px",

                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontFamily: "Akrobat",
                    fontSize: "18px",
                  }}
                >
                  Registrate
                </Button>
                <div
                  style={{ marginLeft: "17.5px", marginRight: "17.5px" }}
                ></div>
                <Button
                  variant="contained"
                  sx={{
                    zIndex: 3,
                    position: "relative",
                    padding: "0px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "143px",
                    height: "44px",
                    background: "#212121",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontFamily: "Akrobat",
                    fontSize: "18px",
                  }}
                >
                  Logueate
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  marginTop: "47px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h4"
                  color="#FFFFFF"
                  sx={{
                    alignContent: "center",
                    alignItems: "center",

                    width: "153px",
                    height: "22px",
                    zIndex: 3,
                    position: "relative",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontFamily: "Akrobat",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  Jugadores Conectados
                </Typography>
                <Typography
                  variant="h4"
                  color="#FFFFFF"
                  sx={{
                    alignContent: "center",
                    alignItems: "center",
                    width: "24px",
                    height: "22px",
                    zIndex: 3,
                    position: "relative",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontFamily: "Akrobat",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  700
                </Typography>
              </Grid>
            </AppCard>

            {/*Secto 2*/}
            <AppCard
              typeCard={"default"}
              colorCard={"#072227"}
              sx={{
                marginTop: "500px",
                flexDirection: "column",
                padding: "24px 24px",
              }}
            >
              <Grid
                item={false}
                container
                xs={12}
                sm
                sx={{
                  flexDirection: "column",
                  transform: "matrix(1, -0.05, 0.1, 1, 0, 0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "112px",
                }}
              >
                <Typography
                  color="#FFFFFF"
                  sx={{
                    textAlign: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: "322px",
                    height: "36px",
                    zIndex: 3,
                    position: "relative",
                    fontWeight: "300",
                    fontStyle: "normal",
                    fontFamily: "Akrobat",
                    fontSize: "24px",
                    display: "inline",
                  }}
                >
                  CREA TU HISTORIA CON
                </Typography>
                <Typography
                  variant="h4"
                  color="#4FBDBA"
                  sx={{
                    textAlign: "center",
                    alignContent: "center",
                    width: "179px",
                    height: "29px",
                    zIndex: 3,
                    position: "relative",
                    fontWeight: "700",
                    fontStyle: "normal",
                    fontFamily: "Akrobat",
                    fontSize: "30px",
                    display: "inline",
                  }}
                >
                  NOSOTROS
                </Typography>
              </Grid>

              <Grid
                item={false}
                container
                xs={12}
                sm
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="video1">
                  <div className="videoBoton1" onClick={handleModalOpen}>
                    <div className="videoBoton2"></div>
                  </div>
                </div>
              </Grid>
            </AppCard>

            {/*Secto 3*/}
            <AppCard
              typeCard={"default"}
              colorCard={"#072227"}
              sx={{
                marginTop: "100px",
                marginBottom: "100px",
                padding: "24px 24px",
              }}
            >
              <Grid
                item={false}
                xs={4}
                sm
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div>
                  <div className="caja2">PASO 1</div>
                  <div className="caja1">
                    <div
                      style={{
                        display: "flex",
                        fontSize: "24px",
                        fontFamily: "Akrobat",
                        fontWeight: "bold",
                        lineHeight: "29px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        marginTop: "10px",
                      }}
                    >
                      CREATE UNA CUENTA
                    </div>
                    <Button
                      variant="contained"
                      sx={{
                        zIndex: 3,
                        position: "relative",
                        padding: "0px 16px",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "200.85px",
                        height: "44.1px",
                        background:
                          "linear-gradient(180deg, #072227 0%, #212121 100%)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        fontStyle: "normal",
                        fontFamily: "Akrobat",
                        fontSize: "18px",
                      }}
                    >
                      Registrate
                    </Button>
                    <div
                      style={{
                        display: "flex",
                        fontSize: "12px",
                        fontFamily: "Akrobat",
                        fontWeight: "600",
                        lineHeight: "14px",
                        textAlign: "center",
                        marginBottom: "10px",
                      }}
                    >
                      RECORDAR TENER UNA LICENCIA ORIGINAL <br />
                      DE GRAND THEFT AUTO V
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid
                item={false}
                xs={4}
                sm
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    transform: "matrix(1, -0.05, 0.1, 1, 0, 0);",
                    display: "flex",
                    fontSize: "36px",
                    fontWeight: "bold",
                    fontFamily: "Akrobat",
                    color: "#FFFFFF",
                  }}
                >
                  ¿COMO INICIAR?
                </Typography>
              </Grid>

              <Grid
                item={false}
                xs={4}
                sm
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div>
                  <div className="caja2">PASO 2</div>
                  <div className="caja1">
                    <div
                      style={{
                        display: "flex",
                        fontSize: "24px",
                        fontFamily: "Akrobat",
                        fontWeight: "bold",
                        lineHeight: "29px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        marginTop: "10px",
                      }}
                    >
                      DESCARGATE EL LAUNCHER
                    </div>
                    <Button
                      variant="contained"
                      sx={{
                        zIndex: 3,
                        position: "relative",
                        padding: "0px 16px",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "200.85px",
                        height: "44.1px",
                        background:
                          "linear-gradient(180deg, #072227 0%, #212121 100%)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        fontStyle: "normal",
                        fontFamily: "Akrobat",
                        fontSize: "18px",
                      }}
                    >
                      Descarga ya!
                    </Button>
                    <div style={{ display: "flex" }}></div>
                  </div>
                </div>
              </Grid>
            </AppCard>

            {/*Secto 4*/}
            <AppCard
              typeCard={"default"}
              colorCard={"#072227"}
              sx={{
                marginTop: "100px",
                marginBottom: "100px",
                padding: "24px 24px",
              }}
            >
              <Grid
                item={false}
                container
                xs={12}
                sm
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "112px",
                }}
              >
                <Typography
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
                    fontSize: "22px",
                    display: "inline",
                  }}
                >
                  NUESTROS CANALES DE
                </Typography>
                <Typography
                  variant="h4"
                  color="#4FBDBA"
                  sx={{
                    textAlign: "center",
                    alignContent: "center",
                    width: "150px",
                    zIndex: 3,
                    position: "relative",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontFamily: "Akrobat",
                    fontSize: "22px",
                    display: "inline",
                  }}
                >
                  INFORMACION
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  marginTop: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card sx={{ maxWidth: 210, maxHeight: 189 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={bgDiscord}
                  />

                  <CardActions
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      size="small"
                      sx={{ fontFamily: "Akrobat", fontSize: "18px" }}
                    >
                      Ingresar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </AppCard>

            {/*Footer*/}
            <AppCard
              typeCard={"img"}
              className="sector2"
              sx={{ marginTop: "10px", padding: "24px 24px" }}
            >
              <Grid
                item={false}
                xs={12}
                sm
                sx={{
                  marginTop: "150.01px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  color="#FFFFFF"
                  sx={{
                    textAlign: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: "372px",
                    height: "22px",
                    zIndex: 3,
                    position: "relative",
                    fontWeight: "500",
                    fontStyle: "normal",
                    fontFamily: "Akrobat",
                    fontSize: "18px",
                  }}
                >
                  TODOS LOS DERECHOS RESERVADOS PARA PROYECTO X ©
                </Typography>
                <Typography
                  variant="h4"
                  color="#FFFFFF"
                  sx={{
                    textAlign: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: "372px",
                    height: "22px",
                    zIndex: 3,
                    position: "relative",
                    fontWeight: "500",
                    fontStyle: "normal",
                    fontFamily: "Akrobat",
                    fontSize: "18px",
                  }}
                >
                  2022-2022
                </Typography>
              </Grid>
            </AppCard>
          </Grid>
          {/*Modales*/}
          <Video />
        </Container>
      </Page>
    </>
  );
};

export default Home;
