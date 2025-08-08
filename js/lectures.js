async function loadLectures(){
  try {
    const res = await fetch('lectures.json');
    const data = await res.json();
    const container = document.getElementById('lectures');
    container.innerHTML = '';
    data.forEach(item=>{
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${escapeHtml(item.title)}</h3>
        <small>${escapeHtml(item.subject)}</small>
        <p>${escapeHtml(item.description||'')}</p>
        <p><a href="${item.pdf}" target="_blank" rel="noopener">Open PDF</a></p>
      `;
      container.appendChild(card);
    });
  } catch(e){
    console.error(e);
    document.getElementById('lectures').textContent = 'Failed to load lectures';
  }
}
function escapeHtml(s=''){ return s.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c])); }
loadLectures();
