import { CommonUtils } from '../common/common.utils';

const SELECT_META_KEY = 'typeormquery_select';

/**------ 👇类装饰器 */
/**
 * 选择全部
 * @returns
 */
export const SelectAll = () => CommonUtils.SetClassMetadata(SELECT_META_KEY, { type: 'all' });

/**------ 👇属性装饰器 */
