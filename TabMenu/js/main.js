  'use strict';

  {
    const menuItems = document.querySelectorAll('.menu li a');
    const contents = document.querySelectorAll('.content');

    menuItems.forEach(clickedItem => { //NodeListと呼ばれるもので、配列と似たようなデータ構造 それぞれの要素をclickedItemで受けつつ次の処理をしなさい
      clickedItem.addEventListener('click', e => {
        e.preventDefault(); //aタグのherfで指定されたURLへ遷移することを妨害

        menuItems.forEach(item => { //関数式に引数を渡すと、menuItemsから一つずつ要素を渡して、要素がなくなるまでitemの処理をしてくれるという仕組み
          item.classList.remove('active');
        });
        clickedItem.classList.add('active');

        contents.forEach(content => {
          content.classList.remove('active');
        });
        document.getElementById(clickedItem.dataset.id).classList.add('active');
      });
    });
  }
