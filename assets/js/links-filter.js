(function() {
  var select = document.getElementById('links-filter');
  if (!select) return;

  var items = document.querySelectorAll('.link-item[data-date]');
  var months = [];
  var seen = {};

  items.forEach(function(item) {
    var date = item.getAttribute('data-date');
    if (date && !seen[date]) {
      seen[date] = true;
      months.push(date);
    }
  });

  months.sort().reverse();

  months.forEach(function(month) {
    var parts = month.split('-');
    var date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1);
    var label = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    var option = document.createElement('option');
    option.value = month;
    option.textContent = label;
    select.appendChild(option);
  });

  select.addEventListener('change', function() {
    var value = select.value;
    items.forEach(function(item) {
      if (!value || item.getAttribute('data-date') === value) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
})();
