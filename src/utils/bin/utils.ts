import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:brezzy5040@gmail.com');

  return 'Opening mailto:brezzy5040@gmail.com...';
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const koobs = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=_RoyqtW1Rvs');
  }, 1000);

  return `Inas ke badeee:D`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/brajbhan/bibsterminal.github.io');
  }, 1000);

  return 'Opening repository...';
};

export const banner = (args?: string[]): string => {
  return `
<p align="center"><a href="https://github.com/DenverCoder1/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?pause=500&color=5BF761&background=E7FFBE00&lines=Hi+This+is+Bibek" width="700"></a></p>
Type 'help' to see list of available commands.
`;
};
