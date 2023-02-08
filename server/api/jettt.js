export default defineEventHandler( async (event) => {
    
    //handle query param
    const {name} = getQuery(event)

    //handle post data
    const {age} = await readBody(event)

    // //how to fetch to server privately
    // const {data} = await $fetch('http/asdasdad?apikey=dasdasdasdasdasdas')

    return {
        message : `Hello ${name}! You are ${age} years old`
    }
})