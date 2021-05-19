import moment from 'moment';
import 'moment/locale/es';
export const localMoment = () => {
  moment.locale('es');
  return moment;
};
