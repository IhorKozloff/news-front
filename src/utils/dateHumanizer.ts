import moment from 'moment';

export const dateHumanizer = (dataeISOString: string) => {
    const currentDate = moment(dataeISOString);

    const date = currentDate.format('D.M.YY');
    const time = currentDate.format('H:mm');

    return `${date} at ${time}`;
};