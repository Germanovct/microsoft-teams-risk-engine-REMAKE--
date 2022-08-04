(async() => {
  const { value: formValues } = await Swal.fire({
    title: 'NEWSLETTER SIGNUP',
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="Full Name">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Your company email here">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }
})()

  
 