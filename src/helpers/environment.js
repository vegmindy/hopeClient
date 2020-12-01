let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:4001';
        break;

    case 'jmj-hopeclient.herokuapp.com':
        APIURL = 'https://jmj-hopeserver.herokuapp.com'
}

export default APIURL;