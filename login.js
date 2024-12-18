document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // 폼 제출 중단

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // localStorage에서 사용자 정보 확인
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        alert("Login successful!");
        localStorage.setItem("currentUser", username); // 현재 로그인한 유저
        window.location.href = "search.html"; // 로그인 성공 시 대시보드로 이동
    } else {
        alert("Invalid username or password.");
    }
});
