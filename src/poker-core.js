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
  HIGH_CARD       :   0,
  ONE_PAIR        : 100,
  TWO_PAIR        : 200,
  THREE_OF_A_KIND : 300,
  STRAIGHT        : 400,
  FLUSH           : 500,
  FULL_HOUSE      : 600,
  FOUR_OF_A_KIND  : 700,
  STRAIGHT_FLUSH  : 800,
  ROYAL_FLUSH     : 900
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
poker.core.getHandCategory = function(cards) {
  // TODO: ここに処理を実装します。
  var cardsRanks = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  cards.forEach(function(v, i, array){cardsRanks[v.rank] += 1;});

  if( cardsRanks.some(function(v, i, array){return v === 4;}) ){
    return poker.handCategory.FOUR_OF_A_KIND;
  }

  if( cardsRanks.some(function(v, i, array){return v === 3;}) && cardsRanks.some(function(v, i, array){return v === 2;})){
    return poker.handCategory.FULL_HOUSE;
  }

  if( cardsRanks.some(function(v, i, array){return v === 3;}) ){
    return poker.handCategory.THREE_OF_A_KIND;
  }

  if( cardsRanks.some(function(v, i, array){return v === 2;}) ){
    return poker.handCategory.ONE_PAIR;
  }

  function pareCheck(cards) {
    $.each(cards, function(i, v) {
      var x = v.rank;
      var count = 0;
      $.each(cards, function(i2, v2) {
        if ((x === v2.rank) && (i != i2)) {
          count++;
          return true;
        }
      });
    });
  }

  // どの組み合わせにも当てはまらないならば、ハイカードを返す。
  return poker.handCategory.HIGH_CARD;
};