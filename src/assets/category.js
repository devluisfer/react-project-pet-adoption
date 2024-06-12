class Category {
    constructor(id, title, others) {
      this.id = id
      this.title = title
      this.others = others
    }
}

const category001 = new Category (
    "c001",
    "Dogs",
    []
)

const category002 = new Category (
    "c002",
    "Cats",
    []
)


const categories = [
    category001,
    category002
]

export default categories