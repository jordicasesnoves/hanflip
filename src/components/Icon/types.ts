import { ReactSVGElement } from 'react';

export type IconSize = 'small' | 'medium' | 'large';

export interface IconProps extends React.SVGProps<ReactSVGElement> {
  size?: 'small' | 'medium' | 'large';
}
