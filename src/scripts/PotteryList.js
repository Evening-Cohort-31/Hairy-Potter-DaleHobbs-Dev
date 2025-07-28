export const PotteryList = (potteryObjectArray) => {
  let html = "";
  for (let pottery of potteryObjectArray) {
    html += `<section class="pottery" id="pottery-${pottery.id}">
        <h2 class="pottery_shape">${pottery.shape}</h2>
        <div class="pottery_properties">
        Item weights ${pottery.weight} grams and is ${pottery.height} cm in height
        </div>
        <div class="pottery_price">Price is ${pottery.price}</div>
        </section>
        `;
  }

  return html;
};
