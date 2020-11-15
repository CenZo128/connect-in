import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Paper,
  CardMedia,
  makeStyles
} from '@material-ui/core'
import {
  BusinessRounded,
  BusinessCenterRounded,
  EmailRounded,
  HomeRounded, LibraryBooksRounded
} from '@material-ui/icons'

const theme = {
  background: 'linear-gradient(to right, #4dabf5 10%, #1769aa 100%)',
};

export default function Home() {

  return (
    <div>
      <Head>
        <title>Connect In</title>
      </Head>

      <Box className={[styles.containerFluid, styles.primaryGrad]}  >
        <Container>
          <AppBar position="static" className={styles.mainAppBar}>
            <Toolbar>
              <div className={styles.titleAppBar}>
                <h1 >Connect In</h1>

              </div>
              <div className={styles.menuAppBar}>
                <div className={styles.leftMenuApp}>

                  <Button startIcon={<HomeRounded />} variant="text" color="inherit">
                    <Link href='/'>home</Link>
                  </Button>
                  <Button startIcon={<BusinessRounded />} variant="text" color="inherit">
                    <Link href='/home'>Companies</Link>
                  </Button>
                  <Button startIcon={<BusinessCenterRounded />} variant="text" color="inherit">Jobs</Button>
                  <Button startIcon={<EmailRounded />} variant="text" color="inherit">Contact</Button>
                  <Button startIcon={<LibraryBooksRounded />} variant="text" color="inherit">Art</Button>
                </div>
                <div className={styles.loginMenuApp}>
                  <Button variant="outlined" color="inherit">Login</Button>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          {/* <h1 color="primary.main">In the box</h1> */}
          {/* <p>Find in-depth information about Next.js features and API.</p> */}
        </Container>
        <Container>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={5} className={styles.leftInfo}>
              <CardMedia image="/assets/working.png" />
              <h1>Great!!</h1>
              <h2>Let's find a better job with just 1 click ahead</h2>
            </Grid>
            <Grid item xs={7} className={{}}>
              <Paper className={styles.rightInfo} elevation={2}>
                <Grid container
            direction="row"
            justify="center"
            alignItems="center">
          
                <Grid item xs={12}> 
                <h3 style={{marginBottom:'0.5rem'}} >It's the easiest way to find 2</h3>
                </Grid>   
                <Grid item xs={6}>Grid 1</Grid>   
                <Grid item xs={6}>Grid 1</Grid>   
                <Grid item xs={6}>Grid 1</Grid>   
                <Grid item xs={6}>Grid 1</Grid>

                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={styles.containerFluid}>

      </Box>
    </div>

  )
  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <main className={styles.main}>
  //     <Link href="/home">HOME </Link>
  //       <h1 className={styles.title}>
  //         Learn <a href="https://nextjs.org">Next.js!</a>
  //       </h1>

  //       <p className={styles.description}>
  //         Get started by editing{' '}
  //         <code className={styles.code}>pages/index.js</code>
  //       </p>

  //       <div className={styles.grid}>
  //         <a href="https://nextjs.org/docs" className={styles.card}>
  //           <h3>Documentation &rarr;</h3>
  //           <p>Find in-depth information about Next.js features and API.</p>
  //         </a>

  //         <a href="https://nextjs.org/learn" className={styles.card}>
  //           <h3>Learn &rarr;</h3>
  //           <p>Learn about Next.js in an interactive course with quizzes!</p>
  //         </a>

  //         <a
  //           href="https://github.com/vercel/next.js/tree/master/examples"
  //           className={styles.card}
  //         >
  //           <h3>Examples &rarr;</h3>
  //           <p>Discover and deploy boilerplate example Next.js projects.</p>
  //         </a>

  //         <a
  //           href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //           className={styles.card}
  //         >
  //           <h3>Deploy &rarr;</h3>
  //           <p>
  //             Instantly deploy your Next.js site to a public URL with Vercel.
  //           </p>
  //         </a>
  //       </div>
  //     </main>

  //     <footer className={styles.footer}>
  //       <a
  //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Powered by{' '}
  //         <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
  //       </a>
  //     </footer>
  //   </div>
  // )
}
