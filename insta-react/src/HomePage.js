import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import {PostVerticalStepper} from "./components/PostVerticalStepper";


function HomePage() {


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
    },

    chat: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
    },

    bottom: {
      display: "flex",
      flexDirection: "row",
    },

    text: {
      margin: "8px",
      flexGrow: 1,
    },

    send: {
      margin: "8px",
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PostVerticalStepper />
    </Box>
  );
}

export { HomePage };
