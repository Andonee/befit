import { styled } from "@mui/material";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { title, children } = props;
  return (
    <Wrapper>
      <TitleWrapper>{title}</TitleWrapper>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  flexGrow: 1,
  gap: "100px",
  height: "100vh",
  overflowY: "auto",
}));

const TitleWrapper = styled("div")(({ theme }) => ({
  color: `${theme.palette.grayDark.main}`,
  fontSize: "32px",
  fontWeight: "bold",
  alignSelf: "flex-start",
}));
