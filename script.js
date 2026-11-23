const sessionSelect = document.getElementById("session");
const teamSelect = document.getElementById("team");
const downloadButton = document.getElementById("download");
const errorMsg = document.getElementById("invalid-team");

downloadButton.addEventListener("click", () => {
    const session = sessionSelect.value;
    const team = teamSelect.value;

    if (team === '') {
        errorMsg.textContent = 'Please select a team!';
    } else {
        const url = `${session}/${team}.ics`;

        window.location.href = url;
    }
})

teamSelect.addEventListener("input", () => {
    errorMsg.textContent = '';
})