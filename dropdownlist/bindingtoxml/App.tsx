﻿import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';

import JqxDropDownList, { IDropDownListProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

class App extends React.PureComponent<{}, IDropDownListProps> {

    private log = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.listOnSelect = this.listOnSelect.bind(this);

        const source: any = {
            datafields: [
                { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' }
            ],
            datatype: 'xml',
            id: 'm\\:properties>d\\:CustomerID',
            record: 'content',
            root: 'entry',
            url: 'customers.xml'
        };

        this.state = {
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {

        return (
            <div> 
                <JqxDropDownList theme={'material-purple'} onSelect={this.listOnSelect}
                    width={200} height={30} source={this.state.source} selectedIndex={0}
                    displayMember={'ContactName'} valueMember={'CompanyName'} />

                <div ref={this.log} style={{ fontSize: '12px', fontFamily: 'Verdana' }} />
            </div>
        );
    }

    private listOnSelect(event: any): void {
        if (event.args) {
            const item = event.args.item;
            if (item) {
                const valueElement = document.createElement('div');
                valueElement.innerHTML = `Value: ${item.value}`;

                const labelElement = document.createElement('div');
                labelElement.innerHTML = `Label: ${item.label}`;

                const selectionLog = this.log.current!;
                selectionLog.innerHTML = '';
                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
            }
        }
    };
}

export default App;