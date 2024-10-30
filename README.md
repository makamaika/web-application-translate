# web-application-translate
google apps script translate application 

maka が作った Discord の 翻訳BOT で利用しているウェブアプリの例です。

このコードをそのままコピーして使用してください。

文字数が2000文字を超えると「7264-split」という文字列を含めるようになっています。

Flagflag[数字] は、国旗に置き換えるための文字列です。削除しないようにお願いします。

自身のサーバーで使用されるものなので、コードの内容が理解でき、BOTのシステムに問題ない範囲での編集はしていただいて構いません。

# 翻訳ウェブアプリの作り方、BotへURLの登録の仕方
前提条件として
- Googleアカウントを持っている(一般ユーザーでもWorkspaceアカウントでも構いません、Googleから利用停止されているアカウントは対象外です。)
- 他のサービスでGASを利用していない(他のサービスに影響がある可能性があるため)
- 使用目的が荒らし、スパムなどではない
ことを確認してください。

推奨事項
- PCでの作業を強く推奨します。

## 1,GASでプロジェクトを作成する
[https://script.google.com/home](https://script.google.com/home) にアクセスし、「新しいプロジェクト」ボタンを押してください。
![image](https://github.com/user-attachments/assets/b6771567-d5d3-483a-8426-f1d260672a74)
## 2,コードを書き込み、保存する
main.js のコードをすべてコピーし、先ほど作成したプロジェクトの「コード.gs」(すでにあるファイル)の中身を全選択してペーストします。

左上の「無題のプロジェクト」を好きな名前にします。(変更しなくてもいいですが、変更したほうがわかりやすいと思います。)

上の方にあるフロッピーディスクマーク(戻る進むの一個右、実行の一個左)を押してプロジェクトを保存します。
![image](https://github.com/user-attachments/assets/42b2a93d-acfe-40ea-b5d2-a9b380e06e0c)
## 3,デプロイメントを作成する(注意が必要)
右上の青いボタン「デプロイ▼」を押して、「新しいデプロイ」を押してください。
![image](https://github.com/user-attachments/assets/9c71e42c-b05a-4a4e-9546-28b1f2bc9cca)
「デプロイタイプを選択してください」と出るので、左側の上の「歯車マーク」を押して、「ウェブアプリ」を選択します。
![image](https://github.com/user-attachments/assets/21e1f11d-8ed8-4260-bd19-9231862d96cd)
設定画面が表示されるので、__**「アクセスできるユーザー」を「全員」にしてください**__。
![image](https://github.com/user-attachments/assets/9def56f3-b28d-4614-b403-17d26a8b748a)
-# ↑アカウントが変わりましたが気にしないでください
設定が終わったら、「デプロイ」を押してしばらくお待ち下さい。
![image](https://github.com/user-attachments/assets/75fd96b1-0a2f-4b24-bb6e-ebd94fb1dfdb)
デプロイが終わると、ウェブアプリにアクセスするためのURLが表示されるので、コピーしてください。
![image](https://github.com/user-attachments/assets/a3e126c9-ae5b-4bd1-82a8-f1454b1fb932)
GASの設定はここまでです。
