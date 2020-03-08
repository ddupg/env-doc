## 软件环境

### 在Ubuntu上安装RPM包

Ubuntu的软件包格式是deb，如果要安装rpm的包，则要先用alien把rpm转换成deb。

```
sudo apt-get install alien #alien默认没有安装，所以首先要安装它

sudo alien xxxx.rpm #将rpm转换位deb，完成后会生成一个同名的xxxx.deb

sudo dpkg -i xxxx.deb #安装
```

注意，用alien转换的deb包并不能保证100%顺利安装，所以可以找到deb最好直接用deb