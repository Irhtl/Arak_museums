<script>
document.getElementById('searchBtn').addEventListener('click', function() {
  const input = document.getElementById('searchInput').value.trim().toLowerCase();
  const cards = document.querySelectorAll('.neumorphic_card');
  let found = false;

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(input)) {
      card.style.display = 'block';  // نمایش کارت
      found = true;
    } else {
      card.style.display = 'none';   // مخفی کردن کارت
    }
  });

  const result = document.getElementById('searchResult');
  if (found && input !== "") {
    result.innerHTML = `نتیجه جستجو برای: <strong>${input}</strong>`;
  } else if (input !== "") {
    result.innerHTML = `موردی یافت نشد برای: <strong>${input}</strong>`;
  } else {
    result.innerHTML = '';
    cards.forEach(card => card.style.display = 'block'); // همه کارت‌ها رو نشون بده
  }
});
</script>