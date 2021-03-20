/**
 * https://portal.shadowsocks.nz/clientarea.php?action=productdetails&id=1087298
 * 服务器列表页控制台执行，获取服务器列表
 * copy([].slice.apply(document.querySelectorAll('.table.table-hover.bordered-table.zebra-striped tr td:nth-child(2) code')).map(_=>_.innerHTML))
 */

let ping = require('ping');

let arr = [
  'au1-1.sstr-api.xyz',
  'au1-2.sstr-api.xyz',
  'au1-3.sstr-api.xyz',
  'au1-4.sstr-api.xyz',
  'de1-1.sstr-api.xyz',
  'de1-2.sstr-api.xyz',
  'de1-3.sstr-api.xyz',
  'de1-4.sstr-api.xyz',
  'de2-1.sstr-api.xyz',
  'de2-2.sstr-api.xyz',
  'de2-3.sstr-api.xyz',
  'de2-4.sstr-api.xyz',
  'ee1-1.sstr-api.xyz',
  'ee1-2.sstr-api.xyz',
  'ee1-3.sstr-api.xyz',
  'ee1-4.sstr-api.xyz',
  'fm1-1.sstr-api.xyz',
  'fm1-2.sstr-api.xyz',
  'fm1-3.sstr-api.xyz',
  'fm1-4.sstr-api.xyz',
  'fm2-1.sstr-api.xyz',
  'fm2-2.sstr-api.xyz',
  'fm2-3.sstr-api.xyz',
  'fm2-4.sstr-api.xyz',
  'hk1-1.sstr-api.xyz',
  'hk1-2.sstr-api.xyz',
  'hk1-3.sstr-api.xyz',
  'hk1-4.sstr-api.xyz',
  'tw1-1.sstr-api.xyz',
  'tw1-2.sstr-api.xyz',
  'tw1-3.sstr-api.xyz',
  'tw1-4.sstr-api.xyz',
  'ty1-1.sstr-api.xyz',
  'ty1-2.sstr-api.xyz',
  'ty1-3.sstr-api.xyz',
  'ty1-4.sstr-api.xyz',
  'ty2-1.sstr-api.xyz',
  'ty2-2.sstr-api.xyz',
  'ty2-3.sstr-api.xyz',
  'ty2-4.sstr-api.xyz',
  'ty2-5.sstr-api.xyz',
  'ty2-6.sstr-api.xyz',
  'ty2-7.sstr-api.xyz',
  'ty2-8.sstr-api.xyz',
  'os1-1.sstr-api.xyz',
  'os1-2.sstr-api.xyz',
  'os1-3.sstr-api.xyz',
  'os1-4.sstr-api.xyz',
  'os1-5.sstr-api.xyz',
  'os1-6.sstr-api.xyz',
  'os1-7.sstr-api.xyz',
  'os1-8.sstr-api.xyz',
  'os2-1.sstr-api.xyz',
  'os2-2.sstr-api.xyz',
  'os2-3.sstr-api.xyz',
  'os2-4.sstr-api.xyz',
  'os2-5.sstr-api.xyz',
  'os2-6.sstr-api.xyz',
  'os2-7.sstr-api.xyz',
  'os2-8.sstr-api.xyz',
  'nl1-1.sstr-api.xyz',
  'nl1-2.sstr-api.xyz',
  'nl1-3.sstr-api.xyz',
  'nl1-4.sstr-api.xyz',
  'nl1-5.sstr-api.xyz',
  'nl1-6.sstr-api.xyz',
  'nl1-7.sstr-api.xyz',
  'nl1-8.sstr-api.xyz',
  'uk1-1.sstr-api.xyz',
  'uk1-2.sstr-api.xyz',
  'uk1-3.sstr-api.xyz',
  'uk1-4.sstr-api.xyz',
  'v6-1.sstr-api.xyz',
  'v6-2.sstr-api.xyz',
  'v6-3.sstr-api.xyz',
];

let japan = ['ty', 'os', 'v6'];

function belongTo(host, countryTags) {
  let yes = false;
  countryTags.forEach(tag => {
    if (host.indexOf(tag) !== -1) {
      yes = true;
    }
  });
  return yes;
}

let s = Date.now();
arr.forEach(function(host) {
  ping.sys.probe(host, function(isAlive) {
    if (belongTo(host, japan)) {
      let msg = isAlive ?
          'host ' + host + ` is alive. timeout: ${Date.now() - s}` :
          'host ' + host + ' is dead';
      console.log(msg);
    }
  });
});