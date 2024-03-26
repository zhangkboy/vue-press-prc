#!/usr/bin/env sh
###
 # @Author: zhangkaichao zhangkc@kcwl.com
 # @Date: 2024-03-26 16:19:18
 # @LastEditors: zhangkaichao zhangkc@kcwl.com
 # @LastEditTime: 2024-03-26 17:29:00
 # @FilePath: /vuepress-starter/deploy.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist


# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -M master  

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:zhangkboy/zhangkboy.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:zhangkboy/docs.git master:gh-pages

cd -