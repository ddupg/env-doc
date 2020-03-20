### .bashrc配置

#### Linux终端显示git分支

```
function git_branch {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

export PS1='\[\e[37;40m\][\[\033[01;36m\]\u\[\e[37;40m\]@\[\e[0m\]\h \[\033[01;36m\]\w\[\e[0m\]] \[\e[37;40m\]\[\033[01;32m\]$(git_branch)\[\033[00m\]\[\e[0m\] \$ '
```
