import React, { useEffect } from 'react';

const GoogleAds = () => {
  useEffect(() => {
    // Load Google Ads script
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5922402598356068";
     script.crossorigin="anonymous";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Ads
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="your-ad-client-id"
        data-ad-slot="your-ad-slot-id"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAds;