
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { AlbumGateway } from '../models/gateway/album-gateway';



export class GetAlbumUseCases {
    constructor(private _albumGateWay: AlbumGateway) { }
    getByID(id: string): Observable<Album> {
        // TODO: En este sitio podríamos manejar las configuraciones 
        // en cache
        return this._albumGateWay.getByID(id);
    }
    getAll(): Observable<Album[]> {
        return this._albumGateWay.getAll();
    }
}