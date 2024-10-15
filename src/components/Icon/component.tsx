import { cloneElement } from 'react';
import { IconProps, IconSize } from './types';

const Icon: React.FC<IconProps> = ({ size = 'medium', children, ...props }) => {
  const SizeMap: {
    [key in IconSize]: number;
  } = {
    small: 16,
    medium: 24,
    large: 32,
  };

  const IconComponent = cloneElement(children, {
    width: SizeMap[size],
    ...props,
  });

  return IconComponent;
};

export default Icon;
