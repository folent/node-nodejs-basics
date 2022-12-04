const parseArgs = () => {
    const args = process.argv.slice(2);
    let result = '';

    for (let i = 0; i < args.length; i += 2) {
        if(args[i].includes('--')) {
            const propName = args[i].slice(2);
            const propValue = args[i + 1];

            if(i + 2 === args.length) {
                result += `${propName} is ${propValue}`;
            } else {
                result += `${propName} is ${propValue}, `
            }
        }
    }
    console.log(result);
};

parseArgs();