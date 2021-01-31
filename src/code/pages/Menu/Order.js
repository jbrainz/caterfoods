import React, { useState, useContext } from "react"
import { withStyles } from "@material-ui/core/styles"
import {
  Button,
  TextField,
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  IconButton,
  Typography,
  makeStyles,
  Select,
  FormControl,
  MenuItem,
  Grid,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { AppContext } from "../../Components/context/ContextState"

const menus = [
  {
    index: 1,
    type: "Sauce",
    title: "Curry sauce",
  },
  {
    index: 2,
    type: "Sauce",
    title: "Egg sauce",
  },
  {
    index: 4,
    type: "Sauce",
    title: "Meatballs sauce",
  },
  {
    index: 5,
    type: "Soup",
    title: "Eforiro{spinach soup]",
  },
  {
    index: 6,
    type: "Soup",
    title: "Banga [palm nuts extracts]",
  },
  {
    index: 7,
    type: "Soup",
    title: "Egusi soup [melon soup]",
  },
  {
    index: 8,
    type: "Soup",
    title: "Ewedu and gbegiri",
  },
  {
    index: 9,
    type: "Soup",
    title: "Ogbono soup (Draw Soup)",
  },
  {
    index: 10,
    type: "Soup",
    title: "Afang",
  },
  {
    index: 11,
    type: "Soup",
    title: "Okro",
  },
  {
    index: 12,
    type: "Soup",
    title: "Bitterleaf",
  },
  {
    index: 13,
    type: "Hot Spot Special",
    title: "Goat Peppersoup",
  },
  {
    index: 14,
    type: "Hot Spot Special",
    title: "Catfish Pepersoup",
  },
  {
    index: 15,
    type: "Hot Spot Special",
    title: "Tilapia Paper Mixed",
  },
  {
    index: 16,
    type: "Hot Spot Special",
    title: "Peppered snail",
  },
  {
    index: 17,
    type: "Hot Spot Special",
    title: "Assorted meat pepper",
  },
  {
    index: 18,
    type: "Hot Spot Special",
    title: "Chicken Mixed pepper",
  },
  {
    index: 19,
    type: "Hot Spot Special",
    title: "Asun",
  },
  {
    index: 20,
    type: "Hot Spot Special",
    title: "Nkwobi",
  },
  {
    index: 22,
    type: "Hot Spot Special",
    title: "Peppered Turkey",
  },
  {
    index: 24,
    type: "Yam Meals",
    title: "Boiled yam",
  },
  {
    index: 25,
    type: "Yam Meals",
    title: "Yamarita",
  },
  {
    index: 26,
    type: "Yam Meals",
    title: "Crispy Fried yam",
  },
  {
    index: 27,
    type: "Yam Meals",
    title: "Wedges potatoes",
  },
  {
    index: 28,
    type: "Yam Meals",
    title: "Yam pottage [ASARO]",
  },
  {
    index: 29,
    type: "Rice Meals",
    title: "Jolof Rice",
  },
  {
    index: 30,
    type: "Rice Meals",
    title: "Fried Rice",
  },
  {
    index: 31,
    type: "Rice Meals",
    title: "Coconout Rice",
  },
  {
    index: 32,
    type: "Rice Meals",
    title: "Chineese Rice",
  },
  {
    index: 33,
    type: "Breakfast",
    title: "Akara",
  },
  {
    index: 34,
    type: "Breakfast",
    title: "Moi Moi",
  },
  {
    index: 35,
    type: "Breakfast",
    title: "Yam and egg sauce",
  },
  {
    index: 36,
    type: "Breakfast",
    title: "Omelet",
  },
  {
    index: 37,
    type: "Breakfast",
    title: "Cereal",
  },
]
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputs: {
    marginBottom: "2em",
    marginLeft: "3em",
  },
  select: {
    width: "10em",
  },
  selectC: {
    marginLeft: "3em",
    width: "15em",
  },
  main: {
    backgroundColor: "#fff",
  },
}))

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

//REgex!
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

export default function CustomizedDialogs() {
  const { open, handleClose, item } = useContext(AppContext)
  const classes = useStyles()
  const [details, setDetails] = useState({
    email: "",
    address: "",
    phone: "",
    disc: "",
    select: "",
  })
  const [er, setEr] = useState(false)

  const { email, address, phone, disc, select } = details
  const onChange = (e) =>
    setDetails({ ...details, [e.target.name]: e.target.value })

  const showError = (
    <Typography style={{ color: "red", marginLeft: "1em" }}>{er}</Typography>
  )

  const onSubmit = (e) => {
    e.preventDefault()
    setEr("")
    if (email === "" || select === "" || phone === "" || address === "") {
      setEr("All Fields Are Required!", "danger")
    } else if (!emailRegex.test(email)) {
      setEr("Invalid Email")
    } else if (!phoneRegex.test(phone)) {
      setEr("Invalid Phone")
    } else {
      console.log(email, address, phone, select)
    }
    const newWindow = window.open(
      `//api.whatsapp.com/send?phone=+2348139714746&text=${phone}, ${select}, ${address}`,
      "_blank",
      "noopener,noreferrer",
    )
    if (newWindow) newWindow.opener = null
  }

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        open={open}
        className={classes.main}
      >
        <DialogTitle id="form-dialog-title" onClose={handleClose}>
          Order
        </DialogTitle>
        {showError}
        <DialogContent className={classes.content} dividers>
          <FormControl className={classes.formControl}>
            <Grid container justify="space-between" direction="column">
              <Grid
                container
                justify="space-between"
                direction="row"
                alignItems="center"
              >
                <Grid item className={classes.inputs}>
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    required
                    name="email"
                    label="Email"
                    value={email}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item className={classes.inputs}>
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    required
                    label="Phone"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item className={classes.inputs}>
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    label="Address"
                    name="address"
                    required
                    value={address}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item className={classes.inputs}>
                  <TextField
                    variant="outlined"
                    multiline
                    id="outlined-basic"
                    name="disc"
                    label="others please specify"
                    value={disc}
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
              <Grid container className={classes.selectC}>
                <Grid item>
                  <Typography>select meal</Typography>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={select}
                    name="select"
                    className={classes.select}
                    onChange={onChange}
                  >
                    {menus
                      .filter((d) => d.type === item)
                      .map(({ title, index }) => (
                        <MenuItem value={index}>{title}</MenuItem>
                      ))}
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            autoFocus
            onClick={onSubmit}
            color="secondary"
          >
            Order
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
