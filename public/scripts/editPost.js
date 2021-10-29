if (document.editForm) {
  document.editForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {
      action,
      postCardname,
      postCost,
      postDamage,
      postCity,
    } = event.target;

    const response = await fetch(action, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: postCardname.value,
        cost: postCost.value,
        damage: postDamage.value,
        city: postCity.value,
      }),
    });
    const responseJson = await response.json();
    window.location.href = `http://localhost:3000/profile/${responseJson.userId}`;
  });
}
