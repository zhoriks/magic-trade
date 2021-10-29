if (document.editForm) {
  document.editForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const response = await fetch(`${post.id}/edit`)
  })
}
