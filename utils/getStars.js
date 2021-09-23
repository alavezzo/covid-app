function getStars(rate) {
    let starHTML = '';
    let increment = 0;
    let max = 5; // maximum rating
 
    while(increment < rate) {
      starHTML += '<i class="material-icons orange">grade</i>';
      increment++;
    }
 
    while(max > rate) {
      starHTML += '<i class="material-icons gray">grade</i>';
      max--;
    }
    return starHTML;
};

module.exports = getStars;
