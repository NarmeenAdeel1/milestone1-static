var _a;
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById("toggleSkillsButton");
    var skillsSection = document.getElementById("Skills");
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
});
(_a = document.getElementById('profileImage')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function (e) {
    var _a;
    var input = e.target;
    var file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
    var preview = document.getElementById('preview');
    if (file)
        preview.src = URL.createObjectURL(file);
});
