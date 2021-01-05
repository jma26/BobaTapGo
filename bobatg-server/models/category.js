const { Schema } = require("mongoose")

module.exports = mongoose => {
  const Category = mongoose.model(
    "category",
    mongoose.Schema(
      {
        type: Schema.Types.ObjectId,
        name: String,
        drinks: [
          {
            title: String,
            price: Number,
            description: String
          }
        ]
      }
    )
  );

  return Category;
}