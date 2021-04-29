import {BiographyDataModel} from './biography.data.model';
import {ConfigurationModel} from './configuration.model';

export interface BiographyModel {
  configuration: ConfigurationModel;
  biography: BiographyDataModel;
}
