"use strict";
let React = require('react'),
    Layout = require('./layout');


let YouBusinessInformation = React.createClass({
    render() {
        let addressLines = [
            "Aleea BBB",
            "aaaa"
        ];
        let address = addressLines.join('\n');
        return (
            <fieldset>
                <legend>Stan</legend>
                <div>
                    <label>Address</label>
                    <textarea rows={addressLines.length + 1} value={address}/>
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" name="yourBusinessPhone" value="121231231231"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="yourBusinessEmail" value="stagmdd@ail.com"/>
                </div>
            </fieldset>
        )
    }
});

let InvoiceInformation = React.createClass({
    render() {
        return (
            <fieldset>
                <legend>Invoice</legend>
                <div>
                    <label>Invoice Number</label>
                    <input type="text" name="invoiceNumber" value="PAYvPAL-w5" />
                </div>
                <div>
                    <label>Invoice Date</label>
                    <input type="text" name="invoiceDate" value="2/25/2015" />
                </div>
                <div>
                    <label>Payment terms</label>
                    <input type="text" name="paymentTerms" value="Due on receipt" />
                </div>
                <div>
                    <label>Due date</label>
                    <input type="text" name="dueDate" value="2/25/2015"/>
                </div>
                <div>
                    <label>Reference</label>
                    <input type="text" name="dueDate" value=""/>
                </div>
            </fieldset>
        )
    }
});

let BillTo = React.createClass({
    render() {
        let addressLines = [
            "SAS AAAa",
            "Dwain Weaaizmann",
            "56 rue Blanche"
        ];
        let address = addressLines.join('\n');
        return (
            <fieldset>
                <legend>Bill to</legend>
                <div>
                    <label>Address</label>
                    <textarea rows={addressLines.length +1 } value={address}/>
                </div>
                <div>
                    <label>VAT CODE</label>
                    <input type="text" name="yourBusinessPhone" value="FR 473502219"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="yourBusinessEmail" value="aaaa@bbbbbb.com"/>
                </div>
            </fieldset>
        )
    }
});

let InvoiceBody = React.createClass({
    render() {
        return (
            <table role="grid">
              <thead>
                <tr>
                  <th>Desciption</th>
                  <th width="150">Quantity</th>
                  <th width="150">Unit price</th>
                  <th width="150">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Web/Mobile consultancy ­ 10­19 feb 201</td>
                  <td>1</td>
                  <td>$2,080.00</td>
                  <td>$2,080.00</td>
                </tr>
                <tr className="blank_row">
                    <td colSpan="4"></td>
                </tr>
                <tr>
                    <td></td>
                    <td colSpan="2" width="150">Subtotal</td>
                    <td width="150">$2,080.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td colSpan="2" width="150">Total</td>
                    <td width="150">$2,080.00</td>
                </tr>
               </tbody>
            </table>
        )
    }
});

let InvoiceDetails = React.createClass({
    render() {
        return false;
    }
})

let IndexPage = React.createClass({
    render: function() {
        return (
            <Layout title={this.props.title} >
                    <div className="row">
                        <div className="large-6 columns">
                            <YouBusinessInformation />
                        </div>
                        <div className="large-6 columns">
                            <InvoiceInformation />
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-6 columns">
                            <BillTo />
                        </div>
                    </div>
                    <InvoiceBody />

                    <div className="row">
                        <InvoiceDetails />
                    </div>
            </Layout>
        )
    }
});

module.exports = IndexPage;
