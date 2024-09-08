# allseen

ДЗ № 2, курс "Основы Node.js" платформы ГБ.

Модуль выводит информацию о системе.

Пример подключения и использования:

```js
const allseen = require('allseen');
console.log(allseen);
```

Пример вывода:

```js
{
  cpus: [
    {
      model: 'Intel(R) Core(TM)2 Duo CPU     P7550  @ 2.26GHz',
      speed: 2255,
      times: [Object]
    },
    {
      model: 'Intel(R) Core(TM)2 Duo CPU     P7550  @ 2.26GHz',
      speed: 2255,
      times: [Object]
    }
  ],
  arch: 'x64',
  totalmem: 8066199552,
  freemem: 2231087104,
  uptime: 32819.85,
  loadavg: [ 11.92, 6.3, 3.28 ],
  type: 'Linux',
  platform: 'linux',
  release: '5.15.0-72-generic',
  version: '#79~20.04.1-Ubuntu SMP Thu Apr 20 22:12:07 UTC 2023',
  networkInterfaces: { lo: [ [Object], [Object] ], wlp3s0: [ [Object], [Object] ] },
  hostname: 'ubuntu',
  homedir: '/home/user',
  tmpdir: '/tmp',
  userInfo: {
    uid: 1002,
    gid: 1002,
    username: 'user',
    homedir: '/home/user',
    shell: '/bin/bash'
  }
}
```
