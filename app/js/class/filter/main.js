let filterWindowClass = document.querySelector("modal-filter");

class Visited { 
    constructor() {}
    render() {
     formLogin.append(visitTarget.render(), visitDescription.render(), labelFullName.render(), chooseUrgency.render());
     const labelTargetClass = document.querySelector(".visit-target");
        labelTargetClass.append(inputTarget.render());
        const labelDescriptionClass = document.querySelector(".description");
        labelDescriptionClass.append(inputDescription.render()); 
        const selectUrgency = document.querySelector(".choose-urgency");
        selectUrgency.append(optionDefaultUrgency.render(), optionRegular.render(), optionPriority.render(), optionUrgent.render());
        const labelNameClass = document.querySelector(".full-name");
        labelNameClass.append(inputFullName.render());
        return formLogin
    }
}

  const generalVisit = new Visited();
//   console.log(test.render());

  class Cardiolog extends Visited {
      constructor() {
          super()
      }
      render() {
        formLogin.append(pressure.render(), labelWeight.render(), age.render(), labelTextArea.render());
        const pressureLabel = document.querySelector(".label-pressure");
        pressureLabel.append(inputPressure.render());
        const labelTextAreaClass = document.querySelector(".label-textarea");
        labelTextAreaClass.append(modalTextArea.render());
        const weightLabel = document.querySelector('.label-weight');
        weightLabel.append(inputWeight.render())
        const ageLabel = document.querySelector('.label-age');
        ageLabel.append(inputAge.render());
        return formLogin
      }
  }

const cardiolog = new Cardiolog();
console.log(cardiolog.render());

class Terapevt extends Visited{
  constructor() {
    super()
  } 
    render () {
    formLogin.append(age.render());
    const ageLabel = document.querySelector('.label-age');
        ageLabel.append(inputAge.render());
        return formLogin
  }
}

const terapevt = new Terapevt();


class Dantist extends Visited {
  constructor () {
    super()
  } 
  render () {
    formLogin.append(date.render())
    const dateLabel = document.querySelector('.label-date');
    dateLabel.append(inputDate.render());
    return formLogin
  }
}

const dantist = new Dantist();