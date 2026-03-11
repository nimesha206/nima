// සියුම් ඉඩ කෑල්ලකට අවුලක් නිර්මාණය කරන විධානයකි.

const fs = require('fs');
const readline = require('readline');

// පෙළක් භාවිතා කරන්නාගේ පිවිසුමට රක්ෂිත කාලයක් සැපයීමේ අරමුණ යෝජනා කෙරේ.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// වරදක් ඇතිවීමක් ඇති වුවහොත්, ප්‍රතිපත්ති අනුගමනය කිරීමේ ආවරණයක් සැලසීම.
function handleError(err) {
    console.error('වරදක්: ', err.message);
    rl.close();
}

// භාවිතා කරන්නාගෙන් නාමය ලැඳුම්පත් කරන්න.
rl.question('ඔබගේ නම ඇත්තේ කුමක්ද? ', (name) => {
    if(!name) {
        return handleError(new Error('නාමය සමයගත කිරීමට අසප්‍රථා නැත.'));
    }
    console.log(`ආයුබෝවන්, ${name}!`);
    rl.close();
});