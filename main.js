"use strict";



// mobile header

{
  const open = document.querySelector('#open');
  const overlay = document.querySelector('.overlay');
  const close = document.querySelector('#close');
  const overlayLinks = document.querySelectorAll('.overlay nav ul li a'); // ハンバーガーメニュー内のリンクを取得

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  // 各リンクにクリックイベントを追加
  overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });
  });
}





{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) { //isIntersecting画面上に入ったら。!entry.isIntersecting画面上に入らなかったら。
        return;
      }

      entry.target.classList.add("appear");//画面に入っているとき、classList.add("appear")でappearをつける。CSSで反応する。
      obs.unobserve(entry.target);//appearを追加したら、監視を止める。
    });
  }

  const observer = new IntersectionObserver(callback);   //場所取得
  const targets = document.querySelectorAll(".animate");  //監視する3つ物取得

  targets.forEach(target => {  //1つ1つバラバラにして
    observer.observe(target); //observe()でobserverに入ればtargetを監視対象内に
  });
}




{
  function uearcallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) { //isIntersecting画面上に入ったら。!entry.isIntersecting画面上に入らなかったら。
        return;
      }

      entry.target.classList.add("wppear");//画面に入っているとき、classList.add("appear")でappearをつける。CSSで反応する。
      obs.unobserve(entry.target);//appearを追加したら、監視を止める。
    });
  }

  const option = {
    threshold: 0.2,    //画面上に20%超えた場合、appearを追加
  };

  const Uearobservers = new IntersectionObserver(uearcallback, option);   //場所取得
  const contents = document.querySelectorAll(".content");  //監視する3つ物取得

  contents.forEach(content => {  //1つ1つバラバラにして
    Uearobservers.observe(content); //observe()でobserverに入ればtargetを監視対象内に
  });
}





/* スクロールのボタン */

{
  //要素を取得
  const button = document.querySelector('.js-backToTop');

  //クリックイベント
  button.addEventListener('click', () => {
    //ページ上部へスムーススクロール
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  });

  //スクロールイベント
  window.addEventListener('scroll', () => {
    //スクロール量を判定して要素にクラスを付与
    if (window.scrollY > 100) {
      button.classList.add('is-active');
    } else {
      button.classList.remove('is-active');
    }
  });
}