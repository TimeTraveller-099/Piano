let keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener('mousedown', () => playNote(key.dataset.key));
});

function playNote(keyName) {
    const noteAudioSrc = document.getElementById(keyName);
    noteAudioSrc.currentTime = 0;
    noteAudioSrc.play();
}


// Integrating Keyboard Functionality to my Piano
whiteKeys = 
{   1: ["C1", "D1", "E1", "F1", "G1", "A1", "B1"],
    2: ["C2", "D2", "E2", "F2", "G2", "A2", "B2"],
    3: ["C3", "D3", "E3", "F3", "G3", "A3", "B3"],
    4: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"],
    5: ["C5", "D5", "E5", "F5", "G5", "A5", "B5"],
    6: ["C6", "D6", "E6", "F6", "G6", "A6", "B6"]
}

blackKeys = 
{
    1: ["Cs1", "Ds1", "Fs1", "Gs1", "As1"],
    2: ["Cs2", "Ds2", "Fs2", "Gs2", "As2"],
    3: ["Cs3", "Ds3", "Fs3", "Gs3", "As3"],
    4: ["Cs4", "Ds4", "Fs4", "Gs4", "As4"],
    5: ["Cs5", "Ds5", "Fs5", "Gs5", "As5"],
    6: ["Cs6", "Ds6", "Fs6", "Gs6", "As6"]
}

scales = {
    C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    Cs: ['Cs', 'Ds', 'F', 'Fs', 'Gs', 'As'],
    D: ['D', 'E', 'Fs', 'G', 'A', 'B', 'Cs'],
    Ds: ['Ds', 'F', 'G', 'Gs', 'As', 'C', 'D'],
    E: ['E', 'Fs', 'Gs', 'A', 'B', 'Cs', 'Ds'],
    F: ['F', 'G', 'A', 'As', 'C', 'D', 'E'],
    Fs: ['Fs', 'Gs', 'As', 'B', 'Cs', 'Ds', 'F'],
    G: ['G', 'A', 'B', 'C', 'D', 'E', 'Fs'],
    Gs: ['Gs', 'As', 'Bs', 'Cs', 'Ds', 'Es', 'G'],
    A: ['A', 'B', 'Cs', 'D', 'E', 'Fs', 'Gs'],
    As: ['As', 'C','D', 'Ds', 'F', 'G', 'A'],
    B: ['B', 'Cs', 'Ds', 'E', 'Fs', 'Gs', 'As']
}

// document.addEventListener('keydown', (key) => {
//     console.log(key.key);
// })


// C-Maj Key = Default Key
c = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

for (let i = 0; i < c.length; i++) {
    const element = c[i];
    if (element in keys.forEach()) {

    }
}

console.log(keys.forEach());