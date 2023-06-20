import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { backgroundWhiteRoutes } from '../../utils/constants';

type ContainerProps = {
  children: React.ReactNode;
};

/* eslint-disable no-unused-vars */
enum Colors {
  White = '#ffffff',
  Grey = '#fafafa',
}
/* eslint-enable no-unused-vars */

const BackgroundLayout: React.FC<any> = (props: ContainerProps) => {
  const location = useLocation();
  const [background, setBackground] = useState<Colors>(Colors.Grey);

  useEffect(() => {
    if (backgroundWhiteRoutes.includes(location.pathname)) {
      setBackground(Colors.White);
    } else {
      setBackground(Colors.Grey);
    }
  }, [location.pathname]);
  return (
    <>
      <div style={{ background: background }}>{props.children}</div>
    </>
  );
};

export default BackgroundLayout;
