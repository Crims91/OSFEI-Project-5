import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, width: `100%` }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#9c27b0",
            height: "60px",
          }}
        >
          <Box>
            <Link to="/">
              <Button
                sx={{
                  color: `white`,
                  fontSize: `1.1rem`,
                }}
              >
                <p>My Book Store</p>
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to="/">
              <Button>
                <AutoStoriesIcon sx={{ color: `white`, fontSize: "2.5rem" }} />
              </Button>
            </Link>
          </Box>

          <Box>
            <Link to="/">
              <Button
                sx={{
                  color: `white`,
                  "&:hover": { backgroundColor: "#841e95" },
                }}
              >
                <p>Home</p>
              </Button>
            </Link>
            <Link to="/favorite">
              <Button
                sx={{
                  color: `white`,
                  "&:hover": { backgroundColor: "#841e95" },
                }}
              >
                <p>Favorites</p>
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
