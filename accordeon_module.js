//пошли эксперименты
const WIDTH = 'width';
const HEIGHT = 'height';

class accComponent {
  constructor(selector) {
    //array of trigger panels
    this.panels = Array.from(document.querySelectorAll(selector.panels));
    // array of hidden panels
    this.hidePanels = Array.from(document.querySelectorAll(selector.hidePanels));
    this.accordeon = document.querySelector(selector.accordeon);
  }

  vertical_auto() {
    this.panels.forEach((element, index) => {
      // event "when element clicked"
      element.addEventListener('click', () => {
        // hidden panel of element[index] = HP
        let HP = this.hidePanels[index];
        if (HP.classList.contains('show')) {
          HP.style.height = '0';
          HP.classList.toggle('show');
        } else {
          HP.style.height = `${ HP.scrollHeight }px`;
          HP.classList.toggle('show');
        }
        // automatic hiding of visible panels except the current one
        for (let i = 0; i < this.hidePanels.length; i++) {
          // current hidden panel = thisHP
          let thisHP = this.hidePanels[i];
          if (thisHP !== element.nextElementSibling) {
            thisHP.style.height = "0";
            thisHP.classList.remove('show');
          }
        }
      });
    });
  }

  // horizontal

  horizontal_auto() {
    this.panels.forEach((element, index) => {
      // event "when element clicked"
      element.addEventListener('click', () => {
        // hidden panel of element[index] = HP
        let HP = this.hidePanels[index];
        if (HP.classList.contains('show')) {
          HP.style.flexGrow = '0';
          HP.classList.toggle('show');
        } else {
          HP.style.flexGrow = '3';
          HP.classList.toggle('show');
        }
        // automatic hiding of visible panels except the current one
        for (let i = 0; i < this.hidePanels.length; i++) {
          // current hidden panel = thisHP
          let thisHP = this.hidePanels[i];
          if (thisHP !== element.nextElementSibling) {
            thisHP.style.flexGrow = '0';
            thisHP.classList.remove('show');
          }
        }
      });
    });
  }

}
