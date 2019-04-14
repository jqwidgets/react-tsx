﻿import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';

import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <JqxDateTimeInput theme={'material-purple'}
                    width={250} height={30} formatString={'T'}
                    showTimeButton={true} showCalendarButton={false} />
            </div>
        );
    }
}

export default App;