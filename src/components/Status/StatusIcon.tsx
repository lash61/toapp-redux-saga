import styled from 'components/Styled/styledComponents';
import {defaultTheme} from 'components/Styled/themes';
import {rem} from 'components/Styled/utils';
import {TodoStatus} from 'domains/todos/todosTypes';

import complete from './complete.png';
import inProgress from './in_progress.png';
import pending from './pending.png';

import {ITodoStatusProps} from './Status';

export const getStatusIcon = (status: TodoStatus) => {
    if (TodoStatus.COMPLETE === status) {
        return complete;
    }

    if (TodoStatus.IN_PROGRESS === status) {
        return inProgress;
    }
    return pending;
};

const StatusIcon = styled.div`
  cursor: pointer;
  width: ${ rem(28) };
  height: ${ rem(28) };
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${ (props: ITodoStatusProps) => getStatusIcon(props.status) });
`;

StatusIcon.defaultProps = {theme: defaultTheme};
StatusIcon.displayName = 'StatusIcon';

export default StatusIcon;