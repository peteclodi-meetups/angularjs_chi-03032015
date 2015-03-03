# Angular SEO with PhantomJS & Angular-SEO

Presented on 3/3/2015

# Speaking Notes

 - Introduce Myself
 - Introduce the problem (4 items then example)
 - Offer the 2 options (pros and cons)
    - Prerender.io
    - DIY PhantomJS
 - Explain why I chose DIY PhantomJS (3 items)
 - Explain the implementation
    - Client-side
        - Routing
        - SEO-Controller-Interceptor
    - Server-side
        - PhantomJS startup
        - Explain what the crawler wants
        - Proxy-ing the requests
 - Show the example pages (in the browser)
    - Sync
    - Async
 - Show the example pages (“through cURL”)
    - _escaped_fragment_/sync
    - _escaped_fragment_/async
 - Show the example pages (through cURL)
    - /sync User-Agent: twitterbot
    - /async User-Agent: twitterbot
 - Questions