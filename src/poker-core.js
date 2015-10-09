/**
 * ポーカー
 * @namespace
 */
var poker = {};

/**
 * ポーカー・ハンド
 * @enum {number}
 */
poker.handCategory = {
  HIGH_CARD: 0,
  ONE_PAIR: 100,
  TWO_PAIR: 200,
  THREE_OF_A_KIND: 300,
  STRAIGHT: 400,
  FLUSH: 500,
  FULL_HOUSE: 600,
  FOUR_OF_A_KIND: 700,
  STRAIGHT_FLUSH: 800,
  ROYAL_FLUSH: 900
};


/**
 * コアライブラリ
 * @namespace
 */
poker.core = {};


/**
 * 役判定する。
 *
 * @param {{rank:number, suit:string}[]} cards 手札。
 * @returns poker.handCategory のどれか。
 */
poker.core.getHandCategory = function ( cards ) {
  // TODO: ここに処理を実装します。

  //以降実装する人へ伝言
  //カードの数字はソートして扱います。…扱いたい。
  //カードのマークはフラッシュの判定にしか使われないので
  //ソートしません。あしからずご了承ください。

  //配列の宣言
  var ranks = []; //番号です！
  var suits = []; //マークです！

  for ( var i = 0; i < cards.length; i++ ) {
    //ここに手札（cardsの配列）を格納してください！
    ranks[ i ] = cards[ i ].rank;
    suits[ i ] = cards[ i ].suit;
    //手札の数字をソートする
    ranks.sort();
  }

  //フラッシュの判定を行う
  //suits内の値がすべてsuits[0]と同じだったらフラッシュと判定する
  for ( var i = 1; i < suits.length; i++ ) {
    if ( suits[ 0 ] == suits[ i ] ) {

    }
  }









  // どの組み合わせにも当てはまらないならば、ハイカードを返す。
  return poker.handCategory.HIGH_CARD;
};