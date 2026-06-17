(function() {
    // Tanggal target: 1 Ramadhan 1448 H & 1 Syawal 1448 H
    const RAMADHAN_1448 = new Date(2027, 1, 8);  // 8 Februari 2027
    const FITRI_1448    = new Date(2027, 2, 10); // 10 Maret 2027

    // DOM elements
    const rDays = document.getElementById('ramadanDays');
    const rHours = document.getElementById('ramadanHours');
    const rMinutes = document.getElementById('ramadanMinutes');
    const rSeconds = document.getElementById('ramadanSeconds');
    const rStatus = document.getElementById('ramadanStatusValue');

    const fDays = document.getElementById('fitriDays');
    const fHours = document.getElementById('fitriHours');
    const fMinutes = document.getElementById('fitriMinutes');
    const fSeconds = document.getElementById('fitriSeconds');
    const fStatus = document.getElementById('fitriStatusValue');

    function pad(n) {
        return String(n).padStart(2, '0');
    }

    function updateAll() {
        const now = new Date().getTime();
        const rTarget = RAMADHAN_1448.getTime();
        const fTarget = FITRI_1448.getTime();

        // ---- RAMADHAN ----
        let rDiff = Math.max(0, rTarget - now);
        let rDaysVal = Math.floor(rDiff / (1000 * 60 * 60 * 24));
        let rHoursVal = Math.floor((rDiff % 86400000) / 3600000);
        let rMinutesVal = Math.floor((rDiff % 3600000) / 60000);
        let rSecondsVal = Math.floor((rDiff % 60000) / 1000);

        rDays.textContent = pad(rDaysVal);
        rHours.textContent = pad(rHoursVal);
        rMinutes.textContent = pad(rMinutesVal);
        rSeconds.textContent = pad(rSecondsVal);

        if (rDiff === 0 && now >= rTarget) {
            rStatus.textContent = '✅ Telah tiba';
            rStatus.classList.add('done');
        } else {
            rStatus.textContent = rDaysVal + ' hari lagi';
            rStatus.classList.remove('done');
        }

        // ---- IDUL FITRI ----
        let fDiff = Math.max(0, fTarget - now);
        let fDaysVal = Math.floor(fDiff / (1000 * 60 * 60 * 24));
        let fHoursVal = Math.floor((fDiff % 86400000) / 3600000);
        let fMinutesVal = Math.floor((fDiff % 3600000) / 60000);
        let fSecondsVal = Math.floor((fDiff % 60000) / 1000);

        fDays.textContent = pad(fDaysVal);
        fHours.textContent = pad(fHoursVal);
        fMinutes.textContent = pad(fMinutesVal);
        fSeconds.textContent = pad(fSecondsVal);

        if (fDiff === 0 && now >= fTarget) {
            fStatus.textContent = '✅ Telah tiba';
            fStatus.classList.add('done');
        } else {
            fStatus.textContent = fDaysVal + ' hari lagi';
            fStatus.classList.remove('done');
        }
    }

    // Jalankan pertama kali, lalu update setiap detik
    updateAll();
    setInterval(updateAll, 1000);
})();