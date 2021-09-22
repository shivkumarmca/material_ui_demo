import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, IconButton } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
// import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
// import MaterialButton from './MaterialButton';

// Moved Styles to Separate File
import useStyles from './styles';
const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h5">Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    {/* <Container maxWidth="sm" style={{ marginTop: '100px'}}> */}
                    <Container maxWidth="sm">
                        <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h6" color="textSecondary" align="center" paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magni quasi quam natus! Quas ratione esse tempora rerum ab iste similique id et dolore, vitae natus. Earum ab praesentium nobis!
                        </Typography>
                        {/* <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup> */}

                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See All Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Another Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image Title" />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" gutterBottom>
                                        Heading
                                    </Typography>
                                    <Typography>
                                        You can use this section to desribe anything!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button
                                        variant="outlined"
                                        size="small"
                                        color="primary">
                                        View
                                    </Button> */}
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        className={classes.button}
                                        startIcon={<VisibilityIcon />}

                                    >
                                        View
                                    </Button>


                                    <Button
                                        variant="contained"

                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>



                                    <IconButton>
                                        <VisibilityIcon color="primary" fontSize="small" />
                                    </IconButton>

                                    <IconButton >

                                        <DeleteIcon color="secondary" fontSize="small" />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image Title" />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" gutterBottom>
                                        Heading
                                    </Typography>
                                    <Typography>
                                        You can use this section to desribe anything!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                        className={classes.button}
                                        startIcon={<VisibilityIcon />}
                                    >
                                        View
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>


                        <Grid item>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image Title" />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" gutterBottom>
                                        Heading
                                    </Typography>
                                    <Typography>
                                        You can use this section to desribe anything!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton>
                                        <VisibilityIcon color="primary" fontSize="small" />
                                    </IconButton>

                                    <IconButton >
                                        <DeleteIcon color="secondary" fontSize="small" />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default App;
