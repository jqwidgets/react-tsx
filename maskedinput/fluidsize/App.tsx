import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';

import JqxMaskedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmaskedinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '10px' }}>
                    Phone Number
                </div>
                <JqxMaskedInput theme={'material-purple'} style={{ marginTop: '3px' }}
                    width={'50%'} height={35} mask={'(###)###-####'} />
            </div>
        );
    }
}

export default App;