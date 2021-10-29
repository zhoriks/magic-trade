const buttonDelete = document.querySelector('.delete-button');
buttonDelete?.addEventListener('click', async (event) => {
  event.preventDefault();
  const response = await fetch(`http://localhost:3000/del/${event.target.id}`, {
    method: 'DELETE',
  });

  const responseJson = await response.json();
  window.location.href = `http://localhost:3000/profile/${responseJson.userId}`;
});
