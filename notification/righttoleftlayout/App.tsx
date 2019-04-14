import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';

import JqxNotification from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxNotification theme={'material-purple'} style={{ marginTop: '5em' }}
                width={'auto'} autoOpen={true} autoClose={false} template={'info'}
                opacity={0.9} animationOpenDelay={800} position={'top-left'} rtl={true}>
                <span>אין לך הודעות</span>
            </JqxNotification>
        );
    }
}

export default App;