
const dispenserCapacity = 1000; // ml
const lowWarning = 100;
const cupCapacity = 100; // ml

var dispenserRemaining = 400; // ml
var cups = ['Jack', 'Sally', 'Henry', 'Mike', 'Phil', 'Mary', 'Bob', 'Harry'];

console.log('Initiating dispenser...');
console.log('');
console.log('');

cups.forEach(cup => {
    console.log(dispenserRemaining + ' of ' + dispenserCapacity + ' remaining.');

    if (dispenserRemaining <= lowWarning) {
        console.log(' __________________________________');
        console.log('|                                  |');
        console.log('| Dispenser is low, please refill! |');
        console.log('|__________________________________|');
        console.log();
    }
    if (dispenserRemaining >= cupCapacity) {
        console.log('cup ' + cup + ' contains 0 ml');
        console.log('Filling cup ' + cup);
        console.log();
        console.log('\\        /    =>     \\________/');
        console.log(' \\      /     =>      \\ o    /');
        console.log('  \\____/      =>       \\____/');
        console.log();
        dispenserRemaining = dispenserRemaining - cupCapacity;
        console.log('cup ' + cup + ' now contains ' + cupCapacity + ' ml');
        console.log('');
    }
    else {
        console.log('Cup ' + cup + ' can not be filled');
        console.log('')
    }
    
})
console.log('');
//console.log('All cups filled successfully!');
console.log('');
console.log(dispenserRemaining + ' ml remaining');
console.log('')

