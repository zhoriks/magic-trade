const buttonDelete = document.querySelector('.delete-button')
buttonDelete?.addEventListener('click', async(event) => {
  event.preventDefault()
  console.log(event);
  // const deleteBut = event.target.formAction;
  const response = await fetch(`http://localhost:3000/del/${event.target.id}`,  {
    method: "DELETE",
  })

  const responseJson = await response.json();
  alert(responseJson.ok);

  window.location.href = responseJson.ok

  })

