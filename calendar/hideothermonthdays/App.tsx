import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    };

    public render() { 
        return (
            <JqxCalendar theme={'material-purple'} width={220} height={220} showOtherMonthDays={false}/>
        );
    }
}

export default App; 