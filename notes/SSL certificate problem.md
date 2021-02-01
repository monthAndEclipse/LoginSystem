
## Description
```
when using git clone (url) command to clone a remote repo, it throws the following exception

fatal: unable to access 'https://github.com/monthAndEclipse/LoginSystem.git/': 
SSL certificate problem: unable to get local issuer certificate

```



## [Reference](https://stackoverflow.com/questions/23885449/unable-to-resolve-unable-to-get-local-issuer-certificate-using-git-on-windows)



````
The problem is that git by default using the "Linux" crypto backend.

Beginning with Git for Windows 2.14, you can now configure Git to use SChannel, 
the built-in Windows networking layer as the crypto backend. 
This means that you it will use the Windows certificate storage mechanism 
and you do not need to explicitly configure the curl CA storage mechanism: 
https://msdn.microsoft.com/en-us/library/windows/desktop/aa380123(v=vs.85).aspx

Just execute:

git config --global http.sslbackend schannel
That should helps.

Using schannel is by now the standard setting when installing git for windows, 
also it is recommended to not checkout repositories by SSH anmore if possible, 
as https is easier to configure and less likely to be blocked by a firewall it means less chance of failure.
````