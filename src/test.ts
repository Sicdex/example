import { Color, Vector3 } from "github.com/octarine-public/sdk/index"

const a = new Color(1, 2, 3, 4)
const b = new Color(1, 2, 3, 4)
const vec = new Vector3()

console.log(a.Equals(b), a instanceof Color, vec)
