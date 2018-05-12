import SnapshotSerializerPlugin = jest.SnapshotSerializerPlugin;
import {IThemeMeta, themes} from './components/Styled/themes';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({adapter: new EnzymeAdapter()});

// As a general rule, we're passing defaultTheme to components as a part of defaultProps;
// The following jest snapshot serializer will export themes as a mere [ThemeObject].
// Otherwise, every update in the theme will lead to update in all the snapshots that use it.
const themeSnapshotSerializer: SnapshotSerializerPlugin = {
    test: (val) => themes.some((themeMeta: IThemeMeta) => themeMeta.theme === val),
    print: () => '[ThemeObject]'
};
expect.addSnapshotSerializer(themeSnapshotSerializer);
