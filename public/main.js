$(".inputSwitch span").on("click", function() {
  var $this = $(this);
  selectedSpan = $this.text();
  console.log("selectedSpan: ", selectedSpan)
  $this.hide().siblings("input").val($this.text()).show();
  
});

$(".inputSwitch input").on("blur", function() {
	var $this = $(this);
  $this.hide().siblings("span").text($this.val()).show();
  console.log("selectedSpan 2: ", selectedSpan)
  fetch('vendedores/'+$this.val(), {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'value': selectedSpan,
      'name': $this.val()
    })
  })
  .then(res => {
    console.log(res)
    if (res.ok) return res.json()
  })
  .then(data => {
    console.log(data)
    //window.location.reload(true)
  })
}).hide();
/*update.addEventListener('click', function () {
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
})*/