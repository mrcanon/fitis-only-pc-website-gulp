# fitis-only-pc-website-gulp

### Install [nvm for Windows](https://github.com/coreybutler/nvm-windows) and then in an elevated PowerShell / CMD run:
+ `nvm install 10`
+ `nvm use 10.24.1`
+ Verify with: `node -v`

### Installing
Note: Delete **node_modules** and the lockfile (*package-lock.json* or *yarn.lock*).

Install dependencies and start using [bower](https://bower.io/#install-bower/):

```CLI
npm install -g bower
bower install
```

Then install :

```CLI
npm install --verbose`
gulp serve
```

### Production build

You can generate an optimized distribution bundle. To do this run the command:

```CLI
gulp
gulp serve:dist
```

### [Open website](https://mrcanon.github.io/fitis-only-pc-website-gulp/) on github


### [PDS designs](https://drive.google.com/drive/folders/0B1aqvHrbme-UUkt5d3VmMTUxRkU?resourcekey=0-fwrcJz_b34qV7BiG3doo2Q&usp=sharing)