import { Request, Response } from 'express';
import Server from '../classes/server';
import { Mapa } from '../classes/mapa';

export const mapa = new Mapa();
//const server = Server.instance;

const lugares = [
    {
        id: '1',
        nombre: 'Udemy',
        lat: 37.784679,
        lng: -122.395936
    },
    {
        id: '2',
        nombre: 'Bahía de San Francisco',
        lat: 37.798933,
        lng: -122.377732
    },
    {
        id: '3',
        nombre: 'The Palace Hotel',
        lat: 37.788578,
        lng: -122.401745
    }
];
// esto lo que hace es insertar cada uno de los elementos del arreglo como si fueran elementos independientes
mapa.marcadores.push( ...lugares );

export function getMarcadores( req: Request, res: Response ){

    res.json( mapa.getMarcadores() );
}