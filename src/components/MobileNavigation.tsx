import { useState } from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

import { IconButton } from "./ui";
import { MenuIcon } from "./icons";
import { menuItems } from "./DesktopNavigation";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNavToggle = () => setIsOpen(() => !isOpen);
  return (
    <>
      <Drawer open={isOpen}>
        <StyledList>
          {menuItems.map((item, idx) => {
            return (
              <li key={`${item.url}_${idx}`}>
                <Link to={item.url} onClick={openNavToggle}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </StyledList>
      </Drawer>
      <IconButtonWrapper onClick={openNavToggle} icon={<MenuIcon />} />
    </>
  );
};

export default MobileNavigation;

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  bottom: 20,
  right: 20,
  border: `1px solid ${theme.palette.grayDark.light}`,

  "$ svg": {
    color: `${theme.palette.grayDark.light}`,
  },
}));

const Drawer = styled("div")<{ open: boolean }>(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  background: `${theme.palette.snowy.main}`,
  transform: open ? "translateX(0)" : "translateX(-100%)",
  transition: "all .2s",
  zIndex: 1000,
  position: "absolute",
  top: 0,
  left: 0,

  "& .MuiTabs-flexContainer": {
    display: "flex",
    flexDirection: "column",
  },
}));

const StyledList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  listStyle: "none",
  padding: 0,
  gap: 15,

  "& a": {
    color: `${theme.palette.grayDark.main}`,
    fontSize: 24,
  },

  "& a:hover": {
    color: `${theme.palette.grayLight.main}`,
    backgroundColor: `${theme.palette.grayDark.main}`,
    padding: "5px 10px",
  },
}));
