import Image from 'next/image';
import logo from '../../../public/BW_Logo_Stacked_RGB_Blue.png';

type LogoProps = {
  height?: number;
  width?: number;
};

export function StackedLogo({ height = 60, width = 120 }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="Burns & Wilcox logo"
      className={'inline'}
      width={width}
      height={height}
    />
  );
}

export function ampersandLogo(logoProps: LogoProps) {
  return (
    <Image src="/BW_Logo_Stacked_RGB_Blue.png" alt="Burns & Wilcox logo" width={120} height={60} />
  );
}
