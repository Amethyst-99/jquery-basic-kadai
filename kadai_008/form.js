$(function () {
    // 「クリック」ボタンのクリック時
    $('.btn').on('click', function () {
      // テキストボックスに文字を表示
      $('.text-box').val("クリックしました！");
    });
});