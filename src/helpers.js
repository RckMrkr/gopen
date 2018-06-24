import { execSync } from 'child_process'
import * as sshParse from 'ssh-parse';
import { parse as httpsParse } from 'url'

const enableRedText = "\x1b[31m";
const resetTextColor = "\x1b[0m"
const logError = (text) =>
    console.error(`${enableRedText}${text}${resetTextColor}`);
    
export const getRemoteAddress = alias => {
    try{
        return execSync(`git config --get remote.${origin}.url`, {
            windowsHide: true,
            encoding: 'utf8'
        }).trim();
    } catch(e){
        logError(`Unable to get remote for alias "${origin}. Are you sure it exists?`);
        return false;
    }
}

const parses = {
    'https': httpsParse,
    'ssh': (remote) => {
        const {host, path} = sshParse(remote);
        return { host, path: `/${path}`}
    }
}

export const remoteToPage = (remote) => {
    const protocol = remote.startsWith('https://')
        ? 'https'
        : 'ssh';

    const parser = parses[protocol];
    const {host, path} = parser(remote);

    return `https://${host}${path.slice(0, -4)}`;
}
