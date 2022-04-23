import { Box } from "@mui/material";
const ImageComponent = (props: any) => {
  // console.log("props", props.src);
  return <Box component="img" {...props} alt="not found.." />;
};

export default ImageComponent;
