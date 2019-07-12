function formatTime (minutes) {
    const day = 1440;
    const hour = 60;    
    let days = ~~ (minutes / day);
    let hours = ~~ ((minutes - (day * days)) / hour);
    let mnts = minutes - (day * days) - (hour * hours);    
    return `${days} day(s) ${hours} hour(s) ${mnts} minute(s)`;    
}

formatTime(3564);