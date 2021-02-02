# Description
when try to install the npm package with npm install command ,
the following exception throws:
```
npm ERR! code UNABLE_TO_VERIFY_LEAF_SIGNATURE
npm ERR! errno UNABLE_TO_VERIFY_LEAF_SIGNATURE
npm ERR! request to https://registry.npmjs.org/express failed, reason: unable to verify the first certificate
```

### [quick fix](https://thomashunter.name/posts/2012-05-25-npm-ssl-errors):

turn off ssl
```
npm config set strict-ssl false
```
after the installation is completed, turn on the ssl for security reason.
```
npm config set strict-ssl true
```

