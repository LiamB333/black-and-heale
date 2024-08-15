import React from 'react';

interface NavigationButtonProps {
  direction: 'left' | 'right';
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction }) => {
  return (
    <div className="flex gap-2 justify-center items-center p-3 w-12 border border-black border-solid rounded-[50px]">
      <img
        loading="lazy"
        src={`http://b.io/ext_${direction === 'left' ? '4' : '5'}-`}
        alt={`${direction} arrow`}
        className="object-contain self-stretch my-auto w-6 aspect-square"
      />
    </div>
  );
};

export default NavigationButton;