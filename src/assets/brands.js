class Brand {
    constructor(id, title, images, status,others) {
      this.id = id
      this.title = title
      this.images = images
      this.status = status
      this.others = others
    }
}

const brand001 = new Brand (
    "brand001",
    "RicoCat",
    ["https://dojiw2m9tvv09.cloudfront.net/79945/brand/ricocat-1-324x324.png"],
    "Active",
    []
)

const brand002 = new Brand (
    "brand002",
    "Canbo",
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjf8RkPzBM1AKXFr91O9-BX7NvfWHsQ_rgA&s"],
    "Active",
    []
)

const brand003 = new Brand (
    "brand003",
    "mimaskot",
    ["https://admin.inyogo.com/storage/ccutA2r5BTD5jNx5AKZS5kYoqpBRLNUZlJWvYu5N.png"],
    "Active",
    []
)

const brand004 = new Brand (
    "brand004",
    "magnesol",
    ["https://organaperu.vtexassets.com/arquivos/ids/161252-800-auto?v=638350807103030000&width=800&height=auto&aspect=true"],
    "Inactive",
    []
)


const brands = [
    brand001,
    brand002,
    brand003,
    brand004
]

export default brands