import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

type NavigationType = {
  children?: React.ReactNode;
};

const menuItems = [
  {
    url: "/Measurments",
    label: "Measurments",
  },
  {
    url: "/Progress",
    label: "Progress",
  },
  {
    url: "/Training",
    label: "Training plan",
  },
];

export const Navigation = (props: NavigationType) => {
  const { children } = props;
  const [activeTab, setActiveTab] =
    useState<typeof menuItems[number]["url"]>("Measurments");
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    menuItems.forEach((item) => item.url === path && setActiveTab(item.url));
  }, []);

  const onTabClick = (
    e: React.SyntheticEvent<Element, Event>,
    value: string | number | boolean
  ) => {
    if (typeof value !== "string") return;
    setActiveTab(value);
    navigate(value);
  };

  return (
    <>
      <NavigationWrapper>
        <LogoWrapper>
          <Link to="/">BeFit</Link>
        </LogoWrapper>
        <MenuWrapper>
          <Tabs value={activeTab} onChange={onTabClick}>
            {menuItems.map((item) => (
              <StyledTab value={item.url} label={item.label} />
            ))}
          </Tabs>
        </MenuWrapper>
      </NavigationWrapper>

      {children}
    </>
  );
};

const NavigationWrapper = styled("div")(({ theme }) => ({
  height: "100vh",
  width: "300px",
  borderRight: `1px solid ${theme.palette.grayDark.light}`,
  backgroundColor: theme.palette.snowy.main,
  "& .MuiTabs-flexContainer": {
    display: "flex",
    flexDirection: "column",
  },

  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

const LogoWrapper = styled("div")(({ theme }) => ({
  padding: "15px",
  "& a": {
    color: theme.palette.grayDark.main,
    fontWeight: "700",
    fontSize: "36px",
  },
}));

const MenuWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

const StyledTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: theme.palette.grayLight.main,
    color: theme.palette.grayDark.main,
    fontWeight: 700,
  },
  "& .Mui-focusVisible": {
    outline: "none",
  },
}));
