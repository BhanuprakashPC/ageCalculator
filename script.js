function calculateAge() {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dob) {
    result.innerHTML = "⚠️ Please enter your date of birth!";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  if (birthDate > today) {
    result.innerHTML = "🚫 Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const diffMS = today - birthDate;
  const totalDays = Math.floor(diffMS / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(diffMS / (1000 * 60 * 60));
  const totalMinutes = Math.floor(diffMS / (1000 * 60));

  result.innerHTML = `
    🧓 You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.<br><br>
    📆 That's <strong>${totalDays}</strong> days<br>
    🕐 <strong>${totalHours}</strong> hours<br>
    ⏱️ <strong>${totalMinutes}</strong> minutes lived so far!
  `;
}
