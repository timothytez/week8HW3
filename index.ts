function takeAny(v: any){
    return v
  }


  const foo = takeAny('string')
  const foo2 = takeAny(['string'])

  function takeGeneric<V>(arg: V){
    return arg
  }

  console.log(takeGeneric('astring').charAt(0))

  takeGeneric([1,2,3]).length

  const genericArrow = <T>(arg: T) => arg

  genericArrow('abc').concat('def')

  genericArrow(12).toString()

  let i = 0

  function addId<GEN extends object>(person: GEN){
    return {...person, id: ++i}
  }

  console.log(addId({name:'sean',age:28}).name)


  // console.log(addId('abc'))


  /* 
    build a func
    takes post ob
    use generics that extends
    custom Post type
    fields: body, timestamp
  */

function returnLength<T>(agg: T[]):number {
  return agg.length
}

console.log(returnLength([1,2,3]))


function returnGenerics<T>(agg: Array<T>): Array<T> {
  return agg
}

const aaray = returnGenerics(['foo','bar','test', [21]])

for(const e of aaray){
 console.log( e.slice())
}

class WithGenerics<T>{

  constructor(public genericProp: T){}

  getType():string{
    return typeof this.genericProp
  }  
}

const bar = new WithGenerics(21)
console.log(bar.getType())

bar.genericProp.toString()

class WithMultipleGenerics<K,V>{
  constructor(public key: K, public v:V){}

  getKeyType():string{
    return typeof this.key
  }
  getVType():string{
    return typeof this.v
  }
}

const bar2 = new WithMultipleGenerics('abc', [1,2,3])

console.log(bar2.getKeyType())

console.log(bar2.getVType())

bar2.key.endsWith('a')

console.log(bar2.v.entries())


interface WithLength {
  length: number
}

function getLength<T extends WithLength>(agg: T):[T, number]{
  return [agg, agg.length]
}

getLength([1,2,3])[0].filter(e => e===1)


let userKey: keyof User

userKey = 'username'
userKey = 'email'
// userKey = 'address'

type PartialUser = {
  [key in keyof User]?:User[key]
}

const user: PartialUser = {
  username: 'seanc',
  email: 'seanc@ct.com'
}

user.email = 'dylans@ct.com'

type ReadOnlyUser = {
  readonly [k in keyof User]: User[k]
}

const viewUser: ReadOnlyUser = {
  username: 'seanc',
  email: 'seanc@ct.com',
  password: '123'
}

// viewUser.password = '321'

interface User {
  username: string
  email: string
  password: string
  token?: string
}

function takeOptionalUser(user: Partial<User>){
  console.log(user)
}

takeOptionalUser({
  username:'dylans',
  email: 'dylans@ct.com'
})

function userWithToken(user: Required<User>){
  console.log(user)
}

userWithToken({
  username:'dylans',
  email: 'dylans@ct.com',
  password: '123',
  token: '45379807543dkfg3'
})

const readOnlyUser: Readonly<User> = {
  username:'dylans',
  email: 'dylans@ct.com',
  password: '123',
  token: '45379807543dkfg3'
}

// readOnlyUser.token = '3894710293847kfhdlaksdf'