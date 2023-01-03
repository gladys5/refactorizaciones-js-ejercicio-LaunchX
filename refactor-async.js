//Mi promesa
function miFuncion() {
  console.log("algo")
  return "soy data"
}
// miFuncion()
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log("Error")
//   })
try {
  const data = miFuncion()
  console.log(data)
} catch (Error) {
  console.log(Error)
}
