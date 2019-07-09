const mailLength = 6;
const newPLength = 5;
const userMail = 'user@gmail.com';
let userP = 'UserPass';
const adminMail = 'admin@gmail.com';
let adminP = 'AdminPass';
let askMail = prompt('Please, input yuor e-mail.', '');

if (askMail === null) {
    alert('Canceled.');
} else if (askMail.length < mailLength) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if (askMail === userMail || askMail === adminMail) {
    let askPass = prompt('Please, input yuor password.', '');
    if (askPass === null) {
        alert('Canceled.');
    } else if (askPass === userP || askPass === adminP) {
        let changeP = confirm('Do you want to change your password?');
        if (!changeP) {
            alert('You have failed the change.');
        } else {
            let oldP = prompt('Please, input the old password', '');
            if (oldP === userP || oldP === adminP) {
                let newP = prompt('Please, input the new password', '');
                if (newP.length < newPLength) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let newPAgain = prompt('Please, input the new password again', '');
                    if (newPAgain !== newP) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert("It's wrong old password.");
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}