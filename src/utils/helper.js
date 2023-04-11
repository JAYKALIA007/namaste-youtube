export const randomMessageGenerator = num => {
   let res = '';
   for(let i = 0; i < num; i++){
      const random = Math.floor(Math.random() * 27);
      res += String.fromCharCode(97 + random);
   };
   return res;
};
// console.log(randomNameGenerator(num));

var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher',
    'Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench',
    'Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

export function generateRandomNames() {
   return nameList[Math.floor( Math.random() * nameList.length )];
   
};

export function convertToInternationalCurrencySystem (labelValue) {

   // Nine Zeroes for Billions
   return Math.abs(Number(labelValue)) >= 1.0e+9

   ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
   // Six Zeroes for Millions 
   : Math.abs(Number(labelValue)) >= 1.0e+6

   ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
   // Three Zeroes for Thousands
   : Math.abs(Number(labelValue)) >= 1.0e+3

   ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

   : Math.abs(Number(labelValue));

}

export const timeAgo = (date) => {
   const seconds = Math.floor((new Date() - date) / 1000);
 
   let interval = Math.floor(seconds / 31536000);
   if (interval > 1) {
     return interval + ' years ago';
   }
 
   interval = Math.floor(seconds / 2592000);
   if (interval > 1) {
     return interval + ' months ago';
   }
 
   interval = Math.floor(seconds / 86400);
   if (interval > 1) {
     return interval + ' days ago';
   }
 
   interval = Math.floor(seconds / 3600);
   if (interval > 1) {
     return interval + ' hours ago';
   }
 
   interval = Math.floor(seconds / 60);
   if (interval > 1) {
     return interval + ' minutes ago';
   }
 
   if(seconds < 10) return 'just now';
 
   return Math.floor(seconds) + ' seconds ago';
 };