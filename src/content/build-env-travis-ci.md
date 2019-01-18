---
layout: post
title: 'Travis CI 環境構築'
author: Yoshihisa Sato (yosi-q)
tags: ['tool', 'quicktip']
image: img/posts/build-env-travis-ci/header-image.png
date: '2019-01-18T18:00:00.000Z'
draft: false
---

こんにちは、yosi-qです。

この記事では、Travis CIのセットアップ方法について説明していきます。

# Travis CI環境構築

Travis CI( https://travis-ci.com/ )の「Sign in with Github」から登録します。

![Sign in with Github](img/posts/build-env-travis-ci/regist_travis-ci.png)

「Authorize travis-pro」でGithubと紐付けます。

![Auth Travis-CI and Github](img/posts/build-env-travis-ci/link_travis-ci.png)

ユーザの画面に遷移したのち、画面の「Activate」ボタンを押下します。
![Activate on Travis-CI](img/posts/build-env-travis-ci/activate_on_travis-ci.png)

「Approve & Install」ボタンを押下し、CI実行のトリガーとなるGithub上のリポジトリ参照ができるようにします。
この時、リポジトリ選択をすることができます。
 - All repositories: すべての公開リポジトリが対象
 - Only select repositories: 選択した公開リポジトリが対象

![Install Travis-CI](img/posts/build-env-travis-ci/install_travis-ci.png)

Travis CIへのリポジトリ参照が完了すると、下記の画面になります。
対象のリポジトリの左側にある「Settings」を押下し、設定を確認します。

![Repos list on Travis-CI](img/posts/build-env-travis-ci/repos_list_on_travis-ci.png)

「Build pushed branches」がON担っていることを確認しましょう。
この設定がONになっていれば、GithubへPushされたタイミングでCIが起動します。

![Setting Travis-CI](img/posts/build-env-travis-ci/setting_travis-ci.png)

以上で、Travis CIの設定は完了です。

# Travis CLI

Travis CIの設定は、`.travis.yml`に記載していくことになります。
外部アプリとの連携時に、パスワードなど一般公開したくないものには暗号化をかけたいものです。
そんな時に、Travis CLIを使うと、そんな希望を叶えてもらえます。

Rubyで開発されているので、Rubyの実行環境が必要ですが、  下記で簡単にインストールできます。

```
# gem install travis
```

詳細はTravis CLIの[本家ReadMe](https://github.com/travis-ci/travis.rb#readme)をご覧ください。


# その他

上記ではTravis CLIを紹介しましたが、他にもさまざまなツールが用意されています。
[本家Docs](https://docs.travis-ci.com/user/apps/)に紹介がありますので、合わせてご確認いただくと、
好みのものが見つかるかもしれません。。

# 関連記事

実際にTravis CIを使用した記事は[こちら](/dev-automation-and-ci-cd)です。
こちらでは、設定ファイルである`.travis.yml`についても内容を触れているので、合わせてご確認ください。
