// nav.js — injects the navbar and sets active link
function renderNav(activePage) {
  const links = [
    { href: 'index.html',        label: '⬡ Dashboard',           id: 'dashboard' },
    { href: 'apply.html',        label: '✦ Apply Leave',          id: 'apply' },
    { href: 'history.html',      label: '◈ Leave History',        id: 'history' },
    { href: 'dept-approval.html',label: '◆ Dept. Approval',       id: 'dept' },
    { href: 'hr-admin.html',     label: '● HR Admin',             id: 'hr' },
  ];

  const navHTML = `
  <nav class="navbar">
    <a href="index.html" class="navbar-brand"><span class="dot"></span>LeaveFlow</a>
    <div class="nav-links">
      ${links.map(l => `<a href="${l.href}" class="nav-link ${activePage === l.id ? 'active' : ''}">${l.label}</a>`).join('')}
    </div>
  </nav>`;

  document.getElementById('nav-root').innerHTML = navHTML;
}

function showToast(msg, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}
