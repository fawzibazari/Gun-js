import GUN from 'gun';
import'gun//sea';
import'gun/axe';

//initialise gun js it's pretty good by the way 😁
export const db = GUN();

export const user = db.user().recall({sessionStorage: true});

export const username = '';

user.get('alias').on(v => username.set(v))

db.on('auth',async(event) => {
const alias = await user.get('alias');
username.set(alias);

console.log(alias);
})