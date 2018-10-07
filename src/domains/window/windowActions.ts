import {ActionType, createStandardAction} from 'typesafe-actions';
import {IWindowDimensions} from './windowTypes';

import {MediaType} from 'components/Styled/utils';

const windowDimensionsUpdated = createStandardAction('window/dimensions-update')<IWindowDimensions>();
const mediaTypeUpdated = createStandardAction('window/media-type-update')<string | MediaType>();

export type WindowAction = ActionType<typeof windowDimensionsUpdated | typeof mediaTypeUpdated>;

export default {
    mediaTypeUpdated,
    windowDimensionsUpdated
}