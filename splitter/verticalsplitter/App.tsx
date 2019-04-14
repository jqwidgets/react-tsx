import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';

import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

class App extends React.PureComponent<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxSplitter theme={'material-purple'}
                // @ts-ignore
                width={850}
                height={400}
                panels={[{ size: 300 }]}
            >
                <div>
                    Panel 1
                </div>
                <div>
                    Panel 2
                </div>
            </JqxSplitter>
        );
    }
}

export default App;
