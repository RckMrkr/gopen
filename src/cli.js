import DEFAULT_ACTION from './main';

const [ , , input] = process.argv;
const actions = [
    {
        check: input => input == '--configure',
        action: () => {/* Configure */}
    },
    {
        check: input => input == '--help',
        action: () => {/* Show help */}
    }
];

const action = actions.find(action => action.check(input)) || DEFAULT_ACTION;
const success = action(input);

process.exit(success | 0)