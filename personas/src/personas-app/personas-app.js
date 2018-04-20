 class PersonasApp extends Polymer.Element {
      static get is() { return 'personas-app'; }
      static get properties() {
        return {
          personas: {
            type: Array,
            value:[
                  {
                    nombres:"Arturo Sanchez",
                    email:"arturo@bbva.com",
                    telefono:"88988889"
                  }
                  ,
                  {
                    nombres:"Luis Flores",
                    email:"luis@bbva.com",
                    telefono:"88988889"
                  }
            ]
          }
        };
      }
    }

window.customElements.define(PersonasApp.is, PersonasApp);