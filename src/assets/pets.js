class Pets {
    constructor(id, name, type, race, gender, age, size, direction, description, images, status, others) {
      this.id = id
      this.name = name
      this.type = type
      this.race = race
      this.gender = gender
      this.age = age
      this.size = size
      this.direction = direction
      this.description = description
      this.images = images
      this.status = status
      this.others = others
    }
}

const dog001 = new Pets (
    "d001",
    "Max",
    "Dog",
    "Pitbull",
    "Male",
    2,
    "Medium",
    "East",
    "I am a good boy",
    ["https://i.pinimg.com/564x/14/42/c7/1442c7ecf3e59f32d69983c60ea5662a.jpg","https://i.pinimg.com/564x/9a/6b/39/9a6b398e99616ed6bb4c3aab27d5d356.jpg"],
    "Adopted",
    []
)


const dog002 = new Pets (
    "d002",
    "Rex",
    "Dog",
    "Snauser",
    "Male",
    1,
    "Small",
    "West",
    "I am a good boy",
    ["https://i.pinimg.com/564x/00/41/a3/0041a34a9b0c70a2e4686ba41fef46a3.jpg","https://i.pinimg.com/564x/9a/9e/15/9a9e1536572abdb197ba7324190b6801.jpg"],
    "Adopted",
    []
)

const cat001 = new Pets (
    "c001",
    "Michael",
    "Dog",
    "Siamés",
    "Male",
    1,
    "Small",
    "West",
    "I am funny",
    ["https://i.pinimg.com/564x/fc/ec/9c/fcec9c4b2ef7a628245089c1807b7bac.jpg","https://i.pinimg.com/564x/f4/65/f8/f465f8b2e3537d1e20396a3613aebf46.jpg"],
    "Waiting",
    []
)

const cat002 = new Pets (
    "c002",
    "Nina",
    "Dog",
    "Siamés",
    "Female",
    2,
    "Small",
    "West",
    "I am funny",
    ["https://i.pinimg.com/564x/99/46/10/99461018c71c412a4e02ef5e633d6f90.jpg","https://i.pinimg.com/564x/88/84/82/88848236c05697421aee7c0214875eb2.jpg"],
    "Adopted",
    []
)

const pets = [
    dog001,
    dog002,
    cat001,
    cat002
]

export default pets