import {Paragraph} from 'components/Styled/Styled';
import {defaultTheme} from 'components/Styled/themes';
import {rem} from 'components/Styled/utils';

const StatusBadge = Paragraph.extend`
    flex: 1 1 0px;
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 0 ${ rem(5) };
    border-radius: ${ rem(3) };
    border: 1px solid ${ props => props.theme.statusBorderColor };
    justify-content: center;
    
    &:hover {
      border: 1px solid ${ props => props.theme.hoverStatusBorderColor };
    }
`;

StatusBadge.defaultProps = { theme: defaultTheme};
StatusBadge.displayName = 'StatusBadge';

export default StatusBadge;