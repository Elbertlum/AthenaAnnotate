import config from '../../../../config';

const baseUrl = process.env.NODE_ENV === 'production'
              ? config.url.host
              : `${config.url.host}:${config.url.port}`;

const req = new XMLHttpRequest();

req.open('GET', `${baseUrl}/zeus/zeus.js`);
req.onload = function() {
  const script = document.createElement('script');
  script.textContent = req.responseText;
  (document.head || document.documentElement).appendChild(script);
};
req.onerror = function() {
  console.log('AthenaAnnotate cannot load zeus!');
};
req.send();
