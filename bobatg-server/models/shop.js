const { Schema } = require("mongoose")

module.exports = mongoose => {
  const Shop = mongoose.model(
    "shop",
    mongoose.Schema(
      {
        cafeName: String,
        email: String,
        firstName: String,
        lastName: String,
        password: String,
        description: String,
        isActive: { type: Boolean, default: false },
        menu: [
          {
            title: String,
            category: String,
            price: Number,
            description: String
          }
        ]
      }
    )
  );

  return Shop;
}