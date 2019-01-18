---
layout: post
title: 'CodeClimate 環境構築'
author: Yoshihisa Sato (yosi-q)
tags: ['tool', 'quicktip']
image: img/posts/build-env-codeclimate/header-image.png
date: '2019-01-18T18:00:00.000Z'
draft: false
---

こんにちは、yosi-qです。

この記事では、CodeClimateのセットアップ方法について説明していきます。

## CodeClimate環境構築

Code ClimateのQualityチェックを導入します。

Code Climate Qualityのログイン画面 ( https://codeclimate.com/login/github/join ) で「Sign up with GitHub」でサインアップします。

![Sign up CodeClimate](img/posts/build-env-codeclimate/signup_codeclimate.png)

「Authorize codeclimate」でGithubと紐付けます。

![Auth CodeClimate and Github](img/posts/build-env-codeclimate/auth_codeclimate.png)

Additional Requestも許可しましょう。「Authorize codeclimate」を押下します。

![Auth Additional Request CodeClimate](img/posts/build-env-codeclimate/additionalrequest_codeclimate.png)

次の画面が出れば登録完了。下部の「Next」を押下し、リポジトリ選択に進みます。

![Done sign up for CodeClimate](img/posts/build-env-codeclimate/done_signup_codeclimate.png)

公開リポジトリは無料で使えますので、「Free for open source. Forever.」の「Add a repository」を押下します。

![Add repos CodeClimate](img/posts/build-env-codeclimate/add_repos_codeclimate.png)

Additional Requestも許可します。「Authorize codeclimate」を押下します。

![Auth repos CodeClimate](img/posts/build-env-codeclimate/repos_access_codeclimate.png)

一覧に選択可能なリポジトリが表示されます。「Add Repo」を押下します。

![Add repos CodeClimate](img/posts/build-env-codeclimate/add_check_repos_codeclimate.png)

設定としてはここまでで、Quality Checkは実施されるようになりましたが、**テストカバレッジはテスト実行結果を連携する必要があります。**
その際、「TEST REPORTER ID」が必要となりますが、下図のオレンジ部分から取得できます。

![Reporter ID](img/posts/build-env-codeclimate/reporter_id_codeclimate.png)


