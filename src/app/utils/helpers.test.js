/* eslint-disable react/jsx-filename-extension */

import * as helpers from 'utils/helpers';

test('toDate retuns normal date', () => {
    expect(helpers.toDate('0/1/2018').getTime()).toEqual(new Date(2018, 0, 1).getTime());
});