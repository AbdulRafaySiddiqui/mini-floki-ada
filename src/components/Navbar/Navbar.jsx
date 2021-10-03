import React from "react";
import { makeStyles } from "@mui/styles";
import Logo from "src/assets/images/logo/full.png";
import { Container, Typography, Link, Button , Popover} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { v4 as uuid } from "uuid";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: theme.palette.primary.dark,
  },
  navWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  navRight: {
    maxWidth: 700,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  linkWrapper: { position: "relative" },
  linkText: {
    fontFamily: theme.font.link,
    fontSize: 18,
    "&:hover  ~ #nav-drop": {
      display: "flex",
    },
  },
  linkText2: {
    fontFamily: theme.font.link,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 2,
  },
  arrow: {
    transform: "translateY(5px)",
  },
  dropDown: {
    display: "none",
    background: theme.palette.primary.dark,
    padding: "10px 20px",
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    top: "calc(100% + 0px)",
    transform: "translateX(-10px)",
    flexFlow: "column",
    height: "max-content",
    transition: "all 1s linear",
    whiteSpace: "pre",
    "&:hover": {
      display: "flex",
    },
  },
  menuBtn:{
    [theme.breakpoints.up("md")]: {
      display:"none"
    }
  },
  paper:{
    width: "calc(100%) !important",
    left:"0px !important",
    maxWidth: "100%"
  }
}));

const links = [
  {
    text: "About",
    href: "#",
    links: [
      {
        text: "Features",
        href: "#",
      },
      {
        text: "Tokenomics",
        href: "#",
      },
      {
        text: "Whitepaper",
        href: "#",
      },
    ],
  },
  {
    text: "Nft Marketplace",
    href: "#",
    links: [
      {
        text: "MiniDogeADA Nft",
        href: "#",
      },
      {
        text: "Marketplace (comming soon)",
        href: "#",
      },
    ],
  },
  {
    text: "Minigames",
    href: "#",
    links: [
      {
        text: "Doggy Run (comming soon)",
        href: "#",
      },
    ],
  },
  {
    text: "Charity",
    href: "#",
    links: [
      {
        text: "Donation",
        href: "#",
      },
      {
        text: "Charity",
        href: "#",
      },
    ],
  },
];

const Navbar = () => {
  const classes = useStyles();
const [open,setOpen] = React.useState(false)

  const handleClick = (event) => {
setOpen(true)
  };

  const handleClose = () => {
setOpen(false)
  };


  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{ height: "100%" }}>
        <div className={classes.navWrapper}>
          <img src={Logo} alt="logo" height="50px" />

          <div className={classes.navRight}>
            {links.map((item) => (
              <NavLink key={uuid()} {...item} />
            ))}
            <Button color="secondary" variant="bold">
              ADA Vault
            </Button>
          </div>
          <Button className={classes.menuBtn} onClick={handleClick}>
            <MenuIcon />
          </Button>
          <Popover
            open={open}
           
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 80, left: 0 }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{
              className:classes.paper
            }}
          >
            <div style={{paddingLeft:20,paddingRight:20,paddingTop:20,}}>

            {links.map((item) => (
              <NavLink key={uuid()} {...item} mobile/>
            ))}</div>
          </Popover>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

const NavLink = ({ text, href, links,mobile }) => {
  const classes = useStyles();

  return (
    <div className={classes.linkWrapper}>
      <Link href={href} className={classes.linkText} style={mobile&& {height:50,display:"block"}}>
        {text} {links && <KeyboardArrowDownIcon className={classes.arrow} />}
      </Link>
      {links && (
        <div id="nav-drop" className={classes.dropDown} style={mobile&& {position:"relative"}}>
          {links.map((item) => (
            <Link key={uuid()} href={item.href} className={classes.linkText2} style={mobile&& {height:40}}>
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
