document.addEventListener('DOMContentLoaded', function() {

  const loginArea = document.getElementById('loginArea');
  const dashboard = document.getElementById('memberDashboard');
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const displayNameSpan = document.getElementById('displayName');

  function doLogin() {
    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();
    if (user && pass === 'scoliosis') {   
      loginArea.style.display = 'none';
      dashboard.style.display = 'block';
      displayNameSpan.textContent = user || 'Star';
    } else {
      alert('demo credentials: any username / password = "scoliosis"');
    }
  }
  if (loginBtn) loginBtn.addEventListener('click', doLogin);

  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      loginArea.style.display = 'block';
      dashboard.style.display = 'none';
    });
  }

  const submitQuiz = document.getElementById('submitQuiz');
  if (submitQuiz) {
    submitQuiz.addEventListener('click', function() {
      let score = 0;
      const q1 = document.querySelector('input[name="q1"]:checked');
      const q2 = document.querySelector('input[name="q2"]:checked');
      if (q1 && q1.value === 'teens') score++;
      if (q2 && q2.value === 'shoulder') score++;
      document.getElementById('quizScore').innerText = `you got ${score}/2 ⭐`;
    });
  }

  const checkPosture = document.getElementById('checkPosture');
  if (checkPosture) {
    checkPosture.addEventListener('click', function() {
      const c1 = document.getElementById('sign1').checked;
      const c2 = document.getElementById('sign2').checked;
      const c3 = document.getElementById('sign3').checked;
      const count = [c1, c2, c3].filter(Boolean).length;
      let msg = '';
      if (count >= 2) msg = '⚠️ You show several signs — consider a professional screening.';
      else if (count === 1) msg = '❗ one sign present; keep monitoring and consult if worried.';
      else msg = '✅ no common signs detected. stay aware!';
      document.getElementById('postureResult').innerText = msg;
    });
  }

  // impact counter animation (simple)
  const peopleSpan = document.getElementById('peopleReached');
  if (peopleSpan) {
    let count = 12800;
    let current = 12500;
    const step = setInterval(() => {
      if (current >= count) {
        peopleSpan.innerText = count.toLocaleString();
        clearInterval(step);
      } else {
        current += 35;
        peopleSpan.innerText = current;
      }
    }, 10);
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for reaching out! We will get back to you via email.');
      this.reset();
    });
  }
});
