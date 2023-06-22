
const deepClone = (obj) => {
    const newObj = {}
    Object.keys(obj).forEach(item => {
      if (typeof newObj[item] === 'object') {
              newObj[item] = deepClone(obj[item])
      }else{
      newObj[item] = obj[item]
      }
    })
    return newObj
  }
  
  
  
  const obj = {
    name: 'hello',
    text: 'world',
    userInfo: {
      name: 'buggz',
      type: 'student'
    }
  }
  
  console.log(deepClone(obj))