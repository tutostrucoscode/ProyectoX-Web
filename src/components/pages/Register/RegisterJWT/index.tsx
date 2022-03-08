import {
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  FormControlLabel,
  Link,
  CircularProgress,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import useRefMounted from "../../../../hooks/useRefMounted";
import { registerUser } from "./RegisterUser";
import { useGetUserIp } from "../../../../services/ip.service";

function RegisterJWT() {
  const isMountedRef = useRefMounted();
  const { t }: { t: any } = useTranslation();
  const { ip } = useGetUserIp();
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        password: "",
        terms: false,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email(
            t(
              "El correo electrónico proporcionado debe ser una dirección de correo electrónico válida"
            )
          )
          .max(255)
          .required(t("El campo de correo electrónico es obligatorio")),
        name: Yup.string()
          .max(255)
          .required(t("El campo de nombre es obligatorio")),
        password: Yup.string()
          .min(8)
          .max(255)
          .required(t("El campo de contraseña es obligatorio")),
        terms: Yup.boolean().oneOf(
          [true],
          t("Debes aceptar nuestros términos y condiciones")
        ),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await registerUser(values.email, values.name, values.password, ip);
          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err: any) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
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
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            error={Boolean(touched.name && errors.name)}
            fullWidth
            margin="normal"
            helperText={touched.name && errors.name}
            label={t("Usuario")}
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            margin="normal"
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
            {t("Crea tu cuenta")}
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default RegisterJWT;
