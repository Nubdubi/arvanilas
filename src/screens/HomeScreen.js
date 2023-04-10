const data = require("../data.js");
// 이게 에러남
const HomeScreen = {
  render: () => {
    const { products, error } = data;
    if (error) {
      return `<div> error </div>`;
    }
    return `
      <ul class="products">
        ${products
          .map(
            (product) =>
              ` <div class="product">
              <div class=""productname">
                  ${product.name}
                  </div>
                  ${product.category}
                </div>`
          )
          .join("\n")}
      
    `;
  },
};

export default HomeScreen;
