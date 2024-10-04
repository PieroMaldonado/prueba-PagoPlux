import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagoplux-button',
  standalone: true,
  imports: [],
  templateUrl: './pagoplux-button.component.html',
  styleUrl: './pagoplux-button.component.css'
})
export class PagopluxButtonComponent implements OnInit {
  data = {

  }

  ngOnInit(): void {
    window.data =
    {
      /* Requerido. Email del establecimiento o Id/Class del elemento html
      que posee el valor*/
      PayboxRemail: "dmorales@pagoplux.com",
      /* Opcional. Email del usuario que realiza el pago o Id/Class del
      elemento html que posee el valor */
      PayboxSendmail: "test@test.com",
      /* Rquerido. Nombre del usuario/cuenta PagoPlux o Id/Class del
      elemento html que posee el valor */
      PayboxRename: "Comecio Prueba",
      /* Opcional. nombre de persona que realiza el pago o Id/Class del
      elemento html */
      PayboxSendname: "John Doe",
      /* Requerido. Valor Base 0. Valor que no incluye impuesto */
      PayboxBase0: "2.0",
      /* Requerido. Valor Base 12. Valor que si incluye impuesto */
      PayboxBase12: "10.0",
      /* Requerido. Descripcion del pago o Id/Class del elemento html que
      posee el valor */
      PayboxDescription: "Compra muebles",
      /* Opcional. Lenguaje del Paybox
      * Español: es | (string) (Paybox en español)
      * Ingles: us | (string) (Paybox en Ingles)
      */
      PayboxLanguage: "es",
      /*
      * Requerido. direccion del pago
      */
      PayboxDirection: "6 de Diciembre, Quito, Pichincha",
      /*
      * Requerido. Teléfono del cliente.
      */
      PayBoxClientPhone: '0999999999',
      /**
      * True -> produccion
      * False -> test
      */
      PayboxProduction: false,
      /* ===============================LOS SIGUIENTES PARAMETROS SOLO SE
      USA EN PAGOS RECURRENTES============================================
      /*
      * True -> en caso de realizar un pago recurrente almacena datos
      tarjeta
      * False -> si es pago normal
      */
      PayboxRecurrent: true,
      /**
      * Id o nombre del plan registrado en el comercio en la plataforma de
      pagoplux (el nombre debe ser exacto)
      */
      PayboxIdPlan: '171',
      /**
      * true -> los cobros se realizan de manera automatica segun la
      frecuencia del plan asignado en PAGOPLUX
      * false -> los cobros se realizan mediante solicitud
      */
      PayboxPermitirCalendarizar: true,
      /**
      * true -> El débito se realiza en el momento del pago
      * false -> El débito se realizará en la fecha de corte según el plan
      contratado
      */
      PayboxPagoInmediato: true,
      /**
      * true -> si desea realizar un pago de prueba de 1$ y reverso del
      mismo de manera automática
      * nota: PayboxPagoImediato debe ser igual false
      * false -> no se realizara ningún cobro de prueba
      */
      PayboxCobroPrueba: false,
      /**
      * Valor de identificación de tarjetahabiente
      */
      PayBoxClientIdentification: 'test',
      /**
      * Entorno de ejecución del botón de pagos valores: prod (ambiente
      de producción), sandbox (ambiente de pruebas)
      */
      //<----ESTAS VARIABLES SE USAN PARA PAGOS RECURRENTES CON MONTO VARIABLES ---->
      PayboxAmountVariablePlan : true,
      /**
      * Frecuencia del plan
      "SEM" SEMANAL
      "MEN" MENSUAL
      "BME" BIMESTRAL
      "TME" TRIMESTRAL
      "SME" SEMESTRAL
      "ANU" ANUAL
      */
      PayboxFrequencyPlan:'MEN',
      /**
      * true ->tiene iva
      * false ->no tiene iva
      */
      PayboxTieneIvaPlan: true,
      /**
      * La descripción del plan, no debe superar los 200 caracteres.
      */
      PayboxDescriptionPlan:'Descripcion plan',
      
      PayboxEnvironment: 'sandbox',
      /**
      * Se usa en TRUE cuando se necesita enlazar el paybox a un botón ya
      existente en el sitio del cliente, caso contrario FALSE o NULL
      * */
      PayboxPagoPlux: false,
      /**
      * Identificador del botón o elemento en el comercio del cliente
      * */
      PayboxIdElement: 'idElementoTest'
    };

    window.onAuthorize = (response: any) => {
      if (response.status === 'succeeded') {
        console.log('Pago exitoso', response);
      }
    };

  }
}

declare global {
  interface Window {
    onAuthorize: (response: any) => void;
  }
}

declare global {
  interface Window {
    data: {
      PayboxRemail: string;
      PayboxSendmail: string;
      PayboxRename: string;
      PayboxSendname: string;
      PayboxBase0: string;
      PayboxBase12: string;
      PayboxDescription: string;
      PayboxLanguage: string;
      PayboxDirection: string;
      PayBoxClientPhone: string;
      PayboxProduction: boolean;
      PayboxRecurrent: boolean;
      PayboxIdPlan: string;
      PayboxPermitirCalendarizar: boolean;
      PayboxPagoInmediato: boolean;
      PayboxCobroPrueba: boolean;
      PayBoxClientIdentification: string;
      PayboxAmountVariablePlan: boolean;
      PayboxFrequencyPlan: string;
      PayboxTieneIvaPlan: boolean;
      PayboxDescriptionPlan: string;
      PayboxEnvironment: string;
      PayboxPagoPlux: boolean;
      PayboxIdElement: string;
    };
  }
}
