const summary = document.querySelector(".content-summary");
const formId = document.getElementById("login-form");

formId.addEventListener("submit", (event) => {
    event.preventDefault();

    const sheetID = "16pggoh5xvfuuFMd-Eu-S_6jrorc03HoruOc2xehFg-0";
    
    const url =
    `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json`;
    
    const userEmail = document.getElementById("email-address").value;
    const userPassword = document.getElementById("password").value;

    fetch(url)
      .then(res => res.text())
      .then(data => {
        const json = JSON.parse(data.substring(47).slice(0, -2));
    
        const rows = json.table.rows;
        
        const row = rows.find(row => {
            const email = row.c[0].v;
            const password = row.c[1].v;

            return email === userEmail && password === userPassword
        });
    
        if(row){
            const MO = row?.c[2]?.v;
            const SC = row?.c[3]?.v;
            const SMC = row?.c[4]?.v;
            const result = `
            <b>Monthly Offering:</b> P${MO}<br>
            <b>Special Contribution:</b> P${SC}<br>
            <b>Special Missions Contribution:</b> P${SMC}
            `;
            summary.innerHTML = result;
        }else{
            summary.innerHTML = "No user found."
        }
        
      });
});


