/**
 * Created by prasanna_d on 7/22/2018.
 */
module.exports = function (prerender) {
    prerender.set('prerenderToken', 'EHVldc3mgBLxusUIMC6J');
    prerender.crawlerUserAgents.push('googlebot');
    prerender.crawlerUserAgents.push('bingbot');
    prerender.crawlerUserAgents.push('yandex');
    console.log('prerender service is initialized');
};