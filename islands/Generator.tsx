import { useState } from "preact/hooks";

/* Default diccionary */
const default_dic = {
  a: "Alpaca",
  b: "Beaver",
  c: "Chicken",
  d: "Dolphin",
  e: "Elephant",
  f: "Falcon",
  g: "Giraffe",
  h: "Hamster",
  i: "Iguana",
  j: "Jaguar",
  k: "Koala",
  l: "Leopart",
  m: "Monkey",
  n: "Nutria",
  o: "Octopus",
  p: "Parrot",
  q: "Quetzal",
  r: "Rabbit",
  s: "Shark",
  t: "Turtle",
  u: "Unicorn",
  v: "Viper",
  w: "Weasel",
  x: "Xerux",
  y: "Yak",
  z: "Zebra",
};

function getWord(dic: any, char: string): string {
  return dic[char.toLowerCase()];
}

function getSymbol(website_name: string): string {
  return website_name.length % 2 == 0 ? "@" : "#";
}

function countVowels(website_name: string): string {
  return `${website_name.match(/[aeiou]/gi)?.length}`;
}

function getDigit(website_name: string): string {
  return `${
    Math.floor(
      website_name.length > 10 ? website_name.length / 2 : website_name.length,
    )
  }${countVowels(website_name)}${countVowels(website_name)}${
    Math.floor(
      website_name.length > 10 ? website_name.length / 2 : website_name.length,
    )
  }`;
}

function generatePassword(website: string, dic?: any): string {
  return (`${getWord(default_dic ? default_dic : dic, website.charAt(0))}${
    getWord(
      default_dic ? default_dic : dic,
      website.charAt(website.length - 1),
    )
  }${getSymbol(website)}${getDigit(website)}`);
}

export default function Generator() {
  const [website, setWebsite] = useState("");
  const [password, setPassword] = useState("");
  const [button, setButton] = useState("");
  const [visible, setVisible] = useState(false);

  const clickHandler = (event: any) => {
    if (website) {
      setButton("Copied!");
      const generatedPass = generatePassword(website);
      setPassword(generatedPass);
      navigator.clipboard.writeText(generatedPass);
    }
  };

  const inputHandler = (event: any) => {
    setWebsite(event.target.value);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="logo.svg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Generate your password
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              for="webpage"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Page URL
            </label>
            <div className="mt-2">
              <input
                id="webpage"
                name="webpage"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onInput={inputHandler}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Change Dictionary?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={clickHandler}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
