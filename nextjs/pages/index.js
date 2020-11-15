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
  makeStyles
} from '@material-ui/core'

const theme = {
  background: 'linear-gradient(to right, #4dabf5 10%, #1769aa 100%)',
};

export default function Home() {

  return (
    <div>
      <Head>
        <title>Connect In</title>
      </Head>

      <Box className={styles.containerFluid} style={theme}>
        <Container>
          <div className={styles.divAppBar}>
            <AppBar position="static" className={styles.mainAppBar}>
              <Toolbar>
                <h1 className={styles.titleAppBar}>Connect In</h1>
                <div>
                  <Button variant="text" color="inherit">Companies</Button>
                  <Button variant="text" color="inherit">Jobs</Button>
                  <Button variant="text" color="inherit">Contact</Button>
                  <Button variant="outlined" color="inherit">Login</Button>
                </div>
              </Toolbar>
            </AppBar>
          </div>
          {/* <h1 color="primary.main">In the box</h1> */}
          {/* <p>Find in-depth information about Next.js features and API.</p> */}
        </Container>
        <Container>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={5}>
              Column 1
            </Grid>
            <Grid item xs={7}>
              <Paper>Column 2</Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>

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
