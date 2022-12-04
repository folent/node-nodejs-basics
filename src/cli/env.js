const parseEnv = () => {
    const filteredKeys = Object.keys(process.env).filter(el => el.includes('RSS_'));
    let result = '';

    for (let i = 0; i < filteredKeys.length; i++) {
        const key = filteredKeys[i];

        if(key === filteredKeys[filteredKeys.length - 1]) {
            result += `${key}=${process.env[key]}`;
        } else {
            result += `${key}=${process.env[key]}; `;
        }
    }
    console.log(result);
};

parseEnv();