import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Button from './Button';

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowButton(currentScrollPos < prevScrollPos && currentScrollPos !== 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      {showButton && (
        <ScrollLink to='home' smooth={true} duration={500}>
          <div className='fixed bottom-[60px] right-[60px]'>
            <Button label='Scroll to Top' />
          </div>
        </ScrollLink>
      )}
    </div>
  );
};
  
  export default ScrollButton;
  
