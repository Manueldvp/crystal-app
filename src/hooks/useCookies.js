import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useCookieBanner = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const firstVisit = Cookies.get('firstVisit');
    const acceptedCookies = Cookies.get('acceptedCookies');
    const rejectedCookies = Cookies.get('cookiesRejected');

    if (!firstVisit && !acceptedCookies && !rejectedCookies) {
      setIsFirstVisit(true);
      Cookies.set('firstVisit', 'true', { expires: 365 });
    }

    if (acceptedCookies === 'true') {
      setCookiesAccepted(true);
    }
  }, []);

  const acceptCookies = () => {
    setCookiesAccepted(true);
    Cookies.set('acceptedCookies', 'true', { expires: 365 });
    Cookies.remove('firstVisit');
    Cookies.remove('cookiesRejected');
  };

  const rejectCookies = () => {
    setCookiesAccepted(false);
    Cookies.remove('firstVisit');
    Cookies.set('cookiesRejected', 'true', { expires: 365 });
  };

  return { isFirstVisit, cookiesAccepted, acceptCookies, rejectCookies };
};

export default useCookieBanner;


