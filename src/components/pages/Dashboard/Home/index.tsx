import { Helmet } from "react-helmet-async";
import { Grid } from '@mui/material';
import PageTitleWrapper from "../../../common/PageTitleWrapper";
import PageHeader from "./PageHeader";
import Footer from "../../../common/Footer";
import Block1 from '../../../common/Block/Statistics/Block3';
import Block2 from '../../../common/Block/ListsLarge/Block8';
import Block3 from '../../../common/Block/Reports/Block3';
import Block4 from '../../../common/Block/Reports/Block4';
import Block5 from '../../../common/Block/Reports/Block5';
import Block6 from '../../../common/Block/Reports/Block6';
import Block7 from '../../../common/Block/Reports/Block7';
import Block8 from '../../../common/Block/Reports/Block8';
import Block9 from '../../../common/Block/Reports/Block9';
import Block10 from '../../../common/Block/ListsSmall/Block7';
import Block11 from '../../../common/Block/ListsSmall/Block8';
import Block12 from '../../../common/Block/Reports/Block12';
import Block13 from '../../../common/Block/Reports/Block13';

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <Helmet>
        <title>Reports Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Grid
        sx={{
          px: 4,
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <Block1 />
        </Grid>
        <Grid item md={7} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <Block2 />
            </Grid>
            <Grid item xs={12}>
              <Block4 />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5} xs={12}>
          <Block3 />
        </Grid>
        <Grid item xs={12}>
          <Block5 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block6 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block7 />
        </Grid>
        <Grid item md={5} xs={12}>
          <Block8 />
        </Grid>
        <Grid item md={7} xs={12}>
          <Block9 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block10 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block11 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block12 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block13 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
