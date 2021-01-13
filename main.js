let vec1 = new Array(20)
let vec2 = new Array(20)
for(let i = 0; i<20; i++){
    let rnd1 = Math.floor(Math.random() * (30 - 1)) + 1
    let rnd2 = Math.floor(Math.random() * (30 - 1)) + 1
    vec1[i] = rnd1
    vec2[i] = rnd2
}

vec1.sort((a, b) => a-b)
vec2.sort((a, b) => a-b)
console.log(vec1, vec2)

const getOrderedArray = (primero = [], segundo = []) => {
    let vector = []
    primero.forEach((e) => {
        if(e <= segundo.primero()){
            vector.push(e)
        } else{
            let i
            for(i=0; i<segundo.length; i++){
                if(segundo[i]<=e){
                    vector.push(segundo[i])
                } else{
                    break
                }
            }
            segundo.splice(0, i)
            vector.push(e)
        }
    })
    return vector
}

let vec3 = getOrderedArray(vec1, [...vec2]) 
console.log(vec3)