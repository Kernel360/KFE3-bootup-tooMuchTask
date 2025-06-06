import { ProfileImgStyle } from "./styles";

interface Props {
  size: string;
  variant: string;
  imgUrl: string;
  alt: string;
}

const ProfileImg = ({ size, variant, imgUrl, alt }: Props) => {
  return (
    <ProfileImgStyle
      size={size}
      variant={variant}
      imgUrl={imgUrl}
      className="m-2"
    />
  );
};

export default ProfileImg;
