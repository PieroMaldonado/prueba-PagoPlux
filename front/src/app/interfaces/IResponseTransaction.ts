export interface IResponseTransaction {
    code: number
    description: string
    detail: Detail
    status: string
}

export interface Detail {
    respuest: Respuest
}

export interface Respuest {
    id_establecimiento: number
    monto: string
    fecha_transaccion: string
    descripcion: string
    id_transaccion: string
    valor_catalogo_estado: string
    respuesta: string
    voucher: string
    adquiriente: string
    valor_base0: string
    valor_base12: string
    valor_iva: string
    numero_lote: string
    propina: string
    banco: string
    emisor_tarjeta: string
    numero_cuotas: number
    proveedor_servicio_pago: string
    tipo_credito: string
    meses_gracia: number
    interes: number
    valor_interes: string
    extras: string
    marca: string
    catalogos: Catalogos
    cliente: Cliente
    detalle: Detalle
    items: any[]
    mid: string
    tid: string
    adquirente: string
    informacionTarjeta: InformacionTarjeta
    tipoPago: string
}

export interface Catalogos {
    nombre_catalogo: string
}

export interface Cliente {
    nombres: string
    numero_identificacion: string
}

export interface Detalle {
    numero_tarjeta: string
}

export interface InformacionTarjeta {
    mesExpiracion: string
    anioExpiracion: string
}
