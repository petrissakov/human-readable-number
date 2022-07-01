module.exports = function toReadable (number) {
  const dict_0_20 = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };

const dict_tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'

};
if (number == 0) {
    return 'zero';
} else if (number < 20) {
    return dict_0_20[number];
} else if (number >= 20 && number < 100){
  
    return tensToReadable(number, dict_0_20, dict_tens);
} else if (number >= 100 && number < 1000) {
  let hundreds_count = parseInt(number/100);
  let tens = number - hundreds_count*100;
  if (tens == 0) return dict_0_20[parseInt(hundreds_count)] + ' hundred';
  else return dict_0_20[parseInt(hundreds_count)] + ' hundred ' + tensToReadable(tens, dict_0_20, dict_tens);
}

  
}

function tensToReadable(tens, dict_0_20, dict_tens){
  let tens_count = parseInt(tens/10);
  let ones_count = parseInt(tens%10);
  if (tens < 20) return dict_0_20[tens];
  else return (tens_count == 0 ? '': dict_tens[tens_count]) + (ones_count==0 ? '' : ' ' + dict_0_20[ones_count]);

}


