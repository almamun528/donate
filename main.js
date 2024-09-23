//! button switch blog button to home button

document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "/blog.html";
});
document.getElementById("btn-home").addEventListener("click", function () {
  window.location.href = "/index.html";
});

//! History Button and Donation button Toggle

document.getElementById("btn-history").addEventListener("click", function () {
  document.getElementById("history-data").classList.remove("hidden");
  document.getElementById("card-section").classList.add("hidden");
});

document.getElementById("btn-donate").addEventListener("click", function () {
  document.getElementById("history-data").classList.add("hidden");
  document.getElementById("card-section").classList.remove("hidden");
});

// !Donate for Flood at Noakhali, Bangladesh Item 1
document
  .getElementById("donate-now-btn-nuakhali")
  .addEventListener("click", function () {
    const addMoney = getValueByIdFromInput("donate-For-nuakhali-input");

    const donarBalance = donationValueAmount("main-balance");

    if (addMoney > donarBalance) {
      alert("you don't have sufficient balance for donating");
      return;
    }
    if (isNaN(addMoney)) {
      alert("Wrong input this only input accepts only Number");
      return;
    }

    const getMoney = donationValueAmount("donation-balance-Nuakhali-has");

    const donaterBalanceISNow = donarBalance - addMoney;

    document.getElementById("main-balance").innerText = donaterBalanceISNow;

    const totalDonationGetNuakhali = addMoney + getMoney;
    document.getElementById("donation-balance-Nuakhali-has").innerText =
      totalDonationGetNuakhali;

    // Transaction section created
    const div = document.createElement("div");

    div.innerHTML = `
            <p class ='p-3'> You donate ${addMoney} tk for <span class ="text-green-500 font-semibold"> Nuakhaki</span>, Transaction date is ${new Date().toLocaleDateString()}</p>
        `;
    document.getElementById("transaction-container").appendChild(div);
  });

//!Donate for Flood Relief in Feni,Bangladesh

document
  .getElementById("donate-btn-for-feni")
  .addEventListener("click", function () {
    const inputMoney = getValueByIdFromInput("donate-feni-input");
    const donarBalance = donationValueAmount("main-balance");

    if (inputMoney > donarBalance) {
      alert("you don't have sufficient balance for donating");
      return;
    }
    if (isNaN(inputMoney)) {
      alert("Wrong input this only input accepts only Number");
      return;
    }

    //function calculation

    const feniHasBalance = donationValueAmount("donation-balance-feni");

    const donaterBalanceISNow = donarBalance - inputMoney;

    document.getElementById("main-balance").innerText = donaterBalanceISNow;

    const totalDonationGetFeni = inputMoney + feniHasBalance;
    document.getElementById("donation-balance-feni").innerText = totalDonationGetFeni

        // Transaction section created
        const div = document.createElement("div");

        div.innerHTML = `
                <p class ='p-3'> You donate ${inputMoney} tk for <span class ="text-blue-500 font-semibold">Feni</span>, Transaction date is ${new Date().toLocaleDateString()}</p>
            `;
        document.getElementById("transaction-container").appendChild(div);
  });
