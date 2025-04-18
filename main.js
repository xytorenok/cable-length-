function roundToTwo(num) {
  return Math.round(num * 100) / 100;
}

function createMultipliersTable(label, value) {
  const translatedLabel = label === "Black" ? "Чорний" : label === "Blue" ? "Синій" : label;

  let html = `<h4>${translatedLabel} від 13 до 30 см:</h4><ul>`;
  for (let i = 1; i <= 15; i++) {
    const product = roundToTwo(i * value);
    if (product >= 13 && product <= 30) {
      html += `<li>${i} × ${value} = ${product}</li>`;
    }
  }
  html += "</ul>";
  return html;
}

function calculate() {
  const y = parseFloat(document.getElementById("y").value);
  const z = parseFloat(document.getElementById("z").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(y) || isNaN(z)) {
    resultDiv.innerHTML = "<p style='color:red;'>Пожалуйста, введите оба числа.</p>";
    return;
  }

  const x = (y + z) / 2;
  const xRounded = roundToTwo(x);

  const black = roundToTwo(299.792 / x / 2 * 0.66 * 100);
  const blue = roundToTwo(299.792 / x / 2 * 0.7 * 100);

  let html = `
    <p><strong>Середина:</strong> ( ${y} + ${z} ) / 2 = ${xRounded}</p>
    <p><strong>Чорний:</strong>  299.792 / ${xRounded} / 2 * 0.66 * 100 = ${black}</p>
    <p><strong>Синій:</strong>  299.792 / ${xRounded} / 2 * 0.7 * 100 = ${blue}</p>
    <p><strong>Довжина:</strong><br>Чорний: ${black} см &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Синій: ${blue} см</p>
  `;

  if (black < 15) html += createMultipliersTable("Black", black);
  if (blue < 15) html += createMultipliersTable("Blue", blue);

  resultDiv.innerHTML = html;
}
