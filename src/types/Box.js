const Box = x => ({
  map: f => Box(f(x)),
  fold: _ => x
})

export default Box
