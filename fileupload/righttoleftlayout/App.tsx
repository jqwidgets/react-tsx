import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';

import JqxFileUpload from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxfileupload';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxFileUpload theme={'material-purple'}
                width={300} uploadUrl={'imageUpload.php'} fileInputName={'fileToUpload'} rtl={true} />
        );
    }
}

export default App;