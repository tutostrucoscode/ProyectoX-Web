import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Card,
  Link,
  Tooltip,
  Typography,
  Container,
  Alert,
  styled,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Scrollbar from "../../common/Scrollbar";

import Auth0 from "../../assets/logo/auth0.svg";
import FirebaseAuth from "../../assets/logo/firebase.svg";
import JWT from "../../assets/logo/jwt.svg";
import Amplify from "../../assets/logo/amplify.svg";
import LoginJWT from "./LoginJWT";

interface Props {}

const Content = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    width: 100%;
`
);

const MainContent = styled(Box)(
  () => `
  padding: 0 0 0 440px;
  width: 100%;
  display: flex;
  align-items: center;
`
);

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background: ${theme.colors.alpha.white[100]};
    width: 440px;
`
);

const SidebarContent = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing(6)};
`
);

const CardImg = styled(Card)(
  ({ theme }) => `
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid ${theme.colors.alpha.black[10]};
    transition: ${theme.transitions.create(["border"])};
    position: absolute;

    &:hover {
      border-color: ${theme.colors.primary.main};
    }
`
);

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(33)};
`
);

function Login() {
  //const { method } = useAuth() as any;
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Ingreso - ProyectoX</title>
      </Helmet>
      <Content>
        <SidebarWrapper
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Scrollbar>
            <SidebarContent>
              <Box mt={6}>
                <TypographyH1
                  variant="h1"
                  sx={{
                    mb: 7,
                  }}
                >
                  {t("ProyectoX")}
                </TypographyH1>
                <Box
                  sx={{
                    position: "relative",
                    width: 300,
                    height: 120,
                  }}
                >
                  <Tooltip arrow placement="top" title="Auth0">
                    <CardImg
                      sx={{
                        width: 80,
                        height: 80,
                        left: -20,
                        top: -40,
                      }}
                    >
                      <img width={40} alt="Auth0" src={Auth0} />
                    </CardImg>
                  </Tooltip>
                  <Tooltip arrow placement="top" title="Firebase">
                    <CardImg
                      sx={{
                        width: 90,
                        height: 90,
                        left: 70,
                      }}
                    >
                      <img width={50} alt="Firebase" src={FirebaseAuth} />
                    </CardImg>
                  </Tooltip>
                  <Tooltip arrow placement="top" title="JSON Web Token">
                    <CardImg
                      sx={{
                        width: 110,
                        height: 110,
                        top: -30,
                        left: 170,
                      }}
                    >
                      <img width={80} alt="JSON Web Token" src={JWT} />
                    </CardImg>
                  </Tooltip>
                  <Tooltip arrow placement="top" title="AWS Amplify">
                    <CardImg
                      sx={{
                        width: 70,
                        height: 70,
                        bottom: 0,
                        right: -55,
                      }}
                    >
                      <img width={50} alt="Amplify" src={Amplify} />
                    </CardImg>
                  </Tooltip>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    my: 3,
                  }}
                >
                  {t(
                    "Crea tu rol con un sin fin de opción, solo haga que fluya tu imaginación"
                  )}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t("Ya mirastes las cosas nuevas?")}
                </Typography>
                <Typography variant="subtitle1">
                  {t(
                    "Visita el sector de actualizaciones y mira los cambios que se han implementado en el servidor"
                  )}
                  .{" "}
                  <Link component={RouterLink} to="/docs">
                    Visita Ya.
                  </Link>
                </Typography>
              </Box>
            </SidebarContent>
          </Scrollbar>
        </SidebarWrapper>
        <MainContent>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
            maxWidth="sm"
          >
            <Card
              sx={{
                p: 4,
                my: 4,
              }}
            >
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1,
                  }}
                >
                  {t("Logueate")}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3,
                  }}
                >
                  {t(
                    "Complete los campos a continuación para iniciar sesión en su cuenta."
                  )}
                </Typography>
              </Box>
              <LoginJWT />
              <Box my={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t("¿Todavía no tienes una cuenta?")}
                </Typography>{" "}
                <Link component={RouterLink} to="/registro">
                  <b>Registrate aquí</b>
                </Link>
              </Box>
            </Card>
          </Container>
        </MainContent>
      </Content>
    </>
  );
}

export default Login;
