const { Schema } = require("mongoose")

module.exports = mongoose => {
  const Shop = mongoose.model(
    "shop",
    mongoose.Schema(
      {
        name: String,
        description: String,
        isActive: { type: Boolean, default: false },
        menu: [{ types: Schema.Types.ObjectId, ref: 'category'}]
      }
    )
  )
}