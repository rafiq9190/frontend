import { useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(!Cookies.get('accepted'));

    const handleAccept = () => {
        Cookies.set('accepted', true, { expires: 365 });
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="cookie-banner text-white text-center p-2">
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-8 text-center'>
                        <p className='d-inline-block pt-2 mb-0'>By clicking "Accept" or continuing to use our site, you agree to our Website's <Link className="base-color" href="/Privacy">Privacy Policy</Link>.</p>
                    </div>
                    <div className='col-12 col-lg-4 text-center'>
                        <button className='base-background text-white border-0 rounded p-2 my-auto' onClick={handleAccept}>Accept</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CookieBanner;