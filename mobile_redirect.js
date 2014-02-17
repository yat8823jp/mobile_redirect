var flg;

//スマートフォンでPCサイト表示した時にのみ表示させる。
$(document).ready(function(){
	if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
		$('#smart').html('<a href="smart/">スマートフォンサイトはこちら</a>');
	}
});

// スマートフォンサイトへのリダイレクト
if($.cookie("KEY") != 1){
	//クッキー情報が1以外であればユーザーエージェントを取得
	if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
		flg = 1;
		$.cookie("KEY", flg, { expires: 7 });
		location.href = 'smart/';
	}
}