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
  ////10・J・Q・K・Aの組み合わせで、かつ全て同じマークならば、ロイヤルストレートフラッシュ
  //suits内の値がすべてsuits[0]と同じだったらフラッシュと判定する
  for ( var i = 1; i < suits.length; i++ ) {
    if ( suits[ 0 ] != suits[ i ] ) {
      break;
    }
  }
  if ( i == suits.length ) {
    if ( ranks[ 0 ] == 1 && ranks[ 1 ] == 10 && ranks[ 2 ] == 11 && ranks[ 3 ] == 12 && ranks[ 4 ] == 13 ) return poker.handCategory.ROYAL_FLUSH;
    if ( ranks[ 0 ] + 1 == ranks[ 1 ] && ranks[ 1 ] + 1 == ranks[ 2 ] && ranks[ 2 ] + 1 == ranks[ 3 ] && ranks[ 3 ] + 1 == ranks[ 4 ] ) return poker.handCategory.STRAIGHT_FLUSH;
    return poker.handCategory.FLUSH;
  }

  ////5枚のカードが連番で、なおかつ全て同じマークならば、ストレートフラッシュ
  ////同じ数字のカードが4枚あれば、フォー・オブ・ア・カインド
  ////ワンペアとスリー・オブ・ア・カインドの組み合わせで、フルハウス
  ////5枚全てが同じマークならば、フラッシュ
  ////5枚の数字が連続していれば、ストレート
  ////同じ数字が3枚あれば、スリー・オブ・ア・カインド
  ////同じ数字のカードのペアが2組あれば、ツーペア
  ////同じ数字のカードが2枚あれば、ワンペア
  ////どの組み合わせにも当てはまらないならば、ハイカード
  return poker.handCategory.HIGH_CARD;
};