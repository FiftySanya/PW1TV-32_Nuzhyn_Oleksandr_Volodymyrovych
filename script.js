function calculateTask1() {
    // Отримання даних з форми
    const hp = parseFloat(document.getElementById("hp1").value);
    const cp = parseFloat(document.getElementById("cp1").value);
    const sp = parseFloat(document.getElementById("sp1").value);
    const np = parseFloat(document.getElementById("np1").value);
    const op = parseFloat(document.getElementById("op1").value);
    const wp = parseFloat(document.getElementById("wp1").value);
    const ap = parseFloat(document.getElementById("ap1").value);

    // Коефіцієнти переходу
    const kpc = 100 / (100 - wp);
    const kpt = 100 / (100 - wp - ap);

    // Склад сухої маси
    const hc = hp * kpc;
    const cc = cp * kpc;
    const sc = sp * kpc;
    const nc = np * kpc;
    const oc = op * kpc;
    const ac = ap * kpc;

    // Склад горючої маси
    const ht = hp * kpt;
    const ct = cp * kpt;
    const st = sp * kpt;
    const nt = np * kpt;
    const ot = op * kpt;

    // Нижча теплота згоряння (кДж/кг)
    const qhp_kj = 339 * cp + 1030 * hp - 108.8 * (op - sp) - 25 * wp;
    const qhp = qhp_kj / 1000; // Переведення в МДж/кг
    const qhc = (qhp + 0.025 * wp) * (100 / (100 - wp));
    const qht = (qhp + 0.025 * wp) * (100 / (100 - wp - ap));

    // Виведення результатів
    document.getElementById("task1Result").innerHTML = `
        <h3>Результати:</h3>
        <p><strong>Коефіцієнти:</strong> K<sup>PC</sup> = ${kpc.toFixed(2)}, K<sup>PT</sup> = ${kpt.toFixed(2)}</p>
        <p><strong>Склад сухої маси (%):</strong> H<sup>C</sup> = ${hc.toFixed(2)}, C<sup>C</sup> = ${cc.toFixed(2)}, S<sup>C</sup> = ${sc.toFixed(2)}, N<sup>C</sup> = ${nc.toFixed(2)}, O<sup>C</sup> = ${oc.toFixed(2)}, A<sup>C</sup> = ${ac.toFixed(2)}</p>
        <p><strong>Склад горючої маси (%):</strong> H<sup>T</sup> = ${ht.toFixed(2)}, C<sup>T</sup> = ${ct.toFixed(2)}, S<sup>T</sup> = ${st.toFixed(2)}, N<sup>T</sup> = ${nt.toFixed(2)}, O<sup>T</sup> = ${ot.toFixed(2)}</p>
        <p><strong>Нижча теплота згоряння (МДж/кг):</strong> Q<sup>P</sup> = ${qhp.toFixed(2)}, Q<sup>C</sup> = ${qhc.toFixed(2)}, Q<sup>T</sup> = ${qht.toFixed(2)}</p>
    `;
}

function calculateTask2() {
    // Отримання даних з форми
    const ct = parseFloat(document.getElementById("ct2").value);
    const ht = parseFloat(document.getElementById("ht2").value);
    const ot = parseFloat(document.getElementById("ot2").value);
    const st = parseFloat(document.getElementById("st2").value);
    const qdaf = parseFloat(document.getElementById("qdaf2").value);
    const wp = parseFloat(document.getElementById("wp2").value);
    const ad = parseFloat(document.getElementById("ad2").value);
    const vd = parseFloat(document.getElementById("vd2").value);

    // Склад робочої маси
    const cp = ct * (100 - wp - ad) / 100;
    const hp = ht * (100 - wp - ad) / 100;
    const op = ot * (100 - wp - ad) / 100;
    const sp = st * (100 - wp - ad) / 100;
    const ap = ad * (100 - wp) / 100;
    const vp = vd * (100 - wp) / 100;

    // Теплота згоряння робочої маси
    const qr = qdaf * (100 - wp - ap) / 100 - 0.025 * wp;

    // Виведення результатів
    document.getElementById("task2Result").innerHTML = `
        <h3>Результати:</h3>
        <p><strong>Склад робочої маси (%):</strong> H<sup>P</sup> = ${hp.toFixed(2)}, C<sup>P</sup> = ${cp.toFixed(2)}, S<sup>P</sup> = ${sp.toFixed(2)}, O<sup>P</sup> = ${op.toFixed(2)}, A<sup>P</sup> = ${ap.toFixed(2)}</p>
        <p><strong>Ванадій (мг/кг):</strong> V<sup>P</sup> = ${vp.toFixed(2)}</p>
        <p><strong>Нижча теплота згоряння (МДж/кг):</strong> Q<sup>r</sup> = ${qr.toFixed(2)}</p>
    `;
}