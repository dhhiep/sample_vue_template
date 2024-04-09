import isEmpty from 'lodash/isEmpty';
import { isBlank, isPresent } from '@/utils/lang';

// Global
export default {
  name: 'object',
  methods: {
    isEmpty(obj: any): boolean {
      return isEmpty(obj);
    },
    isPresent(obj: any): boolean {
      return isPresent(obj);
    },
    isBlank(obj: any): boolean {
      return isBlank(obj);
    },
  },
};
