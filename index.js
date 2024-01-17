const greetings = 'Hello world!';
console.log('Hello world!');

function greet() {
  console.log(greetings);
}

function greet2(name) {
  console.log(greetings + name);
}

greet();
greet2('Victor');

const animals = [
  { id: 1, firstName: 'Ben', type: 'Elephant', accessory: 'home' },
  { id: 2, firstName: 'Jack', type: 'Cat', accessory: 'comb' },
  { id: 3, firstName: 'Seed', type: 'Dog', accessory: 'bike' },
  { id: 4, firstName: 'Jenny', type: 'Rabbit', accessory: 'home' },
  { id: 5, firstName: 'Mart', type: 'Cat', accessory: 'car' },
];

await fetch('https://pure-farm.vercel.app/api/users/register', {
  headers: {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    pragma: 'no-cache',
    'sec-ch-ua':
      '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
  },
  referrer: 'https://pure-farm.vercel.app/register',
  referrerPolicy: 'strict-origin-when-cross-origin',
  body: '{"name":"Victor","email":"testing@mail.com","password":"asdf12345"}',
  method: 'POST',
  mode: 'cors',
  credentials: 'omit',
});
