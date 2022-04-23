import { Button } from "@mui/material";
// import { ThemeProvider } from "@mui/material/styles";
const ButtonComponent = (props: any) => {
  return (
    <Button {...props} data-testid="button">
      {props.label}
    </Button>
  );
};

export default ButtonComponent;
