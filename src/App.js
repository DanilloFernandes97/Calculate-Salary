import React, { Component } from 'react';
import Input from './components/Input/Input';
import ReadOnlyInput from './components/ReadOnlyInput/ReadOnlyInput';
import { calculateSalaryFrom } from './helpers/salary';
import { getPercent, formatToBrl } from './components/formatHelper';

export default class App extends Component {

  constructor() {

    super();

    this.state = {
      fullSalary: 0 
    }

  }

  componentWillMount() {

  };

  handleChangeSalary = (fullSalary) => {

    this.setState({ fullSalary });

  }

  render() {

    const { fullSalary } = this.state;
    
    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary, } = calculateSalaryFrom(fullSalary);

    const percentDiscountINSS = getPercent(discountINSS, baseINSS);

    const percentNetSalary = getPercent(netSalary, baseINSS); 

    return (

      <>

        <p>Salário Base</p>
        <Input initialValue={formatToBrl(fullSalary)} onChange={this.handleChangeSalary} />

        <p>Base INSS</p>
        <ReadOnlyInput value={formatToBrl(baseINSS)} />

        <p>Desconto INSS</p>
        <ReadOnlyInput value={formatToBrl(discountINSS)} />

        <p>Desconto INSS(%)</p>
        <ReadOnlyInput value={formatToBrl(percentDiscountINSS)} />

        <p>Base IRPF</p>
        <ReadOnlyInput value={formatToBrl(baseIRPF)} />

        <p>Desconto IRPF</p>
        <ReadOnlyInput value={formatToBrl(discountIRPF)} />

        <p>Salário Líquido</p>
        <ReadOnlyInput value={formatToBrl(netSalary)} />

      </>

    );
  }
}
