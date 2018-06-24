
import { remoteToPage, getRemoteAddress } from './helpers';
import * as opn from 'opn';

export default (alias = 'origin') => {
    const remote = getRemoteAddress();
    if(!remote){
        return false;
    }
    const page = remoteToPage(remote);

    opn(page, {wait: false});
};