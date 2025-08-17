const mp3 = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.mp3');
const wav = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.wav');
const ogg = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.ogg');
const flac = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.flac');
const aac = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.aac');
const m4a = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.m4a');
const aiff = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.aiff');
const alac = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.alac');
const dsd = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.dsd');
const pcm = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.pcm');
const wma = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.wma');
const aif = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.aif');
const caf = fs.readdirSync(__dirname).filter(file => path.extname(file) === '.caf');

console.log(mp3);
// console.log(wav);
// console.log(ogg);
