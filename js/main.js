const pics_src = new Array(
  "./img/stone.png",
  "./img/scissors.png",
  "./img/paper.png"
);

const shohai_message = new Array("あなたの勝ち", "あいこ", "あなたの負け");

$(".btn-rock").on("click", function () {
  // 自分の手
  const my_hand_pic = document.querySelector(".my-hand-pic");
  const my_pic_url = pics_src[0];
  my_hand_pic.src = my_pic_url;
  // 相手の手
  const other = Math.floor(Math.random() * 3);
  const other_hand_pic = document.querySelector(".other-hand-pic");
  const other_pic_url = pics_src[other];
  other_hand_pic.src = other_pic_url;
  // 結果メッセージ
  if (0 === other) {
    $(".sho-hai").html(shohai_message[1]);
  } else if (1 === other) {
    $(".sho-hai").html(shohai_message[0]);
  } else if (2 === other) {
    $(".sho-hai").html(shohai_message[2]);
  }
});

$(".btn-scissors").on("click", function () {
  // 自分の手
  const my_hand_pic = document.querySelector(".my-hand-pic");
  const my_pic_url = pics_src[1];
  my_hand_pic.src = my_pic_url;
  // 相手の手
  const other = Math.floor(Math.random() * 3);
  const other_hand_pic = document.querySelector(".other-hand-pic");
  const other_pic_url = pics_src[other];
  other_hand_pic.src = other_pic_url;
  // 結果メッセージ
  if (0 === other) {
    $(".sho-hai").html(shohai_message[2]);
  } else if (1 === other) {
    $(".sho-hai").html(shohai_message[1]);
  } else if (2 === other) {
    $(".sho-hai").html(shohai_message[0]);
  }
});

$(".btn-paper").on("click", function () {
  // 自分の手
  const my_hand_pic = document.querySelector(".my-hand-pic");
  const my_pic_url = pics_src[2];
  my_hand_pic.src = my_pic_url;
  // 相手の手
  const other = Math.floor(Math.random() * 3);
  const other_hand_pic = document.querySelector(".other-hand-pic");
  const other_pic_url = pics_src[other];
  other_hand_pic.src = other_pic_url;
  // 結果メッセージ
  if (0 === other) {
    $(".sho-hai").html(shohai_message[0]);
  } else if (1 === other) {
    $(".sho-hai").html(shohai_message[2]);
  } else if (2 === other) {
    $(".sho-hai").html(shohai_message[1]);
  }
});
