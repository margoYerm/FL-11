/*const r = [
    'Choose a roulette pocket number from 0 to ',
    'Attempts left: ',
    'Total prize: ',
    'Possible prize on current attempt: ',
    'Please, enter a number of pocket on which the ball could land'
]

let ask = confirm('Do you want to play a game?');
if (!ask) {
    alert('You did not become a billionaire, but can.');
} else {
    let minInt = 0;
    let max = 8;
    const one = 1;
    //const two = 2;
    //const incremInt = 4;
    let c = 3;
    let bingo = Math.floor(Math.random() * (max - minInt + one)) + minInt;
    let y1 = 100;
    let y2 = 50;
    let y3 = 25;
    let sum = 0;
    let askAgain = 'Do you want to play again?';
    console.log(bingo);
    let uI = + (prompt(` ${r[0]} ${max} \n ${r[1]} ${c} \n ${r[2]} ${sum}\$ \n ${r[3]} ${y1}\$ \n \n  ${r[4]}`, ''));
    
    for (let i = 2; i >= 0; i--) {                
        if (uI === bingo && i === 2) {            
            sum = y1;            
            let winnerMassage = alert(`Congratulation, you won! Your prize is: ${sum} \$.`); 
            c = 3;
            let playContinue1 = confirm('Do you want to continue?');
            if (!playContinue1) {
                alert(`Thank you for your participation. Your prize is ${sum}`); 
                confirm(askAgain);
                break;
            } else {
                //if user winn and wont continue plaing
                
            }
        } else if (uI === bingo && i === 1) { 
            uI = + (prompt(` ${r[0]} ${max} \n ${r[1]} ${c} \n ${r[2]} ${sum}\$ \n ${r[3]} ${y2}\$ \n \n  ${r[4]}`, ''));
            sum = y2;            
            let winnerMassage = alert(`Congratulation, you won! Your prize is: ${sum} \$.`); 
            c = 3;
            let playContinue2 = confirm('Do you want to continue?');
            if (!playContinue2) {
                alert(`Thank you for your participation. Your prize is ${sum}`); 
                confirm(askAgain);
                break;
            } else {
                //if user winn and wont continue plaing
                
            }
        } else if (uI === bingo && i === 0) {   
            uI = + (prompt(` ${r[0]} ${max} \n ${r[1]} ${c} \n ${r[2]} ${sum}\$ \n ${r[3]} ${y3}\$ \n \n  ${r[4]}`, ''));
            sum = y3;             
            let winnerMassage = alert(`Congratulation, you won! Your prize is: ${sum} \$.`); 
            c = 3;
            let playContinue3 = confirm('Do you want to continue?');
            if (!playContinue3) {
                alert(`Thank you for your participation. Your prize is ${sum}`); 
                confirm(askAgain);
                break;
            } else {
                //if user winn and wont continue plaing
                
            }
        } else if (uI !== bingo && i > 0) {
            c --;
            if (i === 2) {
                
                uI = + (prompt(` ${r[0]} ${max} \n ${r[1]} ${c} \n ${r[2]} ${sum}\$ \n ${r[3]} ${y2}\$  \n \n  ${r[4]}`, ''));
            } else if (i === 1) {
                c --;
                uI = + (prompt(` ${r[0]} ${max} \n ${r[1]} ${c} \n ${r[2]} ${sum}\$ \n ${r[3]} ${y3}\$ \n \n  ${r[4]}`, ''));
            } else {
                alert(`Thank you for your participation. Your prize is ${sum}.`);
                confirm(askAgain);
            }
            
            continue;
        } else {
            alert(`Thank you for your participation. Your prize is ${sum}.`);
            confirm(askAgain);
        }
    }
}*/
