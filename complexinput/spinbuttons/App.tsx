﻿import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';

import JqxComplexInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcomplexinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxComplexInput theme={'material-purple'}
                width={250} height={25} value={'15 + 7.2i'}
                spinButtons={true} spinButtonsStep={1} />
        );
    } 
}

export default App;