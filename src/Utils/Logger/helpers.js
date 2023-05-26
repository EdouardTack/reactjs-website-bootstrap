import { colors } from './defaults';

export const getDate = () => {
    const date = new Date();
    const parts = [date.getHours(), date.getMinutes(), date.getSeconds()];

    return parts.join(':') + '.' + date.getMilliseconds();
};

export const getTitle = (string, withTime) => {
    // Capitalize
    string = string.charAt(0).toUpperCase() + string.slice(1);
    const titleParts = [`%c${string}`];
    const headerCSS = ['font-weight: lighter;', `color: ${colors.title()};`];

    if (withTime === true) {
        headerCSS.push(`color: ${colors.time()}; font-weight: lighter;`);

        const timeFormatted = getDate();
        titleParts.push(`%c| ${timeFormatted}`);
    }

    return { titleFormat: titleParts.join(' '), headerCSS };
};

export const wait = (duration = 1000) => {
    return new Promise((resolve) => {
        window.setTimeout(resolve, duration);
    });
};

export const getType = (data) => {
    let type = typeof data;

    if (type === 'object') {
        if (Array.isArray(data)) {
            type = 'array';
        }
    }

    return type;
};
