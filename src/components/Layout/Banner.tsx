import { ReactNode } from 'react';

type BannerProps = {
  children: ReactNode;
};

export default function Banner({ children }: BannerProps) {
  return (
    <div className="relative h-600 banner">
      <div className="absolute left-[150px] top-1/2 -translate-y-1/2 p-2 banner-text">{ children }</div>
    </div>
  );
}