let options={
    method:"GET"
}
console.log('connected')

fetch("https://gorest.co.in/public-api/users",options)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log('hi')
    console.log(data)
})