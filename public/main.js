var update = document.getElementById('update')
var del = document.getElementById('delete')
var getVendedor = document.getElementById('getVendedor')

update.addEventListener('click', function () {
    fetch('vendedores', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': 'Darth Vader',
        'id': '666'
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
})  

del.addEventListener('click', function () {
  fetch('vendedores', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Darth Vader'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  }).
  then(data => {
    console.log(data)
    window.location.reload(true)
  })
})

getVendedor.addEventListener('click', function () {
  fetch('/vendedores/Juan Domingo', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    console.log(res)
    if (res.ok) return res.json()
  }).
  then(data => {
    console.log(data)
    //window.location.reload(true)
  })
})