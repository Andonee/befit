import React, { useState, useEffect } from "react";
import { styled, Tab, Tabs } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

export const menuItems = [
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

type TabType = "/Measurments" | "/Progress" | "/Training";

const DesktopNavigation = () => {
  const [activeTab, setActiveTab] = useState<TabType>("/Measurments");
  const navigate = useNavigate();

  console.log("activeTab", activeTab);

  useEffect(() => {
    const path = window.location.pathname;
    menuItems.forEach(
      (item) => item.url === path && setActiveTab(item.url as TabType)
    );
  }, []);

  const onTabClick = (
    e: React.SyntheticEvent<Element, Event>,
    value: string | number | boolean
  ) => {
    if (typeof value !== "string") return;
    setActiveTab(value as TabType);
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
            {menuItems.map((item, idx) => (
              <StyledTab
                value={item.url}
                label={item.label}
                key={`${item.label}_${idx}`}
              />
            ))}
          </Tabs>
        </MenuWrapper>
      </NavigationWrapper>
    </>
  );
};

export default DesktopNavigation;

const NavigationWrapper = styled("header")(({ theme }) => ({
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
}));
