import {ActionType, createStandardAction} from 'typesafe-actions';

import {ITheme} from 'components/Styled/themes';

const updateTheme = createStandardAction('theme/update')<ITheme>();

export type ThemeAction = ActionType<typeof updateTheme>;

export default {
    updateTheme
};
