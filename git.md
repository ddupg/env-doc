## Git

### Git多账号配置

```
Host v9.git.n.xiaomi.com
HostName v9.git.n.xiaomi.com
User sunxin8@xiaomi.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa

Host ddupg.github.com
HostName github.com
User ddupgs@gmail.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github
```

### ssh共享连接状态

```
Host *
ControlMaster auto
ControlPath ~/.ssh/ssh_mux-%r@%h:%p
ControlPersist 6h
```
