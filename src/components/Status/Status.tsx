import * as React from 'react';

import {defaultTheme, IHasTheme} from 'components/Styled/themes';
import {IHasMediaType, MediaType} from 'components/Styled/utils';
import {TodoStatus} from 'domains/todos/todosTypes';

import StatusBadge from './StatusBadge';
import StatusIcon from './StatusIcon';

export interface ITodoStatusProps extends IHasTheme {
    status: TodoStatus;
    onClick: () => void;
    dataRole?: string;
}

const Status: React.SFC<ITodoStatusProps & IHasMediaType> = props => {
    const {mediaType, status, onClick, dataRole} = props;
    if (mediaType === MediaType.MOBILE) {
        return <StatusIcon status={status} onClick={onClick} data-role={ dataRole } />;
    }
    return <StatusBadge onClick={onClick} data-role={ dataRole }>{status}</StatusBadge>;
};

Status.defaultProps = {theme: defaultTheme};
Status.displayName = 'Status';

export default Status;