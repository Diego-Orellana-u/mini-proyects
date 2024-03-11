function canReconfigure(from, to){
  if(typeof from !== 'string'){
    throw new Error('First parameter is missing')
  } 

  if(typeof to !== 'string'){
    throw new Error('second parameter is missing')
  }
  const isSameLength = from.length !== to.length
  if(isSameLength){
    return false
  }

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  
  if(!hasSameUniqueLetters) return false

  const transformations = {}

  for(let i = 0; i < from.length; i++){
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]
    console.log(transformations)
    if(storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}



describe('canReconfigure', () => {
  // test('should be a function', () => {
  //   expect(typeof canReconfigure).toBe('function')
  // })

  test('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  test('should throw if second parameter is not a string', () => {
    expect(() => canReconfigure("hola", 2)).toThrow()
  })

  test('should return a bolean', () => {
    expect(typeof canReconfigure("hola","chao")).toBe('boolean')
  })

  test('should return false if arguments have different length', () => {
    expect(canReconfigure("hola", "min")).toBe(false)
  })

  test('should return false if "to" have repeated letters', () => {
    expect(canReconfigure("hol", "mii")).toBe(false)
  })

  test('should return true if "to" doesnt have repeated letters', () => {
    expect(canReconfigure("hol", "miu")).toBe(true)
  })

  test('should return false if the transformations doesnt keep the order', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })

})