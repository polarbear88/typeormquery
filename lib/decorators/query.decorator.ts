import { CommonUtils } from '../common/common.utils';

const QUERY_META_KEY = 'typeormquery_query';

/**------ 👇类装饰器 */
/**
 * 查询分页
 * @param defaultPageSize 默认分页大小
 * @param pageKey 页码参数名
 * @param pageSizeKey 页码大小参数名
 * @returns
 */
export const QueryPage = (defaultPageSize = 20, pageKey = 'page', pageSizeKey = 'pageSize') =>
    CommonUtils.SetClassMetadata(QUERY_META_KEY, { type: 'page', defaultPageSize, pageKey, pageSizeKey });

/**------ 👇属性装饰器 */

/**
 * 查询条件 - 等于
 * @param column 可选，指定匹配的表字段名， 默认为属性名，如果字段名称包含.则表示关联表字段
 * @returns 装饰器
 */
export const QueryEquals = (column?: string) => CommonUtils.SetPropertyMetadata(QUERY_META_KEY, { type: 'equals', column });

/**
 * 查询条件 - 不等于
 * @param column
 * @returns 装饰器
 */
export const QueryNotEquals = (column?: string) => CommonUtils.SetPropertyMetadata(QUERY_META_KEY, { type: 'notEquals', column });

/**
 * 查询条件 - 大于
 * @param column
 * @returns
 */
export const QueryMoreThan = (column?: string) => CommonUtils.SetPropertyMetadata(QUERY_META_KEY, { type: 'moreThan', column });

/**
 * 查询条件 - 大于等于
 * @param column
 * @returns
 */
export const QueryMoreThanOrEqual = (column?: string) => CommonUtils.SetPropertyMetadata(QUERY_META_KEY, { type: 'moreThanOrEqual', column });

/**
 * 查询条件 - 小于
 * @param column
 * @returns
 */
export const QueryLessThan = (column?: string) => CommonUtils.SetPropertyMetadata(QUERY_META_KEY, { type: 'lessThan', column });

/**
 * 查询条件 - 小于等于
 * @param column
 * @returns
 */
export const QueryLessThanOrEqual = (column?: string) => CommonUtils.SetPropertyMetadata(QUERY_META_KEY, { type: 'lessThanOrEqual', column });

/**
 * 查询条件 - like
 * @param column
 * @returns
 */
export const QueryLike = (column?: string) => CommonUtils.SetPropertyMetadata(QUERY_META_KEY, { type: 'like', column });

/**
 * 查询条件 - 包含
 * @param column
 * @returns
 */
export const QueryIn = (column?: string) => CommonUtils.SetPropertyMetadata(QUERY_META_KEY, { type: 'in', column });

/**
 * 查询条件 - 不包含
 * @param column
 * @returns
 */
export const QueryNotIn = (column?: string) => CommonUtils.SetPropertyMetadata(QUERY_META_KEY, { type: 'notIn', column });
