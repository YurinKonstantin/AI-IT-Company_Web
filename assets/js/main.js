(function () {
  // Theme
  var saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  var btn = document.getElementById('themeBtn');
  if (btn) btn.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
    btn.textContent = cur === 'dark' ? '☀️' : '🌙';
  });
  if (btn) btn.textContent =
    document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';

  // Auto-fill GitHub release download link
  var REPO = 'YOURUSER/AI_IT_Company'; // ← замените
  document.querySelectorAll('[data-gh-latest]').forEach(function (a) {
    a.href = 'https://github.com/' + REPO + '/releases/latest';
  });
  document.querySelectorAll('[data-gh-releases]').forEach(function (a) {
    a.href = 'https://github.com/' + REPO + '/releases';
  });
  document.querySelectorAll('[data-gh-repo]').forEach(function (a) {
    a.href = 'https://github.com/' + REPO;
  });
})();
