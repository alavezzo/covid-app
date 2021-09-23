const getStars = require('./getStars');

const modifyData = (data) => {
    let modifiedData = [];

        for (let i=0; i<data.length; i++) {

        let { name, zipcode, date, mask, distance, vaccineCard, sanitizer, comment  } = data[i]
            
            if (vaccineCard) {
                vaccineCard = 'Yes'
            } else {
                vaccineCard = 'No'
            }
            if (sanitizer) {
                sanitizer = 'Yes'
            } else {
                sanitizer = 'No'
            }

            mask = getStars(mask);
            distance = getStars(distance)

            modifiedData.push({
                name,
                zipcode,
                date,
                mask,
                distance,
                vaccineCard,
                sanitizer,
                comment
            })
        }
    return modifiedData;
    }

module.exports = modifyData;