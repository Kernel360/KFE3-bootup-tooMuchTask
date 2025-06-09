import { ProfileImgStyle } from './styles';
import { ImgSizeKey, Variant } from './type';

interface Props {
  size: ImgSizeKey;
  variant: Variant;
  imgUrl: string;
  alt: string;
  className?: string;
}

const ProfileImg = ({ size, variant, imgUrl, alt }: Props) => {
  return (
    <ProfileImgStyle
      size={size}
      variant={variant}
      imgUrl={imgUrl}
      className='m-2'
    />
  );
};

export default ProfileImg;
