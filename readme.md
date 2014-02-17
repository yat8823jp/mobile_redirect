#ユーザーエージェントの振り分けによるスマホサイトへのリダイレクト。JavaScript版

* {home}/index.html (PCサイト用index.html)
* {home}/smart/index.html (スマートフォン用index.html)

下記JS,jQueryファイルを読み込む

* jquery-1.9.1.js
* jquery.cookie.js
* mobile_redirect.js

##プログラム概要
PCでアクセスした場合と、スマートフォンでアクセスした場合に、閲覧させるディレクトリを変更する。
スマートフォンの場合は{home}/smart/のディレクトリへリダイレクト。  
PC用ページを見る場合に、ディレクトリを変更するための遷移を設置。  
{home}/index.htmlを表示する際にリダイレクト処理が掛かるため無限ループを生む。  
それを避けるため、jquery.cookie.jsを利用し、cookie情報を取得し、フラグを利用する。  
  
PC用のhtmlに、スマートフォンでの閲覧時のみ、スマートフォン表示に切り替えるボタンを設置する。