import * as Yup from "yup";
import type { FC } from "react";
import { Formik } from "formik";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Checkbox,
  Typography,
  Link,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import useRefMounted from "../../../../hooks/useRefMounted";

const LoginJWT: FC = () => {
  //const { login } = useAuth() as any;
  const isMountedRef = useRefMounted();
  const { t }: { t: any } = useTranslation();

  return (
    <Formik
      initialValues={{
        email: "demo@example.com",
        password: "TokyoPass1@",
        terms: true,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email(t("The email provided should be a valid email address"))
          .max(255)
          .required(t("The email field is required")),
        password: Yup.string()
          .max(255)
          .required(t("The password field is required")),
        terms: Yup.boolean().oneOf(
          [true],
          t("You must agree to our terms and conditions")
        ),
      })}
      onSubmit={async (
        values,
        { setErrors, setStatus, setSubmitting }
      ): Promise<void> => {
        try {
          await console.log(values.email, values.password);

          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err:any) {
          console.error(err);
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }): JSX.Element => (
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            margin="normal"
            autoFocus
            helperText={touched.email && errors.email}
            label={t("correo electrónico")}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            margin="normal"
            helperText={touched.password && errors.password}
            label={t("Contraseña")}
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.terms}
                  name="terms"
                  color="primary"
                  onChange={handleChange}
                />
              }
              label={
                <>
                  <Typography variant="body2">
                    {t("Acepto los")}{" "}
                    <Link component="a" href="#">
                      {t("términos y condiciones")}
                    </Link>
                    .
                  </Typography>
                </>
              }
            />
            <Link component={RouterLink} to="/account/recover-password">
              <b>{t("¿Contraseña perdida?")}</b>
            </Link>
          </Box>

          {Boolean(touched.terms && errors.terms) && (
            <FormHelperText error>{errors.terms}</FormHelperText>
          )}

          <Button
            sx={{
              mt: 3,
            }}
            color="primary"
            startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
            disabled={isSubmitting}
            type="submit"
            fullWidth
            size="large"
            variant="contained"
          >
            {t("Registrarse")}
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default LoginJWT;
