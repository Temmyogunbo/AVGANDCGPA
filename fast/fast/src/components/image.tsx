import Img from "react-image";
import React from "react";

interface ImageProps extends React.HTMLProps<any> {
  imageSource: string;
}
export const Image: React.SFC<ImageProps> = ({ imageSource, ...rest }) => (
  <Img src={imageSource} {...rest} />
);
