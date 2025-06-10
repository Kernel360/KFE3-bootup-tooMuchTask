import { ProfileImgStyle } from './styles';
import { ImgSizeKey, Variant } from './type';

export type ImgSizeKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type Variant = 'circle' | 'rounded';

interface Props {
  size: ImgSizeKey;
  variant: Variant;
  imgUrl: string;
  alt: string;
  className?: string;
}

//style
import styled from 'styled-components';

import { ImgSizeKey, Variant } from './type';

const Size = {
  xs: '24px',
  sm: '32px',
  md: '44px',
  lg: '56px',
  xl: '76px',
  xxl: '90px',
} as const;

interface ImgProps {
  size: ImgSizeKey;
  variant: Variant;
  imgUrl: string;
}

export const ProfileImgStyle = styled.div.attrs<ImgProps>(
  ({ size, variant, imgUrl }) => {
    const width = Size[size];
    const radius = variant === 'circle' ? '50%' : '10px';

    return {
      style: {
        width,
        height: width,
        borderRadius: radius,
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
    };
  },
)<ImgProps>``;


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
