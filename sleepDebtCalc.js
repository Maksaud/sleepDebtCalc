const getSleepHours = (day) =>{
    switch (day){
        case 'monday': return 8;
        case 'tuesday': return 8;
        case 'wednesday': return 8;
        case 'thursday': return 8;
        case 'friday': return 8;
        case 'saturday': return 8;
        case 'sunday': return 8;
    }
}

const getActualSleepHours = ()=>{
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

const getIdealSleepHours = ()=>{
    const idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt = ()=>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours == idealSleepHours){
        console.log('You got enough sleep')
    } else if (actualSleepHours > idealSleepHours){
        console.log('You got more sleep than needed' + (actualSleepHours - idealSleepHours) + 'hours extra sleep')
    } else if (actualSleepHours < idealSleepHours){
        console.log('you dont get enough sleep' + (idealSleepHours - actualSleepHours) + "Hours needed")
    }
}

console.log(calculateSleepDebt())