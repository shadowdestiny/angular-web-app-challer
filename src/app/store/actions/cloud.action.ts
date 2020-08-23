import {Action} from '@ngrx/store';
import {CloudConstants} from "../constants/cloud.constants";


export class Cloud{

}

export class CloudAction implements Action {
    type: string = CloudConstants.CLOSE;
    cloud: Cloud = {

    };

    constructor(cloud: Cloud) {
        this.cloud = cloud;
    }
}
