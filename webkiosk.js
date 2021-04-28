function fillForm(creds){
    // fill institute
    document.querySelectorAll('select[name="InstCode"]')[0].value = 'JIIT'
    // fill member type
    document.querySelectorAll('select[name="UserType101117"]')[0].value = 'S'
    // fill enroll
    document.querySelectorAll('input[name="MemberCode"]')[0].value = creds.enroll
    // fill dob
    document.querySelectorAll('input[name="DATE1"]')[0].value = creds.dob
    // fill pass
    document.querySelectorAll('input[name="Password101117"]')[0].value = creds.pass
    // fill captcha
    document.getElementById("txtcap").value = document.querySelectorAll('font[face="casteller"]')[0].innerHTML
}

const url = chrome.runtime.getURL('data/credentials.json');

fetch(url)
  .then(response => response.json())
  .then(creds => fillForm(creds));
