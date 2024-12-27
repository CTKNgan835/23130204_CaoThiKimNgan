function handleLogin(event) {
    event.preventDefault();
    // Handle login logic here
    alert("Đăng nhập thành công!");
    // Redirect to dashboard (dashboard.html)
    window.location.href = 'dashboard2.html';
}
function runCode() {
    alert("Chức năng chạy mã chưa được triển khai.");
}

function clearCode() {
    document.getElementById('codeArea').value = '';
}

function submitCode() {
    alert("Chức năng nộp mã chưa được triển khai.");
    // Display submission results in the #submissionResult div
}

function addTestCase() {
    alert("Chức năng thêm bài kiểm tra chưa được triển khai.");
}
function selectExercise(exerciseId) {
    // Redirect to exercise detail page
    window.location.href = `exercise2.html?id=${exerciseId}`;
}